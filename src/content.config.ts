import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      showDescription: z.boolean().default(true),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverInPost: z.boolean().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      video: z
        .object({
          youtube: z.string().optional(),
          vk: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { posts };
