// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tecloudz.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  security: {
    csp: true
  },
  integrations: [sitemap()]
});
