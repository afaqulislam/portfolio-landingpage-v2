import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO ?? "afaqulislam707@gmail.com";
const RESEND_FROM =
  process.env.RESEND_FROM ?? "Afaq Ul Islam <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name)
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json(
      { error: "Please enter a valid email address." },
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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}