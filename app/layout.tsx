import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, structuredData } from "@/lib/seo";

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

const siteUrl = SITE_URL;

const siteName = SITE_NAME;

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  creator: siteName,
  title: {
    default: "Afaq Ul Islam — Agentic AI Engineer",
    template: "%s | Afaq Ul Islam",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Afaq Ul Islam",
    "Agentic AI Engineer",
    "AI Agents",
    "Multi-Agent Systems",
    "LLM Integration",
    "Full-Stack Developer",
    "Neofyx",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "Automation",
    "Portfolio",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  openGraph: {
    title: "Afaq Ul Islam — Agentic AI Engineer",
    description:
      "Building multi-agent AI systems, automation workflows and full-stack products end to end.",
    type: "website",
    siteName: siteName,
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Afaq Ul Islam — Agentic AI Engineer",
    description:
      "Building multi-agent AI systems, automation workflows and full-stack products end to end.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1310",
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#0B1310]"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
