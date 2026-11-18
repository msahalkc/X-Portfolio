import { Link } from "react-router-dom";
import { products } from "../data/content";
import Photo from "./Photo";
import Section from "./Section";

const Projects = () => (
  <Section id="projects" title="Projects" aside="tools I wished existed">
    <div className="cards">
      {products.map((p) => (
        <Link key={p.id} className="card-link" to={`/projects/${p.slug}`}>
          <Photo src={p.shot.src} alt={p.shot.alt} caption={p.scribble} tilt={p.tilt} />
          <div className="card-body">
            <span className="eyebrow">{p.label}</span>
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <span className="more">View project →</span>
          </div>
        </Link>
      ))}
    </div>
    <aside className="sticky sticky-blue notice" role="note">
      <p>
        <b>Heads up:</b> I&apos;m the only user of Asset Build and ExtenD. If you&apos;d like to use either,{" "}
        <a href="#contact">write to me</a> and I&apos;ll help you get set up.
      </p>
    </aside>
  </Section>
);

export default Projects;
