import Image from "next/image";

export default function LeadershipSection() {
  const philosophyValues = [
    "Ownership",
    "Integrity",
    "Speed",
    "Customer focus",
    "Compliance",
    "Innovation",
    "Execution",
  ];

  return (
    <section className="leadership-section" id="leadership" style={{ padding: "5rem 2rem" }}>
      <div className="leadership-container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="inner-badge">Our Leaders</span>
          <h2 className="leadership-heading" style={{ marginTop: "0.5rem" }}>
            Leadership With Purpose
          </h2>
        </div>

        {/* Founder Card */}
        <div className="leadership-founder-card">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "210px",
                height: "250px",
                borderRadius: "22px",
                overflow: "hidden",
                margin: "0 auto 1.5rem",
                boxShadow: "0 12px 32px rgba(6, 78, 59, 0.18)",
                border: "3px solid var(--green-500)",
                position: "relative"
              }}
            >
              <Image
                src="/kusshal-madhogaria.png"
                alt="Kusshal Madhogaria"
                width={260}
                height={310}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%" }}
              />
            </div>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--green-950)", marginBottom: "0.35rem" }}>
              Kusshal Madhogaria
            </h3>
            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--green-600)", marginBottom: "0.6rem", letterSpacing: "0.3px" }}>
              Founder cum Chairman
            </div>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748b", lineHeight: 1.45, padding: "0 0.5rem" }}>
              Entrepreneur | Banking, Fintech &amp; Lending Professional
            </div>
          </div>

          <div>
            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.2rem" }}>
              Kusshal Madhogaria is an entrepreneur with a background in banking, lending, and financial services. Through his work with EcoPlanet Fintech and FinMudra Credit, he focuses on building technology-enabled businesses that make the lending journey simpler, more transparent, and responsive to customer needs.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.2rem" }}>
              His professional experience spans secured and unsecured lending, business development, lending partnerships, and team leadership. He brings a practical understanding of business growth and day-to-day operations, with an emphasis on disciplined credit processes, service quality, and responsible business practices.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.2rem" }}>
              Kusshal&apos;s leadership approach centres on ownership, accountability, and collaboration. He believes that strong financial services businesses are built by capable teams, supported by clear processes and lasting relationships with customers and partners.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, marginBottom: "1.6rem" }}>
              His vision is to combine technology with a human understanding of financial needs—creating sustainable businesses that earn trust and deliver long-term value.
            </p>

            {/* Formula Pill */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.75rem 1.4rem",
                background: "rgba(16, 185, 129, 0.08)",
                borderRadius: "50px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.92rem",
                fontWeight: 700,
                color: "var(--green-900)"
              }}
            >
              <span>Financial Expertise</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Technology</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Partnerships</span>
              <span style={{ color: "var(--lime-500)" }}>+</span>
              <span>Execution</span>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "linear-gradient(135deg, rgba(6, 78, 59, 0.05), rgba(16, 185, 129, 0.08))",
            borderRadius: "24px",
            padding: "3rem",
            border: "1px solid rgba(16, 185, 129, 0.2)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="inner-badge">Guiding Principles</span>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem" }}>
              Leadership Philosophy
            </h3>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--green-700)", marginTop: "0.5rem", fontStyle: "italic" }}>
              &ldquo;Think Long Term. Execute Today.&rdquo;
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem" }}>
            {philosophyValues.map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "14px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--green-950)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
                }}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
