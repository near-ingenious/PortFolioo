export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", padding: "40px 24px", textAlign: "center" }}>
      <p className="font-display" style={{ color: "var(--cream)", fontSize: "1.5rem", marginBottom: 8 }}>
        Jarin Alam Prity
      </p>
      <p style={{ color: "var(--warm-gray)", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
        ML Engineer · Academic Researcher · Metropolitan University, Sylhet · 2026
      </p>
      <p style={{ color: "rgba(156,145,137,0.5)", fontSize: "0.72rem", marginTop: 20 }}>
        Built with React
      </p>
    </footer>
  );
}
