import useInView from "../lib/useInView";

// Yellow highlighter that sweeps across the text, left to right, when it scrolls into view.
const Highlight = ({ children }) => {
  const [ref, seen] = useInView();
  return (
    <span ref={ref} className={seen ? "hl is-on" : "hl"}>
      {children}
    </span>
  );
};

export default Highlight;
