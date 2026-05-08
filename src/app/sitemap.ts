import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getAllPostMeta } from "@/lib/blog";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostMeta();
  const now = new Date();
  const staticPaths = ["", "/services", "/about", "/contact", "/blog", "/neck-reset"];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
