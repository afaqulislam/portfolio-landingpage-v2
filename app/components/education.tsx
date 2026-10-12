import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Education"
              title="Foundations in math and code."
              description="Formal degrees and the GIAIC program — where the problem-solving and engineering discipline comes from."
            />
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <span
            aria-hidden="true"
            className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-[hsl(var(--brand-cyan))]/20"
          />
          {education.map((item, index) => (
            <li key={item.title} className="relative pl-10 pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0b]"
              >
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-cyan))]" />
              </span>

              <Reveal delay={index * 90}>
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-500 hover:border-white/15 hover:bg-white/[0.05] sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    {item.status ? (
                      <span className="rounded-full border border-[hsl(var(--brand-cyan))]/30 bg-[hsl(var(--brand-cyan))]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[hsl(var(--brand-cyan))]">
                        {item.status}
                      </span>
                    ) : null}
                    {item.period ? (
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                        {item.period}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{item.institution}</p>
                  {item.bullets ? (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/50"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--brand-cyan))]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}