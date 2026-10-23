import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ogPages } from '../../data/og-pages';

// Build-time generated Open Graph cards (1200x630) for nicer WhatsApp/social
// shares. One PNG per entry in og-pages.ts; LayoutV5 picks them up by slug.
// Satori needs non-variable fonts, hence @fontsource/montserrat's woff files
// (the site itself ships the variable woff2 — this dep is build-only).

export function getStaticPaths() {
  return Object.keys(ogPages).map((slug) => ({ params: { slug } }));
}

const fontDir = resolve(process.cwd(), 'node_modules/@fontsource/montserrat/files');
const [montserratBold, montserratMedium] = await Promise.all([
  readFile(resolve(fontDir, 'montserrat-latin-700-normal.woff')),
  readFile(resolve(fontDir, 'montserrat-latin-500-normal.woff')),
]);

const NAVY = '#0f2c52';
const NAVY_DEEP = '#07192d';
const SAGE = '#48bb78';

export const GET: APIRoute = async ({ params }) => {
  const page = ogPages[params.slug as string];

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundImage: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
          color: '#ffffff',
          fontFamily: 'Montserrat',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { width: '14px', height: '48px', backgroundColor: SAGE, borderRadius: '7px' },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '30px', fontWeight: 700, letterSpacing: '0.5px' },
                          children: 'Letizia Mancini',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '20px', fontWeight: 500, color: SAGE },
                          children: 'Chinesiologa clinica · Personal trainer',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '20px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: page.title.length > 34 ? '56px' : '68px',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      maxWidth: '1000px',
                    },
                    children: page.title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '30px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.75)',
                      maxWidth: '950px',
                    },
                    children: page.subtitle,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.65)',
              },
              children: [
                { type: 'div', props: { children: 'letiziamancini.it' } },
                { type: 'div', props: { children: 'Trento · Rovereto · Online' } },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Montserrat', data: montserratBold, weight: 700, style: 'normal' },
        { name: 'Montserrat', data: montserratMedium, weight: 500, style: 'normal' },
      ],
    }
  );

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  }).render().asPng();

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
