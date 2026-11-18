// Things on the desk: pins for sticky notes, clips for photos, a coffee ring. Decorative only.

export const Pushpin = ({ className = "" }) => (
  <svg className={`pushpin ${className}`} viewBox="0 0 40 46" aria-hidden="true" focusable="false">
    <ellipse cx="21" cy="42" rx="7" ry="2.5" fill="rgba(0,0,0,.18)" />
    <path d="M20 26 L 21 42" stroke="#8b9099" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="16" r="12" fill="#c2402f" />
    <circle cx="20" cy="16" r="12" fill="url(#pin-shade)" />
    <ellipse cx="15.5" cy="11" rx="4" ry="2.6" fill="rgba(255,255,255,.55)" transform="rotate(-30 15.5 11)" />
    <defs>
      <radialGradient id="pin-shade" cx="35%" cy="30%" r="75%">
        <stop offset="0.55" stopColor="rgba(0,0,0,0)" />
        <stop offset="1" stopColor="rgba(0,0,0,.35)" />
      </radialGradient>
    </defs>
  </svg>
);

export const PaperClip = ({ className = "" }) => (
  <svg className={`paperclip ${className}`} viewBox="0 0 30 80" aria-hidden="true" focusable="false">
    <path
      d="M9 18 V 62 a 8 8 0 0 0 16 0 V 12 a 6.5 6.5 0 0 0 -13 0 V 56 a 3 3 0 0 0 6 0 V 20"
      fill="none"
      stroke="#9aa1aa"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path d="M10 22 V 60" stroke="rgba(255,255,255,.7)" strokeWidth="0.8" fill="none" />
  </svg>
);

export const BinderClip = ({ className = "" }) => (
  <svg className={`binderclip ${className}`} viewBox="0 0 70 60" aria-hidden="true" focusable="false">
    <path d="M22 26 L 14 4 M48 26 L 56 4" stroke="#a7adb5" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M14 4 L 56 4" stroke="#a7adb5" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M8 26 H62 L 58 56 H12 Z" fill="#1f2125" />
    <path d="M10 28 H60" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
  </svg>
);

export const CoffeeRing = ({ className = "" }) => (
  <svg className={`coffee-ring ${className}`} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="7" strokeOpacity=".55" strokeDasharray="300 18 90 12 400" />
    <circle cx="103" cy="97" r="74" fill="none" stroke="currentColor" strokeWidth="2.5" strokeOpacity=".7" />
    <path d="M168 140 q 10 8 6 18" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity=".45" strokeLinecap="round" />
    <circle cx="176" cy="164" r="4" fill="currentColor" fillOpacity=".35" />
  </svg>
);
