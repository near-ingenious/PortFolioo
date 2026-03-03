import useReveal from "../hooks/useReveal";
import { contacts } from "../data";
import { SectionLabel, SectionHeading } from "./UI";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} className="reveal" style={{ padding: "100px 24px 60px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Get in Touch</SectionLabel>
        <SectionHeading>Contact</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 12 }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-link">
              <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
              <div>
                <p style={{ fontSize: "0.72rem", color: "var(--warm-gray)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</p>
                <p style={{ fontWeight: 500 }}>{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
