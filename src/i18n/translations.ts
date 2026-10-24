// Single source of truth for UI strings.
// Chrome strings (navbar/footer/cookie/layout) live here; each page's copy lives in ./pages/<page>.ts
// and is merged below. Every leaf is a tuple in the order of `languages` in ./utils.ts: [italiano, english].
// Use it with `const t = useTranslations(lang)` then `t('navbar.button_cta')`.
import { home } from './pages/home';
import { about } from './pages/about';
import { services } from './pages/services';
import { contact } from './pages/contact';
import { reviews } from './pages/reviews';
import { newsletter } from './pages/newsletter';
import { privacy } from './pages/privacy';
import { notfound } from './pages/notfound';
import { shared } from './pages/shared';

export const translations = {
  home, about, services, contact, reviews, newsletter, privacy, notfound, shared,
  navbar: {
    home: ['Home', 'Home'],
    about: ['Chi sono', 'About me'],
    services: ['Cosa offro', 'What I offer'],
    button_cta: ['Contatti', 'Contact me'],
    logo_alt: ['Logo LM', 'LM logo'],
    menu_open: ['Apri menu', 'Open menu'],
    menu_close: ['Chiudi menu', 'Close menu'],
    theme_to_light: ['Passa al tema chiaro', 'Switch to light theme'],
    theme_to_dark: ['Passa al tema scuro', 'Switch to dark theme'],
    language_switch: ["Passa all'inglese", 'Switch to Italian'],
  },
  footer: {
    contacts_title: ['Contatti', 'Contact'],
    address: ['Via Brescia, 15 - Trento', 'Via Brescia, 15 - Trento, Italy'],
    also_available: ['Disponibile anche a Rovereto e Online', 'Also available in Rovereto and online'],
    links_title: ['Link utili', 'Useful links'],
    link_reviews: ['Dicono di me', 'Reviews'],
    link_newsletter: ['Newsletter', 'Newsletter'],
    follow_title: ['Seguimi', 'Follow me'],
    rights: ['Tutti i diritti riservati.', 'All rights reserved.'],
  },
  cookie: {
    aria_label: ['Informativa cookie', 'Cookie notice'],
    text: [
      'Questo sito non usa cookie di profilazione: salva solo preferenze tecniche (come il tema) sul tuo dispositivo. I servizi di terze parti (Calendly, Tally, Substack) potrebbero impostare cookie propri quando interagisci con loro.',
      'This site does not use profiling cookies: it only stores technical preferences (such as the theme) on your device. Third-party services (Calendly, Tally, Substack) may set their own cookies when you interact with them.',
    ],
    privacy_link: ['Informativa completa', 'Full privacy notice'],
    accept: ['Ho capito', 'Got it'],
  },
  meta: {
    default_description: [
      'Letizia Mancini, chinesiologa clinica e personal trainer a Trento e Rovereto, anche online. Contattami per un percorso di allenamento personalizzato.',
      'Letizia Mancini, clinical kinesiologist and personal trainer in Trento and Rovereto, Italy, also online. Get in touch for a personalised training programme.',
    ],
    website_description: ['Chinesiologa clinica e personal trainer', 'Clinical kinesiologist and personal trainer'],
    job_title: ['Chinesiologa clinica e Personal Trainer', 'Clinical Kinesiologist and Personal Trainer'],
    business_name: ['Letizia Mancini — Chinesiologa Clinica', 'Letizia Mancini — Clinical Kinesiologist'],
    business_description: [
      'Servizi di chinesiologia clinica e personal training in Trentino-Alto Adige e online',
      'Clinical kinesiology and personal training services in Trentino-Alto Adige, Italy, and online',
    ],
    degree_motor_sciences: ['Laurea in Scienze Motorie', 'Bachelor\'s degree in Exercise and Sport Sciences'],
    degree_level_bachelor: ['Laurea', "Bachelor's degree"],
    degree_level_master: ['Laurea magistrale', "Master's degree"],
    credential_hypopressive: ['Ginnastica Ipopressiva — Metodo Caufriez', 'Hypopressive Gymnastics — Caufriez Method'],
    credential_predictive: [
      'Medicina Predittiva e Regolazione Funzionale — Open Academy of Medicine',
      'Predictive Medicine and Functional Regulation — Open Academy of Medicine',
    ],
    knows_about: [
      { name: ['Chinesiologia clinica', 'Clinical kinesiology'] },
      { name: ['Attività Fisica Adattata', 'Adapted Physical Activity'] },
      { name: ['Esercizio fisico per patologie croniche', 'Exercise for chronic conditions'] },
      { name: ['Movimento e disturbi del comportamento alimentare', 'Movement and eating disorders'] },
      { name: ['Ginnastica ipopressiva', 'Hypopressive gymnastics'] },
    ],
    service_types: [
      { name: ['Chinesiologia clinica', 'Clinical kinesiology'] },
      { name: ['Attività Fisica Adattata', 'Adapted Physical Activity'] },
      { name: ['Personal training', 'Personal training'] },
      { name: ['Allenamento online', 'Online training'] },
    ],
    area_online: ['Online', 'Online'],
    breadcrumb: {
      chi_sono: ['Chi sono', 'About me'],
      cosa_offro: ['Cosa offro', 'What I offer'],
      contatti: ['Contatti', 'Contact'],
      dicono_di_me: ['Dicono di me', 'Reviews'],
      newsletter: ['Newsletter', 'Newsletter'],
      privacy: ['Privacy', 'Privacy'],
    },
  },
  layout: {
    skip_to_content: ['Vai al contenuto principale', 'Skip to main content'],
    back_to_top: ['Torna in cima', 'Back to top'],
  },
} as const;
