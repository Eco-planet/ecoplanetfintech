import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Fintech Partnerships | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Connecting finance, technology, and opportunity. EcoPlanet collaborates with fintech businesses and technology companies to develop scalable financial-service opportunities.",
};

export default function FintechPartnershipsPage() {
  const partnershipAreas = [
    {
      title: "Digital Lending",
      desc: "Technology and operational support for digital lending ecosystems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      title: "Customer Acquisition",
      desc: "Building structured customer acquisition and distribution models.",
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
      title: "Financial Product Distribution",
      desc: "Supporting distribution of appropriate financial products through permitted channels.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      title: "Technology Integration",
      desc: "Connecting technology platforms with lending and financial-service processes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      title: "Strategic Alliances",
      desc: "Creating partnerships between fintechs, NBFCs and other financial-service participants.",
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
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Fintech Partnerships</span>
          <h1>
            Connecting Finance, <span className="inner-highlight">Technology & Opportunity</span>
          </h1>
          <p className="inner-hero-p">
            Fintech innovation is strongest when technology and financial expertise work together. EcoPlanet collaborates with fintech businesses and technology companies to develop scalable financial-service opportunities.
          </p>
        </section>

        {/* PARTNERSHIP AREAS */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Synergy</span>
            <h2>Partnership <span className="inner-highlight">Areas</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {partnershipAreas.map((p, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{p.icon}</div>
                <h3 style={{ fontSize: "1.15rem", marginTop: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR APPROACH */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1000px", margin: "0 auto" }}>
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
            <span className="inner-badge">Execution Formula</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "1.2rem" }}>
              Our Approach
            </h2>
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.8rem",
                background: "rgba(16, 185, 129, 0.08)",
                borderRadius: "50px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--green-800)",
                marginBottom: "1.5rem"
              }}
            >
              <span>Technology</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Financial Expertise</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Distribution</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Execution</span>
            </div>
            <p style={{ fontSize: "1.08rem", color: "#475569", lineHeight: 1.8, maxWidth: "700px", margin: "0 auto 2rem" }}>
              Together, these capabilities can create stronger and more scalable financial ecosystems.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
              Collaborate With Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
