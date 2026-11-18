import { Link } from "react-router-dom";
import usePageMeta from "../lib/usePageMeta";
import Layout from "./Layout";

const NotFound = () => {
  usePageMeta({ title: "Page not found" });

  return (
    <Layout>
      <div className="wrap lost">
        <span className="note kicker">Error 404</span>
        <h1>This page doesn&apos;t exist.</h1>
        <p>The link may be old, or the page has moved. Everything I do is on the home page.</p>
        <Link className="btn btn-dark" to="/">
          Go home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
