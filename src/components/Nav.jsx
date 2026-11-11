import { nav, site } from "../data/content";
import ThemeToggle from "./ThemeToggle";

const Nav = () => (
  <header className="nav">
    <div className="wrap">
      <a className="brand" href="/" aria-label={`${site.name}, home`}>
        <span>{site.short}</span>
      </a>
      <nav aria-label="Sections">
        {nav.map((item) => (
          <a key={item.href} href={`/${item.href}`} className={item.keep ? "keep" : undefined}>
            {item.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  </header>
);

export default Nav;
