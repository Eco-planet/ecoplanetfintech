"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    natureOfEnquiry: "Looking for an LSP Partner",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdvtgls0CEzjf7M7OEmXl-SgUscGVys3YF2bbE0DLYbrvH2sQ/formResponse";

    const body = new URLSearchParams();
    body.append("entry.1059713369", formData.name);
    body.append("entry.716435057", `${formData.companyName} (${formData.designation})`);
    body.append("entry.748258075", formData.email);
    body.append("entry.421473209", formData.phone);
    body.append("entry.457673263", `[Enquiry: ${formData.natureOfEnquiry}] ${formData.message}`);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      setStatus("success");
      setFormData({
        name: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
        natureOfEnquiry: "Looking for an LSP Partner",
        message: "",
      });
    } catch {
      setStatus("success");
      setFormData({
        name: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
        natureOfEnquiry: "Looking for an LSP Partner",
        message: "",
      });
    }
  };

  return (
    <section className="contact-section" id="contact" style={{ padding: "5rem 2rem" }}>
      {/* Background glowing ambient elements */}
      <div className="contact-bg-glow glow-1" />
      <div className="contact-bg-glow glow-2" />

      <div className="contact-container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3.5rem", alignItems: "start" }}>
        
        {/* Left Column: Office & Business Enquiries Info */}
        <div className="contact-info-col" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <span className="contact-badge">
              <span className="pulse-dot"></span>
              CONTACT US
            </span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--green-950)", marginTop: "0.8rem", lineHeight: 1.25 }}>
              Let&apos;s Build Something <span className="highlight-text">Meaningful Together</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#475569", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Whether you represent an NBFC, financial institution, fintech company, business or technology organisation, we would be happy to explore how EcoPlanet can work with you.
            </p>
          </div>

          {/* Business Enquiries Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--green-900)" }}>
              Business Enquiries
            </h3>

            <div style={{ background: "white", padding: "1.2rem 1.4rem", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontWeight: 700, color: "var(--green-800)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                Looking for an LSP Partner?
              </div>
              <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
                Talk to our team about your lending and distribution requirements.
              </div>
            </div>

            <div style={{ background: "white", padding: "1.2rem 1.4rem", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontWeight: 700, color: "var(--green-800)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                Looking for a Financial Partnership?
              </div>
              <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
                Let&apos;s explore strategic opportunities across ecosystems.
              </div>
            </div>

            <div style={{ background: "white", padding: "1.2rem 1.4rem", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ fontWeight: 700, color: "var(--green-800)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                Looking for Financial Advisory?
              </div>
              <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
                Share your requirement with our advisory team.
              </div>
            </div>
          </div>

          {/* Direct Contact Info Box */}
          <div style={{ background: "linear-gradient(135deg, rgba(6, 78, 59, 0.04), rgba(16, 185, 129, 0.08))", padding: "1.5rem", borderRadius: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
            <h4 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--green-950)", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.92rem" }}>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919310885673" style={{ color: "var(--green-700)", textDecoration: "none" }}>+91 93108 85673</a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@ecoplanetfintech.net" style={{ color: "var(--green-700)", textDecoration: "none" }}>info@ecoplanetfintech.net</a>
              </div>
              <div>
                <strong>Website:</strong>{" "}
                <a href="https://www.ecoplanetfintech.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green-700)", textDecoration: "none" }}>www.ecoplanetfintech.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-wrapper" style={{ margin: 0, width: "100%" }}>
          <div className="contact-form-header">
            <span className="contact-badge">
              <span className="pulse-dot"></span>
              ENQUIRY FORM
            </span>
            <h3>
              Send Us a <span className="highlight-text">Message</span>
            </h3>
            <p>
              Fill out the details below and our team will get in touch promptly.
            </p>
          </div>

          {status === "success" ? (
            <div className="form-success-box">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4>Thank You!</h4>
              <p>Your enquiry has been received successfully. Our team will contact you shortly.</p>
              <button
                type="button"
                className="btn-submit-another"
                onClick={() => setStatus("idle")}
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <div className="input-with-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Company & Designation */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <div className="input-with-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Company / Institution"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="designation">Designation *</label>
                  <div className="input-with-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="e.g. Director, VP, Manager"
                      id="designation"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Email & Mobile */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-with-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.9965 12 12.9965C11.6357 12.9965 11.2787 12.8934 10.97 12.7L2 7"/>
                    </svg>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Mobile Number *</label>
                  <div className="input-with-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <input
                      type="tel"
                      placeholder="+91 93108 85673"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Nature of Enquiry */}
              <div className="form-group">
                <label htmlFor="natureOfEnquiry">Nature of Enquiry *</label>
                <div className="input-with-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                  <select
                    id="natureOfEnquiry"
                    required
                    value={formData.natureOfEnquiry}
                    onChange={(e) => setFormData({ ...formData, natureOfEnquiry: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem 0.85rem 2.8rem",
                      borderRadius: "14px",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      background: "white",
                      fontSize: "0.95rem",
                      color: "var(--foreground)",
                      outline: "none"
                    }}
                  >
                    <option value="Looking for an LSP Partner">Looking for an LSP Partner</option>
                    <option value="Looking for a Financial Partnership">Looking for a Financial Partnership</option>
                    <option value="Looking for Financial Advisory">Looking for Financial Advisory</option>
                    <option value="Lending & Distribution Support">Lending & Distribution Support</option>
                    <option value="General Business Enquiry">General Business Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <div className="input-with-icon textarea-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <textarea
                    placeholder="Tell us about your requirements, institutional objectives, or collaboration ideas..."
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === "submitting"}
              >
                <span>{status === "submitting" ? "Submitting..." : "Submit Enquiry"}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
