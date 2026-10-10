import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-landingpage-v2-aui.vercel.app"),
  title: {
    default: "Afaq Ul Islam — Frontend Developer",
    template: "%s | Afaq Ul Islam",
  },
  description:
    "Afaq Ul Islam — frontend developer crafting fast, accessible, and beautifully engineered web experiences with React, Next.js and TypeScript.",
  keywords: [
    "Afaq Ul Islam",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Afaq Ul Islam" }],
  openGraph: {
    title: "Afaq Ul Islam — Frontend Developer",
    description:
      "Crafting fast, accessible, and beautifully engineered web experiences.",
    type: "website",
    siteName: "Afaq Ul Islam",
    url: "https://portfolio-landingpage-v2-aui.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afaq Ul Islam — Frontend Developer",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-[100dvh] overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>

        {/* Fixed mesh glow backdrop (single accent hue, never on scroll containers) */}
        <div className="mesh-backdrop" aria-hidden="true">
          <div
            className="mesh-orb animate-orb-drift"
            style={{
              top: "-10%",
              left: "-5%",
              width: "42rem",
              height: "42rem",
              background: "hsl(187 86% 53% / 0.18)",
            }}
          />
          <div
            className="mesh-orb animate-orb-drift"
            style={{
              top: "20%",
              right: "-10%",
              width: "38rem",
              height: "38rem",
              animationDelay: "-6s",
              background: "hsl(187 86% 53% / 0.16)",
            }}
          />
          <div
            className="mesh-orb animate-orb-drift"
            style={{
              bottom: "-15%",
              left: "25%",
              width: "34rem",
              height: "34rem",
              animationDelay: "-12s",
              background: "hsl(187 86% 53% / 0.12)",
            }}
          />
        </div>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
