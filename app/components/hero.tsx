import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import Reveal from "./reveal";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center pb-20 pt-32 sm:pt-36"
    >
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand-cyan))] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-cyan))]" />
              </span>
              Available for select projects
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Frontend developer <br className="hidden sm:block" />
              crafting{" "}
              <span className="accent-text">interfaces that feel alive.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              I&apos;m{" "}
              <span className="font-medium text-white/90">Afaq Ul Islam</span> — I
              turn complex products into fast, accessible and beautifully
              engineered experiences with React, Next.js and TypeScript.
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
              <a href="#contact" className="cta-ghost">
                <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
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
          <Reveal delay={200} className="relative mx-auto max-w-sm lg:ml-auto">
            <div className="bezel">
              <div className="bezel-core overflow-hidden">
                <Image
                  src="/portrait.svg"
                  alt="Abstract portrait representing Afaq Ul Islam"
                  width={640}
                  height={800}
                  priority
                  unoptimized
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0b]/80 px-3.5 py-2.5 backdrop-blur-xl sm:flex">
              <Sparkles
                className="size-4 text-[hsl(var(--brand-cyan))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-xs font-medium">Pixel-perfect UI</span>
            </div>

            <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-white/10 bg-[#0a0a0b]/80 px-3.5 py-3 backdrop-blur-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Lighthouse
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">
                100<span className="text-sm text-white/40">/100</span>
              </p>
            </div>
          </Reveal>
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
