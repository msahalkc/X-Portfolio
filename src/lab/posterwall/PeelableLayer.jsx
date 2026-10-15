import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { creaseGradient, foldGeometry, toClipPath } from "./geometry";

const PEEL_OFF_RATIO = 0.62; // release with less than this much still stuck → it comes off
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// One poster on the wall. Only the top poster is interactive.
const PeelableLayer = forwardRef(function PeelableLayer(
  { children, back, rotate = 0, offset = { x: 0, y: 0 }, interactive, entering, reducedMotion, onPeeled, label },
  ref
) {
  const boxRef = useRef(null);
  const animRef = useRef(0);
  const dragRef = useRef(null);
  const [fold, setFold] = useState(null); // { grab, pointer }
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.offsetWidth, h: el.offsetHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(animRef.current), []);

  // Screen point → poster-local point, undoing the poster's rotation.
  const toLocal = useCallback(
    (clientX, clientY) => {
      const el = boxRef.current;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const a = (-rotate * Math.PI) / 180;
      const x = clientX - cx;
      const y = clientY - cy;
      return {
        x: x * Math.cos(a) - y * Math.sin(a) + el.offsetWidth / 2,
        y: x * Math.sin(a) + y * Math.cos(a) + el.offsetHeight / 2,
      };
    },
    [rotate]
  );

  const animate = useCallback((from, to, duration, ease, grab, done) => {
    cancelAnimationFrame(animRef.current);
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const e = ease(t);
      setFold({ grab, pointer: { x: from.x + (to.x - from.x) * e, y: from.y + (to.y - from.y) * e } });
      if (t < 1) animRef.current = requestAnimationFrame(step);
      else done?.();
    };
    animRef.current = requestAnimationFrame(step);
  }, []);

  const peelAway = useCallback(
    (grab, pointer) => {
      const { w, h } = { w: boxRef.current.offsetWidth, h: boxRef.current.offsetHeight };
      if (reducedMotion) {
        setLeaving(true);
        setTimeout(onPeeled, 250);
        return;
      }
      let dx = pointer.x - grab.x;
      let dy = pointer.y - grab.y;
      const len = Math.hypot(dx, dy) || 1;
      const travel = Math.hypot(w, h) * 2.2;
      const to = { x: grab.x + (dx / len) * travel, y: grab.y + (dy / len) * travel };
      animate(pointer, to, 520, easeOut, grab, onPeeled);
    },
    [animate, onPeeled, reducedMotion]
  );

  // Programmatic peel (button / keyboard): grab the bottom-right corner and pull up-left.
  useImperativeHandle(ref, () => ({
    peel() {
      const el = boxRef.current;
      if (!el || dragRef.current) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const grab = { x: w - 2, y: h - 2 };
      if (reducedMotion) return peelAway(grab, grab);
      const mid = { x: w * 0.35, y: h * 0.45 };
      animate(grab, mid, 650, easeInOut, grab, () => peelAway(grab, mid));
    },
  }));

  const onPointerDown = (e) => {
    if (!interactive) return;
    cancelAnimationFrame(animRef.current);
    const grab = toLocal(e.clientX, e.clientY);
    dragRef.current = { grab, id: e.pointerId };
    e.currentTarget.setPointerCapture(e.pointerId);
    setFold({ grab, pointer: grab });
  };

  const onPointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    setFold({ grab: drag.grab, pointer: toLocal(e.clientX, e.clientY) });
  };

  const onPointerUp = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    dragRef.current = null;
    const pointer = toLocal(e.clientX, e.clientY);
    const geo = foldGeometry(size.w, size.h, drag.grab, pointer);
    if (geo.folded && geo.remainingRatio < PEEL_OFF_RATIO) {
      peelAway(drag.grab, pointer);
    } else {
      animate(pointer, drag.grab, 380, easeOut, drag.grab, () => setFold(null));
    }
  };

  const geo = fold && size.w ? foldGeometry(size.w, size.h, fold.grab, fold.pointer) : null;
  const folded = geo?.folded;
  let flapStyle;
  if (folded) {
    const g = creaseGradient(size.w, size.h, geo.u, geo.mid);
    const c = Math.max(0, Math.min(1, g.crease)) * 100;
    flapStyle = {
      clipPath: toClipPath(geo.flap),
      transform: `matrix(${geo.matrix.join(",")})`,
      "--crease-angle": `${g.angle}deg`,
      "--crease": `${c}%`,
      "--crease-far": `${Math.min(100, c + 22)}%`,
    };
  }

  return (
    <div
      className={`pw-layer${interactive ? " is-top" : ""}${entering ? " is-entering" : ""}${leaving ? " is-leaving" : ""}`}
      style={{ "--rot": `${rotate}deg`, "--ox": `${offset.x}px`, "--oy": `${offset.y}px` }}
      aria-hidden={!interactive}
    >
      <div
        ref={boxRef}
        className="pw-poster-box"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role={interactive ? "img" : undefined}
        aria-label={interactive ? label : undefined}
      >
        <div className="pw-poster-face" style={folded ? { clipPath: toClipPath(geo.remaining) } : undefined}>
          {children}
        </div>
        {folded && (
          <div className="pw-flap-shadow">
            <div className="pw-flap" style={flapStyle}>
              {back}
            </div>
          </div>
        )}
        {interactive && !fold && <div className="pw-curl" aria-hidden="true" />}
      </div>
    </div>
  );
});

export default PeelableLayer;
