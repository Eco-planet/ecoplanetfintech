import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Why Choose Us | EcoPlanet Fintech Pvt Ltd",
  description: "Discover why leading NBFCs and fintech companies trust EcoPlanet — from RBI compliance readiness to cutting-edge technology and customer-first support.",
};

const reasons = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "Scalable Technology",
    description: "Our platform scales seamlessly as your lending portfolio grows — from startup NBFCs to large multi-branch operations managing thousands of loans daily.",
    stat: "10x",
    statLabel: "Faster Loan Processing",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Cutting-Edge Technology",
    description: "Leveraging AI-driven credit scoring, real-time loan tracking dashboards, and automated workflows to empower every level of your financial institution.",
    stat: "AI-First",
    statLabel: "Credit Intelligence",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12L11 14L15 10"/>
      </svg>
    ),
    title: "RBI Compliance Ready",
    description: "Our deep understanding of RBI regulations ensures you stay compliant at all times — automated reporting, KYC/AML workflows, and real-time regulatory updates built-in.",
    stat: "100%",
    statLabel: "RBI Compliant Stack",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Customer-First Approach",
    description: "We prioritize your unique business goals, providing tailored solutions, dedicated account management, and 24/7 support to ensure your fintech operations succeed.",
    stat: "03+",
    statLabel: "NBFCs Optimized",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Deep Domain Expertise",
    description: "Years of hands-on NBFC industry experience means we understand your pain points — regulatory pressure, loan quality, borrower management — before you even explain them.",
    stat: "5+",
    statLabel: "Years of Experience",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. Our pricing is straightforward — you know exactly what you pay for and what value you get in return.",
    stat: "Zero",
    statLabel: "Hidden Charges",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* Hero */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Why Choose Us</span>
          <h1>The <span className="inner-highlight">EcoPlanet Advantage</span></h1>
          <p className="inner-hero-p">
            Built by fintech veterans, designed for Indian NBFCs — here&apos;s why leading financial institutions trust EcoPlanet to power their operations.
          </p>
        </section>

        {/* Reasons Grid */}
        <section className="why-page-section">
          <div className="why-page-grid">
            {reasons.map((r, i) => (
              <div key={i} className="why-page-card">
                <div className="why-card-top">
                  <div className="why-page-icon">{r.icon}</div>
                  <div className="why-stat-box">
                    <span className="why-stat">{r.stat}</span>
                    <span className="why-stat-label">{r.statLabel}</span>
                  </div>
                </div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proof / Image + Quote */}
        <section className="why-proof-section">
          <div className="why-proof-content">
            <div className="why-proof-image">
              <Image
                src="/feature-realistic-man.png"
                alt="EcoPlanet Fintech Expert"
                width={440}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
            <div className="why-proof-text">
              <blockquote>
                &ldquo;EcoPlanet helped us go from manual loan processing to a fully automated NBFC operation in under 3 months — compliance, collections, and all.&rdquo;
              </blockquote>
              <p className="why-proof-author">— NBFC Partner, New Delhi</p>
              <a href="/contact" className="inner-cta-btn">Start Your Journey</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
