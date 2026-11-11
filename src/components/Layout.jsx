import Footer from "./Footer";
import Nav from "./Nav";

// Page chrome shared by the home page and the 404 page.
const Layout = ({ children }) => (
  <>
    <div className="cols" aria-hidden="true">
      <div className="wrap" />
    </div>
    <Nav />
    <main id="top">{children}</main>
    <Footer />
  </>
);

export default Layout;
