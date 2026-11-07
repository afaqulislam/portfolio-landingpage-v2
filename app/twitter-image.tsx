import { ImageResponse } from "next/og";
import { OgImageContent } from "./components/og-image";

export const alt = "Afaq Ul Islam — Agentic AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return new ImageResponse(<OgImageContent />, {
    ...size,
    headers: {
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}