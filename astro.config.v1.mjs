// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const ghBase = isGitHubPages ? '/letizia-website' : '';

export default defineConfig({
  site: isGitHubPages ? 'https://fora00.github.io' : 'https://letiziamancini.it',
  base: `${ghBase}/1`,
  srcDir: './versions/v1',
  outDir: './dist/1',
  publicDir: './public',
  output: 'static',
  server: {
    port: 3001
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
