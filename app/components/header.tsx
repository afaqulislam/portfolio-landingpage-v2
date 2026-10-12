"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Milestones" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...NAV.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-5">
      <div
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-2.5 py-2 transition-all duration-500 ease-fluid",
          scrolled
            ? "border-white/10 bg-[#0a0a0b]/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md",
        )}
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full px-2.5 py-1 text-base font-semibold tracking-tight"
        >
          <Image
            src="/aui-mark.svg"
            alt="AUI — Afaq Ul Islam"
            width={32}
            height={32}
            unoptimized
            className="h-8 w-8 shrink-0 transition-transform duration-500 ease-fluid group-hover:scale-105"
          />
          <span>Afaq Ul Islam</span>
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 ease-fluid",
                active === item.id
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="cta-ghost hidden md:inline-flex">
          Let&apos;s talk
          <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
        >
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-all duration-500 ease-fluid",
              open ? "rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-all duration-300",
              open ? "scale-x-0 opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-white transition-all duration-500 ease-fluid",
              open ? "-rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-[#050505]/90 px-8 backdrop-blur-3xl transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-white/[0.06] py-4 text-3xl font-medium tracking-tight transition-all duration-500 ease-fluid",
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{
                transitionDelay: open ? `${120 + index * 60}ms` : "0ms",
              }}
            >
              <span className="mr-4 font-mono text-xs text-white/40">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
