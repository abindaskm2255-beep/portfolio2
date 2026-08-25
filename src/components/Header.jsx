import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#blogs", label: "Blogs" },
  { href: "#webcontent", label: "Web Content" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="logo">
          Abindas K M<em>.</em>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " show" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
