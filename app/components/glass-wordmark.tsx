"use client";

import { useRef } from "react";

const textClasses =
  "font-mono font-semibold uppercase leading-none tracking-[0.25em] text-[clamp(1.5rem,8vw,5.5rem)]";

export default function GlassWordmark() {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--shine-x", `${Math.round(event.clientX - rect.left)}px`);
    el.style.setProperty("--shine-y", `${Math.round(event.clientY - rect.top)}px`);
  }

  return (
    <a
      ref={ref}
      href="#home"
      aria-label="Back to top — Afaq Ul Islam"
      onMouseMove={handleMove}
      className="group relative block w-full select-none text-center"
    >
      <span
        className={`pointer-events-none block ${textClasses} text-white/35 transition-opacity duration-500 ease-fluid group-hover:opacity-60`}
      >
        Afaq Ul Islam
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-fluid group-hover:opacity-100 ${textClasses}`}
        style={{
          background:
            "radial-gradient(150px circle at var(--shine-x) var(--shine-y), hsl(187 86% 53%), hsla(187, 86%, 53%, 0.35) 45%, transparent 75%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Afaq Ul Islam
      </span>
    </a>
  );
}