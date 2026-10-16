import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileQuestion } from "lucide-react";
import Reveal from "./components/reveal";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center py-24 sm:py-28 lg:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-xl">
          <div className="bezel">
            <div className="bezel-core flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--brand-cyan))]/30 bg-[hsl(var(--brand-cyan))]/10 text-[hsl(var(--brand-cyan))]">
                <FileQuestion
                  className="size-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <span className="eyebrow mt-6">404</span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Page <span className="accent-text">not found.</span>
              </h1>

              <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/55">
                We couldn&apos;t find the page you&apos;re looking for. It may
                have been moved or is no longer available.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/" className="cta">
                  Back to home
                  <span className="cta-icon">
                    <ArrowUpRight
                      className="size-4"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
                <Link href="/#work" className="cta-ghost">
                  View selected work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}