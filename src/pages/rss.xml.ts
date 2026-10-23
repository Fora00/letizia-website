import type { APIRoute } from 'astro';
import posts from '../data/newsletter-posts.json';

// RSS mirror of the on-domain newsletter archive (/newsletter). Items link
// out to the canonical Substack posts, so non-Substack readers can follow
// without an email subscription.

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.origin ?? 'https://letiziamancini.it';
  const base = (import.meta.env.BASE_URL as string).replace(/\/$/, '');
  const selfUrl = `${siteUrl}${base}/rss.xml`;
  const archiveUrl = `${siteUrl}${base}/newsletter/`;

  const items = posts
    .filter((p) => p.title && p.link)
    .map((p) => {
      const pubDate = p.dateISO ? `\n      <pubDate>${new Date(p.dateISO).toUTCString()}</pubDate>` : '';
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(p.link)}</link>
      <guid isPermaLink="true">${escapeXml(p.link)}</guid>
      <description>${escapeXml(p.description)}</description>${pubDate}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Letizia Mancini — Newsletter</title>
    <link>${archiveUrl}</link>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml"/>
    <description>Idee, consigli e riflessioni su movimento, salute e benessere, di Letizia Mancini, chinesiologa clinica a Trento e Rovereto.</description>
    <language>it-it</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
