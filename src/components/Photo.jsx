import { BinderClip, PaperClip } from "./DeskObjects";

const FASTENERS = {
  tape: <span className="tape" aria-hidden="true" />,
  tapes: (
    <>
      <span className="tape" aria-hidden="true" />
      <span className="tape tape-r" aria-hidden="true" />
    </>
  ),
  clip: <PaperClip />,
  binder: <BinderClip />,
};

// A screenshot fastened to the page (tape, two tapes, a paper clip or a binder clip),
// with an optional handwritten caption.
const Photo = ({ src, alt, caption, tilt = "0deg", fastener = "tape", eager = false }) => (
  <figure className={`photo fasten-${fastener}`} style={{ "--tilt": tilt }}>
    {FASTENERS[fastener] ?? FASTENERS.tape}
    <img src={src} alt={alt} width="1600" height="1000" loading={eager ? "eager" : "lazy"} decoding="async" />
    {caption && <figcaption className="note">{caption}</figcaption>}
  </figure>
);

export default Photo;
