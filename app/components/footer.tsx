import { ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

const columns = [
  {
    title: "Home",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Experience", href: "#experience" },
      { label: "Voices", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#home"
              className="flex items-center gap-1.5 text-lg font-semibold tracking-tight"
            >
              <span className="accent-text">Afaq</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-cyan))]" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Frontend developer crafting fast, accessible and beautifully
              engineered web experiences.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-500 ease-fluid hover:-translate-y-0.5 hover:text-white"
                  >
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="md:col-span-3"
            >
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex items-start md:col-span-1 md:justify-end">
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-500 ease-fluid hover:-translate-y-1 hover:text-white"
            >
              <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Afaq Ul Islam. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Built with Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
