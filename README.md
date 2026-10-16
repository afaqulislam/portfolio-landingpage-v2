<p align="center">
  <img src="public/aui-mark.svg" width="128" height="128" alt="AUI monogram â€” Afaq Ul Islam" />
</p>

<h1 align="center">Afaq Ul Islam â€” Portfolio</h1>

<p align="center">
  A premium, animated portfolio landing page for a full-stack &amp; AI engineer â€”
  built with <strong>Next.js 15</strong>, <strong>TypeScript</strong> and <strong>Tailwind CSS</strong>, with an
  electric laser-drawn <strong>AUI</strong> monogram, glassmorphism, and a working contact form powered by <strong>Resend</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0.7-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React-19-teal?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey?style=flat-square" alt="License: All Rights Reserved" />
</p>

<p align="center">
  <a href="https://portfolio-landingpage-v2-aui.vercel.app"><strong>View live site â†’</strong></a>
  Â· <a href="https://github.com/afaqulislam"><strong>GitHub profile</strong></a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contact Form API](#contact-form-api)
- [Scripts](#scripts)
- [Accessibility & Performance](#accessibility--performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is the personal portfolio of **Afaq Ul Islam** â€” Co-Founder & COO at **Neofyx**. It showcases product work, engineering experience, education and milestones in a visually meticulous, single-accent design language: dark glass surfaces, a constant cyan accent (`#22d3ee`), fluid motion and an accessibility-first build.

The showpiece is a **laser-drawn AUI monogram** in the hero â€” the logo builds itself stroke by stroke with an electric spark effect, holds, then redraws on a loop. No animation library; it is pure SVG `stroke-dashoffset` keyframes.

## Features

- **âš¡ Electric hero logo** â€” the AUI monogram is drawn with a jagged, crackling laser stroke (`steps` + flicker keyframes), holds fully visible, then redraws â€” looped, with `prefers-reduced-motion` support.
- **âœ¨ Glassmorphism system** â€” double-bezel cards, film-grain overlay, layered depth and a mouse-tracked glass wordmark in the footer (Neofyx-style shine that follows the cursor).
- **ðŸŽ¨ One constant accent colour** â€” a single cyan hue applied consistently across the entire UI.
- **ðŸ“¨ Working contact form** â€” client-side validation, sending/failure/success states, delivered via the Resend API route (`app/api/contact`).
- **ðŸ“œ Scroll-reveal animations** â€” lightweight `IntersectionObserver` reveals that respect `prefers-reduced-motion`.
- **â™¿ Accessible by default** â€” semantic landmarks, a skip link, keyboard-friendly navigation, visible focus rings and tested colour contrast.
- **ðŸ“± Fully responsive** â€” fluid layouts from mobile through ultra-wide.
- **âš¡ Performance focused** â€” server-first components, GPU-only animation and stable layout.
- **ðŸ›  Content-driven** â€” all copy lives in a single `lib/data.ts` file (edit content without touching JSX).
- **SEO-ready** — robots, sitemap, web app manifest, JSON-LD structured data (Person/WebSite/ProfilePage), canonical URLs, og:locale, llms.txt for AI crawlers, and 
oindex on 404 pages.

