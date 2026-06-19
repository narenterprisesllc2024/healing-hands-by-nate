// /llms-full.txt — expanded llms.txt with all primary content inlined.
// Standard emerging in 2024-25 for sites that want AI search engines to ingest
// the full corpus without having to crawl. Returns one big markdown blob.

import { services } from "@/lib/services";
import { conditions } from "@/lib/conditions";
import { servingAreas } from "@/lib/serving";
import { getAllPostMeta, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const lines: string[] = [];

  // Header
  lines.push(`# Healing Hands By Nate — Full Content Corpus`);
  lines.push("");
  lines.push(
    `Therapeutic massage, Reiki, and life coaching practice in Union, Missouri, ` +
      `operated by Nate Ratcliff — a Licensed Massage Therapist, Reiki Master, and ` +
      `Certified Life Coach with ${site.practitioner.yearsExperience}+ years of experience.`
  );
  lines.push("");
  lines.push(`Public URL: ${site.url}`);
  lines.push(`Generated: ${new Date().toISOString().split("T")[0]} (auto-rebuilt on every deploy)`);
  lines.push("");
  lines.push("This file is the full text content of the public site, intended for AI search engines.");
  lines.push("");

  // Business basics
  lines.push("## Practice Information");
  lines.push("");
  lines.push(`- Name: ${site.name}`);
  lines.push(`- Practitioner: Nate Ratcliff (${site.practitioner.fullTitle})`);
  lines.push(`- Address: ${site.contact.address.street}, ${site.contact.address.city}, ${site.contact.address.state} ${site.contact.address.zip}`);
  lines.push(`- Phone: ${site.contact.phone}`);
  lines.push(`- Located at: ${site.contact.locatedAt}`);
  lines.push(`- Booking: ${site.bookingUrl}`);
  lines.push(`- Hours: ${site.hoursDisplay}`);
  lines.push(`- Service area: ${site.serviceArea.join(", ")}`);
  lines.push("");

  // Services
  lines.push("## Services Offered");
  lines.push("");
  for (const s of services) {
    lines.push(`### ${s.name} (${s.duration})`);
    lines.push("");
    lines.push(`*${s.tagline}*`);
    lines.push("");
    lines.push(s.intro);
    lines.push("");
    lines.push(`**What it helps with:**`);
    for (const b of s.benefits) lines.push(`- ${b}`);
    lines.push("");
    lines.push(`**Especially good for:**`);
    for (const g of s.goodFor) lines.push(`- ${g}`);
    lines.push("");
    if (s.faqs.length) {
      lines.push(`**Common questions:**`);
      lines.push("");
      for (const f of s.faqs) {
        lines.push(`- *${f.q}* — ${f.a}`);
      }
      lines.push("");
    }
    lines.push(`URL: ${site.url}/services/${s.slug}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Conditions
  lines.push("## Conditions Nate Helps With");
  lines.push("");
  for (const c of conditions) {
    lines.push(`### ${c.name}`);
    lines.push("");
    lines.push(`*${c.tagline}*`);
    lines.push("");
    lines.push(c.intro);
    lines.push("");
    lines.push(`**Why it happens:**`);
    for (const w of c.whyItHappens) lines.push(`- ${w}`);
    lines.push("");
    lines.push(`**What helps:**`);
    for (const h of c.whatHelps) lines.push(`- **${h.modality}**: ${h.why}`);
    lines.push("");
    lines.push(`**Try first at home:**`);
    for (const s of c.selfCareFirst) lines.push(`- ${s}`);
    lines.push("");
    lines.push(`**When to book:**`);
    for (const w of c.whenToCallProfessional) lines.push(`- ${w}`);
    lines.push("");
    lines.push(`**Scope-of-practice note:** ${c.whenToReferOut}`);
    lines.push("");
    if (c.faqs.length) {
      lines.push(`**FAQ:**`);
      lines.push("");
      for (const f of c.faqs) {
        lines.push(`- *${f.q}* — ${f.a}`);
      }
      lines.push("");
    }
    lines.push(`URL: ${site.url}/conditions/${c.slug}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Service area towns
  lines.push("## Towns Served");
  lines.push("");
  for (const a of servingAreas) {
    lines.push(`### ${a.town}, ${a.state} (${a.distanceMinutes} min drive)`);
    lines.push("");
    lines.push(a.intro);
    lines.push("");
    lines.push(`**Who comes in from ${a.town}:**`);
    for (const w of a.whoComesFromHere) lines.push(`- ${w}`);
    lines.push("");
    lines.push(`**Getting here:** ${a.drivingNotes}`);
    lines.push("");
    if (a.faqs.length) {
      lines.push(`**FAQ:**`);
      lines.push("");
      for (const f of a.faqs) {
        lines.push(`- *${f.q}* — ${f.a}`);
      }
      lines.push("");
    }
    lines.push(`URL: ${site.url}/serving/${a.slug}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Blog posts
  lines.push("## Blog Articles");
  lines.push("");
  const posts = await getAllPostMeta();
  for (const meta of posts) {
    const post = await getPost(meta.slug);
    if (!post) continue;
    lines.push(`### ${post.title}`);
    lines.push("");
    lines.push(`Published: ${post.date}  ·  Reading time: ${post.readingMinutes} min`);
    lines.push("");
    if (post.description) {
      lines.push(`*${post.description}*`);
      lines.push("");
    }
    // Strip HTML for the corpus (preserve paragraph breaks)
    const text = post.contentHtml
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?(p|h[1-6]|li|ul|ol)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    lines.push(text);
    lines.push("");
    lines.push(`URL: ${site.url}/blog/${post.slug}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  const body = lines.join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
