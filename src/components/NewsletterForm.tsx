"use client";

import { useState } from "react";

type Props = {
  variant?: "default" | "leadMagnet" | "footer";
  source?: string;
  heading?: string;
  body?: string;
  cta?: string;
};

export default function NewsletterForm({
  variant = "default",
  source = "newsletter",
  heading = "Stay close to the work",
  body = "Occasional notes on bodywork, breath, recovery, and the kind of self-care that actually changes things.",
  cta = "Subscribe"
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage(data.message || "You're in. Check your email shortly.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Try again in a moment.");
    }
  }

  if (variant === "leadMagnet") {
    return (
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-stone-900/15 bg-cream-50 px-6 py-3.5 text-sm text-stone-900 placeholder:text-stone-500 focus:border-bronze-500 focus:outline-none"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : cta}
          </button>
        </div>
        {message && (
          <p className={`text-sm ${status === "error" ? "text-bronze-700" : "text-forest-700"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-900/10 bg-cream-200/50 p-8">
      <h3 className="font-serif text-2xl tracking-tightest">{heading}</h3>
      <p className="mt-2 text-sm text-stone-700">{body}</p>
      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-stone-900/15 bg-cream-50 px-6 py-3.5 text-sm text-stone-900 placeholder:text-stone-500 focus:border-bronze-500 focus:outline-none"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "..." : cta}
          </button>
        </div>
        {message && (
          <p className={`text-sm ${status === "error" ? "text-bronze-700" : "text-forest-700"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
