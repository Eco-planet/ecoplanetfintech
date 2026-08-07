import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Automation",
      description:
        "We help fintechs and NBFCs simplify operations with automation, compliance frameworks, and secure infrastructure — so you can focus on growth.",
    },
    {
      title: "Compliance",
      description:
        "Stay audit-ready and future-proof with RBI-aligned compliance protocols, automated checks, and consistent regulatory documentation.",
    },
    {
      title: "Operational Optimization",
      description:
        "Reduce loan turnaround times with real-time tracking, smarter workflows, and better team coordination — driving borrower satisfaction.",
    },
    {
      title: "Risk Management",
      description:
        "Advanced credit risk analytics, fraud detection, and portfolio monitoring to safeguard your lending operations and minimize NPAs.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-image">
          <Image
            src="/feature-realistic-man.png"
            alt="Financial technology operations"
            width={600}
            height={700}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
