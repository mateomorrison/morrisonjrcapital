"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const EMAILS = [
  { label: "Studio", value: "General@morrisonjr.com" },
  { label: "Personal", value: "mateo@morrisonjr.org" },
];

export default function Mateo() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#000",
        color: "#f5f5f7",
        fontFamily: "var(--font-unbounded), system-ui, sans-serif",
        padding: "5.5rem 1.6rem 4rem",
        maxWidth: "46rem",
        margin: "0 auto",
        lineHeight: 1.85,
        fontWeight: 300,
      }}
    >
      <button
        onClick={() => router.push("/")}
        aria-label="Back to home"
        style={{
          position: "fixed",
          top: "1.3rem",
          right: "1.3rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.16)",
          color: "#f5f5f7",
          borderRadius: "999px",
          padding: "0.55rem 1.1rem",
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        ← Back
      </button>

      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Image
          src="/logo.jpg"
          alt="Morrison Jr logo"
          width={72}
          height={72}
          priority
          style={{ borderRadius: "18px", margin: "0 auto 1.2rem", display: "block" }}
        />
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
          Mateo Morrison Jr
        </h1>
        <p
          style={{
            margin: "0.5rem 0 0",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#9aa0a6",
          }}
        >
          Tech Builder
        </p>
        <p style={{ margin: "0.9rem 0 0", fontSize: "0.75rem", color: "#767b81" }}>
          New York · Born July 12, 1999 · Building since 2016
        </p>
      </header>

      <section style={{ color: "#d5d8dc", maxWidth: "38rem", margin: "0 auto" }}>
        <p data-block>
          Mateo Morrison Jr (born July 12, 1999) is an American tech builder
          based in New York. He is the founder of Morrison Jr, a private startup
          studio established in 2020 that builds proprietary companies from
          scratch — applied artificial intelligence products, quantitative
          trading and capital-allocation systems, and cybersecurity tooling —
          with a focus on emerging markets.
        </p>
        <p data-block>
          As a teenager he co-founded fangoo (2015–2017), an e-commerce platform
          connecting buyers and sellers in the Dominican Republic, running
          payments, logistics, and product listings end to end. Since 2019 he
          has worked across the technology infrastructure of capital markets —
          software licensing, technical project delivery, end-user computing
          and AI consulting, and information technology at a leading global
          macro fund, where he currently serves.
        </p>
        <p data-block>
          His work centers on the intersection of artificial intelligence,
          quantitative finance, and cybersecurity, built quietly and owned end
          to end. He publishes selectively while his ventures are in
          development.
        </p>
      </section>

      <section
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          maxWidth: "38rem",
          margin: "3rem auto 0",
        }}
      >
        {EMAILS.map((e) => (
          <div
            key={e.value}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingBottom: "0.9rem",
            }}
          >
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9aa0a6" }}>
              {e.label}
            </span>
            <a
              href={`mailto:${e.value}`}
              style={{ color: "#f5f5f7", textDecoration: "none", fontSize: "0.85rem" }}
            >
              {e.value}
            </a>
          </div>
        ))}
      </section>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.68rem",
          color: "#767b81",
          letterSpacing: "0.08em",
        }}
      >
        morrisonjr.com · © 2026
      </footer>
    </main>
  );
}
