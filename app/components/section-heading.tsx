import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
