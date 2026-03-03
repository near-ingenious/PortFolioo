import { languages } from "../data";
import profilePic from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      {/* Warm gradient blob */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: "min(480px,60vw)", height: "min(480px,60vw)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(184,115,51,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 80px", position: "relative", width: "100%", display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="fade-up delay-1">
            <span className="section-label">Academic Researcher & ML Engineer</span>
          </div>

          <h1 className="font-display fade-up delay-2" style={{
            fontSize: "clamp(3rem,10vw,7rem)", fontWeight: 500, lineHeight: 1,
            color: "var(--charcoal)", marginTop: 16, marginBottom: 8, letterSpacing: "-0.02em",
          }}>
            Jarin Alam
          </h1>
          <h1 className="font-display fade-up delay-2" style={{
            fontSize: "clamp(3rem,10vw,7rem)", fontWeight: 500, lineHeight: 1,
            color: "var(--accent)", marginBottom: 32, letterSpacing: "-0.02em", fontStyle: "italic",
          }}>
            Prity.
          </h1>

          <p className="fade-up delay-3" style={{ fontSize: "clamp(1rem,2vw,1.2rem)", maxWidth: 520, color: "var(--warm-gray)", lineHeight: 1.7, marginBottom: 20 }}>
            Final-year CSE undergraduate at Metropolitan University, Sylhet — specializing in Machine Learning,
            Multimodal AI, and zero-shot learning. Cheesecake and coding enthusiast.
          </p>

          <p className="fade-up delay-3" style={{ fontSize: "0.9rem", color: "var(--warm-gray)", marginBottom: 40 }}>
            🏆 Best Presenter Award · ICERIE 2025 &nbsp;|&nbsp; 📍 Sylhet, Bangladesh
          </p>

          <div className="fade-up delay-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#publications"
              style={{ padding: "12px 28px", background: "var(--charcoal)", color: "var(--cream)", borderRadius: 8, textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--charcoal)"}
            >
              View Research
            </a>
            <a href="https://scholar.google.com/citations?user=vggrIGEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", border: "1px solid var(--stone)", color: "var(--text)", borderRadius: 8, textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", background: "white", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--stone)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              Google Scholar ↗
            </a>
            <a href="#contact"
              style={{ padding: "12px 28px", border: "1px solid var(--stone)", color: "var(--text)", borderRadius: 8, textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", background: "white", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--stone)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              Get in Touch
            </a>
          </div>

          {/* Language tags */}
          <div className="fade-up delay-5" style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--warm-gray)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Speaks:</span>
            {languages.map(lang => (
              <span key={lang} className="tag">{lang}</span>
            ))}
          </div>
        </div>

        {/* Right — Profile Picture Placeholder */}
        <div className="fade-up delay-3" style={{ flexShrink: 0 }}>
          <div style={{ position: "relative" }}>
            {/* Decorative ring */}
            <div style={{
              position: "absolute", inset: -6,
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              opacity: 0.4,
            }} />
            {/* Decorative outer ring */}
            <div style={{
              position: "absolute", inset: -14,
              borderRadius: "50%",
              border: "1px dashed var(--accent)",
              opacity: 0.2,
            }} />
            <img
              src={profilePic}
              alt="Jarin Alam Prity"
              style={{
                width: "min(280px, 60vw)",
                height: "min(280px, 60vw)",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
                border: "4px solid var(--accent)",
                display: "block",
                boxShadow: "0 20px 60px rgba(184,115,51,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--warm-gray)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--warm-gray), transparent)", animation: "fadeUp 1.5s ease infinite" }} />
      </div>
    </section>
  );
}
