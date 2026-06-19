import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI search crawlers we explicitly invite. Default for "*" already allows,
// but being explicit signals openness to citation engines.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "YouBot",
  "cohere-ai"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/", disallow: ["/api/"] }))
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
