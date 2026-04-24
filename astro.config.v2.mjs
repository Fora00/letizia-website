// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const ghBase = isGitHubPages ? '/letizia-website' : '';

export default defineConfig({
  site: isGitHubPages ? 'https://fora00.github.io' : 'https://letiziamancini.it',
  base: `${ghBase}/2`,
  srcDir: './versions/v2',
  outDir: './dist/2',
  publicDir: './public',
  output: 'static',
  server: {
    port: 3002
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
