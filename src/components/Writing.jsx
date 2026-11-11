import posts from "../data/medium.json";
import { site } from "../data/content";
import Section from "./Section";

const monthYear = (iso) =>
  iso ? new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso)) : "";

const Writing = () => {
  if (posts.length === 0) return null;

  return (
    <Section id="writing" label="Writing" title="Notes on Medium">
      <div className="rows">
        {posts.map((post) => (
          <article className="w" key={post.url}>
            <span className="when">{monthYear(post.date)}</span>
            <div>
              <h3>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>
              <p>{post.summary}</p>
            </div>
            <span className="go">
              <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Read “${post.title}” on Medium`}>
                Read ↗
              </a>
            </span>
          </article>
        ))}
      </div>
      <div className="hero-links">
        <a className="arrow" href={site.medium} target="_blank" rel="noopener noreferrer">
          All posts on Medium ↗
        </a>
      </div>
    </Section>
  );
};

export default Writing;
