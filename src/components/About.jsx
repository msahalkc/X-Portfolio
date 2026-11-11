import { route } from "../data/content";
import Section from "./Section";

const About = () => (
  <Section id="about" label="About" title="Kannur → Kozhikode">
    <div className="about">
      <ol className="route" aria-label="Kannur to Kozhikode">
        {route.map((stop) => (
          <li key={stop.place}>
            <span className="label">{stop.label}</span>
            {stop.place}
          </li>
        ))}
      </ol>
      <div className="about-text">
        <p>
          I grew up in Kannur and went to Kuttippuram for engineering. Designing posters for college clubs is how I
          got in the door, and design led me into code.
        </p>
        <p>
          At FantaCode I work across the whole product: interface, frontend and backend, mostly with ASP.NET and
          Angular. Outside work I build the things I need, like Asset Build and ExtenD, and I write about what I
          learn on Medium.
        </p>
      </div>
    </div>
  </Section>
);

export default About;
