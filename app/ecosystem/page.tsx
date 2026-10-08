import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Ecosystem | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "One connected financial ecosystem. EcoPlanet operates at the intersection of NBFCs, fintech companies, businesses, distribution partners, and customers.",
};

export default function EcosystemPage() {
  const participants = [
    {
      title: "Financial Institutions",
      desc: "NBFCs and other financial institutions seeking distribution, technology and operational capabilities.",
      tag: "Lending Partners",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
          <path d="M12 22V12"/>
          <path d="M9 12H15"/>
        </svg>
      ),
    },
    {
      title: "Fintech Companies",
      desc: "Technology businesses developing the next generation of financial services.",
      tag: "Tech Innovators",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      title: "Businesses",
      desc: "Companies requiring financial advisory, partnerships and funding solutions.",
      tag: "Enterprises & MSMEs",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      title: "Distribution Partners",
      desc: "Businesses and networks supporting customer acquisition and financial-product distribution.",
      tag: "Sourcing Networks",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
    },
    {
      title: "Customers",
      desc: "Individuals and businesses seeking appropriate financial products from participating financial institutions.",
      tag: "End Borrowers",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
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
          <span className="inner-badge">Our Ecosystem</span>
          <h1>
            One Connected <span className="inner-highlight">Financial Ecosystem</span>
          </h1>
          <p className="inner-hero-p">
            EcoPlanet operates at the intersection of multiple participants in the financial-services ecosystem.
          </p>
        </section>

        {/* THE ECOSYSTEM */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Stakeholders</span>
            <h2>The <span className="inner-highlight">Ecosystem</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {participants.map((p, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                  <div className="service-page-icon">{p.icon}</div>
                  <span className="service-tag">{p.tag}</span>
                </div>
                <h3 style={{ fontSize: "1.18rem", marginTop: "0.2rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR ROLE */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.09))",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              border: "1px solid rgba(16, 185, 129, 0.25)"
            }}
          >
            <span className="inner-badge">Our Role</span>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)",
                fontWeight: 800,
                color: "var(--green-950)",
                marginTop: "0.6rem",
                marginBottom: "1rem"
              }}
            >
              Connect. Enable. Execute. Scale.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: 1.8, maxWidth: "750px", margin: "0 auto 2rem" }}>
              EcoPlanet&apos;s role is to create efficient connections between capabilities, technology, processes and financial-service partners.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
              Join Our Ecosystem
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
