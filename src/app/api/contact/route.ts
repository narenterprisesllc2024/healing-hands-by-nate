import { NextResponse } from "next/server";
import { z } from "zod";
import { appendSubmission, relayWebhook } from "@/lib/store";

export const runtime = "nodejs";

const Schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(4000),
  honeypot: z.string().optional()
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true, message: "Thanks." });
  }

  const entry = await appendSubmission({
    type: "contact",
    email: parsed.data.email,
    name: parsed.data.name,
    phone: parsed.data.phone || undefined,
    message: parsed.data.message,
    source: "contact-form"
  });

  await relayWebhook(process.env.CONTACT_WEBHOOK_URL, entry);

  return NextResponse.json({
    ok: true,
    message: "Thanks — Nate will be in touch within a day or two."
  });
}
