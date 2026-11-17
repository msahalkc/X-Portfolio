# Project notes (msahalkc.com)

Quick reference so the code doesn't need re-reading. Update the relevant line when something changes; don't rewrite.

## Layout
- Vite + React single page. Sections in order: Hero → Building → Work (earlier) → Experience → Writing → About → Contact.
- All copy: `src/data/content.jsx` (`site`, `nav`, `products`, `work`, `experience`, `route`).
- Components in `src/components/` are presentational and read from `content.jsx`.
- Styles: `src/styles/global.css` (theme tokens, light/dark).

## Products ("Building" section)
- Rendered by `src/components/Building.jsx` as case studies from `products[]`.
- Each product: `id, label, name, tagline, links[{href,text,accent}], shot{src,alt,caption}, why, what, listLabel, list[], stack`.
- `shot` is required by the component (renders `<img width=1600 height=1000>`); images live in `public/projects/*.webp`.
- Building.jsx has a hard-coded "Heads up" notice: only Asset Build and ExtenD are single-user (Adahly and the extension are public).
- Current products, in order: Asset Build (assetbuild.in), ExtenD (extend.msahalkc.com), Adahly (adahly.com), Simple Header Editor (Chrome extension).
- Section title: "Tools I wished existed" (echoes the hero line).

## Product names also appear in
- `index.html` meta description, og:description, twitter:description.
- `src/components/About.jsx` second paragraph.
- `README.md` "Sections" line.

## Earlier work
- `work[]` in content.jsx: `{when, name, badge?, desc, links[]}`.

## Build / checks
- `npm run dev`, `npm test` (Jest), `npm run lint`, `npm run build` (fetches Medium first; falls back to committed `src/data/medium.json`).
- Hosted on Netlify.

## Wording rules
- Never name competing apps or the header extension that was removed from the Chrome Web Store.
