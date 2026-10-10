import { navLinks } from "../data/portfolio";

const Header = () => (
  <header>
    <nav className="wrap">
      <a className="brand" href="#home">
        Mark<span>Soro</span>
      </a>
      <div className="links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
