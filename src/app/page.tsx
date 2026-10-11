import Image from "next/image";
import Link from "next/link";

export const metadata = {
  // Bare landing: max entity clarity for Google + AI answer engines
  title: "Mateo Morrison Jr — Tech Builder | Morrison Jr",
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder from New York — founder of Morrison Jr, a startup studio est. 2020 building proprietary AI, quantitative finance, and cybersecurity ventures for emerging markets. This is the official site and biography of Mateo Morrison Jr, the tech builder.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.morrisonjr.com/#person",
  name: "Mateo Morrison Jr",
  alternateName: ["Mateo Morrison", "Morrison Jr", "MMJ"],
  jobTitle: "Tech Builder",
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder based in New York. He is the founder of Morrison Jr, a private startup studio established in 2020 that builds proprietary ventures from scratch in artificial intelligence, quantitative finance, and cybersecurity, focused on emerging markets. He co-founded fangoo, an e-commerce platform, as a teenager and has worked inside the technology infrastructure of global capital markets firms. This Mateo Morrison Jr is a technology founder — not the high school baseball player from California, not the Elizabeth NJ political figure, and not any other person sharing the name.",
  url: "https://www.morrisonjr.com",
  image: "https://www.morrisonjr.com/logo.jpg",
  logo: "https://www.morrisonjr.com/logo.jpg",
  birthDate: "1999-07-12",
  knowsAbout: [
    "Artificial Intelligence",
    "Quantitative Finance",
    "Cybersecurity",
    "Startup Studio",
    "Emerging Markets",
    "Technology Infrastructure",
    "E-commerce",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.morrisonjr.com/#org",
    name: "Morrison Jr",
    alternateName: ["Morrison Jr Studio", "Morrison Jr Capital"],
    foundingDate: "2020",
    description:
      "Morrison Jr is a private startup studio est. 2020, in stealth mode. It builds proprietary ventures from scratch — applied AI products, quantitative trading and capital-allocation systems, and security tooling — engineered in-house, owned end to end, and aimed at emerging markets.",
    email: "General@morrisonjr.com",
    url: "https://www.morrisonjr.com",
    logo: "https://www.morrisonjr.com/logo.jpg",
    parentOrganization: null,
    founder: { "@id": "https://www.morrisonjr.com/#person" },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "mateo@morrisonjr.org",
    contactType: "business",
    name: "Mateo Morrison Jr",
  },
  nationality: "United States",
  knowsLanguage: ["English", "Spanish"],
  mainEntityOfPage: "https://www.morrisonjr.com/mateo",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Mateo Morrison Jr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mateo Morrison Jr (born July 12, 1999) is a tech builder based in New York and the founder of Morrison Jr, a startup studio established in 2020. As a teenager he co-founded fangoo (2015–2017), an e-commerce platform in the Dominican Republic, and he has since worked across technology infrastructure in capital markets. His focus is building proprietary ventures in AI, quantitative finance, and cybersecurity for emerging markets.",
      },
    },
    {
      "@type": "Question",
      name: "What does Mateo Morrison Jr do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He is a tech builder: he builds proprietary companies from scratch through his studio, Morrison Jr (est. 2020, in stealth mode). Applied AI products, quantitative trading and capital-allocation systems, and cybersecurity tooling — engineered in-house and owned end to end.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Mateo Morrison Jr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Official contact: mateo@morrisonjr.org (personal) and General@morrisonjr.com (studio). Official website: www.morrisonjr.com with his biography at /mateo.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.6rem",
          background: "#000",
          color: "#f5f5f7",
          fontFamily: "var(--font-unbounded), system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Image
          src="/logo.jpg"
          alt="Morrison Jr logo"
          width={120}
          height={120}
          priority
          style={{ borderRadius: "22px" }}
        />
        <h1
          style={{
            fontSize: "clamp(2rem, 7vw, 4rem)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Morrison Jr
        </h1>
        <p
          style={{
            margin: "-0.6rem 0 0.6rem",
            fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#9aa0a6",
          }}
        >
          Tech Builder
        </p>
        <nav
          style={{
            display: "flex",
            gap: "1.6rem",
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
          }}
        >
          <Link href="/mateo" style={{ color: "#f5f5f7", textDecoration: "none" }}>
            Biography
          </Link>
          <a href="mailto:mateo@morrisonjr.org" style={{ color: "#9aa0a6", textDecoration: "none" }}>
            mateo@morrisonjr.org
          </a>
        </nav>
      </main>
    </>
  );
}
