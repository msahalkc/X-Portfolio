import { useRef, useState } from "react";
import { site } from "../data/content";
import Section from "./Section";

const Contact = () => {
  const emailRef = useRef(null);
  const [copyLabel, setCopyLabel] = useState("Copy");

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
      setTimeout(() => setCopyLabel("Copy"), 1800);
    } catch {
      selectEmail();
    }
  };

  return (
    <Section id="contact" label="Contact" title="Say hello">
      <div className="mail">
        <span ref={emailRef}>{site.email}</span>
        <button className="copy" type="button" onClick={copy}>
          {copyLabel}
        </button>
      </div>
      <div className="contact-meta">
        <div>
          <span className="label">Write</span>
          <a className="arrow" href={`mailto:${site.email}`}>
            Send an email
          </a>
        </div>
        <div>
          <span className="label">Elsewhere</span>
          <span style={{ display: "flex", gap: 16 }}>
            <a className="arrow" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="arrow" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </span>
        </div>
      </div>
      <p className="sig" aria-hidden="true">
        Sahal
      </p>
    </Section>
  );
};

export default Contact;
