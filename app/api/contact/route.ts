import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO ?? "afaqulislam707@gmail.com";
const RESEND_FROM =
  process.env.RESEND_FROM ?? "Afaq Ul Islam <onboarding@resend.dev>";

const MAX_NAME = 80;
const MAX_EMAIL = 160;
const MAX_MESSAGE = 5000;

const allowedHosts = new Set([
  "portfolio-landingpage-v2-aui.vercel.app",
  "localhost",
]);
const siteUrl =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL;
if (siteUrl) {
  try {
    allowedHosts.add(new URL(siteUrl).hostname);
  } catch {
    /* ignore invalid env */
  }
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, number[]>();

export async function POST(request: Request) {
  const origin =
    request.headers.get("origin") ?? request.headers.get("referer");
  if (origin) {
    try {
      const { hostname } = new URL(origin);
      if (
        !allowedHosts.has(hostname) &&
        !hostname.startsWith("localhost") &&
        !hostname.endsWith(".vercel.app")
      ) {
        return NextResponse.json({ error: "Forbidden." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const now = Date.now();
  const timestamps = (attempts.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    attempts.set(ip, timestamps);
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }
  timestamps.push(now);
  attempts.set(ip, timestamps);

  let body: {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body?.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name)
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );

  if (name.length > MAX_NAME)
    return NextResponse.json(
      { error: "Name is too long." },
      { status: 400 },
    );

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );

  if (email.length > MAX_EMAIL)
    return NextResponse.json(
      { error: "Email is too long." },
      { status: 400 },
    );

  if (message.length < 10)
    return NextResponse.json(
      {
        error:
          "Your message is a little short — please add at least 10 characters.",
      },
      { status: 400 },
    );

  if (message.length > MAX_MESSAGE)
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `New portfolio message from ${name}`.slice(0, 120),
        text: `${message}\n\n— ${name} (${email})`.slice(0, 5200),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 504 },
    );
  } finally {
    clearTimeout(timeout);
  }
}