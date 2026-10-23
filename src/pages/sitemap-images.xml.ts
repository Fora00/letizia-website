import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import profileImgSrc from '../assets/images/letizia-mancini-ritratto.webp';
import heroImgSrc from '../assets/images/allenamento-personalizzato-pesi.jpg';
import aboutImgSrc from '../assets/images/letizia-mancini-chinesiologa-studio.jpg';
import cosaOffroImgSrc from '../assets/images/personal-training-trento-rovereto.jpg';
import studioImgSrc from '../assets/images/studio-chinesiologia-allenamento.jpg';

// Google Images sitemap: the studio/training photos aren't discoverable from
// sitemap-index.xml, so we list them per page here (referenced from robots.txt
// on the real domain). Transform params mirror the ones used on each page so
// the URLs point at the assets the build already emits.
export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.origin ?? 'https://letiziamancini.it';
  const base = (import.meta.env.BASE_URL as string).replace(/\/$/, '');

  const [hero, profile, about, cosaOffro, studio] = await Promise.all([
    getImage({ src: heroImgSrc, format: 'webp', width: 1400, quality: 80 }),
    getImage({ src: profileImgSrc, width: 650, height: 640 }),
    getImage({ src: aboutImgSrc, width: 640, height: 800 }),
    getImage({ src: cosaOffroImgSrc, format: 'webp', width: 1400, quality: 80 }),
    getImage({ src: studioImgSrc, format: 'webp', width: 1200, quality: 80 }),
  ]);

  const pages: Array<{ path: string; images: Array<{ src: string }> }> = [
    { path: '/', images: [hero, profile] },
    { path: '/chi-sono/', images: [about] },
    { path: '/cosa-offro/', images: [cosaOffro] },
    { path: '/contatti/', images: [studio] },
  ];

  const urls = pages
    .map(({ path, images }) => {
      const imageTags = images
        .map((img) => `    <image:image>
      <image:loc>${new URL(img.src, siteUrl).href}</image:loc>
    </image:image>`)
        .join('\n');
      return `  <url>
    <loc>${siteUrl}${base}${path}</loc>
${imageTags}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
