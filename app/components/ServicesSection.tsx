import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "LSP Services",
      desc: "Technology-enabled support for lending institutions across customer acquisition, onboarding, documentation, process coordination, servicing, portfolio support and collection-related activities.",
      ctaText: "Explore LSP Services",
      ctaLink: "/lsp-services",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
          <path d="M12 22V12"/>
          <path d="M9 12H15"/>
          <circle cx="12" cy="8" r="2"/>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Financial Advisory",
      desc: "Strategic financial advisory covering funding, debt structuring, lending strategy, business growth and financial partnerships.",
      ctaText: "Explore Advisory",
      ctaLink: "/financial-advisory",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      num: "03",
      title: "Fintech Partnerships",
      desc: "Building strategic partnerships between financial institutions, fintech companies, technology providers and distribution ecosystems.",
      ctaText: "Explore Partnerships",
      ctaLink: "/fintech-partnerships",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      num: "04",
      title: "Lending & Distribution Support",
      desc: "Helping lending institutions strengthen their customer acquisition, distribution and operational capabilities through structured and technology-enabled processes.",
      ctaText: "Learn More",
      ctaLink: "/lending-partnerships",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="inner-badge">What We Do</span>
          <h2 className="services-heading" style={{ marginTop: "0.5rem" }}>
            OUR CORE SERVICES
          </h2>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {services.map((service, i) => (
            <div key={i} className="service-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "left", padding: "2rem" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div className="service-card-icon">{service.icon}</div>
                  <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--green-500)", opacity: 0.8 }}>
                    {service.num}
                  </span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{service.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, marginBottom: "1.5rem" }}>{service.desc}</p>
              </div>
              <div>
                <Link
                  href={service.ctaLink}
                  className="btn-secondary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}
                >
                  {service.ctaText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
