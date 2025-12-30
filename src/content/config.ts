import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Accepts "2025-12-25" string or actual date objects
    date: z.coerce.date(), 
    author: z.string().default('tecloudz Team'),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };