import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pillarSlugs = ['ai-fukugyo', 'gyomu-jitan', 'anzen-gyomu-bunsho', 'ai-gijiroku'] as const;

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(pillarSlugs),
    /** 主に狙う検索クエリ（メモ用・非表示） */
    query: z.string().optional(),
    publishedAt: z.string(), // YYYY-MM-DD
    updatedAt: z.string().optional(),
    draft: z.boolean().default(false),
    /** FAQPage 用（任意） */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { guides };
