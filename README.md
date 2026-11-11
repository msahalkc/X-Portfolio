# msahalkc.com

Personal site of Muhammed Sahal K C: a minimal, blueprint-style single page that doubles as a résumé.

## Sections

Hero → Building (Asset Build, ExtenD case studies) → Earlier work → Experience → Writing (Medium) → About → Contact. Unknown paths show a 404 page with a button back home.

## Stack

- Vite 5 + React 18, react-router-dom 6
- Plain CSS with theme tokens (`src/styles/global.css`), light and dark themes
- Geist and Geist Mono from Google Fonts; Brittany Signature (local) for the signature
- Jest for unit tests
- Netlify hosting, Umami analytics

## Editing content

- Page copy: `src/data/content.jsx`
- Project screenshots: `public/projects/`
- Social preview and icons: `public/og.png`, `public/favicon*`, `public/apple-touch-icon.png`

## Medium posts

`npm run build` runs `scripts/fetch-medium.mjs` first. It pulls the feed from `medium.com/feed/@msahalkc` and writes `src/data/medium.json`. If Medium can't be reached, the committed file is kept and the build carries on.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm test
npm run lint
npm run build     # fetches Medium posts, then builds to dist/
```
