// Turns a Medium RSS feed (medium.com/feed/@user) into the list the Writing section renders.
// Dependency-free on purpose: it runs in the browser bundle's tests and in the Node build script.

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

export const decodeEntities = (text) =>
  text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });

const field = (xml, tag) => {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return "";
  return m[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1").trim();
};

export const excerpt = (html, maxWords = 30) => {
  const text = decodeEntities(html.replace(/<(figure|figcaption|pre|code)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ").replace(/[,;:.!?]+$/, "")}…`;
};

export const parseMediumFeed = (xml) =>
  [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .map(([, item]) => {
      const published = new Date(field(item, "pubDate"));
      return {
        title: decodeEntities(field(item, "title")),
        url: field(item, "link").split("?")[0],
        date: Number.isNaN(published.getTime()) ? null : published.toISOString().slice(0, 10),
        summary: excerpt(field(item, "content:encoded")),
      };
    })
    .filter((post) => post.title && post.url);
