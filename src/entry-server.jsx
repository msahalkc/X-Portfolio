// Build-time entry: scripts/prerender.mjs uses this to write static HTML for every page.
import { renderToString } from "react-dom/server";
import Page from "./Page";

export { headFor, sitemapXml } from "./seo/head";
export { pages } from "./seo/pages";

export const render = (page) => renderToString(<Page page={page} />);
