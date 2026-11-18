import { Link } from "react-router-dom";
import { heroNote, products } from "../data/content";
import Photo from "./Photo";

const featured = products.find((p) => p.featured) ?? products[0];

const Hero = () => (
  <section className="hero wrap" aria-labelledby="hero-h">
    <div className="hero-text">
      <span className="note kicker">Muhammed Sahal K C · SDE 2 at FantaCode</span>
      <h1 id="hero-h">
        Software engineer, <span className="hl">building the tools I wish existed.</span>
      </h1>
      <p className="lede">
        I&apos;m Sahal, in Kozhikode. I started as a graphic designer, so when something I need doesn&apos;t exist, or
        doesn&apos;t work the way I want, I design it and build it myself.
      </p>
      <div className="actions">
        <a className="btn btn-dark" href="#projects">
          View projects
        </a>
        <a className="btn btn-line" href="#contact">
          Get in touch
        </a>
      </div>
    </div>
    <div className="hero-board">
      <p className="sticky note hero-sticky">{heroNote}</p>
      <Link className="hero-photo" to={`/projects/${featured.slug}`} aria-label={`Latest project: ${featured.name}`}>
        <Photo src={featured.shot.src} alt={featured.shot.alt} caption={`latest: ${featured.name}`} tilt="3deg" eager />
      </Link>
      <div className="hero-aside" aria-hidden="true">
        <span className="note">designer first, then code</span>
        <svg width="220" height="20" viewBox="0 0 220 20">
          <path d="M2 12 C 60 2, 120 20, 200 8" />
          <path d="M192 2 L 204 8 L 194 16" />
        </svg>
      </div>
    </div>
  </section>
);

export default Hero;
