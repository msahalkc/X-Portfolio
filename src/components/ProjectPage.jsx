import { Link, useParams } from "react-router-dom";
import { products } from "../data/content";
import usePageMeta from "../lib/usePageMeta";
import Layout from "./Layout";
import { Pushpin } from "./DeskObjects";
import Highlight from "./Highlight";
import MarkedTitle from "./MarkedTitle";
import NotFound from "./NotFound";
import Photo from "./Photo";

const ExternalLink = ({ href, text, accent }) => (
  <a className={accent ? "btn btn-dark" : "btn btn-line"} href={href} target="_blank" rel="noopener noreferrer">
    {accent ? `Visit ${text}` : text} ↗
  </a>
);

const Project = ({ product, prev, next }) => {
  usePageMeta({
    title: product.name,
    description: product.tagline,
    path: `/projects/${product.slug}`,
    image: `/og/${product.slug}.png`,
  });

  return (
    <Layout>
      <article className="project wrap" aria-labelledby="project-h">
        <Link className="back" to="/#projects">
          ← All projects
        </Link>

        <header className="project-head">
          <div>
            <span className="eyebrow">{product.label}</span>
            <h1 id="project-h">{product.name}</h1>
            <p className="tagline">
              <Highlight>{product.tagline}</Highlight>
            </p>
            <div className="actions">
              {product.links.map((link) => (
                <ExternalLink key={link.href} {...link} />
              ))}
            </div>
          </div>
          <div className="sticky note project-sticky">
            <Pushpin />
            <p>{product.note}</p>
          </div>
        </header>

        <Photo src={product.shot.src} alt={product.shot.alt} caption={product.shot.caption} tilt="-0.5deg" fastener="tapes" eager />

        <div className="story">
          <section>
            <h2>
              <MarkedTitle>Why I built it</MarkedTitle>
            </h2>
            <p>{product.why}</p>
          </section>
          <section>
            <h2>
              <MarkedTitle variant={1}>What it does</MarkedTitle>
            </h2>
            <p>{product.what}</p>
          </section>
        </div>

        <section className="decisions" aria-labelledby="decisions-h">
          <header className="sec-head">
            <h2 id="decisions-h">
              <MarkedTitle variant={2}>{product.listLabel}</MarkedTitle>
            </h2>
          </header>
          <ol>
            {product.list.map((item, i) => (
              <li key={i}>
                <span className="note num">{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="stack" aria-labelledby="stack-h">
          <h2 id="stack-h">
            <MarkedTitle>Stack</MarkedTitle>
          </h2>
          <p className="mono">{product.stack}</p>
        </section>

        <nav className="pager" aria-label="More projects">
          {prev ? (
            <Link to={`/projects/${prev.slug}`}>
              <span className="eyebrow">← Previous project</span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link className="pager-next" to={`/projects/${next.slug}`}>
              <span className="eyebrow">Next project →</span>
              <span className="pager-name">{next.name}</span>
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
};

const ProjectPage = () => {
  const { slug } = useParams();
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  return <Project product={products[index]} prev={products[index - 1]} next={products[index + 1]} />;
};

export default ProjectPage;
