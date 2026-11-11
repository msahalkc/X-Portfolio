# msahalkc.com

Personal site of Muhammed Sahal K C: a minimal, blueprint-style single page that doubles as a résumé.

## Sections

- `/`: Hero → Building (Asset Build, ExtenD) → Earlier work → Experience → Writing (Medium) → About → Contact
- `/asset-build`, `/extend`: full case-study pages
- Anything else: `404.html`, served with a real 404 status and a button back home

## Stack

- Vite 5 + React 18, pre-rendered to static HTML at build time (no client router)
- Plain CSS with theme tokens (`src/styles/global.css`), light and dark themes
- Geist and Geist Mono from Google Fonts; Brittany Signature (local) for the signature
- Jest for unit tests
- Netlify hosting, Umami analytics

## Editing content

- Page copy: `src/data/content.jsx`
- Project screenshots: `public/projects/`
- Social preview and icons: `public/og.png`, `public/favicon*`, `public/apple-touch-icon.png`

## SEO

- `scripts/prerender.mjs` renders every page in `src/seo/pages.js` to HTML after `vite build`, fills each page's `<head>` (title, description, canonical, Open Graph, JSON-LD from `src/seo/head.js`) and writes `sitemap.xml`. The browser then hydrates the same markup.
- `public/robots.txt` and `public/llms.txt` are static. Update `llms.txt` when the facts on the site change.
- Headers (caching, security) live in `netlify.toml`.

## Medium posts

`npm run build` runs `scripts/fetch-medium.mjs` first. It pulls the feed from `medium.com/feed/@msahalkc` and writes `src/data/medium.json`. If Medium can't be reached, the committed file is kept and the build carries on.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm test
npm run lint
npm run build     # fetches Medium posts, builds, pre-renders pages to dist/
```
