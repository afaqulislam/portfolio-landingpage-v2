import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";

const spans = [
  "sm:col-span-2 md:col-span-2 lg:col-span-3",
  "md:col-span-1 lg:col-span-3",
  "md:col-span-1 lg:col-span-2",
  "md:col-span-1 lg:col-span-2",
  "md:col-span-1 lg:col-span-2",
];

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built across AI and web."
            description="A snapshot of what I've shipped — agentic AI systems, automation, full-stack platforms and the startup I co-founded."
          />
          <Reveal delay={160}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              Start a project
              <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className={spans[index % spans.length]}
            >
              <div className="bezel group flex h-full flex-col transition-all duration-500 ease-fluid hover:-translate-y-1 active:scale-[0.995]">
                <div className="bezel-core flex flex-1 flex-col overflow-hidden">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
                    />
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live site`}
                      className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--accent))]/60"
                    >
                      <span className="sr-only">
                        View {project.title} live project
                      </span>
                    </a>
                    <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-[#050505]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {project.year}
                    </span>
                    <span className="pointer-events-none absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#050505]/35 text-white backdrop-blur-md transition-all duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                      <ArrowUpRight className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {project.tagline}
                    </p>
                    <div className="mt-2 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-white">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source on GitHub`}
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/50"
                      >
                        <Github className="size-4" strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">
                          View {project.title} source code on GitHub
                        </span>
                      </a>
                    </div>
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
