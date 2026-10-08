import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Lending Partnerships | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "EcoPlanet works with NBFCs, financial institutions and lending businesses to create structured partnerships that support responsible growth.",
};

export default function LendingPartnershipsPage() {
  const supportAreas = [
    "Customer acquisition",
    "Distribution",
    "LSP operations",
    "Digital onboarding",
    "Process management",
    "Portfolio servicing",
    "Collection support",
    "MIS and reporting",
    "Technology integration",
    "Business development",
  ];

  const partnershipSteps = [
    {
      title: "Understand",
      desc: "We understand the lender's products, target segment and operating requirements.",
    },
    {
      title: "Structure",
      desc: "We define responsibilities, workflows, technology requirements and commercial arrangements.",
    },
    {
      title: "Integrate",
      desc: "We establish the necessary operational and technology processes.",
    },
    {
      title: "Execute",
      desc: "Our teams support day-to-day execution.",
    },
    {
      title: "Scale",
      desc: "Successful models can be expanded through structured growth.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Lending Partnerships</span>
          <h1>
            Building Stronger <span className="inner-highlight">Lending Partnerships</span>
          </h1>
          <p className="inner-hero-p">
            EcoPlanet works with NBFCs, financial institutions and lending businesses to create structured partnerships that support responsible growth.
          </p>
        </section>

        {/* FOR LENDING INSTITUTIONS */}
        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "3rem",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="inner-badge">Comprehensive Scope</span>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem" }}>
                For Lending Institutions
              </h2>
              <p style={{ color: "#64748b", marginTop: "0.5rem", fontSize: "1rem" }}>
                We can support lending partners across multiple institutional dimensions:
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
              {supportAreas.map((area, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "14px",
                    background: "rgba(16, 185, 129, 0.06)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--green-950)"
                  }}
                >
                  <span style={{ color: "var(--green-600)", fontWeight: 800 }}>•</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP APPROACH */}
        <section style={{ padding: "4rem 2rem", background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="inner-section-header">
              <span className="inner-badge">Structured Roadmap</span>
              <h2>Partnership <span className="inner-highlight">Approach</span></h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {partnershipSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: "2rem 1.5rem",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--green-700)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      marginBottom: "1rem",
                      fontSize: "0.9rem"
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--green-950)", marginBottom: "0.5rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBLE PARTNERSHIP */}
        <section style={{ padding: "4rem 2rem 5rem", maxWidth: "950px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, var(--green-900), var(--green-950))",
              color: "white",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
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
              Governance & Integrity
            </span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: "1.2rem" }}>
              Responsible Partnership
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255, 255, 255, 0.9)", maxWidth: "750px", margin: "0 auto 2rem" }}>
              Every partnership is structured around clearly defined responsibilities, applicable regulatory requirements, customer protection principles and contractual obligations.
            </p>
            <Link href="/contact" className="inner-cta-btn" style={{ background: "white", color: "var(--green-900)" }}>
              Explore a Partnership
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
