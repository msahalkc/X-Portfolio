import MarkedTitle from "./MarkedTitle";

// Shared section frame: heading (with a hand-drawn underline) and an optional handwritten aside, then the content.
// `margin` holds decorations that sit outside the content column on wide screens.
const Section = ({ id, title, aside, variant = 0, margin, className = "", children }) => (
  <section id={id} aria-labelledby={`${id}-h`} className={`wrap sec ${className}`}>
    {margin}
    <header className="sec-head">
      <h2 id={`${id}-h`}>
        <MarkedTitle variant={variant}>{title}</MarkedTitle>
      </h2>
      {aside && <span className="note aside">{aside}</span>}
    </header>
    {children}
  </section>
);

export default Section;
