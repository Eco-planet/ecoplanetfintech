import Image from "next/image";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Anchal Saxena",
      role: "Founder & CMD",
      details: [
        "17+ years in Finance & Technology",
        "IIT Bombay Alumnus",
        "Built and scaled multiple digital ventures",
      ],
      tags: ["RE/MAX India", "Durha Group"],
    },
    {
      name: "Sanjay Sharma",
      role: "Group CEO",
      details: [
        "25+ Years credit risk expertise, Fintech",
        "Master of Business Administration (MBA), CWA (F)",
        "Built lending frameworks serving millions",
      ],
      tags: ["Bharatpe", "Unity Bank", "ICICI Bank"],
    },
    {
      name: "Vikram Abrol",
      role: "CEO",
      details: [
        "23+ Years of experience",
        "IIM Lucknow Alumni",
        "Led banking transformation programs",
      ],
      tags: ["Citibank", "ICICI Bank", "HSBC"],
    },
    {
      name: "Alok Nautiyal",
      role: "COO",
      details: [
        "18+ Years of Retail Banking & Lending",
        "Lending specialist",
        "Scaled multiple lending brands",
      ],
      tags: ["Retail/Micro MSME Loans", "ICICI Bank"],
    },
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <h2 className="leadership-heading">Leadership</h2>
        <div className="leadership-grid">
          {leaders.map((leader, i) => (
            <div key={i} className="leader-card">
              <div className="leader-avatar">
                <Image
                  src="/team-member.png"
                  alt={leader.name}
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3 className="leader-name">{leader.name}</h3>
              <div className="leader-role">{leader.role}</div>
              <ul className="leader-details">
                {leader.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
              <div className="leader-experience">
                <div className="leader-experience-title">Experience At</div>
                <div className="leader-tags">
                  {leader.tags.map((tag, j) => (
                    <span key={j} className="leader-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
