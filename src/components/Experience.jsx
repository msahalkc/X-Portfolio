import { experience } from "../data/content";
import Section from "./Section";

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="split">
      <div className="split-text">
        <p>
          Designing posters for college clubs is how I got in the door, and design led me into code. At FantaCode I
          work across the whole product: interface, frontend and backend, mostly with ASP.NET and Angular.
        </p>
        <p className="muted">
          Before that: NSS, IEEE SB MESCE and IEEE Malabar Hub at MES College of Engineering, Kuttippuram, usually as
          the person designing the posters.
        </p>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.role}-${job.org}`} className={job.now ? "now" : undefined}>
            <span className="note when">{job.when}</span>
            <b>{job.role}</b>
            <span className="muted">{job.org}</span>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default Experience;
