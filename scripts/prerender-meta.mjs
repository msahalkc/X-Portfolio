// Runs after every build (npm "postbuild"). The site is a single-page app, so link previews
// (WhatsApp, LinkedIn, Slack...) would otherwise show the home page for every URL.
// This writes dist/projects/<slug>.html for each project: the same app shell with that
// project's title, description, canonical URL and preview image. Netlify serves /projects/<slug>
// from <slug>.html (no trailing-slash redirect) before its catch-all rewrite, and the app then
// renders the page as usual.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { loadContent } from "./load-content.mjs";

const SITE = "https://msahalkc.com";
const DIST = new URL("../dist/", import.meta.url);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Replace the value of one attribute on the single tag that matches `match`; fail loudly if the tag is missing.
const setAttr = (html, match, attr, value) => {
  const re = new RegExp(`(<[^>]*${match}[^>]*\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html has no tag matching ${match}`);
  return html.replace(re, `$1${esc(value)}$2`);
};

const { products } = await loadContent();
const shell = await readFile(new URL("index.html", DIST), "utf8");

for (const p of products) {
  const title = `${p.name} · Muhammed Sahal K C`;
  const url = `${SITE}/projects/${p.slug}`;
  const image = `${SITE}/og/${p.slug}.png`;
  let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = setAttr(html, 'name="description"', "content", p.tagline);
  html = setAttr(html, 'rel="canonical"', "href", url);
  html = setAttr(html, 'property="og:url"', "content", url);
  html = setAttr(html, 'property="og:title"', "content", title);
  html = setAttr(html, 'property="og:description"', "content", p.tagline);
  html = setAttr(html, 'property="og:image"', "content", image);
  html = setAttr(html, 'name="twitter:title"', "content", title);
  html = setAttr(html, 'name="twitter:description"', "content", p.tagline);
  html = setAttr(html, 'name="twitter:image"', "content", image);
  const dir = new URL("projects/", DIST);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL(`${p.slug}.html`, dir), html);
}

console.log(`prerender-meta: wrote ${products.length} project pages`);
