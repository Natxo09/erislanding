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
  title: "Eris - Private AI Chat for iPhone & iPad",
  description: "Chat with AI privately on your device. No cloud, no tracking. Powered by MLX for Apple Silicon.",
  keywords: "AI chat, private AI, offline AI, iPhone AI, iPad AI, MLX, local LLM, privacy",
  authors: [{ name: "Ignacio Palacio", url: "https://natxo.dev" }],
  openGraph: {
    title: "Eris - Private AI Chat",
    description: "Experience AI chat that respects your privacy. Runs entirely on your iPhone or iPad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eris - Private AI Chat",
    description: "Experience AI chat that respects your privacy. Runs entirely on your iPhone or iPad.",
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
