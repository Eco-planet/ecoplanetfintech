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
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "3.5rem 3rem",
            boxShadow: "0 15px 50px rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "3rem",
            alignItems: "center"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "24px",
                overflow: "hidden",
                margin: "0 auto 1.5rem",
                boxShadow: "0 10px 30px rgba(6, 78, 59, 0.15)",
                border: "3px solid var(--green-500)"
              }}
            >
              <Image
                src="/team-member.png"
                alt="Kusshal Madhogaria"
                width={180}
                height={180}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "var(--green-950)" }}>
              Kusshal Madhogaria
            </h3>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-600)", marginTop: "0.25rem" }}>
              Founder Director & CEO
            </div>
          </div>

          <div>
            <p style={{ fontSize: "1.08rem", color: "#334155", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Kusshal Madhogaria brings extensive experience across financial services, lending, business development, distribution, operations and strategic growth.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              His vision for EcoPlanet is to create a technology-enabled financial-services organisation that combines:
            </p>

            {/* Formula Pill */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.8rem 1.4rem",
                background: "rgba(16, 185, 129, 0.08)",
                borderRadius: "50px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--green-900)",
                marginBottom: "1.5rem"
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

            <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8 }}>
              Under his leadership, EcoPlanet aims to build long-term relationships with financial institutions, fintech companies and businesses while creating responsible and scalable financial-service solutions.
            </p>
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
