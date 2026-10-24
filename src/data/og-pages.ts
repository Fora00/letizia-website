
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
    subtitle: 'Consulenza di 30 minuti, senza impegno',
  },
  'dicono-di-me': {
    title: 'Dicono di me',
    subtitle: 'Le esperienze di chi ha lavorato con me',
  },
  'newsletter': {
    title: 'Newsletter',
    subtitle: 'Movimento, salute e benessere — ogni settimana',
  },
  // English pages: slug is the path under the /en/ prefix ('en' = English home)
  'en': {
    title: 'Clinical Kinesiologist & Personal Trainer',
    subtitle: 'Movement tailored to your health',
  },
  'en-chi-sono': {
    title: 'About me',
    subtitle: 'Clinical kinesiologist — MSc in Health and Physical Activity',
  },
  'en-cosa-offro': {
    title: 'What I offer',
    subtitle: 'Clinical kinesiology and tailored personal training',
  },
  'en-contatti': {
    title: 'Contact me',
    subtitle: '30-minute consultation, no commitment',
  },
  'en-dicono-di-me': {
    title: 'Reviews',
    subtitle: 'Experiences of people who have worked with me',
  },
  'en-newsletter': {
    title: 'Newsletter',
    subtitle: 'Movement, health and wellbeing — every week',
  },
};
