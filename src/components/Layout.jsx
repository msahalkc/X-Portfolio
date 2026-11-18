import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

// Page chrome shared by the home page, project pages and the 404 page.
// .spiral is the notebook binding down the left edge (wide screens only).
const Layout = ({ children }) => (
  <div className="page">
    <div className="paper-edge" aria-hidden="true" />
    <div className="spiral" aria-hidden="true" />
    <Nav />
    <main id="top">{children}</main>
    <Footer />
    <ScrollRestoration />
  </div>
);

export default Layout;
