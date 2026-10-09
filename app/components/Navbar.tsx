"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brands = [
    { href: "/brands#finmudra", name: "FinMudra", desc: "Digital Lending & Credit Services" },
    { href: "/brands#vaipar-pragati", name: "Vaipar Pragati", desc: "MSME & Business Growth" },
    { href: "/brands#qwikcash4u", name: "qwikcash4u", desc: "Instant Micro-Lending" },
    { href: "/brands#ashvmegh", name: "ashvmegh", desc: "Enterprise & Channel Lending" },
    { href: "/brands#sanjeevani-ayur-shakti", name: "Sanjeevani Ayur Shakti", desc: "Holistic Wellness Ecosystem" },
  ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Solutions" },
    { href: "/lsp-services", label: "LSP Services" },
    { href: "/ecosystem", label: "Ecosystem" },
    { href: "/brands", label: "Our Brands", isDropdown: true },
    { href: "/why-us", label: "Why EcoPlanet" },
    { href: "/leadership", label: "Leadership" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.png"
            alt="EcoPlanet Fintech Pvt Ltd"
            width={320}
            height={120}
            priority
            className="nav-logo-image"
            style={{
              height: scrolled ? "82px" : "105px",
              width: "auto",
              objectFit: "contain",
              transition: "all 0.3s ease",
            }}
          />
        </Link>

        <ul className="nav-links">
          {links.map((link) => {
            if (link.isDropdown) {
              return (
                <li
                  key={link.href}
                  className={`nav-item-dropdown ${brandsOpen ? "open" : ""}`}
                  onMouseEnter={() => setBrandsOpen(true)}
                  onMouseLeave={() => setBrandsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`nav-dropdown-trigger ${isActive(link.href) ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="dropdown-arrow"
                      width="9"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      style={{
                        transform: brandsOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <div className={`nav-dropdown-menu ${brandsOpen ? "open" : ""}`}>
                    <div className="nav-dropdown-header-tag">ECOPLANET BRANDS</div>
                    {brands.map((b) => (
                      <Link
                        key={b.name}
                        href={b.href}
                        className="nav-dropdown-item"
                        onClick={() => {
                          setBrandsOpen(false);
                          setMobileOpen(false);
                        }}
                      >
                        <span className="nav-dropdown-name">{b.name}</span>
                        <span className="nav-dropdown-desc">{b.desc}</span>
                      </Link>
                    ))}
                    <div className="nav-dropdown-footer">
                      <Link
                        href="/brands"
                        onClick={() => {
                          setBrandsOpen(false);
                          setMobileOpen(false);
                        }}
                      >
                        Explore All Brands →
                      </Link>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? "active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {links.map((link) => {
          if (link.isDropdown) {
            return (
              <div key={link.href} className="mobile-dropdown-group">
                <div className="mobile-dropdown-header">
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? "active" : ""}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className="mobile-toggle-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileBrandsOpen(!mobileBrandsOpen);
                    }}
                    aria-label="Toggle Brands menu"
                  >
                    {mobileBrandsOpen ? "▲" : "▼"}
                  </button>
                </div>
                {mobileBrandsOpen && (
                  <div className="mobile-sublinks">
                    {brands.map((b) => (
                      <Link
                        key={b.name}
                        href={b.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {b.name} <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>— {b.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
