import { defineCollection} from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
