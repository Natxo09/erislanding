import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { appData } from "@/lib/app-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eris.natxo.dev"),
  title: {
    default: `${appData.name} - ${appData.tagline}`,
    template: `%s | ${appData.name} - Private AI Chat`
  },
  description: appData.description,
  keywords: [...appData.keywords],
  authors: [{ name: appData.developer.name, url: appData.developer.url }],
  creator: appData.developer.name,
  publisher: appData.developer.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/iconnobg.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: appData.name + " - " + appData.tagline,
    description: appData.description,
    url: appData.urls.landing,
    siteName: appData.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: `${appData.name} - Private AI Chat App`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appData.name + " - " + appData.tagline,
    description: appData.description,
    creator: "@natxo09",
    images: ["/meta.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: appData.urls.landing,
  },
  other: {
    "apple-itunes-app": `app-id=${appData.appStore.id}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org for Software Application
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${appData.urls.landing}/#MobileApplication`,
    "name": appData.name,
    "description": appData.description,
    "url": appData.urls.landing,
    "applicationCategory": appData.applicationCategory,
    "applicationSubCategory": appData.applicationSubCategory,
    "operatingSystem": appData.operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": appData.offers.price,
      "priceCurrency": appData.offers.priceCurrency,
      "availability": appData.offers.availability
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": appData.aggregateRating.ratingValue,
      "reviewCount": appData.aggregateRating.reviewCount
    },
    "author": {
      "@type": appData.developer.type,
      "name": appData.developer.name,
      "url": appData.developer.url
    },
    "screenshot": [
      `${appData.urls.landing}/app-screenshot.png`
    ],
    "featureList": appData.features.join(", "),
    "softwareVersion": "1.5.0",
    "datePublished": "2024-10-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "installUrl": appData.appStore.url,
    "sameAs": appData.socialProfiles
  };

  // Schema.org for WebSite with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "name": appData.name,
    "description": appData.tagline,
    "url": appData.urls.landing,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${appData.urls.landing}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema.org for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${appData.developer.url}/#Person`,
    "name": appData.developer.name,
    "url": appData.developer.url,
    "sameAs": appData.socialProfiles,
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "MobileApplication",
        "name": appData.name
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
