import { useId } from "react";

// Things on the desk: pins for sticky notes, clips for photos, a coffee ring. Decorative only.
// Drawn as detailed SVG (metal gradients, highlights, soft cast shadows) so they read as real objects.
// useId keeps gradient ids unique when several appear on one page.

export const Pushpin = ({ className = "" }) => {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`pushpin ${className}`} viewBox="0 2 48 42" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}h`} cx="38%" cy="32%" r="70%">
          <stop offset="0" style={{ stopColor: "var(--pin-hi, #ff8a7a)" }} />
          <stop offset="0.45" style={{ stopColor: "var(--pin, #d23a2a)" }} />
          <stop offset="1" style={{ stopColor: "var(--pin-lo, #7c160d)" }} />
        </radialGradient>
        <linearGradient id={`${id}g`} x1="0" x2="1">
          <stop offset="0" style={{ stopColor: "var(--pin-lo, #7c160d)" }} />
          <stop offset="0.35" style={{ stopColor: "var(--pin, #d23a2a)" }} />
          <stop offset="0.6" style={{ stopColor: "var(--pin-hi, #ff8a7a)" }} />
          <stop offset="1" style={{ stopColor: "var(--pin-lo, #7c160d)" }} />
        </linearGradient>
        <filter id={`${id}s`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>
      {/* cast shadows on the paper, offset down-right as if lit from the top-left: a tight one at the base, a softer one from the head */}
      <ellipse cx="34" cy="31" rx="13" ry="5" fill="rgba(0,0,0,.2)" filter={`url(#${id}s)`} />
      <ellipse cx="26" cy="37.5" rx="8" ry="2.6" fill="rgba(0,0,0,.35)" filter={`url(#${id}s)`} />
      {/* grip: a waisted cylinder */}
      <path d="M15 22 C 18 27, 18 31, 16.5 36 L 29.5 36 C 28 31, 28 27, 31 22 Z" fill={`url(#${id}g)`} />
      <ellipse cx="23" cy="36" rx="6.5" ry="2.4" style={{ fill: "var(--pin-lo, #7c160d)" }} />
      {/* head */}
      <ellipse cx="23" cy="22" rx="13" ry="5" style={{ fill: "var(--pin-lo, #7c160d)" }} />
      <ellipse cx="23" cy="19.5" rx="13" ry="5.5" fill={`url(#${id}h)`} />
      <ellipse cx="18" cy="17.6" rx="5" ry="1.6" fill="rgba(255,255,255,.65)" transform="rotate(-8 18 17.6)" />
    </svg>
  );
};

export const PaperClip = ({ className = "" }) => {
  const d = "M9 18 V 62 a 8 8 0 0 0 16 0 V 12 a 6.5 6.5 0 0 0 -13 0 V 56 a 3 3 0 0 0 6 0 V 20";
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`paperclip ${className}`} viewBox="0 0 40 90" aria-hidden="true" focusable="false">
      <defs>
        <filter id={`${id}s`} x="-50%" y="-20%" width="200%" height="140%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      {/* soft shadow on the paper */}
      <path d={d} transform="translate(3 3)" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="3" strokeLinecap="round" filter={`url(#${id}s)`} />
      {/* steel wire: dark rim, body, and a thin specular line */}
      <path d={d} fill="none" stroke="#5f656e" strokeWidth="3.2" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#b9bfc7" strokeWidth="2.2" strokeLinecap="round" />
      <path d={d} transform="translate(-0.45 -0.35)" fill="none" stroke="#f6f8fb" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="14 6 30 5 40 4" />
    </svg>
  );
};

export const BinderClip = ({ className = "" }) => {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`binderclip ${className}`} viewBox="0 0 90 74" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4e55" />
          <stop offset="0.18" stopColor="#24272b" />
          <stop offset="0.55" stopColor="#111214" />
          <stop offset="0.82" stopColor="#2a2d32" />
          <stop offset="1" stopColor="#0b0c0d" />
        </linearGradient>
        <linearGradient id={`${id}e`} x1="0" x2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.3" stopColor="rgba(255,255,255,.28)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,.05)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id={`${id}w`} x1="0" x2="1">
          <stop offset="0" stopColor="#7b818a" />
          <stop offset="0.3" stopColor="#f4f6f9" />
          <stop offset="0.55" stopColor="#a6acb4" />
          <stop offset="1" stopColor="#e3e6ea" />
        </linearGradient>
        <filter id={`${id}s`} x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
      </defs>
      {/* cast shadow on the photo and desk */}
      <path d="M16 40 H78 L 74 72 H22 Z" fill="rgba(0,0,0,.38)" filter={`url(#${id}s)`} transform="translate(4 3)" />
      {/* wire handles, folded up and back */}
      <path d="M27 38 L 21 8 Q 20.5 4 25 4 L 65 4 Q 69.5 4 69 8 L 63 38" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="3.6" strokeLinejoin="round" transform="translate(1.5 1.5)" />
      <path d="M27 38 L 21 8 Q 20.5 4 25 4 L 65 4 Q 69.5 4 69 8 L 63 38" fill="none" stroke={`url(#${id}w)`} strokeWidth="2.8" strokeLinejoin="round" />
      {/* steel body: a folded triangle seen from the front */}
      <path d="M12 36 Q 12 33 15 33 H75 Q 78 33 78 36 L 73.5 66 Q 73 69 70 69 H20 Q 17 69 16.5 66 Z" fill={`url(#${id}b)`} />
      <path d="M14 36 H76" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <path d="M15 34 H75 L 72 64 H18 Z" fill={`url(#${id}e)`} />
      {/* rolled lips where the handles hook in */}
      <rect x="23" y="34.5" width="8" height="5" rx="2.5" fill="#2e3237" stroke="#5a5f66" strokeWidth=".6" />
      <rect x="59" y="34.5" width="8" height="5" rx="2.5" fill="#2e3237" stroke="#5a5f66" strokeWidth=".6" />
    </svg>
  );
};

export const CoffeeRing = ({ className = "" }) => (
  <svg className={`coffee-ring ${className}`} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="7" strokeOpacity=".55" strokeDasharray="300 18 90 12 400" />
    <circle cx="103" cy="97" r="74" fill="none" stroke="currentColor" strokeWidth="2.5" strokeOpacity=".7" />
    <path d="M168 140 q 10 8 6 18" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity=".45" strokeLinecap="round" />
    <circle cx="176" cy="164" r="4" fill="currentColor" fillOpacity=".35" />
  </svg>
);
