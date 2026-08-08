import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contact Us | EcoPlanet Fintech Pvt Ltd",
  description: "Get in touch with EcoPlanet Fintech. Our team is ready to help your NBFC or fintech company with tailored financial infrastructure solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page inner-page--no-pad">
        <section className="inner-hero inner-hero--center" style={{ paddingBottom: "2rem" }}>
          <span className="inner-badge">Contact Us</span>
          <h1>Let&apos;s <span className="inner-highlight">Connect</span></h1>
          <p className="inner-hero-p">
            Reach out to our team and we&apos;ll tailor the right fintech solution for your NBFC or financial institution — quickly and compliantly.
          </p>
          {/* Contact Info Chips */}
          <div className="contact-page-chips">
            <a href="mailto:support@ecoplanetfintech.com" className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.9965 12 12.9965C11.6357 12.9965 11.2787 12.8934 10.97 12.7L2 7"/>
              </svg>
              support@ecoplanetfintech.com
            </a>
            <a href="tel:+919310260636" className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 9310260636
            </a>
            <div className="contact-page-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Plot No.15/2, Main Najafgarh Rd, Rama Road, New Delhi - 110015
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
