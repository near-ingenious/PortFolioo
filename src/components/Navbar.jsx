import { useState, useEffect } from "react";

const LINKS = ["About", "Skills", "Experience", "Projects", "Publications", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,248,245,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--stone)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span className="font-display" style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--charcoal)", letterSpacing: "-0.01em" }}>JAP</span>
          <span style={{ color: "var(--accent)", fontSize: "1.3rem" }}>.</span>
        </a>

        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: "var(--charcoal)", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "var(--charcoal)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "var(--charcoal)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link"
            style={{ fontSize: "1rem" }}
            onClick={() => setMenuOpen(false)}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
