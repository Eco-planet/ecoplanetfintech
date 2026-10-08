export default function ApproachSection() {
  const steps = [
    { num: "01", title: "Identify", desc: "Understand business goals, target segments & credit objectives." },
    { num: "02", title: "Design", desc: "Formulate compliant operating models & digital workflows." },
    { num: "03", title: "Integrate", desc: "Connect technology platforms, APIs & data pipelines." },
    { num: "04", title: "Execute", desc: "Deliver hands-on day-to-day operations & portfolio servicing." },
    { num: "05", title: "Scale", desc: "Expand volumes responsibly while maintaining credit discipline." },
  ];

  return (
    <section className="features-section" id="approach" style={{ padding: "5rem 2rem", background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)" }}>
      <div className="features-container" style={{ maxWidth: "1200px", margin: "0 auto", display: "block" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="inner-badge">Our Approach</span>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.5rem" }}>
            From Strategy to Execution
          </h2>
          <p style={{ maxWidth: "750px", margin: "1rem auto 0", fontSize: "1.05rem", color: "#475569", lineHeight: 1.7 }}>
            EcoPlanet combines financial-sector understanding with technology-enabled execution. We work closely with our partners to understand their business objectives, design appropriate operating models and support execution at scale.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem"
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.04)",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, var(--green-600), var(--green-700))",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  marginBottom: "1.2rem",
                  fontFamily: "Montserrat, sans-serif"
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--green-950)",
                  marginBottom: "0.6rem"
                }}
              >
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
  );
}
