import useReveal from "../hooks/useReveal";
import { education, languages } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "var(--cream)" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 64,
      }}>
        <div>
          <SectionLabel>Academic Background</SectionLabel>
          <SectionHeading>Education</SectionHeading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {languages.map(lang => <span key={lang} className="tag">{lang}</span>)}
            <span style={{ fontSize: "0.75rem", color: "var(--warm-gray)", alignSelf: "center", marginLeft: 4 }}>spoken</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {education.map((edu, i) => (
            <div key={i} className="card-hover" style={{
              background: "white", border: "1px solid var(--stone)",
              borderRadius: 12, padding: "24px 24px",
            }}>
              <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{edu.period}</p>
              <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--charcoal)", marginBottom: 4 }}>{edu.degree}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--warm-gray)", fontWeight: 500 }}>{edu.institution}</p>
              {edu.note && <p style={{ fontSize: "0.78rem", color: "var(--warm-gray)", marginTop: 6, fontStyle: "italic" }}>{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
