import { useState, useEffect, useRef } from "react";
import { skills } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

const OTHER_SKILLS = ["C++", "Java", "SQLite", "MySQL", "NumPy", "GIS", "Blockchain (Interest)", "Data Science", "Frontend Dev"];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          setAnimated(true);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="reveal" style={{ padding: "100px 24px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Technical Skills</SectionLabel>
        <SectionHeading>Tools & Technologies</SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "32px 64px" }}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text)" }}>{skill.name}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--warm-gray)" }}>{skill.level}%</span>
              </div>
              <div style={{ height: 3, background: "var(--stone)", borderRadius: 2 }}>
                <div className="skill-bar-fill" style={{ width: animated ? `${skill.level}%` : "0%" }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid var(--stone)" }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Other Technical Areas</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {OTHER_SKILLS.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
