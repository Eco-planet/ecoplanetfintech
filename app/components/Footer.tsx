"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <footer className="footer-mystic">
      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            {/* Top Row: Logo Box & Certificate Card (Equal Top Level Start) */}
            <div className="footer-brand-top-row">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-box">
                  <Image
                    src="/logo.png"
                    alt="EcoPlanet Fintech Pvt Ltd"
                    width={280}
                    height={90}
                    style={{
                      height: "75px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>

              {/* ISO Certificate Card (Side-by-Side with Logo, Equal Level Start) */}
              <div className="footer-cert-top-side">
                <div
                  className="footer-cert-doc-card"
                  onClick={() => setIsModalOpen(true)}
                  title="Click to view ISO 9001:2015 Certificate"
                >
                  <Image
                    src="/iso-certificate-thumb.png"
                    alt="ISO 9001:2015 Certificate of Registration - EcoPlanet Fintech Private Limited"
                    width={135}
                    height={190}
                    className="footer-cert-doc-img"
                  />
                  <div className="footer-cert-doc-overlay">
                    <div className="footer-cert-zoom-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline Text (Below Logo & Certificate) */}
            <p className="footer-tagline-text">
              Where Ecology Meets Economy — Powering the Future of Digital Lending through technology, partnerships, distribution, and growth.
            </p>

            {/* Social Icons (Below Tagline) */}
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/ecosystem">Our Ecosystem</Link></li>
              <li><Link href="/why-us">Why Choose Us</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Solutions</h4>
            <ul className="footer-links">
              <li><Link href="/services">Integrated Solutions</Link></li>
              <li><Link href="/lsp-services">LSP Services</Link></li>
              <li><Link href="/financial-advisory">Financial Advisory</Link></li>
              <li><Link href="/fintech-partnerships">Fintech Partnerships</Link></li>
              <li><Link href="/lending-partnerships">Lending & Distribution</Link></li>
              <li><Link href="/digital-lending">Digital Lending Support</Link></li>
              <li><Link href="/for-nbfcs">For NBFCs & Institutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Reach Out</h4>
            <ul className="footer-contact-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.9965 12 12.9965C11.6357 12.9965 11.2787 12.8934 10.97 12.7L2 7" /></svg>
                <a href="mailto:info@ecoplanetfintech.net" style={{ color: "inherit", textDecoration: "none" }}>info@ecoplanetfintech.net</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+919310885673" style={{ color: "inherit", textDecoration: "none" }}>+91 93108 85673</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Plot No. 15/2, Najafgarh Main Road, 2nd Floor, Rama Road, Moti Nagar Industrial Area, New Delhi – 110015</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <a href="https://www.ecoplanetfintech.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>www.ecoplanetfintech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EcoPlanet Fintech Pvt. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/faq">FAQ</Link>
            <span>•</span>
            <Link href="/faq#privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/faq#regulatory-disclaimer">Regulatory Disclaimer</Link>
            <span>•</span>
            <button className="footer-cert-text-link" onClick={() => setIsModalOpen(true)}>
              ISO Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Certificate Modal Lightbox */}
      {isModalOpen && (
        <div className="cert-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-title">
                <span className="cert-modal-badge">ISO 9001:2015 Quality Management System</span>
                <h3>Certificate of Registration — EcoPlanet Fintech Pvt Ltd</h3>
              </div>
              <div className="cert-modal-actions">
                <a
                  href="/iso-certificate.png"
                  download="EcoPlanet-ISO-9001-2015-Certificate.png"
                  className="cert-modal-download-btn"
                  title="Download Certificate"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download</span>
                </a>
                <button
                  className="cert-modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close Certificate Preview"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="cert-modal-body">
              <Image
                src="/iso-certificate.png"
                alt="ISO 9001:2015 Certificate of Registration - EcoPlanet Fintech Private Limited"
                width={1200}
                height={1700}
                className="cert-modal-img"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

