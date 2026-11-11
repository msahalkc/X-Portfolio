// Runs after `vite build`: renders every page to static HTML so crawlers that don't run
// JavaScript still get the full content, and writes sitemap.xml.
import { readFile, rm, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const ssr = new URL("../dist-ssr/entry-server.js", import.meta.url);
const { render, headFor, pages, sitemapXml } = await import(ssr.href);

const template = await readFile(new URL("index.html", dist), "utf8");
const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!SEO_BLOCK.test(template)) throw new Error("index.html is missing the <!--seo--> block");

for (const [key, page] of Object.entries(pages)) {
  const html = template
    .replace(SEO_BLOCK, headFor(key))
    .replace('<div id="root"></div>', `<div id="root" data-page="${key}">${render(key)}</div>`);
  await writeFile(new URL(page.file, dist), html);
  console.log(`prerender: ${page.file}`);
}

const today = new Date().toISOString().slice(0, 10);
await writeFile(new URL("sitemap.xml", dist), sitemapXml(today));
console.log("prerender: sitemap.xml");

await rm(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });
