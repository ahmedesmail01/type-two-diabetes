import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

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
  title: "Type 2 Diabetes",
  description: "Type 2 Diabetes",
};

const monadi = localFont({
  src: "./fonts/ArbFONTS-Monadi.ttf",
  variable: "--font-monadi",
});

const aviner = localFont({
  src: "./fonts/AvenirLTProMedium.otf",
  variable: "--font-avenir",
});


const cairo = localFont({
  src: "./fonts/Cairo-Regular.ttf",
  variable: "--font-cairo",
})

const expo = localFont({
  src: "./fonts/ArbFONTS-ExpoArabic-Book.ttf",
  variable: "--font-expo",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monadi.variable} ${aviner.variable} ${cairo.variable} ${expo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
