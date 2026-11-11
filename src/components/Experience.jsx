import { experience } from "../data/content";
import Section from "./Section";

const Experience = () => (
  <Section id="experience" label="Experience" title="Where I've worked">
    <div className="rows">
      {experience.map((job) => (
        <article className="r" key={`${job.role}-${job.org}`}>
          <span className={job.now ? "when now" : "when"}>{job.when}</span>
          <h3>{job.role}</h3>
          <p>{job.org}</p>
          <span />
        </article>
      ))}
    </div>
    <p className="note">
      Before that: NSS, IEEE SB MESCE and IEEE Malabar Hub at MES College of Engineering, Kuttippuram, usually as
      the person designing the posters.
    </p>
  </Section>
);

export default Experience;
