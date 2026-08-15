import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { urlFor } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/work", "/about", "/uses", "/contact"];
  const projectPaths = projects.map((p) => `/work/${p.slug}`);
  const allPaths = [...staticPaths, ...projectPaths];

  return allPaths.map((path) => ({
    url: urlFor(routing.defaultLocale, path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
    alternates: {
      languages: {
        fr: urlFor("fr", path),
        en: urlFor("en", path),
      },
    },
  }));
}
