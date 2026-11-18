import posts from "../data/medium.json";
import { site } from "../data/content";
import Section from "./Section";

const monthYear = (iso) =>
  iso ? new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso)) : "";

const Writing = () => {
  if (posts.length === 0) return null;

  return (
    <Section id="writing" title="Writing" aside="on Medium">
      <div className="posts">
        {posts.map((post) => (
          <a key={post.url} className="post" href={post.url} target="_blank" rel="noopener noreferrer">
            <span className="note when">{monthYear(post.date)}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <span className="more">Read ↗</span>
          </a>
        ))}
      </div>
      <a className="btn btn-line all-posts" href={site.medium} target="_blank" rel="noopener noreferrer">
        All posts on Medium ↗
      </a>
    </Section>
  );
};

export default Writing;
