import {
  Atom,
  Award,
  Boxes,
  Cog,
  Cpu,
  Database,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Twitter,
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
    title: "Programming",
    description: "The primitives I build products with.",
    icon: Terminal,
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    description: "Accessible, responsive interfaces that scale.",
    icon: Atom,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs built for production.",
    icon: Server,
    items: ["FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Data modelled and stored cleanly.",
    icon: Database,
    items: ["PostgreSQL", "Firebase"],
  },
  {
    title: "AI & Agentic AI",
    description: "Agents, LLM integration and multi-agent systems.",
    icon: Sparkles,
    items: [
      "AI Agents",
      "Multi-Agent Systems",
      "LLM Integration",
      "Google Gemini",
      "OpenAI",
      "Anthropic Claude",
      "Groq",
    ],
  },
  {
    title: "Automation",
    description: "Workflows that run themselves.",
    icon: Cog,
    items: ["n8n", "AI Workflow Automation"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "StartupLaunch AI",
    tagline: "Multi-agent startup validator",
    description:
      "A multi-agent system that runs market research, competitor analysis and risk assessment in parallel, then delivers a Go / No-Go / Pivot verdict.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Multi-Agent AI"],
    year: "2026",
    href: "https://github.com/afaqulislam/startuplaunch-ai",
    image: "/projects/startuplaunch-ai.svg",
  },
  {
    title: "ShiftSathi",
    tagline: "Shift management, simplified",
    description:
      "A full-stack shift management web app built with Next.js and TypeScript, shipped and live on Vercel.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    year: "2026",
    href: "https://shiftsathi-aui.vercel.app",
    image: "/projects/shiftsathi.svg",
  },
  {
    title: "Kisaan Dost AI",
    tagline: "Crop disease detector",
    description:
      "AI-powered crop disease detection for Pakistani farmers — Gemini Vision, Roman Urdu diagnosis and voice reports. Silver Tier at Google AI Seekho 2026.",
    tags: ["Google Gemini", "Google Cloud Run", "AI Seekho"],
    year: "2026",
    href: "https://github.com/afaqulislam/kisaan-dost-ai",
    image: "/projects/kisaan-dost-ai.svg",
  },
  {
    title: "Neofyx",
    tagline: "AI automation & SaaS startup",
    description:
      "Co-founded an AI automation and SaaS studio building agentic workflows, automation systems and web products for clients.",
    tags: ["AI Automation", "SaaS", "Agentic Workflows"],
    year: "2025",
    href: "https://neofyx.com",
    image: "/projects/neofyx.svg",
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
    role: "Chief Operating Officer",
    company: "Neofyx",
    period: "Dec 2025 — Present",
    location: "Karachi, Pakistan",
    summary:
      "Co-Founder and COO of an AI automation and SaaS startup, leading agentic AI products, engineering and client delivery.",
    achievements: [
      "Lead operations, technical execution and product delivery, structuring workflows from concept to deployment.",
      "Build full-stack features and AI-powered functionality end to end for client-facing applications.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Aptura Tech Solutions",
    period: "Aug 2026 — Sep 2026",
    location: "Karachi, Pakistan · Remote",
    summary:
      "Completed a one-month internship (Batch 03) covering full stack web development, moving from single-page builds to production-style applications.",
    achievements: [
      "Built a portfolio website, a SaaS landing page (NovaSaaS), a multi-page responsive website, an interactive JavaScript dashboard, and a full-stack blog platform (AUI-Blogo).",
      "Developed StartupLaunch AI, an AI agent-based tool that evaluates startup ideas with a Go, No-Go, or Pivot workflow using Next.js, React, TypeScript, and FastAPI.",
      "Worked on authentication, role-based access control, database integration, testing, and CI workflows.",
      "Focused on accessibility, SEO, and performance across all projects.",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    period: "Sep 2024",
    location: "Remote",
    summary:
      "Completed a one-month Frontend Development Virtual Internship (1–30 September 2024).",
    achievements: [
      "Independently built and deployed three responsive web projects using HTML, CSS and JavaScript: an Audio Player, a Calculator and an Image Gallery.",
      "Applied core frontend concepts including DOM manipulation, responsive UI design and interactive component building.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Project-Based",
    period: "Ongoing",
    location: "Remote",
    summary:
      "Independent full-stack development across personal projects and client work.",
    achievements: [
      "Built and deployed a personal portfolio website using React, TypeScript, Tailwind CSS and Framer Motion.",
      "Designed an n8n automation workflow for AI-generated video content and multi-platform publishing (YouTube, TikTok) using Groq LLMs and the kie.ai Veo3 API.",
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  period?: string;
  status?: string;
  bullets?: string[];
};

export const education: Education[] = [
  {
    title: "BS Computational Mathematics",
    institution: "University of Karachi",
    status: "In Progress",
    period: "Jan 2026 — Present",
  },
  {
    title:
      "Certificate, Full-Stack Development & AI / AI Agent Systems / Cloud & Web Development",
    institution: "Governor Sindh Initiative for GenAI, Web3, and Metaverse (GIAIC)",
    status: "In Progress",
    period: "Feb 2024 — Present",
    bullets: [
      "Selected participant in a competitive, government-backed AI and cloud program (Batch 1); top 10% performer, maintaining 90–95th percentile across three quarters.",
      "Program covers full-stack web development (Next.js, React, TypeScript, FastAPI), database architecture, authentication, scalable system design, AI integrations, agent-based workflows, spec-driven development, and context engineering.",
    ],
  },
  {
    title: "Intermediate, Pre-Engineering",
    institution: "Aisha Bawany Government College",
    period: "Aug 2022 – Aug 2024",
    bullets: [
      "Grade A. Focused on Mathematics, Physics, and Chemistry, preparing for higher education in IT, engineering, and software development.",
    ],
  },
  {
    title: "SSC, Science",
    institution: "Sadiq Public Primary & Secondary School",
    period: "May 2020 – May 2022",
    bullets: ["Grade A1."],
  },
];

export type Achievement = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    title: "Silver Tier Winner",
    text: "Google AI Seekho 2026 for Kisaan Dost AI — crop disease detection built with Google Gemini Vision and deployed on Google Cloud Run.",
    icon: Trophy,
  },
  {
    title: "Startup Challenge Winner",
    text: "Neofyx won a startup challenge competition, validating the AI automation and SaaS model we build and ship daily.",
    icon: Award,
  },
  {
    title: "Top 10% — GIAIC Batch 1",
    text: "90–95th percentile across three quarters in a competitive, government-backed AI and cloud program.",
    icon: Medal,
  },
  {
    title: "70+ Open-Source Repos",
    text: "Active open-source contributor shipping everything from AI assistants to full-stack SaaS tooling on GitHub.",
    icon: Github,
  },
];

export const stats = [
  { value: "70+", label: "Open-source repos" },
  { value: "10+", label: "Products shipped" },
  { value: "Top 10%", label: "GIAIC Batch 1" },
] as const;

export const socials = [
  { label: "X", href: "https://x.com/afaqulislam707", icon: Twitter },
  { label: "GitHub", href: "https://github.com/afaqulislam", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/afaqulislam", icon: Linkedin },
  { label: "Email", href: "mailto:afaqulislam707@gmail.com", icon: Mail },
  { label: "Portfolio", href: "https://afaqulislam.vercel.app", icon: Globe },
] as const;

export const marquee = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "FastAPI",
  "Tailwind CSS",
  "AI Agents",
  "Multi-Agent Systems",
  "Google Gemini",
  "OpenAI",
  "Anthropic Claude",
  "Groq",
  "n8n",
  "PostgreSQL",
  "Firebase",
] as const;

export const principles = [
  {
    icon: Sparkles,
    title: "Agentic AI systems",
    text: "AI agents, multi-agent orchestration and LLM integration in production.",
  },
  {
    icon: Zap,
    title: "Full-stack ownership",
    text: "From spec to deployment — web, APIs and AI, end to end.",
  },
  {
    icon: Layers,
    title: "Product & operations",
    text: "Co-founding Neofyx and leading scoping, architecture and delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Automation first",
    text: "n8n workflows and AI automation that remove manual work.",
  },
] as const;

export const contactMeta = [
  { icon: Cpu, label: "Role", value: "Agentic AI Engineer" },
  { icon: Boxes, label: "Company", value: "Neofyx — Co-Founder & COO" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: Cog, label: "Availability", value: "Open to select work" },
] as const;