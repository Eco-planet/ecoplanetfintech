import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ServicesSection from "./components/ServicesSection";
import ApproachSection from "./components/ApproachSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <HeroSection />
        <div className="section-divider" />

        {/* SECTION — WHO WE ARE */}
        <WhoWeAreSection />

        {/* SECTION — OUR CORE SERVICES */}
        <ServicesSection />

        {/* SECTION — OUR APPROACH */}
        <ApproachSection />

        {/* SECTION — WHY ECOPLANET */}
        <WhyChooseUsSection />

        {/* CTA BANNER */}
        <BannerSection />

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
