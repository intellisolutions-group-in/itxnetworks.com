import React from "react";
import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { company } from "@/lib/company";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: `${company.brandName} — IT & Software Development Company in India`,
  description: company.description,
  keywords: [
    company.brandName,
    "software development company India",
    "custom software development",
    "web development",
    "mobile app development",
    "IT services",
  ],
  metadataBase: new URL(`https://${company.domain}`),
  openGraph: {
    title: `${company.brandName} — IT & Software Development`,
    description: company.description,
    url: `https://${company.domain}`,
    siteName: company.brandName,
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
