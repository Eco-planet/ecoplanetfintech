import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Our Brands | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Explore the innovative portfolio of brands under EcoPlanet Fintech Pvt. Ltd. — FinMudra, Vaipar Pragati, qwikcash4u, ashvmegh, and Sanjeevani Ayur Shakti.",
};

const brandsData = [
  {
    id: "finmudra",
    name: "FinMudra",
    category: "Digital Lending & Credit Services",
    tagline: "Simplifying the Lending Journey with Smart Financial Technology",
    desc: "FinMudra is a next-generation credit enablement platform engineered to make borrowing faster, more transparent, and customer-centric. Leveraging cutting-edge technology and deep lending partnerships, FinMudra streamlines loan distribution and digital onboarding for consumers and businesses alike.",
    features: [
      "Instant & Frictionless Digital Journeys",
      "Customer-Centric Smart Underwriting",
      "Multi-Lender Ecosystem Integration",
      "Transparent & Ethical Credit Practices",
    ],
    accent: "var(--green-600)",
    bgBadge: "rgba(16, 185, 129, 0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "vaipar-pragati",
    name: "Vaipar Pragati",
    category: "MSME & Business Growth",
    tagline: "Fueling Indian Enterprises & Small Business Progress",
    desc: "Vaipar Pragati is dedicated to empowering micro, small, and medium enterprises (MSMEs) with accessible financial services, working capital facilitation, and trade growth solutions. We help local businesses modernize, manage liquidity, and scale sustainably across tier-2 and tier-3 markets.",
    features: [
      "Flexible Working Capital Solutions",
      "Merchant & Trade Credit Facilitation",
      "Simplified Documentation & Fast Processing",
      "Dedicated Enterprise Growth Advisory",
    ],
    accent: "var(--green-700)",
    bgBadge: "rgba(5, 150, 105, 0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: "qwikcash4u",
    name: "qwikcash4u",
    category: "Instant Micro-Lending",
    tagline: "Agile, Accessible & On-Demand Short-Term Liquidity",
    desc: "qwikcash4u offers rapid, short-term liquidity and micro-credit solutions powered by automated eligibility assessments and intuitive mobile journeys. Designed for speed and peace of mind, qwikcash4u provides responsible small-ticket financial assistance right when it's needed most.",
    features: [
      "Rapid Real-Time Loan Assessments",
      "100% Digital & Paperless Application",
      "Transparent Pricing with No Hidden Fees",
      "Responsible Credit Guidance",
    ],
    accent: "#0891b2",
    bgBadge: "rgba(8, 145, 178, 0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "ashvmegh",
    name: "ashvmegh",
    category: "Enterprise & Channel Lending",
    tagline: "Powering Scalable Financial Alliances & Institutional Reach",
    desc: "ashvmegh represents our specialized channel distribution and institutional lending arm. Focused on structured co-lending partnerships, expansive multi-tier distribution networks, and robust credit compliance, ashvmegh helps lending institutions expand their market footprint with confidence.",
    features: [
      "Institutional Co-Lending Frameworks",
      "Expansive Offline-to-Online Distribution",
      "Rigorous Risk & Compliance Oversight",
      "Scalable Sourcing & Servicing Operations",
    ],
    accent: "#7c3aed",
    bgBadge: "rgba(124, 58, 237, 0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "sanjeevani-ayur-shakti",
    name: "Sanjeevani Ayur Shakti",
    category: "Holistic Wellness & Ayurvedic Healthcare",
    tagline: "Nurturing Vitality, Purity & Traditional Ayurvedic Wellness",
    desc: "Sanjeevani Ayur Shakti brings timeless Ayurvedic wisdom and authentic holistic remedies into modern lives. Dedicated to natural wellness, preventive healthcare, and community well-being, Sanjeevani Ayur Shakti champions wholesome lifestyle products backed by quality and tradition.",
    features: [
      "Authentic Traditional Herbal Formulations",
      "Quality-Tested Purity & Natural Ingredients",
      "Holistic Wellness & Preventive Care Approach",
      "Sustainable & Responsible Sourcing",
    ],
    accent: "#15803d",
    bgBadge: "rgba(21, 128, 61, 0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO SECTION */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">EcoPlanet Ecosystem</span>
          <h1>
            Our <span className="inner-highlight">Brands</span>
          </h1>
          <p className="inner-hero-p">
            Discover the specialized platforms, digital lending services, MSME growth solutions, and wellness initiatives operating under the EcoPlanet Fintech umbrella.
          </p>

          {/* Quick Nav Anchors */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {brandsData.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                style={{
                  padding: "0.5rem 1.1rem",
                  background: "white",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "20px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "var(--green-900)",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
              >
                {b.name}
              </a>
            ))}
          </div>
        </section>

        {/* BRANDS LIST */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 2rem 5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {brandsData.map((brand, idx) => (
              <div
                key={brand.id}
                id={brand.id}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "3rem",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.8rem",
                  position: "relative",
                  scrollMarginTop: "140px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: brand.bgBadge,
                        color: brand.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                      }}
                    >
                      {brand.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          color: brand.accent,
                        }}
                      >
                        {brand.category}
                      </span>
                      <h2
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "1.85rem",
                          fontWeight: 800,
                          color: "var(--green-950)",
                          margin: "0.2rem 0",
                        }}
                      >
                        {brand.name}
                      </h2>
                    </div>
                  </div>

                  <span
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "var(--green-800)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      padding: "0.4rem 1rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      alignSelf: "flex-start",
                    }}
                  >
                    EcoPlanet Brand #{idx + 1}
                  </span>
                </div>

                <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--green-700)", fontStyle: "italic" }}>
                  &ldquo;{brand.tagline}&rdquo;
                </div>

                <p style={{ fontSize: "1.02rem", color: "#334155", lineHeight: 1.8 }}>
                  {brand.desc}
                </p>

                {/* Features & Key Capabilities */}
                <div
                  style={{
                    background: "rgba(6, 78, 59, 0.02)",
                    borderRadius: "16px",
                    padding: "1.5rem 1.8rem",
                    border: "1px solid rgba(16, 185, 129, 0.12)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "var(--green-950)",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      marginBottom: "1rem",
                    }}
                  >
                    Key Focus & Capabilities
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "0.8rem",
                    }}
                  >
                    {brand.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          fontSize: "0.95rem",
                          color: "#334155",
                          fontWeight: 500,
                        }}
                      >
                        <span style={{ color: "var(--green-500)", fontWeight: 800, fontSize: "1.1rem" }}>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "0.5rem" }}>
                  <Link
                    href="/contact"
                    className="inner-cta-btn"
                    style={{
                      fontSize: "0.92rem",
                      padding: "0.75rem 1.8rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Connect Regarding {brand.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="inner-cta">
          <h2>Partner With EcoPlanet&apos;s Brand Ecosystem</h2>
          <p>
            Whether you are a lending partner, institutional investor, distributor, or business enterprise, we welcome collaborations across our brands.
          </p>
          <Link href="/contact" className="inner-cta-btn">
            Get In Touch Today
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
