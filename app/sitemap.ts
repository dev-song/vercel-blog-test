import { posts } from "@/lib/posts";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
