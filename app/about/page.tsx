import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Us | EcoPlanet Fintech Pvt Ltd",
  description: "Learn about EcoPlanet Fintech — our mission, vision, and what drives us to empower NBFCs and financial institutions across India.",
};

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Integrity First",
      description: "Every product, every decision — built on a foundation of transparency, compliance, and trust.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: "Innovation Driven",
      description: "We leverage cutting-edge fintech to build faster, smarter, and more scalable lending infrastructure.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Client-Centric",
      description: "Your growth is our mission. We listen, adapt, and deliver solutions that fit your exact institutional needs.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: "Ecological Balance",
      description: "Where ecology meets economy — we build profitable systems that also honour environmental and social responsibility.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* Hero */}
        <section className="inner-hero">
          <div className="inner-hero-content">
            <span className="inner-badge">About Us</span>
            <h1>
              Powering the Future of <br />
              <span className="inner-highlight">Financial Inclusion</span>
            </h1>
            <p>
              EcoPlanet Fintech Pvt Ltd is an NBFC-focused fintech company dedicated to building next-generation infrastructure for India&apos;s lending ecosystem. We combine regulatory expertise with technology to help financial institutions grow faster, smarter, and more compliantly.
            </p>
          </div>
          <div className="inner-hero-image">
            <Image
              src="/hero-realistic-woman.png"
              alt="EcoPlanet Fintech Professional"
              width={520}
              height={560}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission">
          <div className="mission-grid">
            <div className="mission-card mission-card--green">
              <div className="mission-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To democratize access to intelligent financial infrastructure — enabling NBFCs, MFIs, and fintech startups to operate with speed, compliance, and scale.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become India&apos;s most trusted fintech partner — where ecology meets economy — building a sustainable, compliant, and inclusive financial future.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="inner-section-header">
            <span className="inner-badge">Our Values</span>
            <h2>What Drives <span className="inner-highlight">EcoPlanet</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="inner-cta">
          <h2>Ready to Work With Us?</h2>
          <p>Let&apos;s build the future of your financial operations together.</p>
          <a href="/contact" className="inner-cta-btn">Get In Touch</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
