"use client";

import dynamic from "next/dynamic";

const HeroLogoScene = dynamic(() => import("./hero-logo-scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
});

export default function HeroLogo() {
  return (
    <div
      className="h-full w-full"
      role="img"
      aria-label="AUI monogram, metallic lime 3D mark"
    >
      <HeroLogoScene />
    </div>
  );
}
