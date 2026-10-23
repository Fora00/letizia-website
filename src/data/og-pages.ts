import { events } from './events';

// Per-page Open Graph card copy. Keys mirror how LayoutV5 slugifies the
// current path (path segments joined by '-', '' -> 'home'): a page whose
// slug appears here automatically gets /og/<slug>.png as its share image.
// Keep titles short — they render at ~64px on a 1200x630 card.
export interface OgPage {
  title: string;
  subtitle: string;
}

export const ogPages: Record<string, OgPage> = {
  'home': {
    title: 'Chinesiologa Clinica e Personal Trainer',
    subtitle: 'Movimento su misura per la tua salute',
  },
  'chi-sono': {
    title: 'Chi sono',
    subtitle: 'Chinesiologa clinica — MSc in Health and Physical Activity',
  },
  'cosa-offro': {
    title: 'Cosa offro',
    subtitle: 'Chinesiologia clinica e personal training su misura',
  },
  'contatti': {
    title: 'Contattami',
    subtitle: 'Consulenza gratuita di 30 minuti, senza impegno',
  },
  'dicono-di-me': {
    title: 'Dicono di me',
    subtitle: 'Le esperienze di chi ha lavorato con me',
  },
  'newsletter': {
    title: 'Newsletter',
    subtitle: 'Movimento, salute e benessere — ogni settimana',
  },
  'eventi': {
    title: 'Workshop & Corsi',
    subtitle: 'Eventi in presenza e online',
  },
  'en': {
    title: 'English-speaking Kinesiologist in Trento',
    subtitle: 'Sessions in English — in person or online',
  },
  'de': {
    title: 'Klinische Kinesiologin in Trient',
    subtitle: 'Termine auf Italienisch oder Englisch',
  },
  ...Object.fromEntries(
    events.map((e) => [
      `eventi-${e.slug}`,
      { title: e.shortTitle, subtitle: `${e.date} · ${e.location}` },
    ])
  ),
};
