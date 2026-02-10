import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "New Year Tarot Reading 2026",
  description:
    "Discover your fortune for the new year with our positive tarot card readings",
};

export const viewport: Viewport = {
  themeColor: "#3b1010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
