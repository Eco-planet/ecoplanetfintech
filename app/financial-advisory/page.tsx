import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Financial Advisory | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Financial thinking. Strategic execution. EcoPlanet provides financial advisory and strategic support to businesses seeking better funding structures, partnerships and growth opportunities.",
};

export default function FinancialAdvisoryPage() {
  const advisoryServices = [
    {
      title: "Funding Strategy",
      desc: "Helping businesses evaluate appropriate funding approaches.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      title: "Debt Advisory",
      desc: "Strategic support for debt requirements and financial structuring.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      title: "Financial Structuring",
      desc: "Helping businesses evaluate financial structures aligned with their objectives.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      title: "Business Growth Advisory",
      desc: "Financial and strategic perspectives to support sustainable expansion.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
    },
    {
      title: "Lending Partnerships",
      desc: "Identifying and structuring relationships with appropriate financial institutions and partners.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: "Distribution Strategy",
      desc: "Advisory on financial-product distribution and operating models.",
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
  ];

  const evalSteps = [
    "Requirement",
    "Financial Position",
    "Funding Options",
    "Structure",
    "Execution",
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Financial Advisory</span>
          <h1>
            Financial Thinking. <span className="inner-highlight">Strategic Execution.</span>
          </h1>
          <p className="inner-hero-p">
            EcoPlanet provides financial advisory and strategic support to businesses seeking better funding structures, financial partnerships and growth opportunities.
          </p>
        </section>

        {/* OUR ADVISORY SERVICES */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Advisory Practice</span>
            <h2>Our Advisory <span className="inner-highlight">Services</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {advisoryServices.map((s, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{s.icon}</div>
                <h3 style={{ fontSize: "1.15rem", marginTop: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR APPROACH */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1050px", margin: "0 auto" }}>
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)"
            }}
          >
            <span className="inner-badge">Evaluation Methodology</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Our Approach
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#334155", fontWeight: 600, marginBottom: "2rem" }}>
              We begin with understanding the business. Then we evaluate:
            </p>

            {/* Pipeline Flow */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "2.5rem"
              }}
            >
              {evalSteps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "16px",
                      padding: "0.9rem 1.4rem",
                      fontWeight: 700,
                      color: "var(--green-950)",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.95rem"
                    }}
                  >
                    {step}
                  </div>
                  {idx < evalSteps.length - 1 && (
                    <span style={{ color: "var(--green-500)", fontWeight: 800, fontSize: "1.2rem" }}>→</span>
                  )}
                </div>
              ))}
            </div>

            <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
              Consult Our Advisory Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
