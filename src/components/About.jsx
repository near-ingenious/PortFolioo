import useReveal from "../hooks/useReveal";
import { SectionLabel, SectionHeading } from "./UI";

const STATS = [
  { icon: "🔬", label: "Publications", value: "7+" },
  { icon: "🏆", label: "Award", value: "Best Poster" },
  { icon: "🌐", label: "Languages", value: "5" },
  { icon: "🎓", label: "Graduating", value: "Apr 2026" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: 64, alignItems: "center",
      }}>
        <div>
          <SectionLabel>About Me</SectionLabel>
          <SectionHeading>Bridging intelligence<br />& creativity</SectionHeading>
          <p style={{ color: "var(--warm-gray)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 20 }}>
            I'm a final-year Computer Science & Engineering undergraduate at Metropolitan University, Sylhet —
            passionate about Machine Learning, Multimodal AI, and Human-Centered AI design.
          </p>
          <p style={{ color: "var(--warm-gray)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 20 }}>
            Currently working as an Intern ML Engineer at <strong style={{ color: "var(--text)" }}>Fringecore</strong>,
            my research focuses on zero-shot multimodal frameworks for mental health diagnostics — honored with the{" "}
            <strong style={{ color: "var(--accent)" }}>Best Presenter Award at ICERIE 2025</strong>.
          </p>
          <p style={{ color: "var(--warm-gray)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Beyond AI, I have growing interests in Data Science, Blockchain Technology, and Frontend Development.
            When not training models, I'm probably eating cheesecake. 🍰
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {STATS.map(stat => (
            <div key={stat.label} className="card-hover" style={{
              padding: "28px 20px", background: "var(--cream)",
              borderRadius: 12, border: "1px solid var(--stone)", textAlign: "center",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{stat.icon}</div>
              <div className="font-display" style={{ fontSize: "1.7rem", fontWeight: 600, color: "var(--charcoal)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--warm-gray)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
