import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { caseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/blog", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
