import { useCallback, useEffect, useRef, useState } from "react";
import PeelableLayer from "./PeelableLayer";
import { BASE, LAYERS } from "./posters";
import "./posterwall.css";

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
};

const PaperBack = () => <div className="pw-back" />;

const PosterWall = () => {
  const [top, setTop] = useState(0); // index of the poster currently on top; LAYERS.length = bare wall
  const [enteringId, setEnteringId] = useState(null);
  const topRef = useRef(null);
  const wallRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const era = top < LAYERS.length ? LAYERS[top] : BASE;
  const bare = top >= LAYERS.length;

  const onPeeled = useCallback(() => setTop((t) => Math.min(LAYERS.length, t + 1)), []);
  const peel = () => topRef.current?.peel();
  const pasteBack = () => {
    if (top === 0) return;
    setEnteringId(LAYERS[top - 1].id);
    setTop(top - 1);
  };
  const pasteAll = () => {
    setEnteringId(LAYERS[0].id);
    setTop(0);
  };

  // Torch for the night wall (dark mode): follow the pointer.
  const onMove = (e) => {
    const r = wallRef.current.getBoundingClientRect();
    wallRef.current.style.setProperty("--tx", `${e.clientX - r.left}px`);
    wallRef.current.style.setProperty("--ty", `${e.clientY - r.top}px`);
  };

  // Render bottom-up so the top poster is last in the DOM.
  const visible = LAYERS.map((layer, i) => ({ layer, i })).filter(({ i }) => i >= top).reverse();

  return (
    <main className="pw-wall" ref={wallRef} onPointerMove={onMove}>
      <div className="pw-texture" aria-hidden="true" />
      <div className="pw-stencil pw-stencil-ml" lang="ml" aria-hidden="true">
        പോസ്റ്റർ ഒട്ടിക്കരുത്
      </div>
      <div className="pw-stencil pw-stencil-en" aria-hidden="true">
        STICK NO BILLS
      </div>
      <div className="pw-scrap pw-scrap-1" aria-hidden="true" />
      <div className="pw-scrap pw-scrap-2" aria-hidden="true" />
      <div className="pw-scrap pw-scrap-3" aria-hidden="true" />

      <header className="pw-top">
        <a href="/" className="pw-mark">
          <span>muhammed</span>
          <b>sahal kc</b>
        </a>
        <nav>
          <a href="/#Works">Works</a>
          <a href="/#Experience">Experience</a>
          <a href="/#Contact">Contact</a>
        </nav>
      </header>

      <section className="pw-stage" aria-label="Poster wall">
        <div className="pw-stack">
          <div className={`pw-base${bare ? " is-bare" : ""}`}>
            <div className="pw-base-ml" lang="ml">
              കണ്ണൂർ
            </div>
            <div className="pw-base-route">Kannur → Kuttippuram → Kozhikode</div>
          </div>
          {visible.map(({ layer, i }) => (
            <PeelableLayer
              key={layer.id}
              ref={i === top ? topRef : undefined}
              interactive={i === top}
              entering={enteringId === layer.id}
              rotate={layer.rotate}
              offset={layer.offset}
              reducedMotion={reducedMotion}
              onPeeled={onPeeled}
              back={<PaperBack />}
              label={`${layer.year} poster: ${layer.title}. Drag to peel it off.`}
            >
              <layer.Poster />
            </PeelableLayer>
          ))}
          {top === 0 && (
            <div className="pw-hint" aria-hidden="true">
              grab a corner &amp; peel
              <svg viewBox="0 0 60 40">
                <path d="M4 6 C 24 4, 44 14, 52 32" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M44 30 L52 33 L54 24" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          )}
        </div>

        <aside className="pw-card" aria-live="polite">
          <div className="pw-card-pin" aria-hidden="true" />
          <div className="pw-card-layer">
            {bare ? "bare wall" : `layer ${top + 1} of ${LAYERS.length}`}
          </div>
          <div className="pw-card-year">{era.year}</div>
          <div className="pw-card-place">{era.place}</div>
          <h1 className="pw-card-title">{era.title}</h1>
          <p className="pw-card-story">{era.story}</p>
          <div className="pw-progress" aria-hidden="true">
            {LAYERS.map((l, i) => (
              <span key={l.id} className={i < top ? "is-gone" : i === top ? "is-on" : ""} />
            ))}
          </div>
          <div className="pw-actions">
            {!bare && (
              <button type="button" className="pw-btn pw-btn-main" onClick={peel}>
                Peel this one
              </button>
            )}
            {bare && (
              <button type="button" className="pw-btn pw-btn-main" onClick={pasteAll}>
                Paste them all back
              </button>
            )}
            <button type="button" className="pw-btn" onClick={pasteBack} disabled={top === 0}>
              Paste back
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default PosterWall;
