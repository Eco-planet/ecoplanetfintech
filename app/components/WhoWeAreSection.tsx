export default function WhoWeAreSection() {
  const highlights = [
    {
      title: "Technology",
      desc: "Digital-first architecture powering streamlined acquisition and operations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      title: "Distribution",
      desc: "Structured sourcing channels and borrower acquisition networks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
    },
    {
      title: "Processes",
      desc: "Robust onboarding, documentation, and compliance-driven operations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      title: "Partnerships",
      desc: "Strategic alliances across NBFCs, banks, fintechs and businesses.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="stats-section" id="who-we-are" style={{ padding: "5rem 2rem" }}>
      <div className="stats-container" style={{ maxWidth: "1200px" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--lime-400)",
              background: "rgba(255, 255, 255, 0.12)",
              padding: "0.45rem 1.3rem",
              borderRadius: "20px",
              border: "1px solid rgba(163, 230, 53, 0.4)",
              marginBottom: "1rem"
            }}
          >
            Who We Are
          </span>
          <h2
            className="stats-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginTop: "0.5rem",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              maxWidth: "100%"
            }}
          >
            Building Smarter Financial Ecosystems
          </h2>
          <div
            style={{
              maxWidth: "880px",
              margin: "1.5rem auto 0",
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.95)",
              lineHeight: 1.85
            }}
          >
            <p style={{ marginBottom: "1.2rem" }}>
              The financial services industry is evolving rapidly. Customers expect speed, convenience and transparency. Financial institutions need efficient distribution, technology-enabled operations and scalable customer engagement.
            </p>
            <p
              style={{
                marginBottom: "1.2rem",
                fontWeight: 700,
                color: "var(--lime-400)",
                fontSize: "1.2rem",
                textShadow: "0 0 20px rgba(163, 230, 53, 0.3)"
              }}
            >
              EcoPlanet brings these requirements together.
            </p>
            <p style={{ marginBottom: "1.2rem" }}>
              We work with NBFCs, financial institutions, fintech companies, businesses and strategic partners to create scalable financial-service ecosystems.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Our role is to connect technology, distribution, processes and partnerships to help financial institutions grow responsibly.
            </p>
          </div>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: "2rem" }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{
                textAlign: "left",
                padding: "2rem",
                borderRadius: "20px",
                background: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease"
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--green-700)",
                  marginBottom: "1rem"
                }}
              >
                {h.icon}
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--green-950)", marginBottom: "0.5rem", fontFamily: "Montserrat, sans-serif" }}>
                {h.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.65 }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
