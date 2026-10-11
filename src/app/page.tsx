import Image from "next/image";
import Link from "next/link";

export const metadata = {
  // Bare landing: max entity clarity for Google + AI answer engines
  title: "Mateo Morrison Jr — Tech Builder",
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder from New York — focused on proprietary AI, quantitative finance, and cybersecurity ventures for emerging markets. This is the official site and biography of Mateo Morrison Jr, the tech builder.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <main
      style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.4rem",
          background: "#000",
          color: "#f5f5f7",
          fontFamily: "var(--font-unbounded), system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <Image
          src="/logo.jpg"
          alt="Morrison Jr logo"
          width={110}
          height={110}
          priority
          style={{ borderRadius: "22px" }}
        />
        <Link
          href="/mateo"
          style={{
            color: "#9aa0a6",
            textDecoration: "none",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          About Mateo
        </Link>
      </main>
  );
}
