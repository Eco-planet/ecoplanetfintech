"use client";

export default function ContactSection() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdvtgls0CEzjf7M7OEmXl-SgUscGVys3YF2bbE0DLYbrvH2sQ/viewform";

  return (
    <section className="contact-section" id="contact">
      {/* Ambient background glow effects */}
      <div className="contact-bg-glow glow-1" />
      <div className="contact-bg-glow glow-2" />

      <div className="contact-container">
        <div className="contact-card-hero">
          <div className="contact-badge">
            <span className="pulse-dot"></span>
            GET IN TOUCH
          </div>

          <h2 className="contact-title">
            Ready to Transform Your <br />
            <span className="highlight-text">Financial Operations?</span>
          </h2>

          <p className="contact-description">
            Connect with our team to discuss customized NBFC software, loan management platforms, and fintech solutions tailored for your growth.
          </p>

          {/* Action Button Link to Google Form */}
          <div className="contact-action-box">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-form"
            >
              <div className="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <span>Fill Out Contact Form</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="contact-trust-badges">
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Takes ~1 Minute</span>
            </div>
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>100% Confidential</span>
            </div>
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <span>Instant Team Connect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
