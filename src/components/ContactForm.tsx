"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
      honeypot: fd.get("company")
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage(data.message);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Try again in a moment.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Phone (optional)" name="phone" type="tel" />
      <div>
        <label className="eyebrow block">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-stone-900/15 bg-cream-50 px-5 py-4 text-stone-900 placeholder:text-stone-500 focus:border-bronze-500 focus:outline-none"
          placeholder="What's going on? Any questions before booking?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message && (
        <p className={`text-sm ${status === "error" ? "text-bronze-700" : "text-forest-700"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-full border border-stone-900/15 bg-cream-50 px-5 py-3.5 text-stone-900 placeholder:text-stone-500 focus:border-bronze-500 focus:outline-none"
      />
    </div>
  );
}
