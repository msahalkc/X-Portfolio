// Shared section frame: heading with an optional handwritten aside, then the content.
const Section = ({ id, title, aside, children }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="wrap sec">
    <header className="sec-head">
      <h2 id={`${id}-h`}>{title}</h2>
      {aside && <span className="note aside">{aside}</span>}
    </header>
    {children}
  </section>
);

export default Section;
