// privacy page strings. Leaf = ['italiano', 'english'].
const a = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-accent-text dark:text-accent-dark hover:underline">${text}</a>`;
const mail = 'letiziamancini.chinesiologa@gmail.com';
const mailLink = `<a href="mailto:${mail}" class="text-accent-text dark:text-accent-dark hover:underline">${mail}</a>`;

export const privacy = {
  meta: {
    title: ['Privacy Policy & Cookie Policy', 'Privacy Policy & Cookie Policy'],
    description: [
      "Informativa sulla privacy e sull'uso dei cookie del sito letiziamancini.it. Scopri come vengono trattati i tuoi dati.",
      'Privacy and cookie notice for letiziamancini.it. Find out how your data is handled.',
    ],
  },
  header: {
    badge: ['Privacy', 'Privacy'],
    title: ['Privacy Policy & Cookie Policy', 'Privacy Policy & Cookie Policy'],
    updated: ['Ultimo aggiornamento: giugno 2026', 'Last updated: June 2026'],
  },
  controller: {
    title: ['Titolare del trattamento', 'Data controller'],
    role: ['Chinesiologa Clinica e Personal Trainer — P.IVA 17459551002', 'Clinical Kinesiologist and Personal Trainer — P.IVA 17459551002'],
    email: ['Email', 'Email'],
    mail_link: [mailLink, mailLink],
  },
  data: {
    title: ['Dati raccolti e finalità', 'Data collected and purposes'],
    intro: [
      'Questo sito non raccoglie dati personali direttamente sui propri server. I servizi di terze parti integrati trattano i tuoi dati secondo le rispettive politiche:',
      'This website does not collect personal data directly on its own servers. The third-party services it integrates process your data according to their own policies:',
    ],
    services: [
      {
        html: [
          `<strong>Tally</strong> (form di contatto) — raccoglie nome, email e messaggio. Consulta la ${a('https://tally.so/help/privacy-policy', 'Privacy Policy di Tally')}.`,
          `<strong>Tally</strong> (contact form) — collects your name, email and message. See the ${a('https://tally.so/help/privacy-policy', 'Tally Privacy Policy')}.`,
        ],
      },
      {
        html: [
          `<strong>Calendly</strong> (prenotazione consulenza) — raccoglie nome ed email per gestire la prenotazione. Consulta la ${a('https://calendly.com/privacy', 'Privacy Policy di Calendly')}.`,
          `<strong>Calendly</strong> (consultation booking) — collects your name and email to manage the booking. See the ${a('https://calendly.com/privacy', 'Calendly Privacy Policy')}.`,
        ],
      },
      {
        html: [
          `<strong>Substack</strong> (newsletter) — raccoglie l'email per l'iscrizione alla newsletter ${a('https://tadamove.substack.com', 'tadamove.substack.com')}. Puoi disiscriverti in qualsiasi momento dal link in ogni email. Consulta la ${a('https://substack.com/privacy', 'Privacy Policy di Substack')}.`,
          `<strong>Substack</strong> (newsletter) — collects your email to subscribe you to the ${a('https://tadamove.substack.com', 'tadamove.substack.com')} newsletter. You can unsubscribe at any time using the link in every email. See the ${a('https://substack.com/privacy', 'Substack Privacy Policy')}.`,
        ],
      },
    ],
  },
  storage: {
    title: ['Cookie e storage locale', 'Cookies and local storage'],
    intro: [
      'Questo sito utilizza esclusivamente storage tecnico locale nel tuo browser — nessun cookie di profilazione o tracciamento.',
      'This website uses only technical local storage in your browser — no profiling or tracking cookies.',
    ],
    col_key: ['Chiave', 'Key'],
    col_type: ['Tipo', 'Type'],
    col_purpose: ['Scopo', 'Purpose'],
    theme_purpose: ['Salva la preferenza tema chiaro/scuro', 'Saves your light/dark theme preference'],
    cookie_ok_purpose: ["Registra la presa visione dell'informativa cookie", 'Records that you have seen the cookie notice'],
    note: [
      'Questi dati rimangono nel tuo browser e non vengono mai trasmessi a server esterni. Puoi eliminarli in qualsiasi momento dalle impostazioni del browser.',
      'This data stays in your browser and is never sent to external servers. You can delete it at any time from your browser settings.',
    ],
  },
  third_party: {
    title: ['Cookie di terze parti', 'Third-party cookies'],
    text: [
      "Quando interagisci con i widget di Calendly, Tally o Substack incorporati in questo sito, tali servizi potrebbero impostare i propri cookie secondo le rispettive politiche. L'interazione con questi servizi è facoltativa.",
      'When you interact with the Calendly, Tally or Substack widgets embedded in this website, those services may set their own cookies according to their own policies. Interacting with these services is optional.',
    ],
  },
  rights: {
    title: ['I tuoi diritti (GDPR)', 'Your rights (GDPR)'],
    intro: ['Ai sensi del Regolamento UE 2016/679 (GDPR) hai il diritto di:', 'Under EU Regulation 2016/679 (GDPR) you have the right to:'],
    list: [
      { text: ['accedere ai tuoi dati personali', 'access your personal data'] },
      { text: ['richiederne la rettifica o la cancellazione', 'request their rectification or erasure'] },
      { text: ['opporti o limitare il trattamento', 'object to or restrict processing'] },
      { text: ['richiedere la portabilità dei dati', 'request data portability'] },
      { text: ['presentare reclamo al Garante per la Protezione dei Dati Personali', 'lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)'] },
    ],
    exercise: ['Per esercitare questi diritti scrivimi a', 'To exercise these rights, write to me at'],
  },
} as const;
