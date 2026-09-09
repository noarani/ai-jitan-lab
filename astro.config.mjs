// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://noarani.github.io/ai-jitan-lab/
export default defineConfig({
  site: 'https://noarani.github.io',
  base: '/ai-jitan-lab',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
