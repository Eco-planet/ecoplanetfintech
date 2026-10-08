import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Solutions | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Integrated financial, operational, technology-enabled and partnership solutions designed around the requirements of modern lending businesses.",
};

export default function ServicesPage() {
  const solutions = [
    {
      num: "01",
      title: "LSP SERVICES",
      desc: "We support lending institutions through structured customer acquisition, onboarding, documentation, process coordination, servicing and other permitted activities.",
      ctaText: "Explore LSP Services",
      ctaLink: "/lsp-services",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
          <path d="M12 22V12"/>
          <path d="M9 12H15"/>
          <circle cx="12" cy="8" r="2"/>
        </svg>
      ),
    },
    {
      num: "02",
      title: "FINANCIAL ADVISORY",
      desc: "We provide strategic financial guidance to businesses seeking better funding structures, financial partnerships and growth strategies.",
      ctaText: "Explore Financial Advisory",
      ctaLink: "/financial-advisory",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      num: "03",
      title: "FINTECH PARTNERSHIPS",
      desc: "We collaborate with fintech companies, NBFCs, financial institutions and technology providers to develop scalable business models.",
      ctaText: "Explore Partnerships",
      ctaLink: "/fintech-partnerships",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      num: "04",
      title: "LENDING DISTRIBUTION SUPPORT",
      desc: "We help lending institutions strengthen their distribution capabilities through structured acquisition, process and operational support.",
      ctaText: "Explore Distribution",
      ctaLink: "/lending-partnerships",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
  ];

  const techOperationsItems = [
    "Customer onboarding",
    "Data capture",
    "Documentation",
    "Process tracking",
    "MIS",
    "Communication",
    "Portfolio servicing",
    "Operational monitoring",
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Our Solutions</span>
          <h1>
            Integrated Financial <span className="inner-highlight">Services Solutions</span>
          </h1>
          <p className="inner-hero-p">
            EcoPlanet provides a combination of financial, operational, technology-enabled and partnership solutions designed around the requirements of modern lending businesses.
          </p>
        </section>

        {/* 4 CORE SOLUTIONS GRID */}
        <section className="services-page-section">
          <div className="services-page-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            {solutions.map((s, i) => (
              <div key={i} className="service-page-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div className="service-page-icon">{s.icon}</div>
                    <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--green-600)" }}>
                      {s.num}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b" }}>{s.desc}</p>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link
                    href={s.ctaLink}
                    className="btn-secondary"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}
                  >
                    {s.ctaText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 05 — TECHNOLOGY-ENABLED OPERATIONS */}
          <div
            style={{
              marginTop: "3.5rem",
              background: "white",
              borderRadius: "24px",
              padding: "3rem",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--green-600)" }}>
                05
              </span>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--green-950)" }}>
                TECHNOLOGY-ENABLED OPERATIONS
              </h3>
            </div>
            <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              We use technology and structured workflows to improve:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {techOperationsItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.9rem 1.2rem",
                    borderRadius: "14px",
                    background: "rgba(16, 185, 129, 0.07)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--green-950)"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="inner-cta">
          <h2>Partner With EcoPlanet Today</h2>
          <p>Let&apos;s build scalable, technology-driven financial solutions for your business.</p>
          <Link href="/contact" className="inner-cta-btn">Talk to EcoPlanet</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
