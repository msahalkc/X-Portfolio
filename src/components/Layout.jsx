import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

// Page chrome shared by the home page, project pages and the 404 page.
const Layout = ({ children }) => (
  <>
    <div className="paper-edge" aria-hidden="true" />
    <Nav />
    <main id="top">{children}</main>
    <Footer />
    <ScrollRestoration />
  </>
);

export default Layout;
