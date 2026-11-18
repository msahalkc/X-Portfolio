import Doodle from "./Doodle";

const UNDERLINES = ["underline", "underline2", "underline3"];

// A heading's text with a hand-drawn underline that draws itself in. `variant` picks one of three strokes.
const MarkedTitle = ({ children, variant = 0 }) => (
  <span className="marked">
    {children}
    <Doodle kind={UNDERLINES[variant % UNDERLINES.length]} className="marked-line" />
  </span>
);

export default MarkedTitle;
