import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { AppLayout } from "@/layouts/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Mark | Engineering Portfolio & Personal Website",
  description:
    "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack development, I've led multi-million-dollar projects, co-founded ventures, and built seamless, high-performance user experiences.",
  metadataBase: new URL("https://thedanielmark.com"),
  openGraph: {
    title: "Daniel Mark | Engineering Portfolio & Personal Website",
    description:
      "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations.",
    url: "https://thedanielmark.com",
    siteName: "Daniel Mark",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Mark's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Mark | Engineering Portfolio & Personal Website",
    description:
      "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations.",
    images: ["/meta-image.jpg"],
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
        <link rel="canonical" href="https://thedanielmark.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-820WLVPSHX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-820WLVPSHX');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
