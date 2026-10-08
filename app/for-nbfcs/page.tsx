import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For NBFCs & Financial Institutions | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "A reliable growth and distribution partner. EcoPlanet brings quality distribution, efficient processes, technology integration and operational visibility together for NBFCs.",
};

export default function ForNbfcsPage() {
  const benefits = [
    {
      title: "Expand Distribution",
      desc: "Access structured customer acquisition and distribution capabilities.",
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
      title: "Improve Efficiency",
      desc: "Use technology-enabled processes to reduce operational friction.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
    {
      title: "Strengthen Customer Experience",
      desc: "Create smoother and more transparent customer journeys.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      title: "Improve Visibility",
      desc: "MIS and reporting help management monitor business performance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
    },
    {
      title: "Support Scale",
      desc: "Build processes capable of supporting increasing volumes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
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
          <span className="inner-badge">For NBFCs & Financial Institutions</span>
          <h1>
            A Reliable Growth & <span className="inner-highlight">Distribution Partner</span>
          </h1>
          <p className="inner-hero-p">
            Financial institutions need more than customer leads. They need quality distribution, efficient processes, technology integration and operational visibility. EcoPlanet brings these capabilities together.
          </p>
        </section>

        {/* HOW WE CAN HELP */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Our Solutions</span>
            <h2>How We Can <span className="inner-highlight">Help</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {benefits.map((b, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{b.icon}</div>
                <h3 style={{ fontSize: "1.15rem", marginTop: "0.5rem" }}>{b.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNER WITH ECOPLANET */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "950px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.08))",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              border: "1px solid rgba(16, 185, 129, 0.25)"
            }}
          >
            <span className="inner-badge">Collaboration</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Partner With EcoPlanet
            </h2>
            <p style={{ fontSize: "1.08rem", color: "#334155", lineHeight: 1.8, maxWidth: "700px", margin: "0 auto 2rem" }}>
              If your institution is looking for a technology-enabled LSP and financial-services partner, we would like to understand your requirements.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
              Discuss a Partnership
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
