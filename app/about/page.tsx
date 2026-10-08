import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "EcoPlanet Fintech Pvt. Ltd. is a financial-services and fintech company focused on helping financial institutions and businesses build more efficient, technology-enabled and scalable financial ecosystems.",
};

export default function AboutPage() {
  const missionBeneficiaries = [
    "Financial institutions",
    "NBFCs",
    "Fintech companies",
    "Businesses",
    "Distribution partners",
    "End customers",
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe trust is the foundation of financial services.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      title: "Accountability",
      description: "We take ownership of our commitments and outcomes.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 14 14"/>
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      description: "Every process should ultimately create a better customer experience.",
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
      title: "Innovation",
      description: "We continuously look for smarter ways of solving financial-service challenges.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
    },
    {
      title: "Compliance",
      description: "Responsible growth must always operate within applicable regulatory and contractual frameworks.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
    },
    {
      title: "Execution",
      description: "Ideas create value only when converted into effective execution.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero">
          <div className="inner-hero-content">
            <span className="inner-badge">About Us</span>
            <h1>
              About <span className="inner-highlight">EcoPlanet</span>
            </h1>
            <h2 style={{ fontSize: "1.35rem", color: "var(--green-800)", fontWeight: 700, margin: "0.5rem 0 1rem", fontFamily: "Montserrat, sans-serif" }}>
              Where Financial Expertise Meets Technology
            </h2>
            <p>
              EcoPlanet Fintech Pvt. Ltd. is a financial-services and fintech company focused on helping financial institutions and businesses build more efficient, technology-enabled and scalable financial ecosystems.
            </p>
            <p style={{ marginTop: "0.8rem", color: "#64748b" }}>
              Our capabilities span LSP services, financial advisory, fintech partnerships, lending distribution and operational support.
            </p>
          </div>
          <div className="inner-hero-image">
            <Image
              src="/about-hero.jpg"
              alt="EcoPlanet Fintech Digital Lending and Technology"
              width={640}
              height={480}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 15px 40px rgba(6, 78, 59, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.25)"
              }}
              priority
            />
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="about-mission" style={{ padding: "4rem 2rem" }}>
          <div className="mission-grid" style={{ maxWidth: "1100px", margin: "0 auto", gap: "2rem" }}>
            {/* OUR VISION */}
            <div className="mission-card mission-card--green" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="mission-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", opacity: 0.9 }}>
                  Our Vision
                </span>
                <h3 style={{ fontSize: "1.35rem", margin: "0.5rem 0 1rem" }}>
                  To Enable a Smarter, More Accessible and Responsible Financial Ecosystem
                </h3>
                <p>
                  We envision a financial ecosystem where technology simplifies processes, partnerships create greater opportunities and financial institutions can serve customers more efficiently.
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="mission-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="mission-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--green-700)" }}>
                  Our Mission
                </span>
                <h3 style={{ fontSize: "1.35rem", margin: "0.5rem 0 1rem" }}>
                  Creating Scalable Value
                </h3>
                <p style={{ marginBottom: "1rem" }}>
                  To build and operate technology-enabled financial-service solutions that create value for:
                </p>
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  {missionBeneficiaries.map((b, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "#334155", fontWeight: 500 }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--green-500)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PHILOSOPHY */}
        <section style={{ padding: "4rem 2rem", background: "white" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.08))", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
            <span className="inner-badge">Our Philosophy</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.6rem", marginBottom: "1rem" }}>
              Partnership Before Transaction
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.8, marginBottom: "1rem" }}>
              We believe sustainable financial businesses are built through strong partnerships.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8 }}>
              Our objective is not simply to execute a transaction. It is to understand the partner&apos;s business, identify opportunities, create efficient processes and build a relationship capable of delivering long-term value.
            </p>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="about-values">
          <div className="inner-section-header">
            <span className="inner-badge">Our Values</span>
            <h2>Principles That Guide <span className="inner-highlight">EcoPlanet</span></h2>
          </div>
          <div className="values-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {values.map((v, i) => (
              <div key={i} className="value-card" style={{ textAlign: "left", padding: "2rem" }}>
                <div className="value-icon" style={{ margin: "0 0 1rem 0" }}>{v.icon}</div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{v.title}</h4>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="inner-cta">
          <h2>Let&apos;s Build Better Financial Ecosystems Together</h2>
          <p>Whether you are a lending institution or a fintech looking to collaborate, we are built to partner.</p>
          <Link href="/contact" className="inner-cta-btn">Partner With EcoPlanet</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
