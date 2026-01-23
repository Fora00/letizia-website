// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fora00.github.io',
  base: '/letizia-website',
  output: 'static',
  integrations: [sitemap()],
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});