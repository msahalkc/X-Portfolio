import { site } from "../data/content";

const Footer = () => (
  <footer>
    <div className="wrap">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span className="note sig" aria-hidden="true">
        Sahal
      </span>
    </div>
  </footer>
);

export default Footer;
