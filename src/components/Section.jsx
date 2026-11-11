// Shared section frame: mono label column on the left, content on the right.
const Section = ({ id, label, title, children }) => (
  <section id={id} aria-labelledby={`${id}-h`}>
    <div className="wrap sec">
      <div className="sec-label">
        <span className="label">{label}</span>
        <h2 id={`${id}-h`}>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  </section>
);

export default Section;
