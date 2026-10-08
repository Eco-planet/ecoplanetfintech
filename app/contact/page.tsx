import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contact Us | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Whether you represent an NBFC, financial institution, fintech company, business or technology organisation, explore how EcoPlanet can work with you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page inner-page--no-pad">
        <section className="inner-hero inner-hero--center" style={{ paddingBottom: "2rem" }}>
          <span className="inner-badge">Contact Us</span>
          <h1>
            Let&apos;s Build Something <span className="inner-highlight">Meaningful Together</span>
          </h1>
          <p className="inner-hero-p">
            Whether you represent an NBFC, financial institution, fintech company, business or technology organisation, we would be happy to explore how EcoPlanet can work with you.
          </p>

          {/* Contact Info Chips */}
          <div className="contact-page-chips">
            <a href="mailto:info@ecoplanetfintech.com" className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.9965 12 12.9965C11.6357 12.9965 11.2787 12.8934 10.97 12.7L2 7"/>
              </svg>
              info@ecoplanetfintech.com
            </a>
            <a href="tel:+919310885673" className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 93108 85673
            </a>
            <a href="https://www.ecoplanetfintech.com" target="_blank" rel="noopener noreferrer" className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              www.ecoplanetfintech.com
            </a>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
