import { work } from "../data/content";
import Doodle from "./Doodle";
import Section from "./Section";

const Work = () => (
  <Section id="work" title="Earlier projects" variant={1} margin={<Doodle kind="watch" className="margin-doodle md-left md-mid" />}>
    <ul className="rows">
      {work.map((item) => (
        <li className="row" key={item.name}>
          <span className="note when">{item.badge ?? item.when}</span>
          <span>
            <b>{item.name}</b> <span className="muted">· {item.desc}</span>
          </span>
          <span className="go">
            {item.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text} ↗
              </a>
            ))}
          </span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Work;
