import { NextResponse } from "next/server";
import { z } from "zod";
import { appendSubmission, relayWebhook } from "@/lib/store";

export const runtime = "nodejs";

const Schema = z.object({
  email: z.string().email(),
  source: z.string().max(80).optional(),
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
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true, message: "Thanks." });
  }

  const entry = await appendSubmission({
    type: "subscribe",
    email: parsed.data.email,
    source: parsed.data.source || "newsletter"
  });

  await relayWebhook(process.env.NEWSLETTER_WEBHOOK_URL, entry);

  const isLeadMagnet = parsed.data.source === "neck-reset";
  return NextResponse.json({
    ok: true,
    message: isLeadMagnet
      ? "On its way — check your inbox in a few minutes."
      : "You're in. Welcome."
  });
}
