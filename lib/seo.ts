import { achievements, education, skillGroups, socials } from "./data";

export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://portfolio-landingpage-v2-aui.vercel.app"),
);

export const SITE_NAME = "Afaq Ul Islam";
export const SITE_DESCRIPTION =
  "Agentic AI Engineer and Full-Stack Developer at Neofyx, building Multi-Agent AI systems, automation and web apps from Karachi, Pakistan.";

const SOCIAL_PROFILES = socials
  .map((social) => social.href)
  .filter((href) => href.startsWith("http"));

const KNOWS_ABOUT = Array.from(
  new Set(skillGroups.flatMap((group) => group.items)),
);

const alumniOf = Array.from(
  new Set(education.map((entry) => entry.institution)),
).map((name) => ({ "@type": "EducationalOrganization", name }));

const WORKS_FOR = [{ "@type": "Organization", name: "Neofyx" }];

export const personJsonLd = {
  "@type": "Person",
  "@id": new URL("/#person", SITE_URL).toString(),
  name: SITE_NAME,
  alternateName: "AUI",
  url: SITE_URL.toString(),
  image: [
    new URL("/icons/icon-512.png", SITE_URL).toString(),
    new URL("/opengraph-image", SITE_URL).toString(),
  ],
  jobTitle: "Agentic AI Engineer & Full-Stack Developer",
  description: SITE_DESCRIPTION,
  email: "mailto:afaqulislam707@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  alumniOf,
  worksFor: WORKS_FOR,
  knowsAbout: KNOWS_ABOUT,
  sameAs: SOCIAL_PROFILES,
  award: achievements.map((achievement) => achievement.title),
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personJsonLd,
    {
      "@type": "WebSite",
      "@id": new URL("/#website", SITE_URL).toString(),
      url: SITE_URL.toString(),
      name: `${SITE_NAME} — Agentic AI Engineer`,
      alternateName: "AUI",
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": new URL("/#person", SITE_URL).toString() },
    },
    {
      "@type": "ProfilePage",
      "@id": new URL("/#webpage", SITE_URL).toString(),
      url: SITE_URL.toString(),
      name: `${SITE_NAME} — Agentic AI Engineer`,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": new URL("/#website", SITE_URL).toString() },
      mainEntity: { "@id": new URL("/#person", SITE_URL).toString() },
      about: { "@id": new URL("/#person", SITE_URL).toString() },
    },
  ],
};
