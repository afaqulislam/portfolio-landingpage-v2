import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import Reveal from "./reveal";
import HeroLogo from "./hero-logo";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center pb-16 pt-28 sm:pt-32 lg:pb-20"
    >
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand-cyan))] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-cyan))]" />
              </span>
              Open to select work — Karachi, Pakistan
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Full-stack &amp; AI engineer <br className="hidden sm:block" />
              building{" "}
              <span className="accent-text">products that ship.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              I&apos;m{" "}
              <span className="font-medium text-white/90">Afaq Ul Islam</span> — Co-Founder &amp; COO at Neofyx. I
              design, build and ship full-stack web applications, AI-powered
              automation and SaaS products from spec to deployment.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="cta">
                View selected work
                <span className="cta-icon">
                  <ArrowUpRight
                    className="size-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </a>
              <a
                href="/Afaq_Ul_Islam_Resume.pdf"
                download
                className="cta-ghost"
              >
                <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-white/50">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={200} className="relative aspect-square w-full">
            <HeroLogo />
          </Reveal>

            <div className="absolute left-0 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0b]/80 px-3 py-2.5 backdrop-blur-xl pointer-events-none md:px-3.5">
              <Sparkles
                className="size-4 text-[hsl(var(--brand-cyan))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-[11px] font-medium md:text-xs">
                Co-Founder &amp; COO
              </span>
            </div>

            <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-[#0a0a0b]/80 px-3 py-3 backdrop-blur-xl pointer-events-none md:px-3.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Focus
              </p>
              <p className="mt-1 text-sm font-medium tracking-tight">
                AI &middot; Automation &middot; Web
              </p>
            </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ArrowDown className="size-4 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
