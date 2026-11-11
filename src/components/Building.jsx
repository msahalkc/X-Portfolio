import { products } from "../data/content";
import Section from "./Section";

const ExternalLink = ({ href, text, accent }) => (
  <a className={accent ? "arrow accent" : "arrow"} href={href} target="_blank" rel="noopener noreferrer">
    {text} ↗
  </a>
);

const Case = ({ product }) => (
  <article className="case" id={product.id}>
    <header className="case-head">
      <div>
        <span className="label">{product.label}</span>
        <h3>{product.name}</h3>
        <p className="tagline">{product.tagline}</p>
      </div>
      <div className="hero-links">
        {product.links.map((link) => (
          <ExternalLink key={link.href} {...link} />
        ))}
      </div>
    </header>
    <figure className="shot">
      <img src={product.shot.src} alt={product.shot.alt} width="1600" height="1000" loading="lazy" decoding="async" />
      <figcaption className="label">{product.shot.caption}</figcaption>
    </figure>
    <div className="story">
      <div>
        <span className="label">Why I built it</span>
        <p>{product.why}</p>
      </div>
      <div>
        <span className="label">What it does</span>
        <p>{product.what}</p>
      </div>
      <div>
        <span className="label">{product.listLabel}</span>
        <ul>
          {product.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <p className="req label">{product.stack}</p>
  </article>
);

const Building = () => (
  <Section id="building" label="Building" title="Things I made for myself">
    <div className="products">
      <aside className="notice" role="note">
        <span className="label">Heads up</span>
        <p>
          I&apos;m the only user of both, and I built them around my own needs. If you&apos;d like to use Asset
          Build or ExtenD, <a href="#contact">write to me</a> and I&apos;ll help you get set up.
        </p>
      </aside>
      {products.map((product) => (
        <Case key={product.id} product={product} />
      ))}
    </div>
  </Section>
);

export default Building;
