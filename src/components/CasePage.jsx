import { products, site } from "../data/content";
import Layout from "./Layout";

const ExternalLink = ({ href, text, accent }) => (
  <a className={accent ? "arrow accent" : "arrow"} href={href} target="_blank" rel="noopener noreferrer">
    {text} ↗
  </a>
);

const CasePage = ({ product }) => {
  const next = products[(products.indexOf(product) + 1) % products.length];
  const stackItems = product.stack.split("—")[0].split("·").map((item) => item.trim());

  return (
    <Layout>
      <article className="page wrap">
        <nav className="crumbs label" aria-label="Breadcrumb">
          <a href="/">{site.name}</a>
          <span aria-hidden="true">/</span>
          <a href="/#building">Building</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <header className="page-head">
          <span className="label">{product.label}</span>
          <h1>{product.name}</h1>
          <p className="tagline">{product.tagline}</p>
          <p className="byline">
            Designed and built by <a href="/">{site.name}</a>
          </p>
        </header>

        <dl className="facts">
          {product.facts.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <figure className="shot">
          <img src={product.shot.src} alt={product.shot.alt} width="1600" height="1000" decoding="async" />
          <figcaption className="label">{product.shot.caption}</figcaption>
        </figure>

        <div className="page-body">
          <div className="ps">
            <h2>Why I built it</h2>
            <p>{product.why}</p>
          </div>
          <div className="ps">
            <h2>What it does</h2>
            <p>{product.what}</p>
          </div>
          <div className="ps">
            <h2>{product.listLabel}</h2>
            <ul>
              {product.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ps">
            <h2>How it&apos;s built</h2>
            <ul className="stack">
              {stackItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-links page-links">
          {product.pageLinks.map((link) => (
            <ExternalLink key={link.href} {...link} />
          ))}
        </div>

        <a className="next" href={`/${next.slug}`}>
          <span className="label">Next project</span>
          <b>{next.name} →</b>
        </a>
      </article>
    </Layout>
  );
};

export default CasePage;
