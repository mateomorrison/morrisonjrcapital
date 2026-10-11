import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.morrisonjr.com"),
  title: {
    default: "Mateo Morrison Jr — Tech Builder | Morrison Jr",
    template: "%s | Morrison Jr",
  },
  description:
    "Mateo Morrison Jr (born July 12, 1999) is a tech builder from New York — founder of Morrison Jr, a startup studio est. 2020 building proprietary AI, quantitative finance, and cybersecurity ventures for emerging markets. Official site and biography.",
  keywords:
    "Mateo Morrison Jr, Morrison Jr, tech builder, startup studio, AI studio, quantitative finance, cybersecurity, emerging markets, fangoo",
  authors: [{ name: "Mateo Morrison Jr" }],
  creator: "Mateo Morrison Jr",
  publisher: "Morrison Jr",
  alternates: { canonical: "/" },
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
    siteName: "Morrison Jr",
    title: "Mateo Morrison Jr — Tech Builder",
    description:
      "Official site of Mateo Morrison Jr, tech builder and founder of Morrison Jr, a startup studio est. 2020 building proprietary AI, quant, and cybersecurity ventures.",
    images: [{ url: "/logo.jpg", width: 512, height: 512, alt: "Morrison Jr logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateo Morrison Jr — Tech Builder",
    description: "Founder of Morrison Jr — a startup studio est. 2020. Tech builder in AI, quant finance, cybersecurity.",
    images: ["/logo.jpg"],
    creator: "@morrisonjr",
  },
  icons: { icon: "/logo.jpg", shortcut: "/logo.jpg", apple: "/logo.jpg" },
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
        {children}
      </body>
    </html>
  );
}
