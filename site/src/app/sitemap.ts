import type { MetadataRoute } from "next";
import { site, stores } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/oculos-de-grau",
    "/oculos-de-sol",
    "/lentes",
    "/exame-de-vista",
    "/lojas",
    "/sobre",
    "/contato",
    "/privacidade",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const storeRoutes = stores.map((store) => ({
    url: `${site.url}/lojas/${store.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...storeRoutes];
}
