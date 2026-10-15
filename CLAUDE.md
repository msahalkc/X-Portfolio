# Project notes (for Claude)

Read this instead of re-scanning the repo. Update the relevant section in place when something changes — don't rewrite the file.

## Stack
- Vite 5 + React 18 (JSX, no TS), react-router-dom 6 (`createBrowserRouter` in `src/main.jsx`).
- Tailwind 3 + NextUI 2 (`darkMode: "class"`), framer-motion 11.
- Tests: Jest + jsdom + babel (`npm test`), tests live in `src/__tests__/`.
- Deploy: Netlify (`netlify.toml`). Analytics: Umami script in `index.html`.

## Structure
- `src/main.jsx` — routes: `/` (Navbar + App), `/dns-lookup-tools` (ToolsLayout), `/lab/poster-wall` (prototype, no Navbar), `*` NotFound.
- `src/App.jsx` — single page: Landing → Works → Experience → Blog → About → Contact.
- `src/components/Landing.jsx` = MainText (hero title) + SubTexts (bio + CTA) + RoundedRectangle (blue grid pill + `assets/photo.webp`).
- `src/components/Experience.jsx` — experience data is hard-coded inline (array `experiences`).
- `src/components/Tools/*` — DNS/network tools, API in `Tools/api.js`.
- `src/lab/` — experiments not wired into `/`.

## Design tokens
- Colors (tailwind): `blueee-500 #016cf0` (light accent), `emerald-500 #14bd66` (dark accent), `blaq-1000 #0a0a0a`, `graay-500` (note: missing `#`, bug).
- Fonts: Bebas Neue (display), Urbanist (body), Kanit (navbar name), BrittanySignature (`.Brittany`, script, `src/fonts`).
- Theme: `ThemeContext` toggles `html.dark` + localStorage `theme`.

## Owner context (Muhammed Sahal K C)
- From Kannur → college at MES College of Engineering, Kuttippuram (MESCE).
- Started as graphic designer (brand: "KC Designs") → NSS, IEDC MESCE (CTO 2023–24), IEEE, IEEE Malabar Hub.
- Freelance designer 2021–24, AKS (remote designer) 2023–24, Tecnavis React intern 2024.
- FantaCode, Kozhikode: SDE since June 2024, promoted to SDE 2 Sept 2026. Does design + dev.
- Side project: assetbuild.in — personal finance OS.

## Redesign direction (in progress)
- Chosen concept: **Poster Wall** — hero is a laterite wall layered with his posters; peel layers back in time (newest → NSS → bare Kannur wall).
- Prototype: `src/lab/posterwall/` (geometry.js is pure + tested). Posters are CSS stand-ins until real poster files are provided.

## Known issues
- Hero portrait overlaps "What do I do?" paragraph at 1440px width.
- README mentions CRA/Bootstrap/port 3000 — outdated.

## Screenshots
- Dev: `npx vite --port 5173`. Playwright needs `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome`.
