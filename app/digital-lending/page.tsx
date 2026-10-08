import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Digital Lending Support | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Making lending faster, smarter, and more efficient. EcoPlanet supports lending partners in creating streamlined customer journeys from acquisition through servicing.",
};

export default function DigitalLendingPage() {
  const pillars = [
    {
      title: "Digital Customer Journey",
      desc: "Helping create structured digital journeys for customer acquisition and onboarding.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
    },
    {
      title: "Data & Documentation",
      desc: "Structured collection, validation and coordination of customer information.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
    },
    {
      title: "Workflow Management",
      desc: "Technology-enabled tracking of applications and operational stages.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
    {
      title: "Communication",
      desc: "Timely customer communication across relevant process stages.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      title: "MIS & Analytics",
      desc: "Business and operational information to help management monitor performance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
    },
    {
      title: "Process Optimisation",
      desc: "Identifying bottlenecks and improving operational workflows.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 14 14"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Digital Lending Support</span>
          <h1>
            Making Lending <span className="inner-highlight">Faster. Smarter. More Efficient.</span>
          </h1>
          <p className="inner-hero-p">
            The future of lending depends on efficient digital journeys and disciplined execution. EcoPlanet supports lending partners in creating streamlined customer journeys from acquisition through servicing.
          </p>
        </section>

        {/* OUR DIGITAL LENDING SUPPORT */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Core Pillars</span>
            <h2>Our Digital <span className="inner-highlight">Lending Support</span></h2>
          </div>
          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {pillars.map((p, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{p.icon}</div>
                <h3 style={{ fontSize: "1.15rem", marginTop: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR OBJECTIVE */}
        <section style={{ padding: "4rem 2rem 5rem", background: "white" }}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.09))",
              borderRadius: "24px",
              padding: "3.5rem 2rem",
              border: "1px solid rgba(16, 185, 129, 0.2)"
            }}
          >
            <span className="inner-badge">Our Objective</span>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                fontWeight: 800,
                color: "var(--green-950)",
                marginTop: "0.8rem",
                marginBottom: "1rem"
              }}
            >
              Reduce Friction. Improve Visibility. Increase Efficiency.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.8, maxWidth: "750px", margin: "0 auto" }}>
              We aim to help lending institutions deliver a better customer experience while improving operational control.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="inner-cta">
          <h2>Ready to Optimize Your Digital Lending?</h2>
          <p>Discover how EcoPlanet can streamline customer journeys and operations for your institution.</p>
          <Link href="/contact" className="inner-cta-btn">Discuss With Us</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
