# Project notes (msahalkc.com)

Quick reference so the code doesn't need re-reading. Update the relevant line when something changes; don't rewrite.

## Layout
- Vite + React, react-router-dom 6 (`src/main.jsx`). Routes: `/` (App), `/projects/:slug` (ProjectPage), `*` (NotFound). Netlify sends every path to index.html.
- Home sections in order: Hero → Projects → Earlier projects (Work.jsx) → Experience → Writing → Contact. Nav anchors: `#projects #experience #writing #contact`; on other pages the nav links to `/#id`.
- All copy: `src/data/content.jsx` (`site`, `nav`, `heroNote`, `products`, `work`, `experience`). Components are presentational.
- Look: "workshop notebook" (approved mockup E). Graph-paper body, taped screenshots (`Photo.jsx`), sticky notes, highlighter (`.hl`), handwritten asides (`.note`, Caveat). Fonts: Space Grotesk, Inter, Caveat, JetBrains Mono (Google Fonts in index.html). Light theme only; tokens on `:root` in `src/styles/global.css`.
- Wording: plain website terms (Projects, Experience, Writing, Contact). No game or comic wording. Don't feature the Kannur → Kuttippuram → Kozhikode route.
- Per-page title/description/canonical: `src/lib/usePageMeta.jsx` (hooks live in .jsx so Jest's babel transform loads them).

## Products
- `products[]` fields: `id, slug, featured?, note (project-page sticky), scribble (card caption), tilt, label, name, tagline, links[{href,text,accent}], shot{src,alt,caption}, why, what, listLabel, list[], stack`.
- Home: one card per product linking to `/projects/<slug>`. The `featured` product is the photo in the hero.
- Project page (`ProjectPage.jsx`): back link, head + sticky, taped screenshot, Why / What, numbered decisions, stack, previous/next by array order.
- Screenshots: `public/projects/<slug>.webp`, 1600×1000.
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
