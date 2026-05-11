type ResendPayload = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const RESEND_FROM = process.env.RESEND_FROM || "Nate <nate@mysoviai.com>";

export async function resendSend(payload: ResendPayload): Promise<{ ok: boolean; id?: string; skipped?: boolean }> {
  if (!RESEND_API_KEY) {
    console.warn("[resend] API key missing — skipping send");
    return { ok: false, skipped: true };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: payload.from || RESEND_FROM,
        to: Array.isArray(payload.to) ? payload.to : [payload.to],
        subject: payload.subject,
        html: payload.html,
        ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
      }),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("[resend] send failed", res.status, txt.slice(0, 200));
      return { ok: false };
    }
    const data = await res.json();
    return { ok: true, id: data?.id };
  } catch (err) {
    console.error("[resend] unexpected error", err);
    return { ok: false };
  }
}

export function neckResetWelcomeEmail(siteUrl: string): { subject: string; html: string } {
  const pdfUrl = `${siteUrl}/downloads/neck-reset.pdf`;
  return {
    subject: "Your Neck Reset PDF is here",
    html: `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fafaf9;margin:0;padding:0;color:#292524;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;padding:32px 28px;">
  <h1 style="font-size:24px;font-weight:600;margin:0 0 16px;line-height:1.3;">Your Neck Reset PDF</h1>
  <p style="line-height:1.6;margin:0 0 16px;">Hey,</p>
  <p style="line-height:1.6;margin:0 0 16px;">Thanks for grabbing the guide. Here it is:</p>
  <p style="margin:24px 0;">
    <a href="${pdfUrl}" style="display:inline-block;background:#7c5c3b;color:#ffffff;padding:14px 28px;border-radius:32px;text-decoration:none;font-weight:500;">Download the PDF</a>
  </p>
  <p style="line-height:1.6;margin:0 0 16px;">Five minutes, no equipment, real relief. Do it once and pay attention to how your neck feels 30 minutes later. That's the test.</p>
  <p style="line-height:1.6;margin:0 0 16px;">One note: this works best when you're not actively fighting through a flare. If you're in the worst part of it, hit me up directly. Sometimes hands-on is the right call before self-care.</p>
  <p style="line-height:1.6;margin:32px 0 4px;">— Nate</p>
  <p style="line-height:1.6;margin:0;color:#78716c;font-size:14px;">Healing Hands by Nate</p>
  <hr style="border:none;border-top:1px solid #e7e5e4;margin:32px 0 16px;" />
  <p style="font-size:12px;color:#78716c;line-height:1.5;margin:0;">You're getting this because you signed up for the Neck Reset on healinghandsbynate.mysoviai.com. I'll send the occasional honest note about bodywork and recovery. <a href="${siteUrl}/unsubscribe" style="color:#78716c;">Unsubscribe anytime</a>.</p>
</div>
</body></html>`,
  };
}
