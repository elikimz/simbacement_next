import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Simba Cement - Premium Building Materials & Roofing Solutions",
    template: "%s | Simba Cement",
  },
  description:
    "High quality galvanized and color steel roofing sheets, cement, and building materials. Durable, reliable, and trusted for your construction needs.",
  keywords: [
    "cement",
    "roofing sheets",
    "building materials",
    "galvanized steel",
    "color steel",
    "construction",
    "Kenya",
  ],
  authors: [{ name: "Simba Cement" }],
  creator: "Simba Cement",
  publisher: "Simba Cement",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com",
    siteName: "Simba Cement",
    title: "Simba Cement - Premium Building Materials & Roofing Solutions",
    description:
      "High quality galvanized and color steel roofing sheets, cement, and building materials.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Simba Cement - Premium Building Materials",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simba Cement - Premium Building Materials & Roofing Solutions",
    description:
      "High quality galvanized and color steel roofing sheets, cement, and building materials.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com"}/og-image.jpg`,
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
