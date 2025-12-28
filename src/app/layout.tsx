import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.morrisonjrgroup.com'),
  title: "MORRISON JR GROUP | MATEO MORRISON JR",
  description: "Founded by Mateo Morrison Jr, Morrison Jr Group is a private investment firm focused on technology, investing at the intersection of artificial intelligence, quantitative finance, and cybersecurity. A Dominican Republic family legacy in financial technology.",
  keywords: "Mateo Morrison Jr, Morrison Jr, Morrison Jr Group, Dominican Republic, financial technology, investment firm, AI, quantitative finance, cybersecurity",
  authors: [{ name: "Mateo Morrison Jr" }],
  robots: "index, follow",
  openGraph: {
    title: "MORRISON JR GROUP | Mateo Morrison Jr",
    description: "Founded by Mateo Morrison Jr, Morrison Jr Group represents a Dominican Republic family legacy in financial technology and global innovation.",
    url: "https://www.morrisonjrgroup.com",
    siteName: "Morrison Jr Group",
    images: [
      {
        url: "/logo.jpg",
        width: 120,
        height: 120,
        alt: "Morrison Jr Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORRISON JR GROUP | Mateo Morrison Jr",
    description: "Founded by Mateo Morrison Jr, Morrison Jr Group is a Dominican Republic family legacy in financial technology.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="black"/></svg>',
  },
  alternates: {
    canonical: "https://wwww.morrisonjrgroup.com",
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
              "name": "Morrison Jr Group",
              "founder": {
                "@type": "Person",
                "name": "Mateo Morrison Jr"
              },
              "foundingDate": "2025",
              "description": "A private investment firm focused on technology, investing at the intersection of artificial intelligence, quantitative finance, and cybersecurity.",
              "url": "https://www.morrisonjrgroup.com",
              "logo": "https://morrisonjrgroup.com/logo.jpg",
              "sameAs": [
                "https://www.linkedin.com/company/morrisonjrgroup",
                "https://twitter.com/morrisonjrgroup"
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
                "email": "media@morrisonjrgroup.com",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
       {children}
      </body>
    </html>
  );
}
