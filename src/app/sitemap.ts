import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nixdapp.com";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
