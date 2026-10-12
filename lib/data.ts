import {
  Atom,
  Award,
  Boxes,
  Cloud,
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
    title: "Languages",
    description: "The primitives I build products with.",
    icon: Terminal,
    items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    description: "Accessible, responsive interfaces that scale.",
    icon: Atom,
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Lucide",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    description: "APIs and auth built for production.",
    icon: Server,
    items: ["FastAPI", "Node.js", "REST APIs", "JWT", "OAuth 2.0"],
  },
  {
    title: "AI & Agentic Development",
    description: "Multi-agent systems and automation.",
    icon: Sparkles,
    items: [
      "OpenAI Agents SDK",
      "Chainlit",
      "Groq AI",
      "Google Gemini",
      "Claude",
      "n8n",
    ],
  },
  {
    title: "Data, CMS & Auth",
    description: "Content and identity, wired cleanly.",
    icon: Database,
    items: ["Sanity CMS", "Clerk"],
  },
  {
    title: "Cloud & Deployment",
    description: "From container to edge, reliably.",
    icon: Cloud,
    items: [
      "Google Cloud Run",
      "Containerization",
      "CI/CD",
      "Vercel",
      "Hugging Face",
    ],
  },
  {
    title: "Tools & Practices",
    description: "The workflow behind working software.",
    icon: Cog,
    items: [
      "Git/GitHub",
      "Docker",
      "ESLint",
      "ReportLab",
      "Prompt Engineering",
      "Scalable System Design",
    ],
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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AURELIA",
    tagline: "Luxury fashion e-commerce",
    description:
      "Luxury fashion e-commerce with React 19, Tailwind CSS 4 and Google Gemini AI. Live on Google Cloud Run — built for Google Build with AI 2026.",
    tags: ["Next.js", "React 19", "Tailwind v4", "Gemini AI"],
    year: "2026",
    href: "https://github.com/afaqulislam/aurelia",
    image: "/projects/aurelia.svg",
    featured: true,
  },
  {
    title: "TaskSnap AI",
    tagline: "Screenshot-to-task extractor",
    description:
      "Turn messy messages into actionable tasks in seconds — a screenshot becomes a prioritised, deadline-aware task list with Groq AI.",
    tags: ["Next.js 16", "React 19", "Groq AI", "Framer Motion"],
    year: "2026",
    href: "https://github.com/afaqulislam/tasksnap-ai",
    image: "/projects/tasksnap-ai.svg",
  },
  {
    title: "StartLaunch AI",
    tagline: "AI agents that validate ideas",
    description:
      "A swarm of specialized AI agents runs market research, competitor analysis and risk assessment in parallel, then delivers a Go / No-Go / Pivot verdict.",
    tags: ["Multi-Agent AI", "TypeScript", "Reasoning"],
    year: "2026",
    href: "https://github.com/afaqulislam/startuplaunch-ai",
    image: "/projects/startuplaunch-ai.svg",
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
    featured: true,
  },
  {
    title: "MORENT",
    tagline: "Car rental marketplace",
    description:
      "Premium car rental marketplace and admin portal with smart filters, a booking calendar, interactive charts and wishlist.",
    tags: ["Next.js", "Sanity CMS", "Clerk", "shadcn/ui"],
    year: "2025",
    href: "https://github.com/afaqulislam/Market-Builder-Hackathon-2025",
    image: "/projects/morent.svg",
  },
  {
    title: "AUI Blogo",
    tagline: "Dev blog platform",
    description:
      "Production dev blog with Next.js 14 ISR, Sanity CMS, dark mode, auto table-of-contents, dynamic SEO, sitemap and robots.",
    tags: ["Next.js 14", "ISR", "Sanity CMS", "SEO"],
    year: "2025",
    href: "https://github.com/afaqulislam/AUI-Blogo",
    image: "/projects/aui-blogo.svg",
  },
  {
    title: "ChatAUI",
    tagline: "Conversational AI assistant",
    description:
      "Enterprise-grade conversational AI assistant powered by Chainlit, the OpenAI Agents SDK, OAuth 2.0 and modern Python architecture.",
    tags: ["Chainlit", "OpenAI Agents SDK", "OAuth 2.0"],
    year: "2025",
    href: "https://github.com/afaqulislam/ChatAUI",
    image: "/projects/chataui.svg",
  },
  {
    title: "CIRO AI",
    tagline: "Multi-agent crisis response",
    description:
      "Humanitarian emergency intelligence and multi-agent response operating system coordinating AI agents for crisis-response workflows.",
    tags: ["Multi-Agent AI", "AI Seekho", "React"],
    year: "2026",
    href: "https://github.com/afaqulislam/CIRO_AI",
    image: "/projects/ciro-ai.svg",
  },
  {
    title: "Taskory",
    tagline: "AI full-stack task manager",
    description:
      "Task manager with natural language processing, JWT auth, real-time management and multi-AI-provider support on a Python backend.",
    tags: ["Python", "FastAPI", "NLP", "JWT"],
    year: "2025",
    href: "https://github.com/afaqulislam/todo-full-stack-ai-chatbot-web-application",
    image: "/projects/taskory.svg",
  },
  {
    title: "25 Python Projects",
    tagline: "Production-ready portfolio",
    description:
      "25 production-ready Python projects — socket games, computer vision, AI assistants, REST APIs and full-stack integration, built for GIAIC.",
    tags: ["Python", "Computer Vision", "REST APIs"],
    year: "2025",
    href: "https://github.com/afaqulislam/25-Python-Projects",
    image: "/projects/25-python-projects.svg",
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
      "Co-Founder and COO of an AI automation and SaaS startup, leading product engineering and client delivery.",
    achievements: [
      "Lead operations, technical execution and product delivery, structuring workflows from concept to deployment.",
      "Build full-stack features and AI-powered functionality end to end for client-facing applications.",
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
  { label: "X", href: "https://x.com/afaqulislam708", icon: Twitter },
  { label: "GitHub", href: "https://github.com/afaqulislam", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/afaqulislam", icon: Linkedin },
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
  "Google Gemini",
  "OpenAI Agents SDK",
  "Groq AI",
  "Framer Motion",
  "Google Cloud Run",
  "Docker",
] as const;

export const principles = [
  {
    icon: Zap,
    title: "Full-stack ownership",
    text: "From spec to deployment — web, AI and automation, end to end.",
  },
  {
    icon: ShieldCheck,
    title: "AI-powered systems",
    text: "Agentic automation across video, voice, data and workflows.",
  },
  {
    icon: Layers,
    title: "Product & operations",
    text: "Co-founding Neofyx and leading scoping, architecture and delivery.",
  },
  {
    icon: Sparkles,
    title: "Open source first",
    text: "70+ public repositories and active contribution on GitHub.",
  },
] as const;

export const contactMeta = [
  { icon: Cpu, label: "Role", value: "Full-Stack & AI Engineer" },
  { icon: Boxes, label: "Company", value: "Neofyx — Co-Founder & COO" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: Cog, label: "Availability", value: "Open to work" },
] as const;