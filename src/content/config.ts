import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not strictly needed for default Markdown, but good for v5

const posts = defineCollection({
  // 'content' layer is default for markdown files in src/content
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Accepts "2025-12-25" string or actual date objects
    date: z.coerce.date(), 
    author: z.string().default('tecloudz Team'),
    category: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };