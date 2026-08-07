export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Scalable Technology",
      description:
        "Extensive industry knowledge ensuring unmatched quality and reliability. Our platform scales seamlessly as your lending portfolio grows.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Leveraging advanced technologies to empower your financial institution — from AI-driven credit scoring to real-time loan tracking dashboards.",
    },
    {
      title: "RBI Compliance Ready",
      description:
        "Our deep understanding of RBI regulations ensures you stay compliant with all regulatory requirements, avoiding penalties and reputational risks.",
    },
    {
      title: "Customer-First Approach",
      description:
        "We prioritize your unique business goals, providing tailored solutions and dedicated support to ensure your fintech operations succeed.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        <h2 className="why-heading">WHY CHOOSE ECOPLANET?</h2>
        <div className="why-grid">
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
