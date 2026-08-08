import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Services | EcoPlanet Fintech Pvt Ltd",
  description: "Explore EcoPlanet's full suite of NBFC and fintech services — from Lending-as-a-Service to Compliance Automation and Loan Management Platforms.",
};

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
        <path d="M12 22V12"/><path d="M9 12H15"/>
        <circle cx="12" cy="8" r="2"/>
      </svg>
    ),
    title: "Lending-as-a-Service (LaaS)",
    desc: "End-to-end loan origination, underwriting, disbursement, and repayment infrastructure delivered as a fully managed service. Plug-and-play for NBFCs and MFIs looking to launch fast.",
    tags: ["Loan Origination", "Underwriting", "Disbursement", "Repayment"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Short-Term Yield Program (STYP) / Capital-In-Lending Program (CLP)",
    desc: "Structured short-term investment programs enabling institutional and retail capital to participate in lending pools — with defined yields, transparent risk, and RBI-compliant structures.",
    tags: ["Investment Pools", "Yield Management", "Capital Deployment"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12L11 14L15 10"/>
      </svg>
    ),
    title: "Compliance & Regulatory Automation",
    desc: "Stay ahead of RBI, SEBI, and MCA regulations with automated compliance workflows, audit-ready documentation, and real-time regulatory change tracking integrated into your systems.",
    tags: ["RBI Compliance", "Audit Trails", "Regulatory Reporting", "KYC/AML"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
        <polyline points="7.5 19.79 7.5 14.6 3 12"/>
        <polyline points="21 12 16.5 14.6 16.5 19.79"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Loan Management & Collections Platform",
    desc: "A comprehensive SaaS-based loan lifecycle management platform — from application to closure — with built-in collections, borrower communication, and NPA management tools.",
    tags: ["Loan Lifecycle", "Collections", "NPA Management", "Borrower Portal"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "NBFC Technology Consulting",
    desc: "Strategic technology advisory for NBFCs — from digital transformation roadmaps and core system selection to vendor management and regulatory tech stack optimization.",
    tags: ["Tech Advisory", "Digital Transformation", "Vendor Management"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "Credit Risk & Analytics Platform",
    desc: "AI-powered credit scoring, bureau integration, fraud detection, and portfolio risk dashboards — giving lenders the data intelligence to make faster, safer credit decisions.",
    tags: ["Credit Scoring", "Bureau Integration", "Fraud Detection", "Analytics"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* Hero */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Our Services</span>
          <h1>Built for <span className="inner-highlight">Speed, Compliance & Scale</span></h1>
          <p className="inner-hero-p">
            From loan origination to regulatory automation — EcoPlanet delivers a comprehensive fintech stack purpose-built for India&apos;s NBFC ecosystem.
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-page-section">
          <div className="services-page-grid">
            {services.map((s, i) => (
              <div key={i} className="service-page-card">
                <div className="service-page-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="inner-cta">
          <h2>Interested in Our Services?</h2>
          <p>Talk to our team and discover how EcoPlanet can transform your financial operations.</p>
          <a href="/contact" className="inner-cta-btn">Contact Us Today</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
