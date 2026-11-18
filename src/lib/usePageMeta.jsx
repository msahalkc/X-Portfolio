import { useEffect } from "react";

const SITE = "https://msahalkc.com";
const DEFAULT_TITLE = "Muhammed Sahal K C · Software engineer";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
};

// Keeps the tab title, description and canonical URL in step with the current page.
// index.html holds the home page values; scripts/prerender-meta.mjs bakes each project's values into
// dist/projects/<slug>.html for crawlers that don't run JS.
const usePageMeta = ({ title, description, path = "/", image = "/og.png" }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} · Muhammed Sahal K C` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${SITE}${path}`);
    setMeta('meta[property="og:image"]', "content", `${SITE}${image}`);
    setMeta('link[rel="canonical"]', "href", `${SITE}${path}`);
  }, [title, description, path, image]);
};

export default usePageMeta;
