import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content">
          <h2 className="banner-text">
            REAL IMPACT BEGINS WHEN FINANCE MEETS EMPATHY AND EXECUTION.
            AT ECOPLANET, WE POWER BOTH.
          </h2>
        </div>
        <div className="banner-image">
          <Image
            src="/banner-image.png"
            alt="Team collaborating on financial solutions"
            width={700}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
