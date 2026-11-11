import App from "./App";
import CasePage from "./components/CasePage";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import { products } from "./data/content";

// Picks the page component for a page key from src/seo/pages.js.
const Page = ({ page }) => {
  const product = products.find((p) => p.slug === page);
  let body = <NotFound />;
  if (page === "home") body = <App />;
  else if (product) body = <CasePage product={product} />;
  return <ErrorBoundary>{body}</ErrorBoundary>;
};

export default Page;
