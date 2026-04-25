// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://fora00.github.io' : 'https://letiziamancini.it',
  ...(isGitHubPages ? { base: '/letizia-website/' } : {}),
  output: 'static',
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
