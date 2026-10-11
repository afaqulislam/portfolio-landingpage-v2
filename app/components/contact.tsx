"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./reveal";
import { contactMeta, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};

    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Please add a little more detail (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
  }

  const inputClasses = (invalid?: string) =>
    cn(
      "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors duration-300 focus-visible:outline-none focus-visible:border-[hsl(var(--brand-cyan))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-cyan))]/40",
      invalid ? "border-red-500/60" : "border-white/10 hover:border-white/20",
    );

  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="accent-text">worth shipping.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/55">
              Have a product, an AI agent or an automation workflow in mind? Tell
              me about it — I usually reply within a day.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactMeta.map((meta) => {
                const Icon = meta.icon;
                return (
                  <div
                    key={meta.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
                  >
                    <Icon
                      className="size-5 text-[hsl(var(--brand-cyan))]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                        {meta.label}
                      </dt>
                      <dd className="text-sm text-white/80">{meta.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-500 ease-fluid hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                  >
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120} className="h-full">
            <div className="bezel h-full">
              <div className="bezel-core h-full p-6 sm:p-8">
                {sent ? (
                  <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--brand-cyan))] text-[#050505]">
                      <Check className="size-7" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-2xl font-medium tracking-tight">
                      Message received
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                      Thanks, {form.name.split(" ")[0] || "there"} — I&apos;ll get
                      back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm(initialForm);
                      }}
                      className="cta-ghost mt-8"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm text-white/70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) => update("name", event.target.value)}
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={inputClasses(errors.name)}
                        />
                        {errors.name ? (
                          <p
                            id="name-error"
                            role="alert"
                            className="mt-2 text-xs text-red-400"
                          >
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm text-white/70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) =>
                            update("email", event.target.value)
                          }
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={inputClasses(errors.email)}
                        />
                        {errors.email ? (
                          <p
                            id="email-error"
                            role="alert"
                            className="mt-2 text-xs text-red-400"
                          >
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm text-white/70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(event) => update("message", event.target.value)}
                        placeholder="Tell me about your project..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={cn("resize-none", inputClasses(errors.message))}
                      />
                      {errors.message ? (
                        <p
                          id="message-error"
                          role="alert"
                          className="mt-2 text-xs text-red-400"
                        >
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
                      <button type="submit" className="cta w-full justify-center sm:w-auto">
                        Send message
                        <span className="cta-icon">
                          <ArrowUpRight
                            className="size-4"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                      <p className="text-center text-xs text-white/40 sm:text-left">
                        Or email{" "}
                        <a
                          href="mailto:afaqulislam707@gmail.com"
                          className="text-white/70 underline-offset-4 hover:underline"
                        >
                          afaqulislam707@gmail.com
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
