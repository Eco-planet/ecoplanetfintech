import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <Image
          src="/Logo.png"
          alt="EcoPlanet Fintech Pvt Ltd"
          width={160}
          height={55}
          style={{ height: "50px", width: "auto", objectFit: "contain" }}
        />
      </div>
      <p className="footer-disclaimer">
        EcoPlanet is a financial operations service provider and does not 
        directly offer loans, credit facilities, or financial investment advice. 
        All operational, compliance, and technology solutions are designed to support 
        NBFCs and registered financial institutions. EcoPlanet is not a registered 
        NBFC or bank under RBI regulations. All trademarks and logos used are the 
        property of their respective owners. The information provided on this website 
        is for informational purposes only and should not be considered legal or 
        financial advice. For regulatory guidance or financial decisions, please 
        consult certified professionals or official financial advisors. Use of this 
        website implies your acceptance of our terms, privacy policy, and conditions.
      </p>
    </footer>
  );
}
