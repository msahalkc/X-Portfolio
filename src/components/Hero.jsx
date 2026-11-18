import { Link } from "react-router-dom";
import { heroNote, products } from "../data/content";
import { Pushpin } from "./DeskObjects";
import Doodle from "./Doodle";
import Highlight from "./Highlight";
import Photo from "./Photo";

const featured = products.find((p) => p.featured) ?? products[0];

const Hero = () => (
  <section className="hero wrap" aria-labelledby="hero-h">
    <div className="hero-text">
      <span className="note kicker">Muhammed Sahal K C · SDE 2 at FantaCode</span>
      <h1 id="hero-h">
        Software engineer, <Highlight>building the tools I wish existed.</Highlight>
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
      <div className="sticky note hero-sticky">
        <Pushpin />
        <p>{heroNote}</p>
      </div>
      <Doodle kind="star" className="hero-star" />
      <Link className="hero-photo" to={`/projects/${featured.slug}`} aria-label={`Latest project: ${featured.name}`}>
        <Photo src={featured.shot.src} alt={featured.shot.alt} caption={`latest: ${featured.name}`} tilt="3deg" eager />
      </Link>
      <div className="hero-aside" aria-hidden="true">
        <span className="note">designer first, then code</span>
        <Doodle kind="arrow" className="hero-arrow" />
      </div>
    </div>
  </section>
);

export default Hero;
