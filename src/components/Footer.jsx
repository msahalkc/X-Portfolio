import { site } from "../data/content";

const Footer = () => (
  <footer>
    <div className="wrap">
      <span className="label">
        © {new Date().getFullYear()} {site.name}
      </span>
    </div>
  </footer>
);

export default Footer;
