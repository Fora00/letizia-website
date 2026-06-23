// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://fora00.github.io' : 'https://letiziamancini.it',
  ...(isGitHubPages ? { base: '/letizia-website/' } : {}),
  output: 'static',
  integrations: [sitemap()],
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
