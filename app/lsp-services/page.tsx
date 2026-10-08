import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "LSP Services | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "EcoPlanet provides Lending Service Provider solutions to financial institutions seeking to expand distribution while maintaining structured processes, operational discipline and customer-centric execution.",
};

export default function LspServicesPage() {
  const capabilities = [
    {
      title: "Customer Acquisition",
      desc: "Structured customer sourcing and acquisition support through appropriate channels.",
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
      title: "Lead Management",
      desc: "Organised lead capture, qualification, tracking and process management.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
    {
      title: "Customer Onboarding",
      desc: "Technology-enabled assistance throughout the customer onboarding journey.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <polyline points="16 11 18 13 22 9"/>
        </svg>
      ),
    },
    {
      title: "Documentation Coordination",
      desc: "Support for collection and coordination of required information and documents.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      title: "Process Management",
      desc: "Structured coordination between customers, operational teams and lending partners.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
    },
    {
      title: "Customer Communication",
      desc: "Technology-enabled customer communication across relevant stages of the lending journey.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      title: "Portfolio Servicing Support",
      desc: "Operational support for post-disbursement customer servicing, where applicable.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      title: "Collection Support",
      desc: "Technology-enabled and process-driven support for collection activities, strictly within applicable laws, regulations and partner-approved processes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "MIS & Reporting",
      desc: "Structured dashboards and management information to help partners monitor business performance and operational efficiency.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
    },
  ];

  const operatingModelSteps = [
    { title: "Lending Partner", subtitle: "Regulated Institution" },
    { title: "EcoPlanet", subtitle: "LSP Operations Layer" },
    { title: "Technology & Operations", subtitle: "Integrated Platform" },
    { title: "Customer", subtitle: "Borrower Engagement" },
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">LSP Services</span>
          <h1>
            Your Extended <span className="inner-highlight">Lending Operations Partner</span>
          </h1>
          <p className="inner-hero-p">
            EcoPlanet provides Lending Service Provider solutions to financial institutions seeking to expand distribution while maintaining structured processes, operational discipline and customer-centric execution.
          </p>
        </section>

        {/* WHAT IS AN LSP? */}
        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.08))",
              borderRadius: "24px",
              padding: "3rem 2.5rem",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              textAlign: "center"
            }}
          >
            <span className="inner-badge">Overview</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "1rem" }}>
              What is an LSP?
            </h2>
            <p style={{ fontSize: "1.08rem", color: "#334155", lineHeight: 1.8, maxWidth: "800px", margin: "0 auto 1rem" }}>
              A Lending Service Provider supports regulated lending institutions with specified functions related to lending operations, customer acquisition, servicing and other permitted activities under the applicable contractual and regulatory framework.
            </p>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--green-800)" }}>
              EcoPlanet works as a technology-enabled operating partner for such activities.
            </p>
          </div>
        </section>

        {/* OUR LSP CAPABILITIES */}
        <section className="services-page-section" style={{ paddingTop: "1rem" }}>
          <div className="inner-section-header">
            <span className="inner-badge">Capabilities</span>
            <h2>Our LSP <span className="inner-highlight">Capabilities</span></h2>
          </div>
          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {capabilities.map((c, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2rem" }}>
                <div className="service-page-icon">{c.icon}</div>
                <h3 style={{ fontSize: "1.15rem", marginTop: "0.5rem" }}>{c.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LSP OPERATING MODEL */}
        <section style={{ padding: "4rem 2rem 5rem", background: "#f8fafc" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <span className="inner-badge">Operating Architecture</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "1rem" }}>
              LSP Operating Model
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "750px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
              Our objective is to create a seamless operating layer between financial institutions and their customers while maintaining clear accountability and defined responsibilities.
            </p>

            {/* Visual Model Pipeline */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
                alignItems: "center"
              }}
            >
              {operatingModelSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    padding: "2rem 1.5rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--green-100)",
                      color: "var(--green-800)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      margin: "0 auto 1rem",
                      fontSize: "0.9rem"
                    }}
                  >
                    {idx + 1}
                  </div>
                  <h4 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--green-950)", marginBottom: "0.4rem" }}>
                    {step.title}
                  </h4>
                  <div style={{ fontSize: "0.85rem", color: "var(--green-600)", fontWeight: 600 }}>
                    {step.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="inner-cta">
          <h2>Looking for a Reliable LSP Partner?</h2>
          <p>Talk to our team about tailored customer acquisition, onboarding and servicing workflows.</p>
          <Link href="/contact" className="inner-cta-btn">Connect With Us</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
