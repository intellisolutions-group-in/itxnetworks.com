import React from "react";
import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "@/components/site/json-ld";
import { company } from "@/lib/company";
import { buildPageUrl, DEFAULT_OG_IMAGE, organizationSchema, websiteSchema } from "@/lib/seo";
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

const defaultTitle = `${company.brandName} — IT & Software Development Company in India`;

export const metadata: Metadata = {
  metadataBase: new URL(buildPageUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${company.brandName}`,
  },
  description: company.description,
  keywords: [
    company.brandName,
    "software development company India",
    "custom software development",
    "web development",
    "mobile app development",
    "IT services",
  ],
  alternates: {
    canonical: buildPageUrl("/"),
  },
  openGraph: {
    title: defaultTitle,
    description: company.description,
    url: buildPageUrl("/"),
    siteName: company.brandName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: `${company.brandName} — Software Development in India`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: company.description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
    <html lang="en-IN">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
