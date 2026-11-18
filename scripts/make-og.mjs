// Draws the link-preview images (1200×630) in the site's notebook style:
//   public/og.png              home page
//   public/og/<slug>.png       one per project
// Run by hand after adding or renaming a project: `npm run og`. Needs Playwright with Chromium
// (npx playwright install chromium). Not part of the build.
import { mkdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { loadContent } from "./load-content.mjs";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("make-og: Playwright isn't installed. Run `npm i -D playwright && npx playwright install chromium`.");
  process.exit(1);
}

const PUBLIC = new URL("../public/", import.meta.url);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const dataUri = async (path) => `data:image/webp;base64,${(await readFile(new URL(path.replace(/^\//, ""), PUBLIC))).toString("base64")}`;

const page = ({ kicker, title, tagline, sticky, shot, label }) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Inter:wght@500;600&family=Space+Grotesk:wght@700&display=swap">
<style>
*{box-sizing:border-box}html,body{margin:0}
body{width:1200px;height:630px;overflow:hidden;color:#1d1f24;font-family:Inter,sans-serif;background-color:#f7f6f1;
background-image:linear-gradient(rgba(70,120,200,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(70,120,200,.13) 1px,transparent 1px);background-size:24px 24px;
display:flex;align-items:center;gap:40px;padding:0 64px}
.text{flex:1 1 0;display:flex;flex-direction:column;gap:18px;min-width:0}
.k{font-family:Caveat,cursive;font-size:34px;color:#c2402f;line-height:1}
.l{font-size:17px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#c2402f}
h1{margin:0;font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.04em;line-height:.98;font-size:${title.length > 14 ? 72 : 96}px}
p{margin:0;font-size:28px;line-height:1.35;color:#2e3138}
.hl{background:linear-gradient(transparent 55%,#ffe66d 55%,#ffe66d 90%,transparent 90%)}
.photo{flex:0 0 470px;background:#fff;padding:12px 12px 16px;box-shadow:0 1px 1px rgba(0,0,0,.08),0 14px 30px rgba(30,40,60,.2);transform:rotate(2.5deg);position:relative}
.photo img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover}
.tape{position:absolute;top:-16px;left:50%;width:130px;height:34px;margin-left:-65px;background:rgba(233,220,192,.9);transform:rotate(-3deg)}
.sticky{flex:0 0 360px;background:#ffe66d;padding:28px 30px;box-shadow:0 10px 24px rgba(30,40,60,.2);transform:rotate(-3deg);font-family:Caveat,cursive;font-size:44px;line-height:1.1}
.url{position:absolute;right:64px;bottom:34px;font-family:Caveat,cursive;font-size:32px}
</style></head><body>
<div class="text">
  <span class="k">${esc(kicker)}</span>
  ${label ? `<span class="l">${esc(label)}</span>` : ""}
  <h1>${esc(title)}</h1>
  <p><span class="hl">${esc(tagline)}</span></p>
</div>
${shot ? `<div class="photo"><span class="tape"></span><img src="${shot}"></div>` : `<div class="sticky">${esc(sticky)}</div>`}
<span class="url">msahalkc.com</span>
</body></html>`;

const { products, heroNote } = await loadContent();
await mkdir(new URL("og/", PUBLIC), { recursive: true });

const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const shoot = async (html, out) => {
  await tab.setContent(html, { waitUntil: "networkidle" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: new URL(out, PUBLIC).pathname });
  console.log(`make-og: public/${out}`);
};

await shoot(
  page({ kicker: "Muhammed Sahal K C · SDE 2", title: "Software engineer", tagline: "building the tools I wish existed.", sticky: heroNote }),
  "og.png"
);
for (const p of products) {
  await shoot(
    page({ kicker: "Muhammed Sahal K C", label: p.label, title: p.name, tagline: p.tagline, shot: await dataUri(p.shot.src) }),
    `og/${p.slug}.png`
  );
}
await browser.close();
