import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-unbounded",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.morrisonjr.com'),
  title: "MORRISON JR | MATEO MORRISON JR",
  description: "A private investment firm investing at the intersection of artificial intelligence, quantitative finance, and cybersecurity.",
  keywords: "Mateo Morrison Jr, Morrison Jr, Morrison Jr, financial technology, investment firm, AI, quantitative finance, cybersecurity",
  authors: [{ name: "Mateo Morrison Jr" }],
  robots: "index, follow",
  openGraph: {
    title: "MORRISON JR | Mateo Morrison Jr",
    description: "A family legacy in financial technology and global innovation.",
    url: "https://www.morrisonjr.com",
    siteName: "Morrison Jr",
    images: [
      {
        url: "/logo.jpg",
        width: 120,
        height: 120,
        alt: "Morrison Jr Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORRISON JR | Mateo Morrison Jr",
    description: "A family legacy in financial technology.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="black"/></svg>',
  },
  alternates: {
    canonical: "https://wwww.morrisonjr.com",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Morrison Jr",
              "founder": {
                "@type": "Person",
                "name": "Mateo Morrison Jr"
              },
              "foundingDate": "2020",
              "description": "A private investment firm focused on technology, investing at the intersection of artificial intelligence, quantitative finance, and cybersecurity.",
              "url": "https://www.morrisonjr.com",
              "logo": "https://morrisonjr.com/logo.jpg",
              "sameAs": [
                "https://www.linkedin.com/company/morrisonjr",
                "https://twitter.com/morrisonjr"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Trump Building, 40 Wall Street",
                "addressLocality": "New York",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "email": "General@morrisonjr.com",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
        suppressHydrationWarning={true}
      >
       {children}
      </body>
    </html>
  );
}
