import { createRoot, hydrateRoot } from "react-dom/client";
import Page from "./Page";
import { pageFromPath } from "./seo/pages";
import "./styles/global.css";

const root = document.getElementById("root");
// Pre-rendered pages say which page they are (404.html is served for any unknown path).
const page = root.dataset.page || pageFromPath(window.location.pathname);
const tree = <Page page={page} />;

if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
