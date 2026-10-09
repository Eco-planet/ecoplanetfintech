import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadershipSection from "../components/LeadershipSection";
import Link from "next/link";

export const metadata = {
  title: "Leadership | EcoPlanet Fintech Pvt. Ltd.",
  description:
    "Leadership With Purpose. Kusshal Madhogaria, Founder cum Chairman of EcoPlanet Fintech Pvt. Ltd.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">Leadership</span>
          <h1>
            Leadership With <span className="inner-highlight">Purpose</span>
          </h1>
          <p className="inner-hero-p">
            Combining financial expertise, technology, partnerships and execution to create responsible and scalable financial ecosystems.
          </p>
        </section>

        {/* Leadership Section Component */}
        <LeadershipSection />

        {/* CTA */}
        <section className="inner-cta">
          <h2>Connect With Our Leadership Team</h2>
          <p>We welcome conversations with financial institutions, fintechs and strategic partners.</p>
          <Link href="/contact" className="inner-cta-btn">Reach Out</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
