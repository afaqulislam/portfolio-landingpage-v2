import Reveal from "./reveal";
import { principles } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              I ship end to end — web, AI and automation.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-white/55">
              <p>
                I&apos;m a full-stack and AI engineer with hands-on, end-to-end
                experience building web applications, AI-powered automation
                systems and SaaS products. As Co-Founder and COO at Neofyx, I
                lead product engineering and client delivery.
              </p>
              <p>
                I&apos;m comfortable scoping requirements, architecting
                solutions and shipping working software independently across
                modern web and AI stacks — optimising for the details others
                skip: performance, accessibility and the last 5% of polish.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="accent-text text-2xl font-semibold">Afaq</span>
              <span className="h-8 w-px bg-white/10" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Full-Stack &amp; AI Engineer
              </span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:content-center">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={index * 90}>
                <div className="group h-full rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-500 ease-fluid hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Icon
                      className="size-5 text-[hsl(var(--brand-cyan))]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {principle.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
