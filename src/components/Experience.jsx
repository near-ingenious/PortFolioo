import useReveal from "../hooks/useReveal";
import { experience } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 64,
      }}>
        <div>
          <SectionLabel>Professional</SectionLabel>
          <SectionHeading>Experience</SectionHeading>
        </div>

        <div>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="timeline-dot" />
                <div className="timeline-line" style={{ height: 80 }} />
              </div>
              <div style={{ paddingBottom: 40 }}>
                <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 500, color: "var(--charcoal)", marginBottom: 4 }}>{exp.role}</h3>
                <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: 6 }}>{exp.org}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--warm-gray)", marginBottom: 10, letterSpacing: "0.04em" }}>{exp.period}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--warm-gray)", lineHeight: 1.7 }}>{exp.desc}</p>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="timeline-dot" style={{ background: "var(--warm-gray)" }} />
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 500, color: "var(--charcoal)", marginBottom: 4 }}>Academic Researcher</h3>
              <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: 6 }}>Independent</p>
              <p style={{ fontSize: "0.8rem", color: "var(--warm-gray)", marginBottom: 10 }}>2023 – Present</p>
              <p style={{ fontSize: "0.88rem", color: "var(--warm-gray)", lineHeight: 1.7 }}>
                Publishing peer-reviewed research on Multimodal AI, zero-shot learning, and AI-driven education.
                Collaborating on book chapters with Taylor & Francis and Springer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
