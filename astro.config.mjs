// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ahmettayfur.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    // Writes /sitemap-index.xml. The privacy and terms pages of every
    // product are noindex, so they stay out of it; support pages stay in.
    sitemap({
      filter: (page) => !/\/(privacy|terms)\/$/.test(new URL(page).pathname),
    }),
  ],
});
