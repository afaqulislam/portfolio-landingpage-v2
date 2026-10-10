import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { marquee, skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit honed for modern web products."
          description="Deep expertise across the frontend stack — from architecture and design systems to motion, performance and accessibility."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.title}
                delay={index * 80}
                className={cn("h-full", spans[index])}
              >
                <div className="bezel h-full">
                  <div className="bezel-core flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        <Icon
                          className="size-5 text-[hsl(var(--brand-cyan))]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {group.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-10"
              >
                {marquee.map((item) => (
                  <li
                    key={`${copy}-${item}`}
                    className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-white/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
