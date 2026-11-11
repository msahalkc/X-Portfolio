import { work } from "../data/content";
import Section from "./Section";

const Work = () => (
  <Section id="work" label="Work" title="Earlier projects">
    <div className="rows">
      {work.map((item) => (
        <article className="r" key={item.name}>
          <span className="when">{item.when}</span>
          <h3>
            {item.name}
            {item.badge && <span className="badge">{item.badge}</span>}
          </h3>
          <p>{item.desc}</p>
          <span className="go">
            {item.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            ))}
          </span>
        </article>
      ))}
    </div>
  </Section>
);

export default Work;
