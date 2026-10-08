import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Why EcoPlanet | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Why Partner With EcoPlanet? Financial services understanding, technology-enabled execution, partnership mindset, operational discipline, and compliance consciousness.",
};

export default function WhyUsPage() {
  const pillars = [
    {
      title: "Financial Services Understanding",
      desc: "We understand lending, distribution, credit processes and financial operations.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
          <line x1="12" y1="6" x2="12" y2="8"/>
          <line x1="12" y1="16" x2="12" y2="18"/>
        </svg>
      ),
    },
    {
      title: "Technology-Enabled Execution",
      desc: "We use technology to improve processes, visibility and scalability.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      title: "Partnership Mindset",
      desc: "We focus on long-term relationships rather than short-term transactions.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: "Operational Discipline",
      desc: "Structured processes help maintain consistency and accountability.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Customer-Centric Approach",
      desc: "We believe technology should simplify the customer experience.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
    {
      title: "Scalable Infrastructure",
      desc: "Our operating approach is designed to support growth.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
    },
    {
      title: "Compliance Consciousness",
      desc: "We recognise that responsible financial services require strong regulatory and process discipline.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
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
          <span className="inner-badge">Why EcoPlanet</span>
          <h1>
            Why Partner With <span className="inner-highlight">EcoPlanet?</span>
          </h1>
          <p className="inner-hero-p">
            Built for the next generation of financial services, connecting domain understanding with disciplined technology-enabled execution.
          </p>
        </section>

        {/* 7 PILLARS GRID */}
        <section className="why-page-section">
          <div className="why-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {pillars.map((p, i) => (
              <div key={i} className="why-page-card" style={{ padding: "2.2rem" }}>
                <div className="why-page-icon" style={{ marginBottom: "1.2rem" }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR DIFFERENCE */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, var(--green-800), var(--green-950))",
              color: "white",
              borderRadius: "24px",
              padding: "4rem 2.5rem",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(6, 78, 59, 0.2)"
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--lime-400)",
                display: "inline-block",
                marginBottom: "0.8rem"
              }}
            >
              Our Difference
            </span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", fontWeight: 800, marginBottom: "1.2rem", lineHeight: 1.3 }}>
              We Don&apos;t Just Connect Businesses. <br />
              <span style={{ color: "var(--lime-400)" }}>We Help Them Execute.</span>
            </h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(255, 255, 255, 0.9)", maxWidth: "750px", margin: "0 auto 2.5rem" }}>
              Our objective is to convert partnerships into measurable operating capabilities and sustainable business outcomes.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "white", color: "var(--green-900)" }}>
              Talk to EcoPlanet
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
