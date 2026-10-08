import { personJsonLd } from "./schema";

export const metadata = {
  title: "Mateo Morrison Jr — Founder, Investor, Builder",
  description:
    "Official biography of Mateo Morrison Jr: founder and investor building at the intersection of artificial intelligence, quantitative finance, and cybersecurity. Startup studio scaling emerging-market fintech since 2020.",
  keywords:
    "Mateo Morrison Jr, Mateo Morrison, Morrison Jr, founder, investor, startup studio, fintech, artificial intelligence, quantitative finance, cybersecurity, emerging markets",
  authors: [{ name: "Mateo Morrison Jr" }],
  robots: "index, follow",
  openGraph: {
    title: "Mateo Morrison Jr — Founder, Investor, Builder",
    description:
      "Building companies at the intersection of AI, quantitative finance and cybersecurity. Startup studio focused on emerging markets since 2020.",
    url: "https://www.morrisonjr.com/mateo",
    siteName: "Morrison Jr",
    images: [{ url: "/logo.jpg", width: 120, height: 120, alt: "Morrison Jr Logo" }],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Mateo Morrison Jr — Founder, Investor, Builder",
    description:
      "Building companies at the intersection of AI, quantitative finance and cybersecurity.",
    images: ["/logo.jpg"],
  },
};

export default function MateoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </>
  );
}
