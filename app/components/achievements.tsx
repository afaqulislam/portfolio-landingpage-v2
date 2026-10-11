import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28 lg:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Milestones"
          title="Proof of work, not just talk."
          description="Results from competitions, hackathons and years of open-source contribution."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <div className="bezel h-full">
                  <div className="bezel-core flex h-full flex-col p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Icon
                        className="size-5 text-[hsl(var(--brand-cyan))]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}