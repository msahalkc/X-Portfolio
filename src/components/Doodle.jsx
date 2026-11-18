import useInView from "../lib/useInView";

// Hand-drawn pen and pencil marks. Each path has pathLength=1 so CSS can "draw" it in
// (stroke-dashoffset 1 → 0) once the mark scrolls into view. Colour comes from currentColor.
const SHAPES = {
  underline: { box: "0 0 200 14", stretch: true, d: ["M2 9 C 40 4, 80 12, 120 7 S 180 5, 198 8"] },
  underline2: { box: "0 0 200 14", stretch: true, d: ["M3 7 C 50 11, 100 3, 150 8 S 190 10, 197 6", "M24 12 C 70 10, 130 13, 178 11"] },
  underline3: { box: "0 0 200 14", stretch: true, d: ["M2 6 C 30 10, 60 4, 100 8 C 140 12, 170 4, 198 7"] },
  circle: {
    box: "0 0 200 80",
    stretch: true,
    d: ["M152 9 C 112 -1, 32 3, 11 29 C -4 54, 50 77, 110 73 C 170 69, 199 49, 189 27 C 181 11, 142 4, 98 8"],
  },
  arrow: { box: "0 0 220 60", d: ["M4 42 C 60 12, 130 62, 200 22", "M185 12 L 202 21 L 190 34"] },
  arrowDown: { box: "0 0 90 110", d: ["M8 6 C 60 10, 82 40, 62 96", "M50 84 L 62 98 L 74 84"] },
  star: { box: "0 0 40 40", d: ["M20 3 L 24.5 15 L 37 15.5 L 27 23.5 L 31 36 L 20 28.5 L 9.5 36.5 L 13 23.5 L 3 15.5 L 15.5 15 Z"] },
  phone: {
    box: "0 0 60 100",
    d: ["M13 4 H47 Q56 4 56 13 V87 Q56 96 47 96 H13 Q4 96 4 87 V13 Q4 4 13 4 Z", "M24 10 H36", "M26 88 H34"],
  },
  watch: {
    box: "0 0 60 100",
    d: [
      "M20 4 H40 V26 M20 4 V26",
      "M14 26 H46 Q52 26 52 32 V68 Q52 74 46 74 H14 Q8 74 8 68 V32 Q8 26 14 26 Z",
      "M20 74 V96 H40 V74",
      "M30 38 V50 L39 55",
    ],
  },
  browser: { box: "0 0 120 90", d: ["M6 6 H114 V84 H6 Z", "M6 22 H114", "M18 38 H70 M18 50 H96 M18 62 H84"] },
  cursor: { box: "0 0 50 60", d: ["M6 4 L 6 46 L 17 36 L 25 54 L 32 51 L 24 33 L 40 33 Z"] },
};

const Doodle = ({ kind, className = "" }) => {
  const [ref, seen] = useInView();
  const shape = SHAPES[kind];

  return (
    <svg
      ref={ref}
      className={`doodle doodle-${kind} ${seen ? "is-drawn" : ""} ${className}`}
      viewBox={shape.box}
      preserveAspectRatio={shape.stretch ? "none" : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {shape.d.map((d) => (
        <path key={d} d={d} pathLength="1" vectorEffect={shape.stretch ? "non-scaling-stroke" : undefined} />
      ))}
    </svg>
  );
};

export default Doodle;
