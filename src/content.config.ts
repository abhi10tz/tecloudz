import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      author: z.string().default('tecloudz Team'),
      category: z.string(),
      featured: z.boolean().default(false),
      image: image().optional(),
      tags: z.array(z.string()).optional()
    })
});

export const collections = { posts };
