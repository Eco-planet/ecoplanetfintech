import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "1.2rem" }}>
          <h2 className="banner-text" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3 }}>
            Let&apos;s Build Better Financial Ecosystems Together
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Whether you are a lending institution looking for a reliable LSP partner or a fintech seeking strategic financial partnerships, EcoPlanet is built to collaborate.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              marginTop: "0.5rem",
              background: "white",
              color: "var(--green-800)",
              fontWeight: 700,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
            }}
          >
            Talk to EcoPlanet
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="banner-image">
          <Image
            src="/banner-image.png"
            alt="EcoPlanet collaborative financial ecosystem"
            width={700}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
