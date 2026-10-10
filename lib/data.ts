import {
  Atom,
  Boxes,
  Cloud,
  Cog,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Palette,
  PlugZap,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description: "Accessible, resilient interfaces built to scale.",
    icon: Atom,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Styling & Motion",
    description: "Design systems and choreographed interaction.",
    icon: Palette,
    items: ["CSS Modules", "Framer Motion", "GSAP", "Design Tokens"],
  },
  {
    title: "Tooling & DX",
    description: "Fast feedback loops and airtight pipelines.",
    icon: Terminal,
    items: ["Turbopack", "ESLint", "Prettier", "Vitest", "Playwright"],
  },
  {
    title: "Platform & Delivery",
    description: "Ship reliably to the edge.",
    icon: Cloud,
    items: ["Vercel", "GitHub Actions", "Edge Functions", "Observability"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Northwind Commerce",
    tagline: "Headless storefront",
    description:
      "A sub-second commerce experience with streaming product data, optimistic cart updates, and a fully tokenised theme system.",
    tags: ["Next.js", "Edge", "Stripe", "Design System"],
    year: "2025",
    href: "#work",
    featured: true,
  },
  {
    title: "Pulse Analytics",
    tagline: "Realtime dashboard",
    description:
      "Virtualised data grids, live charts and a keyboard-first command palette for a 10M-row observability platform.",
    tags: ["React", "WebSockets", "Charts"],
    year: "2024",
    href: "#work",
  },
  {
    title: "Atlas Design System",
    tagline: "Component library",
    description:
      "42 accessible primitives with theming, dark mode and documentation generated straight from source.",
    tags: ["TypeScript", "Radix", "a11y"],
    year: "2024",
    href: "#work",
  },
  {
    title: "Studio Landing",
    tagline: "Award-winning marketing",
    description:
      "Scroll-driven storytelling with fluid glass surfaces, motion choreography and a perfect Lighthouse score.",
    tags: ["Next.js", "GSAP", "Motion"],
    year: "2023",
    href: "#work",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Lumen Studio",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Lead frontend engineer for a portfolio of product teams, owning architecture and interface quality.",
    achievements: [
      "Cut median LCP from 2.9s to 1.1s across primary products.",
      "Designed a shared design system adopted by 6 squads.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Northwind Labs",
    period: "2021 — 2023",
    location: "Hybrid",
    summary:
      "Built accessible, high-traffic commerce experiences and internal tooling.",
    achievements: [
      "Shipped a headless storefront serving 1.4M monthly users.",
      "Introduced automated accessibility testing into CI.",
    ],
  },
  {
    role: "UI Developer",
    company: "Freelance",
    period: "2019 — 2021",
    location: "Worldwide",
    summary:
      "Delivered responsive marketing sites and MVPs for early-stage founders.",
    achievements: [
      "Partnered with 20+ clients from concept to launch.",
      "Established a reusable component-driven workflow.",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Afaq turned a scattered brand into a cohesive system. The attention to micro-interaction detail is rare.",
    name: "Sara Malik",
    role: "Product Lead, Lumen Studio",
    initials: "SM",
  },
  {
    quote:
      "Our storefront went from sluggish to instant. He treats performance and accessibility as first-class features.",
    name: "Daniel Reed",
    role: "CTO, Northwind Labs",
    initials: "DR",
  },
  {
    quote:
      "Reliable, fast and genuinely thoughtful about UX. Easily the best frontend partner we have worked with.",
    name: "Amina Yusuf",
    role: "Founder, Studio Atlas",
    initials: "AY",
  },
];

export const stats = [
  { value: "6+", label: "Years building" },
  { value: "40+", label: "Projects shipped" },
  { value: "100", label: "Lighthouse a11y" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/afaqulislam", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com", icon: PlugZap },
  { label: "Email", href: "mailto:hello@afaq.dev", icon: Server },
] as const;

export const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Radix UI",
  "Vite",
  "Node.js",
  "Figma",
] as const;

export const principles = [
  { icon: Zap, title: "Performance first", text: "Every millisecond is a feature." },
  { icon: ShieldCheck, title: "Accessible by default", text: "Keyboard, screen-reader, reduced-motion." },
  { icon: Layers, title: "Systems thinking", text: "Tokens and primitives over one-offs." },
  { icon: Sparkles, title: "Craft & detail", text: "Motion and polish with purpose." },
] as const;

export const contactMeta = [
  { icon: Cpu, label: "Role", value: "Frontend Developer" },
  { icon: Boxes, label: "Focus", value: "React · Next.js · TS" },
  { icon: Cog, label: "Availability", value: "Open to work" },
  { icon: Database, label: "Timezone", value: "UTC+5" },
] as const;
