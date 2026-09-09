import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = await getCollection('guides', ({ data }) => !data.draft);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: guides
      .sort((a, b) => (a.data.publishedAt < b.data.publishedAt ? 1 : -1))
      .map((g) => ({
        title: g.data.title,
        description: g.data.description,
        pubDate: new Date(g.data.publishedAt),
        link: `${base}/${g.data.pillar}/${g.id}/`,
      })),
  });
}
