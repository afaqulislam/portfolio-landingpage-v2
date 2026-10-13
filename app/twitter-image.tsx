import { ImageResponse } from "next/og";
import { OgImageContent } from "./components/og-image";

export const alt = "Afaq Ul Islam — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return new ImageResponse(<OgImageContent />, size);
}