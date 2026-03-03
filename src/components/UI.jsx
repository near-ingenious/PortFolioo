export const SectionLabel = ({ children }) => (
  <p className="section-label" style={{ marginBottom: "0.75rem" }}>{children}</p>
);

export const SectionHeading = ({ children }) => (
  <h2 className="font-display" style={{
    fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 500,
    color: "var(--charcoal)", lineHeight: 1.1, marginBottom: "2.5rem",
  }}>
    {children}
  </h2>
);
