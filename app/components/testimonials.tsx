import { Quote } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-28 lg:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Voices"
          title="Trusted by the teams I build with."
          description="A few words from founders, product leads and engineers I've partnered with."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="h-full">
              <figure className="bezel h-full">
                <div className="bezel-core flex h-full flex-col p-7">
                  <Quote
                    className="size-7 text-[hsl(var(--brand-cyan))]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-white/75">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-cyan))] text-sm font-semibold text-[#050505]"
                    >
                      {item.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="block text-xs text-white/45">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
