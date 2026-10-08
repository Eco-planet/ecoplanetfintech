import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EcoPlanet Fintech Pvt. Ltd. — Where Ecology Meets Economy",
  description:
    "EcoPlanet Fintech Pvt. Ltd. is a technology-enabled financial services company providing Lending Service Provider (LSP), fintech partnership, financial advisory and lending support solutions to financial institutions and businesses.",
  keywords:
    "EcoPlanet Fintech, Lending Service Provider, LSP, digital lending, NBFC partnerships, financial advisory, fintech partnerships, lending support, India",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💰</text></svg>" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
