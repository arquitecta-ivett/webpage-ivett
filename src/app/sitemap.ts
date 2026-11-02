import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/servicios", 0.9, "monthly"],
    ["/proyectos", 0.8, "weekly"],
    ["/metodo-de-trabajo", 0.7, "monthly"],
    ["/arquitecta-ivett-diaz", 0.7, "monthly"],
    ["/contacto", 0.8, "yearly"],
    ["/blog", 0.6, "weekly"],
    ["/politica-de-privacidad", 0.1, "yearly"],
  ];
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified: now, priority, changeFrequency })),
    ...services.map((s) => ({ url: absoluteUrl(`/servicios/${s.slug}`), lastModified: now, priority: 0.9, changeFrequency: "monthly" as const })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.dateModified), priority: 0.6, changeFrequency: "monthly" as const })),
  ];
}
