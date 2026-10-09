import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Careers | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Build the future of financial services with us. At EcoPlanet, we believe great businesses are built by people who take ownership.",
};

export default function CareersPage() {
  const traits = [
    {
      title: "Curious",
      desc: "Always willing to learn.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
    },
    {
      title: "Accountable",
      desc: "Take ownership of outcomes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 14 14"/>
        </svg>
      ),
    },
    {
      title: "Customer Focused",
      desc: "Understand the importance of trust.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      title: "Entrepreneurial",
      desc: "Think beyond conventional solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
    },
    {
      title: "Collaborative",
      desc: "Believe that great outcomes come from great teams.",
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
      title: "Execution Driven",
      desc: "Turn ideas into action.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
  ];

  const opportunities = [
    "Business Development",
    "Sales",
    "Credit",
    "Operations",
    "Collections",
    "Technology",
    "Finance",
    "Compliance",
    "Human Resources",
    "Analytics",
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Careers</span>
          <h1>
            Build the Future of <span className="inner-highlight">Financial Services With Us</span>
          </h1>
          <p className="inner-hero-p">
            At EcoPlanet, we believe great businesses are built by people who take ownership. We are building a team that combines financial expertise, technology, entrepreneurial thinking and execution.
          </p>
        </section>

        {/* WE LOOK FOR PEOPLE WHO ARE */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Our Culture</span>
            <h2>We Look for People <span className="inner-highlight">Who Are</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {traits.map((t, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{t.icon}</div>
                <h3 style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>{t.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#64748b" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER OPPORTUNITIES */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1050px", margin: "0 auto" }}>
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3.5rem 3rem",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
              textAlign: "center"
            }}
          >
            <span className="inner-badge">Join Our Team</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "0.8rem" }}>
              Career Opportunities
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", marginBottom: "2rem" }}>
              We welcome passionate professionals across disciplines:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
              {opportunities.map((opp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "14px",
                    background: "rgba(16, 185, 129, 0.06)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--green-950)"
                  }}
                >
                  {opp}
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(16, 185, 129, 0.15)", paddingTop: "2rem" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--green-900)", marginBottom: "0.8rem" }}>
                Grow With EcoPlanet
              </h3>
              <p style={{ color: "#475569", marginBottom: "1.5rem", fontSize: "1rem" }}>
                Send your resume and cover letter to our recruitment team at <strong style={{ color: "var(--green-700)" }}>info@ecoplanetfintech.net</strong>
              </p>
              <a
                href="mailto:info@ecoplanetfintech.net?subject=Job%20Application%20-%20EcoPlanet%20Fintech"
                className="inner-cta-btn"
                style={{ background: "var(--green-700)", color: "white" }}
              >
                Send Your CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
