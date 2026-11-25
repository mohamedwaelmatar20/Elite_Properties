import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ep-navbar ${
          scrolled ? "scrolled" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
            <img src={logo} alt="Elite Properties logo" width="42" height="42" />
            <span className="ep-brand">
              Elite <span>Properties</span>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className="nav-link"
                    href={link.href}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a className="btn btn-gold" href="#contact">
                  Book a Visit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}