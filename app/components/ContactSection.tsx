"use client";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-cta">
          <h2>
            Let&apos;s build smarter financial operations together.
          </h2>
          <div className="contact-cta-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.9965 12 12.9965C11.6357 12.9965 11.2787 12.8934 10.97 12.7L2 7"/>
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Email:</div>
                <div className="contact-info-value">info@ecoplanet.in</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Phone:</div>
                <div className="contact-info-value">+91 98765 43210</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Address:</div>
                <div className="contact-info-value">New Delhi, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3>Get In Touch</h3>
          <p>Drop your details and our team will connect with a solution tailored for your institution.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="First Name" id="firstName" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" id="lastName" />
              </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" id="email" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" id="phone" />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about your financial operations needs..." id="message" rows={5}></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
