import type { APIRoute } from 'astro';

// Build-aware robots.txt: on the temporary GitHub Pages deployment the pages
// carry <meta name="robots" content="noindex"> (see LayoutV5), so we omit the
// sitemap there; on letiziamancini.it we advertise the real sitemap URL.
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? 'https://letiziamancini.it';
  const isTempDomain = origin.includes('fora00.github.io');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const lines = ['User-agent: *', 'Allow: /'];
  if (!isTempDomain) {
    lines.push('', `Sitemap: ${origin}${base}/sitemap-index.xml`);
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
