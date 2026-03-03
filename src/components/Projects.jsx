import useReveal from "../hooks/useReveal";
import { projects } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Portfolio</SectionLabel>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: 16 }}>
          <SectionHeading>Selected Projects</SectionHeading>
          <a href="https://github.com/near-ingenious?tab=repositories" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid var(--accent)", paddingBottom: 2 }}>
            All Repositories ↗
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} className="card-hover" style={{
              background: "white", border: "1px solid var(--stone)",
              borderRadius: 14, padding: "28px 24px",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: 12, lineHeight: 1.4 }}>{p.name}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--warm-gray)", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.82rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600, marginTop: 16 }}>
                  View on GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
