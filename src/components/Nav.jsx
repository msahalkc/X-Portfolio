import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../data/content";

const Nav = () => {
  const onHome = useLocation().pathname === "/";

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand note" to="/" aria-label={`${site.name}, home`}>
          Sahal
        </Link>
        <nav aria-label="Sections">
          {nav.map((item) => (
            <a key={item.id} href={onHome ? `#${item.id}` : `/#${item.id}`} className={item.keep ? "keep" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
