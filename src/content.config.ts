import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    subtitle: z.string(),
    category: z.enum(['residencial', 'comercial', 'reforma', 'patrimonial']),
    location: z.string(),
    year: z.number(),
    client: z.string().optional(),
    area: z.string().optional(),
    duration: z.string().optional(),
    coverImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
    excerpt: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { proyectos };
