import useReveal from "../hooks/useReveal";
import { publications } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

export default function Publications() {
  const ref = useReveal();
  return (
    <section id="publications" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Research</SectionLabel>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: 16 }}>
          <SectionHeading>Publications</SectionHeading>
          <a href="https://scholar.google.com/citations?user=vggrIGEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid var(--accent)", paddingBottom: 2 }}>
            Google Scholar ↗
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {publications.map((pub, i) => (
            <div key={i} className="card-hover" style={{
              background: "var(--cream)", border: "1px solid var(--stone)",
              borderRadius: 14, padding: "28px 28px", borderLeft: "4px solid var(--accent)",
            }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                <span className="tag" style={{ background: "white" }}>{pub.status}</span>
                <span className="tag" style={{ background: "white" }}>{pub.year}</span>
                {pub.award && (
                  <span className="award-badge">{pub.award}</span>
                )}
              </div>

              <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.4, marginBottom: 8 }}>
                {pub.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 600, marginBottom: 6 }}>{pub.venue}</p>
              {pub.org && <p style={{ fontSize: "0.8rem", color: "var(--warm-gray)", marginBottom: 10 }}>{pub.org}</p>}
              <p style={{ fontSize: "0.85rem", color: "var(--warm-gray)", lineHeight: 1.7 }}>{pub.description}</p>
              {pub.coauthor && (
                <p style={{ fontSize: "0.78rem", color: "var(--warm-gray)", marginTop: 12, fontStyle: "italic" }}>{pub.coauthor}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
