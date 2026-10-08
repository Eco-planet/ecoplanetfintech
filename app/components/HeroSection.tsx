import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17"/>
              <path d="M2 12L12 17L22 12"/>
            </svg>
            Where Ecology Meets Economy
          </div>
          <h1 className="hero-heading">
            POWERING THE <span className="highlight">FUTURE</span> OF DIGITAL LENDING
          </h1>
          <h2 className="hero-subheading">
            Technology. Partnerships. Distribution. Growth.
          </h2>
          <p className="hero-description">
            EcoPlanet Fintech Pvt. Ltd. is a technology-enabled financial services company providing Lending Service Provider (LSP), fintech partnership, financial advisory and lending support solutions to financial institutions and businesses.
          </p>
          <p className="hero-description" style={{ marginTop: "-0.5rem" }}>
            We help lending partners strengthen customer acquisition, digital journeys, operational processes, portfolio servicing and distribution through technology-enabled solutions.
          </p>
          <div className="hero-cta-group">
            <a href="/contact" className="btn-primary">
              Partner With EcoPlanet
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M12 5L19 12L12 19"/>
              </svg>
            </a>
            <a href="/services" className="btn-secondary">
              Explore Our Solutions
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <Image
            src="/hero-realistic-woman.png"
            alt="Modern fintech and NBFC operations platform"
            width={700}
            height={500}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
