# msahalkc.com

Personal site of Muhammed Sahal K C: a "workshop notebook" style home page that doubles as a résumé, plus a page for each project.

## Sections

Hero → Projects → Earlier projects → Experience → Writing → Contact. Each project has its own page at `/projects/<slug>` (Asset Build, ExtenD, Adahly, Simple Header Editor). Unknown paths show a 404 page with a button back home.

## Editing content

- Page copy, including each project page: `src/data/content.jsx`
- Project screenshots: `public/projects/` (1600×1000 webp)
- Link preview images: `public/og.png` and `public/og/<slug>.png`. Regenerate with `npm run og` (needs Playwright) after adding or renaming a project.
- Icons: `public/favicon*`, `public/apple-touch-icon.png`

## Medium posts

`npm run build` runs `scripts/fetch-medium.mjs` first. It pulls the feed from `medium.com/feed/@msahalkc` and writes `src/data/medium.json`. If Medium can't be reached, the committed file is kept and the build carries on.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm test
npm run lint
npm run build     # fetches Medium posts, builds to dist/, then writes per-project preview pages
```
