import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Experience"
              title="A track record of shipping."
              description="Six years of building products end-to-end — from first commit to production at scale."
            />
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <span
            aria-hidden="true"
            className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-[hsl(var(--brand-cyan))]/20"
          />
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.role}`}
              className="relative pl-10 pb-8 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0b]"
              >
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-cyan))]" />
              </span>

              <Reveal delay={index * 90}>
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-500 hover:border-white/15 hover:bg-white/[0.05] sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[hsl(var(--brand-cyan))]">
                      {item.period}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-xs text-white/40">{item.location}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{item.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {item.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-white/60"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--brand-cyan))]"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
