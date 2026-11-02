import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Ivett Díaz",
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f2eb",
    theme_color: "#1b1a17",
    lang: "es-CO",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
