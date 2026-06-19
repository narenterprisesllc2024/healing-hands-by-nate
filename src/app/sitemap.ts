import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { conditions } from "@/lib/conditions";
import { servingAreas } from "@/lib/serving";
import { getAllPostMeta } from "@/lib/blog";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostMeta();
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/conditions",
    "/serving",
    "/about",
    "/contact",
    "/blog",
    "/membership",
    "/neck-reset"
  ];

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
    ...conditions.map((c) => ({
      url: `${site.url}/conditions/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9
    })),
    ...servingAreas.map((a) => ({
      url: `${site.url}/serving/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
