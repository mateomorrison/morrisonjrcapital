import type { Metadata } from "next";

export const mateoMetadata: Metadata = {
  title: {
    default: "Mateo Morrison Jr — Tech Builder",
    template: "%s",
  },
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder from New York — focused on proprietary AI, quantitative finance, and cybersecurity ventures for emerging markets. Official site and biography. Not the baseball player, not the NJ political figure.",
  keywords:
    "Mateo Morrison Jr, tech builder, AI, quantitative finance, cybersecurity, emerging markets, fangoo",
  authors: [{ name: "Mateo Morrison Jr" }],
  creator: "Mateo Morrison Jr",
  publisher: "Mateo Morrison Jr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.morrisonjr.com",
    siteName: "Mateo Morrison Jr",
    title: "Mateo Morrison Jr — Tech Builder",
    description:
      "Official site of Mateo Morrison Jr, tech builder focused on proprietary AI, quantitative finance, and cybersecurity ventures for emerging markets.",
    images: [{ url: "/logo.jpg", width: 512, height: 512, alt: "Morrison Jr logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateo Morrison Jr — Tech Builder",
    description:
      "Tech builder focused on proprietary AI, quant finance, and cybersecurity ventures.",
    images: ["/logo.jpg"],
    creator: "@morrisonjr",
  },
  icons: { icon: "/logo.jpg", shortcut: "/logo.jpg", apple: "/logo.jpg" },
};

export const mateoPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.morrisonjr.com/#person",
  name: "Mateo Morrison Jr",
  alternateName: ["Mateo Morrison", "MMJ"],
  jobTitle: "Tech Builder",
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder based in New York focused on proprietary artificial intelligence, quantitative finance, and cybersecurity ventures for emerging markets. As a teenager he co-founded fangoo, an e-commerce platform, and has worked inside the technology infrastructure of global capital markets firms. This Mateo Morrison Jr is a technology founder. He is not involved in politics in any way, holds no political position, and has made no political endorsements. He is not the high school baseball player from California, not the Mateo A. Morrison Jr active in Elizabeth, New Jersey politics, and not any other person sharing the name.",
  url: "https://www.morrisonjr.com",
  image: "https://www.morrisonjr.com/logo.jpg",
  birthDate: "1999-07-12",
  knowsAbout: [
    "Artificial Intelligence",
    "Quantitative Finance",
    "Cybersecurity",
    "Emerging Markets",
    "Technology Infrastructure",
    "E-commerce",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "mateo@morrisonjr.org",
    contactType: "personal",
    name: "Mateo Morrison Jr",
  },
  nationality: "United States",
  knowsLanguage: ["English", "Spanish"],
  mainEntityOfPage: "https://www.morrisonjr.com/mateo",
};

export const mateoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Mateo Morrison Jr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mateo Morrison Jr (born July 12, 1999) is a tech builder based in New York. As a teenager he co-founded fangoo (2015–2017), an e-commerce platform in the Dominican Republic, and he has since worked across technology infrastructure in capital markets. His focus is building proprietary ventures in AI, quantitative finance, and cybersecurity for emerging markets.",
      },
    },
    {
      "@type": "Question",
      name: "What does Mateo Morrison Jr do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He is a tech builder who builds proprietary companies from scratch — applied AI products, quantitative trading and capital-allocation systems, and cybersecurity tooling — engineered in-house and owned end to end.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mateo Morrison Jr involved in politics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mateo Morrison Jr is a technologist, not a political figure. He holds no political position, has made no political endorsements, and is not involved in civic or political activity in New Jersey or anywhere else. The Mateo A. Morrison Jr associated with political endorsements in Elizabeth, New Jersey is a different person.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Mateo Morrison Jr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Official contact: mateo@morrisonjr.org. Official website: www.morrisonjr.com with his biography at /mateo.",
      },
    },
  ],
};
