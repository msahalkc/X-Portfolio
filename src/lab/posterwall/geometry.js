// Pure geometry for peeling a rectangular poster.
// The user grabs point G on the poster and drags it to P. The fold line is the
// perpendicular bisector of G→P; everything on G's side of it flips over.

const dot = (a, b) => a.x * b.x + a.y * b.y;

// Sutherland–Hodgman clip of a polygon against the half-plane side(pt) <= 0.
export const clipPolygon = (points, side) => {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const sa = side(a);
    const sb = side(b);
    if (sa <= 0) out.push(a);
    if ((sa < 0 && sb > 0) || (sa > 0 && sb < 0)) {
      const t = sa / (sa - sb);
      out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    }
  }
  return out;
};

export const polygonArea = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    sum += a.x * b.y - b.x * a.y;
  }
  return Math.abs(sum) / 2;
};

export const foldGeometry = (width, height, grab, pointer) => {
  const rect = [
    { x: 0, y: 0 },
    { x: width, y: 0 },
    { x: width, y: height },
    { x: 0, y: height },
  ];
  const dx = grab.x - pointer.x;
  const dy = grab.y - pointer.y;
  const len = Math.hypot(dx, dy);
  if (len < 0.5) {
    return { folded: false, remaining: rect, flap: [], remainingRatio: 1 };
  }

  const u = { x: dx / len, y: dy / len }; // points from crease toward the grabbed side
  const mid = { x: (grab.x + pointer.x) / 2, y: (grab.y + pointer.y) / 2 };
  const side = (pt) => (pt.x - mid.x) * u.x + (pt.y - mid.y) * u.y;

  const remaining = clipPolygon(rect, side);
  const flap = clipPolygon(rect, (pt) => -side(pt));

  // Reflection across the fold line as a CSS matrix(a, b, c, d, e, f).
  const k = 2 * dot(mid, u);
  const matrix = [
    1 - 2 * u.x * u.x,
    -2 * u.x * u.y,
    -2 * u.x * u.y,
    1 - 2 * u.y * u.y,
    k * u.x,
    k * u.y,
  ];

  return {
    folded: true,
    remaining,
    flap,
    matrix,
    u,
    mid,
    remainingRatio: polygonArea(remaining) / (width * height),
  };
};

export const toClipPath = (points) =>
  points.length
    ? `polygon(${points.map((p) => `${p.x.toFixed(2)}px ${p.y.toFixed(2)}px`).join(", ")})`
    : "polygon(0 0, 0 0, 0 0)";

// Linear-gradient angle + crease position (0..1 along the gradient line) for
// shading the flap's back, so the highlight sits on the crease.
export const creaseGradient = (width, height, u, mid) => {
  const angle = (Math.atan2(u.x, -u.y) * 180) / Math.PI;
  const rad = (angle * Math.PI) / 180;
  const lineLength = Math.abs(width * Math.sin(rad)) + Math.abs(height * Math.cos(rad));
  const center = { x: width / 2, y: height / 2 };
  const crease = ((mid.x - center.x) * u.x + (mid.y - center.y) * u.y) / lineLength + 0.5;
  return { angle, crease, lineLength };
};
