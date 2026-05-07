import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const FEED_URL = 'https://tadamove.substack.com/feed';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/newsletter-posts.json');

function extractCdata(str) {
  return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

function extractTag(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? extractCdata(m[1].trim()) : '';
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function decodeEntities(str) {
  return str
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, '’').replace(/&lsquo;/g, '‘')
    .replace(/&rdquo;/g, '”').replace(/&ldquo;/g, '“')
    .replace(/&ndash;/g, '–').replace(/&mdash;/g, '—');
}

const res = await fetch(FEED_URL, {
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
});

if (!res.ok) {
  console.error(`Fetch failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const xml = await res.text();
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 9);

const posts = items.map(([, body]) => {
  const title = decodeEntities(extractTag(body, 'title'));
  const link = extractTag(body, 'link') || extractTag(body, 'guid') || body.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1]?.trim() || '';
  const rawDesc = stripHtml(extractTag(body, 'description'));
  const description = decodeEntities(rawDesc.slice(0, 180).trimEnd() + (rawDesc.length > 180 ? '…' : ''));
  const pubDate = extractTag(body, 'pubDate');
  const enclosure = body.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] || '';
  const mediaCover = body.match(/<media:content[^>]+url="([^"]+)"/)?.[1] || '';
  const image = enclosure || mediaCover;
  const date = pubDate
    ? new Date(pubDate).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';
  return { title, link, description, date, image };
});

writeFileSync(OUT, JSON.stringify(posts, null, 2));
console.log(`Saved ${posts.length} posts to ${OUT}`);
