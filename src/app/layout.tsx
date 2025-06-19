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
  metadataBase: new URL("https://eris.natxo.dev"),
  title: "Eris - Private AI Chat for iPhone & iPad",
  description: "Chat with AI privately on your device. No cloud, no tracking. Powered by MLX for Apple Silicon.",
  keywords: "AI chat, private AI, offline AI, iPhone AI, iPad AI, MLX, local LLM, privacy, on-device AI, Apple Silicon",
  authors: [{ name: "Ignacio Palacio", url: "https://natxo.dev" }],
  creator: "Ignacio Palacio",
  publisher: "Northern Bytes",
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
    title: "Eris - Private AI Chat",
    description: "Experience AI chat that respects your privacy. Runs entirely on your iPhone or iPad.",
    url: "https://eris.natxo.dev",
    siteName: "Eris",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Eris - Private AI Chat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eris - Private AI Chat",
    description: "Experience AI chat that respects your privacy. Runs entirely on your iPhone or iPad.",
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
    canonical: "https://eris.natxo.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
