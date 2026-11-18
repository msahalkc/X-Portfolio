import { useRef, useState } from "react";
import { site } from "../data/content";
import Doodle from "./Doodle";
import Highlight from "./Highlight";

const Contact = () => {
  const emailRef = useRef(null);
  const [copyLabel, setCopyLabel] = useState("Copy email");

  const selectEmail = () => {
    const range = document.createRange();
    range.selectNodeContents(emailRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    setCopyLabel("Selected");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy email"), 1800);
    } catch {
      selectEmail();
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-h" className="wrap sec contact">
      <div className="torn-sheet">
        <span className="note kicker contact-kicker">
          Contact
          <Doodle kind="arrowDown" className="contact-arrow" />
        </span>
        <h2 id="contact-h">
          <a href={`mailto:${site.email}`} ref={emailRef}>
            <Highlight>{site.email}</Highlight>
          </a>
        </h2>
        <div className="actions">
          <button className="btn btn-dark" type="button" onClick={copy}>
            {copyLabel}
          </button>
          <a className="btn btn-line" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="btn btn-line" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
