import type { MetadataRoute } from "next";

const BASE_URL = "https://call360colombia.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/paginas-web", priority: 0.9, changeFrequency: "weekly" },
    { path: "/crm-whatsapp", priority: 0.9, changeFrequency: "weekly" },
    { path: "/demo", priority: 0.9, changeFrequency: "weekly" },
    { path: "/nosotros", priority: 0.85, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crm-llamadas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios", priority: 0.8, changeFrequency: "monthly" },
    { path: "/call-center", priority: 0.8, changeFrequency: "monthly" },
    { path: "/licencias", priority: 0.75, changeFrequency: "monthly" },
    { path: "/marketing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industrias", priority: 0.7, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
