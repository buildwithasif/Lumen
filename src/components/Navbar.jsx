import { useState } from "react";
import { navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Main">
        <a className="nav__logo" href="#top" aria-label="Lumen home">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
            </g>
          </svg>
        </a>

        <ul className={`nav__links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M20 20l-4.8-4.8" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Shopping bag">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6a3 3 0 016 0v2" />
            </svg>
          </button>
          <button
            className="icon-btn nav__menu"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
