// The wall, oldest poster last. Each entry is one era.
// Posters are CSS stand-ins. To use a real poster, set `image` and the
// stand-in is replaced by that scan.
// TODO(sahal): confirm years for NSS / IEEE / Malabar Hub.

const Credit = ({ children = "design · KC Designs" }) => <div className="pw-credit">{children}</div>;

const PosterNow = () => (
  <div className="pw-p pw-p-now">
    <div className="pw-now-strip">
      <span>Now showing</span>
      <span>Kozhikode · 2026</span>
    </div>
    <div className="pw-now-title">
      <span className="pw-now-sde">SDE</span>
      <span className="pw-now-two">2</span>
    </div>
    <div className="pw-now-script">promoted, sept &rsquo;26</div>
    <div className="pw-now-name">
      Muhammed Sahal K C
      <small>Software Development Engineer II · FantaCode</small>
    </div>
    <div className="pw-now-foot">
      <div>
        <b>Also in production</b>
        assetbuild.in — a personal finance OS
      </div>
      <div className="pw-now-badge">Title says SDE. Does everything.</div>
    </div>
    <Credit />
  </div>
);

const PosterSwitch = () => (
  <div className="pw-p pw-p-switch">
    <div className="pw-switch-top">
      <span>2024</span>
      <span>a career, in two acts</span>
    </div>
    <div className="pw-switch-split">
      <div className="pw-switch-a">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 8 L72 52 L50 92 L28 52 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="52" r="7" fill="currentColor" />
          <line x1="50" y1="8" x2="50" y2="45" stroke="currentColor" strokeWidth="3" />
        </svg>
        <span>pen tool</span>
      </div>
      <div className="pw-switch-b">
        <span className="pw-switch-code">{"</>"}</span>
        <span>compiler</span>
      </div>
    </div>
    <div className="pw-switch-title">THE SWITCH</div>
    <div className="pw-switch-cast">
      <span>Tecnavis · React intern</span>
      <span>→</span>
      <span>FantaCode · SDE</span>
    </div>
    <Credit />
  </div>
);

const PosterIedc = () => (
  <div className="pw-p pw-p-iedc">
    <div className="pw-iedc-org">IEDC MESCE presents</div>
    <div className="pw-iedc-title">
      IDEA
      <br />
      THON
    </div>
    <div className="pw-iedc-burst">24 hrs</div>
    <div className="pw-iedc-meta">
      <span>Build. Pitch. Ship.</span>
      <span>Chief Technical Officer · 2023–24</span>
    </div>
    <div className="pw-iedc-tape" aria-hidden="true" />
    <Credit />
  </div>
);

const PosterIeee = () => (
  <div className="pw-p pw-p-ieee">
    <div className="pw-ieee-head">
      <span className="pw-ieee-logo">IEEE</span>
      <span>Malabar Hub · SB MESCE</span>
    </div>
    <div className="pw-ieee-grid" aria-hidden="true" />
    <div className="pw-ieee-title">
      TECH
      <br />
      TALK
      <br />
      SERIES
    </div>
    <div className="pw-ieee-meta">
      <span>Workshops · Meetups · Hub events</span>
      <span>Venue: Seminar Hall</span>
    </div>
    <Credit />
  </div>
);

const PosterNss = () => (
  <div className="pw-p pw-p-nss">
    <div className="pw-nss-unit">NSS Unit · MES College of Engineering, Kuttippuram</div>
    <div className="pw-nss-wheel" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle cx="50" cy="50" r="9" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * 9}
              y1={50 + Math.sin(a) * 9}
              x2={50 + Math.cos(a) * 44}
              y2={50 + Math.sin(a) * 44}
              stroke="currentColor"
              strokeWidth="4"
            />
          );
        })}
      </svg>
    </div>
    <div className="pw-nss-ml" lang="ml">
      സപ്തദിന
      <br />
      സഹവാസ ക്യാമ്പ്
    </div>
    <div className="pw-nss-en">Seven-day residential camp</div>
    <div className="pw-nss-motto">NOT ME, BUT YOU</div>
    <div className="pw-nss-note">my first poster ✎</div>
    <Credit>design · Sahal (1st yr)</Credit>
  </div>
);

export const LAYERS = [
  {
    id: "now",
    year: "2026",
    place: "FantaCode, Kozhikode",
    title: "SDE 2, freshly pasted",
    story:
      "Two years in, promoted last month. The title says SDE; the work says design, frontend, backend, whatever ships. Nights go to assetbuild.in.",
    Poster: PosterNow,
    rotate: -1.4,
    offset: { x: 0, y: 0 },
  },
  {
    id: "switch",
    year: "2024",
    place: "Tecnavis → FantaCode",
    title: "The switch",
    story:
      "After years of freelance design, I picked the compiler over the pen tool — and kept the pen tool. A React internship, then a full-time SDE role.",
    Poster: PosterSwitch,
    rotate: 2.2,
    offset: { x: 14, y: -10 },
  },
  {
    id: "iedc",
    year: "2023",
    place: "IEDC MESCE",
    title: "From making the poster to running the event",
    story:
      "I joined to design. I left as Chief Technical Officer — leading the builds the posters were promising.",
    Poster: PosterIedc,
    rotate: -3,
    offset: { x: -18, y: 8 },
  },
  {
    id: "ieee",
    year: "2022",
    place: "IEEE · Malabar Hub",
    title: "Every talk needed a poster",
    story:
      "IEEE SB and the Malabar Hub. A deadline every week, a new event every month — that's where I learned to ship.",
    Poster: PosterIeee,
    rotate: 1.2,
    offset: { x: 10, y: 14 },
  },
  {
    id: "nss",
    year: "2020",
    place: "NSS, Kuttippuram",
    title: "The first ticket in",
    story:
      "A boy from Kannur, new in Kuttippuram. I couldn't get into NSS by waiting — so I offered to design their posters. That was the door.",
    Poster: PosterNss,
    rotate: -0.8,
    offset: { x: -6, y: -4 },
  },
];

export const BASE = {
  year: "Origin",
  place: "Kannur",
  title: "Under every poster: Kannur",
  story: "Peel everything back and it's the same laterite wall I grew up next to. Every poster on it was a ticket in.",
};
