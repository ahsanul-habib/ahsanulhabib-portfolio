import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ahsanulhabib.vercel.app",
    },
    {
      url: "https://ahsanulhabib.vercel.app/about",
    },
    {
      url: "https://ahsanulhabib.vercel.app/projects",
    },
    {
      url: "https://ahsanulhabib.vercel.app/articles",
    },
    {
      url: "https://ahsanulhabib.vercel.app/contact",
    },
    {
      url: "https://ahsanulhabib.vercel.app/github",
    }
  ];
}