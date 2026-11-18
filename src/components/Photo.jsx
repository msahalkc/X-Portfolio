// A screenshot "taped" to the page, with an optional handwritten caption.
const Photo = ({ src, alt, caption, tilt = "0deg", tapes = 1, eager = false }) => (
  <figure className={tapes === 2 ? "photo two-tapes" : "photo"} style={{ "--tilt": tilt }}>
    <span className="tape" aria-hidden="true" />
    {tapes === 2 && <span className="tape tape-r" aria-hidden="true" />}
    <img
      src={src}
      alt={alt}
      width="1600"
      height="1000"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
    {caption && <figcaption className="note">{caption}</figcaption>}
  </figure>
);

export default Photo;
