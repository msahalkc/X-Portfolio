import { Link } from "react-router-dom";
import Layout from "./Layout";

const NotFound = () => (
  <Layout>
    <div className="wrap lost">
      <span className="label">Error 404</span>
      <h1>This page doesn&apos;t exist.</h1>
      <p>The link may be old, or the page has moved. Everything I do is on the home page.</p>
      <Link className="home-btn" to="/">
        Go home
      </Link>
    </div>
  </Layout>
);

export default NotFound;
