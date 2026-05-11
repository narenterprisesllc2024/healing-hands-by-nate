type MauticContact = {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  tags?: string[];
};

type MauticResult = {
  ok: boolean;
  contactId?: number;
  skipped?: boolean;
  error?: string;
};

const MAUTIC_API_URL = process.env.MAUTIC_API_URL || "";
const MAUTIC_API_USER = process.env.MAUTIC_API_USER || "";
const MAUTIC_API_PASS = process.env.MAUTIC_API_PASS || "";
const MAUTIC_SEGMENT_ID = process.env.MAUTIC_SEGMENT_ID || "";

function authHeader(): string {
  return "Basic " + Buffer.from(`${MAUTIC_API_USER}:${MAUTIC_API_PASS}`).toString("base64");
}

function isConfigured(): boolean {
  return Boolean(MAUTIC_API_URL && MAUTIC_API_USER && MAUTIC_API_PASS && MAUTIC_SEGMENT_ID);
}

export async function mauticCapture(contact: MauticContact): Promise<MauticResult> {
  if (!isConfigured()) {
    console.warn("[mautic] env not configured — skipping contact upsert");
    return { ok: false, skipped: true };
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader(),
  };

  try {
    const contactRes = await fetch(`${MAUTIC_API_URL}/contacts/new`, {
      method: "POST",
      headers,
      body: JSON.stringify(contact),
    });

    if (!contactRes.ok) {
      const txt = await contactRes.text().catch(() => "");
      console.error("[mautic] contact create failed", contactRes.status, txt.slice(0, 200));
      return { ok: false, error: `contact create ${contactRes.status}` };
    }

    const data = await contactRes.json();
    const contactId: number | undefined = data?.contact?.id;
    if (!contactId) {
      console.error("[mautic] no contact id in response");
      return { ok: false, error: "no contact id" };
    }

    const segRes = await fetch(
      `${MAUTIC_API_URL}/segments/${MAUTIC_SEGMENT_ID}/contact/${contactId}/add`,
      { method: "POST", headers },
    );

    if (!segRes.ok) {
      const txt = await segRes.text().catch(() => "");
      console.error("[mautic] segment add failed", segRes.status, txt.slice(0, 200));
      return { ok: false, contactId, error: `segment add ${segRes.status}` };
    }

    return { ok: true, contactId };
  } catch (err) {
    console.error("[mautic] unexpected error", err);
    return { ok: false, error: String(err) };
  }
}
