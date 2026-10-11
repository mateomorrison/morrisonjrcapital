import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { mateoMetadata, mateoPersonJsonLd, mateoFaqJsonLd } from "./mateo/meta";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.morrisonjr.com"),
  ...mateoMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={unbounded.variable}>
      <body
        suppressHydrationWarning={true}
        style={{ background: "#000", margin: 0 }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mateoPersonJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mateoFaqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
