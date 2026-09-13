// @ts-check
import { defineConfig } from 'astro/config';

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
});
