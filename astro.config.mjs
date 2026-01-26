// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Detect GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://fora00.github.io' : 'https://letiziamancini.it',
  base: isGitHubPages ? '/letizia-website' : '',
  output: 'static',
  integrations: [sitemap()],
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
