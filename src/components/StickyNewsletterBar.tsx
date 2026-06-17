"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "hhbn:sticky-newsletter-dismissed-v1";
const DISMISS_DAYS = 14;

export default function StickyNewsletterBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Suppress on funnel pages — they need conversion focus, no distractions
  const suppress = pathname?.startsWith("/go/") ?? false;

  useEffect(() => {
    if (suppress) return;
    try {
      const raw = localStorage.getItem(DISMISS_KEY);
      if (!raw) {
        const t = setTimeout(() => setOpen(true), 1800);
        return () => clearTimeout(t);
      }
      const until = Number(raw);
      if (!Number.isFinite(until) || Date.now() > until) {
        const t = setTimeout(() => setOpen(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {
      const t = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(
        DISMISS_KEY,
        String(Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000)
      );
    } catch {}
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "sticky-bar" })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage(data.message || "You're in.");
      setEmail("");
      try {
        localStorage.setItem(
          DISMISS_KEY,
          String(Date.now() + 365 * 24 * 60 * 60 * 1000)
        );
      } catch {}
      setTimeout(() => setOpen(false), 2400);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Try again in a moment.");
    }
  }

  if (suppress) return null;
  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Friday newsletter signup"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-900/10 bg-cream-100/95 px-4 py-3 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] backdrop-blur sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        {status === "success" ? (
          <p className="flex-1 text-sm text-stone-800 sm:text-base">{message}</p>
        ) : (
          <>
            <div className="flex-1 pr-2">
              <p className="font-serif text-base tracking-tightest text-stone-900 sm:text-lg">
                Friday Five from the table.
              </p>
              <p className="mt-0.5 text-xs text-stone-600 sm:text-sm">
                One short email every Friday — a move, a tool, a nugget, a practice, a seasonal note. Nothing else.
              </p>
            </div>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2 sm:flex-row sm:items-center"
            >
              <label htmlFor="sticky-newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="sticky-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="min-w-0 rounded-md border border-stone-900/15 bg-white px-3 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-1 focus:ring-bronze-500 sm:w-64"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary whitespace-nowrap px-4 py-2 text-sm disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Subscribe"}
              </button>
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss"
                title="Not now"
                className="text-stone-500 hover:text-stone-800 sm:ml-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </form>
          </>
        )}
        {status === "error" && (
          <p className="text-xs text-red-700 sm:ml-3">{message}</p>
        )}
      </div>
    </div>
  );
}
