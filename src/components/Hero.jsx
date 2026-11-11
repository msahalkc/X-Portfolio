import { useEffect, useState } from "react";

const istTime = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date());

const Hero = () => {
  const [time, setTime] = useState(istTime);

  useEffect(() => {
    const id = setInterval(() => setTime(istTime()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero wrap">
      <div className="frame">
        <i />
        <i />
        <i />
        <i />
        <div className="hero-top">
          <span className="label">Muhammed Sahal K C · Software engineer &amp; designer</span>
          <div className="readout" aria-label="Status">
            <div className="live">SDE 2 · FantaCode</div>
            <div>Kozhikode · {time} IST</div>
          </div>
        </div>
        <h1>
          <span className="b">{"{"}</span>Software engineer<span className="b">{"}"}</span>
          <br />
          <span className="dim">building the tools I wish existed.</span>
        </h1>
        <p className="hero-sub">
          I&apos;m <b>Sahal</b>, an SDE 2 at FantaCode in Kozhikode. I started as a graphic designer, so when
          something I need doesn&apos;t exist, or doesn&apos;t work the way I want, I design it and build it myself.
        </p>
        <div className="hero-links">
          <a className="arrow accent" href="#building">What I&apos;m building ↓</a>
          <a className="arrow" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
