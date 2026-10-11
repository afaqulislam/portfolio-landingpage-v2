import { ArrowUpRight } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
];

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built across web and AI."
            description="A snapshot of what I've shipped — AI agents and automation, full-stack platforms, hackathons and competitions."
          />
          <Reveal delay={160}>
            <a
              href="#contact"
              className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white md:inline-flex"
            >
              Start a project
              <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className={cn("h-full", spans[index % spans.length])}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="bezel group block h-full transition-transform duration-500 ease-fluid hover:-translate-y-1"
              >
                <div className="bezel-core flex h-full flex-col overflow-hidden">
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      project.featured ? "min-h-[260px]" : "min-h-[180px]",
                    )}
                    style={{ background: "hsl(187 86% 53% / 0.14)" }}
                  >
                    <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {project.year}
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                      <ArrowUpRight className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {project.tagline}
                    </p>
                    <h3 className="mt-2 text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {project.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
