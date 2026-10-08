"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function FaqLegalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is EcoPlanet Fintech?",
      a: "EcoPlanet Fintech Pvt. Ltd. is a technology-enabled financial-services company providing LSP services, financial advisory, fintech partnerships and lending/distribution support.",
    },
    {
      q: "Does EcoPlanet provide loans directly?",
      a: "EcoPlanet's role depends on the specific service and contractual arrangement. Where EcoPlanet acts as an LSP or service provider for a lending institution, the participating lending institution independently evaluates customers and takes decisions relating to eligibility, pricing, sanction and disbursement.",
    },
    {
      q: "What is an LSP?",
      a: "A Lending Service Provider is an entity that performs specified lending-related functions for a regulated lending institution under an appropriate contractual arrangement and within the applicable regulatory framework.",
    },
    {
      q: "Does EcoPlanet guarantee loan approval?",
      a: "No. Loan approval, pricing, eligibility and disbursement are determined by the relevant lending institution based on its applicable credit policies and assessment.",
    },
    {
      q: "Does EcoPlanet decide loan interest rates?",
      a: "Where EcoPlanet acts as an LSP, lending terms are determined by the relevant lending institution in accordance with its policies and applicable requirements.",
    },
    {
      q: "Who ultimately provides the loan?",
      a: "Where a loan is offered through an EcoPlanet-supported lending arrangement, the relevant participating lending institution provides the loan subject to its own approval and documentation.",
    },
    {
      q: "What services does EcoPlanet provide to lenders?",
      a: "Services may include customer acquisition, onboarding support, documentation coordination, process management, technology-enabled workflows, customer communication, servicing support, collection support, MIS and other permitted activities.",
    },
    {
      q: "Does EcoPlanet work with fintech companies?",
      a: "Yes. EcoPlanet works with fintech companies, technology providers and financial institutions to explore and develop appropriate financial-service partnerships.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <main className="inner-page">
        {/* HERO */}
        <section className="inner-hero inner-hero--center">
          <span className="inner-badge">FAQ & Compliance</span>
          <h1>
            FAQ, Legal & <span className="inner-highlight">Regulatory Information</span>
          </h1>
          <p className="inner-hero-p">
            Transparency, compliance, and regulatory clarity are central to everything we build at EcoPlanet Fintech.
          </p>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section style={{ padding: "2rem 2rem 5rem", maxWidth: "950px", margin: "0 auto" }}>
          <div className="inner-section-header">
            <span className="inner-badge">Common Questions</span>
            <h2>Frequently Asked <span className="inner-highlight">Questions</span></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: "18px",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.03)",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "1.4rem 1.8rem",
                      background: isOpen ? "rgba(16, 185, 129, 0.05)" : "white",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--green-950)"
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: isOpen ? "var(--green-700)" : "rgba(16, 185, 129, 0.12)",
                        color: isOpen ? "white" : "var(--green-700)",
                        flexShrink: 0,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "1.2rem 1.8rem 1.6rem",
                        fontSize: "0.98rem",
                        color: "#475569",
                        lineHeight: 1.75,
                        borderTop: "1px solid rgba(16, 185, 129, 0.1)"
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* REGULATORY & CUSTOMER DISCLAIMER */}
        <section id="regulatory-disclaimer" style={{ padding: "4rem 2rem", background: "white" }}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(6, 78, 59, 0.04), rgba(16, 185, 129, 0.08))",
              borderRadius: "24px",
              padding: "3.5rem 3rem",
              border: "1px solid rgba(16, 185, 129, 0.25)"
            }}
          >
            <span className="inner-badge">Statutory Notice</span>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800,
                color: "var(--green-950)",
                marginTop: "0.5rem",
                marginBottom: "1.5rem"
              }}
            >
              REGULATORY & CUSTOMER DISCLAIMER
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#334155", fontSize: "1rem", lineHeight: 1.8 }}>
              <p>
                EcoPlanet Fintech Pvt. Ltd. may provide technology-enabled financial services, Lending Service Provider services, financial advisory, business development, distribution and operational support services, subject to applicable laws, regulations, contractual arrangements and the nature of the specific engagement.
              </p>
              <p>
                Where EcoPlanet acts as an LSP or service provider to a regulated lending institution, the relevant lending institution remains responsible for applicable lending decisions and other responsibilities assigned to it under the applicable regulatory and contractual framework.
              </p>
              <p>
                Loan eligibility, interest rates, fees, tenure, sanction, documentation and disbursement are subject to the terms, conditions and policies of the relevant lending institution.
              </p>
              <p style={{ fontWeight: 700, color: "var(--green-900)" }}>
                EcoPlanet does not guarantee approval of any financial product.
              </p>
              <p>
                Customers should carefully review all applicable loan documents, including the relevant Key Facts Statement and other disclosures provided by the lending institution, before accepting a financial product.
              </p>
            </div>
          </div>
        </section>

        {/* PRIVACY POLICY */}
        <section id="privacy-policy" style={{ padding: "4rem 2rem 6rem" }}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "white",
              borderRadius: "24px",
              padding: "3.5rem 3rem",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)"
            }}
          >
            <span className="inner-badge">Data Protection</span>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800,
                color: "var(--green-950)",
                marginTop: "0.5rem",
                marginBottom: "1.5rem"
              }}
            >
              PRIVACY POLICY
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", color: "#334155", fontSize: "1rem", lineHeight: 1.8 }}>
              <p>
                EcoPlanet respects the privacy of customers, business partners and visitors to its website.
              </p>
              <p>
                Information collected through the website may be used for legitimate business, service, communication, operational and regulatory purposes, subject to applicable law and the terms of our Privacy Policy.
              </p>
              <p>
                Where customer information is required to be shared with a financial institution or service partner, such sharing will be undertaken in accordance with applicable requirements, contractual arrangements and appropriate customer consent wherever required.
              </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/contact" className="inner-cta-btn" style={{ background: "var(--green-700)", color: "white" }}>
                Contact Privacy Officer
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
