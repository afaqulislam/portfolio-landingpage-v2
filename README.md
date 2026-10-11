# Afaq Ul Islam — Portfolio Landing Page

A modern, animated portfolio landing page built with Next.js, TypeScript and Tailwind CSS — premium glassmorphism, a single constant accent colour, fluid motion and an accessibility-first build.

- Repository: https://github.com/afaqulislam/portfolio-landingpage-v2

## Features

- **Premium glassmorphism UI** — double-bezel cards, film-grain overlay and layered depth without visual noise.
- **One constant accent colour** — a single cyan hue (`#22d3ee`) used consistently across the whole UI, with no gradients anywhere.
- **Scroll-reveal animations** — lightweight `IntersectionObserver` reveals that respect `prefers-reduced-motion`.
- **Accessible by default** — semantic landmarks, a skip link, keyboard-friendly navigation, visible focus rings and tested colour contrast.
- **Fully responsive** — fluid layouts from mobile through ultra-wide.
- **Performance focused** — server-first components, GPU-only animations and stable layout.
- **Content-driven** — all copy lives in a single `lib/data.ts` file.

## Sections

Hero · About · Skills / Tech Stack · Projects · Experience / Timeline · Testimonials · Contact

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | Next.js 15 (App Router)             |
| Language  | TypeScript                          |
| UI        | React 19                            |
| Styling   | Tailwind CSS 3.4                    |
| Icons     | lucide-react                        |
| Fonts     | Geist (local, via `next/font/local`) |

## Getting Started

### Prerequisites

- Node.js 18.18 or newer

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it in your browser.

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server (Turbopack) |
| `npm run build`   | Create a production build       |
| `npm run start`   | Run the production build        |
| `npm run lint`    | Lint with ESLint                |

## Project Structure

```
portfolio-landingpage-v2/
├─ app/
│  ├─ components/     # Section and layout components
│  ├─ fonts/          # Geist variable fonts
│  ├─ globals.css     # Design tokens, utilities and base styles
│  ├─ layout.tsx      # Root layout, metadata and backdrop
│  └─ page.tsx        # Section composition
├─ lib/
│  ├─ data.ts         # All site content (edit here)
│  └─ utils.ts        # `cn` class-merge helper
├─ public/
│  └─ portrait.svg    # Hero artwork
├─ tailwind.config.ts
└─ next.config.ts
```

## Customization

- **Content** — edit `lib/data.ts` for projects, experience, achievements, skills and socials.
- **Accent colour** — change `--brand-cyan` in `app/globals.css`.
- **Metadata** — update `metadata` in `app/layout.tsx`.

## Deployment

This project is ready to deploy on any platform that supports Next.js. The simplest option is [Vercel](https://vercel.com/new):

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Deploy — no extra configuration required.

## Author

**Afaq Ul Islam** — Frontend Developer

- GitHub: https://github.com/afaqulislam
- Repository: https://github.com/afaqulislam/portfolio-landingpage-v2
