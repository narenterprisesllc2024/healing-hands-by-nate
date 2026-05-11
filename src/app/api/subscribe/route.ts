import { NextResponse } from "next/server";
import { z } from "zod";
import { appendSubmission, relayWebhook } from "@/lib/store";
import { mauticCapture } from "@/lib/mautic";
import { resendSend, neckResetWelcomeEmail } from "@/lib/email";

export const runtime = "nodejs";

const Schema = z.object({
  email: z.string().email(),
  source: z.string().max(80).optional(),
  honeypot: z.string().optional(),
  firstname: z.string().max(80).optional(),
  lastname: z.string().max(80).optional(),
  phone: z.string().max(40).optional(),
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healinghandsbynate.mysoviai.com";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true, message: "Thanks." });
  }

  const { email, source, firstname, lastname, phone } = parsed.data;

  const entry = await appendSubmission({
    type: "subscribe",
    email,
    name: firstname,
    phone,
    source: source || "newsletter",
  });

  await relayWebhook(process.env.NEWSLETTER_WEBHOOK_URL, entry);

  const mautic = await mauticCapture({
    email,
    firstname,
    lastname,
    phone,
    tags: source ? [`source:${source}`] : undefined,
  });

  if (source === "neck-reset") {
    const tmpl = neckResetWelcomeEmail(SITE_URL);
    const sendResult = await resendSend({
      to: email,
      subject: tmpl.subject,
      html: tmpl.html,
      replyTo: "narenterprisesllc2024@gmail.com",
    });
    if (!sendResult.ok && !sendResult.skipped) {
      console.error("[subscribe] welcome email send failed for", email);
    }
  }

  const isLeadMagnet = source === "neck-reset";
  return NextResponse.json({
    ok: true,
    mautic: mautic.ok,
    message: isLeadMagnet
      ? "On its way — check your inbox in a few minutes."
      : "You're in. Welcome.",
  });
}
