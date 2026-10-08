export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Technology Enabled",
      description:
        "Digital-first processes designed for speed, transparency and scalability.",
    },
    {
      title: "Financial Services Expertise",
      description:
        "Understanding of lending, credit, distribution and financial operations.",
    },
    {
      title: "Partnership Driven",
      description:
        "Long-term relationships with financial institutions and fintech businesses.",
    },
    {
      title: "Execution Focused",
      description:
        "We focus not only on strategy but also on implementation.",
    },
    {
      title: "Scalable Models",
      description:
        "Processes designed to support growth without compromising operational discipline.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="inner-badge">Why EcoPlanet</span>
          <h2 className="why-heading" style={{ marginTop: "0.5rem" }}>
            Built for the Next Generation of Financial Services
          </h2>
        </div>
        <div className="why-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {reasons.map((reason, i) => (
            <div key={i} className="why-card">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
