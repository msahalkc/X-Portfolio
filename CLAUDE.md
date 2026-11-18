# Project notes (msahalkc.com)

Quick reference so the code doesn't need re-reading. Update the relevant line when something changes; don't rewrite.

## Layout
- Vite + React, react-router-dom 6 (`src/main.jsx`). Routes: `/` (App), `/projects/:slug` (ProjectPage), `*` (NotFound). Netlify sends every path to index.html.
- Home sections in order: Hero → Projects → Earlier projects (Work.jsx) → Experience → Writing → Contact. Nav anchors: `#projects #experience #writing #contact`; on other pages the nav links to `/#id`.
- All copy: `src/data/content.jsx` (`site`, `nav`, `heroNote`, `products`, `work`, `experience`). Components are presentational.
- Look: "workshop notebook" (approved mockup E). Graph-paper body, taped screenshots (`Photo.jsx`), sticky notes, highlighter (`.hl`), handwritten asides (`.note`, Caveat). Fonts: Space Grotesk, Inter, Caveat, JetBrains Mono (Google Fonts in index.html). Tokens on `:root` in `src/styles/global.css`; dark ("notebook at night") redefines them under `prefers-color-scheme: dark` (unless `data-theme="light"`) and again under `[data-theme="dark"]`. Toggle: `ThemeToggle.jsx` in the nav, saved in localStorage, applied before paint by a script in index.html. Photos and sticky notes stay light in dark mode. Texture (all CSS, `--noise`/`--fibers` SVG-noise data URIs per theme): paper grain + fibres, stronger grid line every 5 squares (`--grid-major`), edge shading (`.paper-edge` div in Layout), torn tape, shaded sticky notes with a lifted corner, grainy photo frames/cards, decisions as ruled index cards (text line-height = rule spacing `--rule`, rules drawn on the `<p>` so they stay on the baselines).
- Shapes & motion: `Doodle.jsx` (hand-drawn SVG marks: underlines, circle, arrows, star, margin sketches phone/watch/browser/cursor; paths use pathLength=1 and draw in via stroke-dashoffset when `useInView` fires), `Highlight.jsx` (highlighter sweeps in on view), `MarkedTitle.jsx` (heading + drawn underline; Section `variant` 0–2 picks the stroke), `DeskObjects.jsx` (Pushpin, PaperClip, BinderClip, CoffeeRing; detailed SVG with metal gradients, highlights and blurred cast shadows, ids via useId; pin colour via --pin/--pin-hi/--pin-lo; free photos were not used because Wikimedia rate-limited cloud sessions). Photo `fastener`: tape | tapes | clip | binder (per product in content.jsx). Project card text is a cut "clipping"; contact sits on a torn sheet (CSS mask). Spiral binding ≥1340px, margin sketches ≥1500px, coffee ring ≥900px. All motion off under prefers-reduced-motion. User declined: notes settling in, page-turn transitions.
- Wording: plain website terms (Projects, Experience, Writing, Contact). No game or comic wording. Don't feature the Kannur → Kuttippuram → Kozhikode route.
- Per-page title/description/canonical/og:image in the browser: `src/lib/usePageMeta.jsx` (hooks live in .jsx so Jest's babel transform loads them).
- Link previews for crawlers: `npm run build` → postbuild `scripts/prerender-meta.mjs` writes `dist/projects/<slug>.html` (index.html with that project's meta). Preview images: `public/og.png` (home) and `public/og/<slug>.png`, made by `npm run og` (`scripts/make-og.mjs`, needs Playwright; run by hand after adding/renaming a project). Both scripts read content.jsx via `scripts/load-content.mjs` (esbuild).

## Products
- `products[]` fields: `id, slug, fastener, featured?, note (project-page sticky), scribble (card caption), tilt, label, name, tagline, links[{href,text,accent}], shot{src,alt,caption}, why, what, listLabel, list[], stack`.
- Home: one card per product linking to `/projects/<slug>`. The `featured` product is the photo in the hero.
- Project page (`ProjectPage.jsx`): back link, head + sticky, taped screenshot, Why / What, numbered decisions, stack, previous/next by array order.
- Screenshots: `public/projects/<slug>.webp`, 1600×1000. New project: add it to `products[]`, add the screenshot, run `npm run og`.
- Order: Asset Build, ExtenD, Adahly (featured), Simple Header Editor.
- "Heads up" note in `Projects.jsx`: only Asset Build and ExtenD are single-user.

## Product names also appear in
- `index.html` meta description, og:description, twitter:description.
- `src/App.jsx` HOME_DESCRIPTION.
- `README.md` "Sections" line.

## Earlier work
- `work[]` in content.jsx: `{when, name, badge?, desc, links[]}`.

## Design mockups
- Claude Design canvas "Portfolio Comic Redesign" (claude.ai artifact U9QFE7J8TZM1UEu1QAUWL7): round 1 game styles (dropped), round 2 D/E/F; E chosen.

## Build / checks
- `npm run dev`, `npm test` (Jest, includes route tests in `src/__tests__/routes.test.jsx`), `npm run lint`, `npm run build` (fetches Medium first; falls back to committed `src/data/medium.json`).
- Hosted on Netlify.

## Wording rules
- Never name competing apps or the header extension that was removed from the Chrome Web Store.
