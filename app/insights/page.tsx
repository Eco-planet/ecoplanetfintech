import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Insights | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Insights into the future of financial services. Stay informed about developments shaping lending, fintech, and financial services.",
};

export default function InsightsPage() {
  const categories = [
    {
      title: "Digital Lending",
      desc: "Trends, technologies and developments in digital lending.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      title: "NBFC & Lending Industry",
      desc: "Industry developments and evolving business models.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
          <path d="M12 22V12"/>
          <path d="M9 12H15"/>
        </svg>
      ),
    },
    {
      title: "Fintech",
      desc: "Technology trends transforming financial services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
    },
    {
      title: "Risk & Credit",
      desc: "Perspectives on responsible lending and credit practices.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Regulatory Developments",
      desc: "Updates and commentary on relevant regulatory developments.",
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
      title: "Business & Finance",
      desc: "Strategic perspectives for businesses and financial professionals.",
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
          <span className="inner-badge">Insights</span>
          <h1>
            Insights Into the <span className="inner-highlight">Future of Financial Services</span>
          </h1>
          <p className="inner-hero-p">
            Stay informed about developments shaping lending, fintech and financial services.
          </p>
        </section>

        {/* INSIGHT CATEGORIES */}
        <section className="services-page-section">
          <div className="inner-section-header">
            <span className="inner-badge">Thought Leadership</span>
            <h2>Insight <span className="inner-highlight">Categories</span></h2>
          </div>

          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {categories.map((cat, i) => (
              <div key={i} className="service-page-card" style={{ padding: "2.2rem" }}>
                <div className="service-page-icon">{cat.icon}</div>
                <h3 style={{ fontSize: "1.18rem", marginTop: "0.5rem" }}>{cat.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
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
            <span className="inner-badge">Knowledge Center</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem", marginBottom: "0.8rem" }}>
              Stay Ahead of the Curve
            </h2>
            <p style={{ fontSize: "1.08rem", color: "#475569", lineHeight: 1.8, maxWidth: "650px", margin: "0 auto 2rem" }}>
              Explore our latest insights, industry reports, and strategic perspectives.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
              Read Our Insights
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
