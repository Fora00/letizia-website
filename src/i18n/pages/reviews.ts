// reviews page strings. Leaf = ['italiano', 'english'].
export const reviews = {
  meta: {
    title: ['Recensioni — Letizia Mancini, Chinesiologa a Trento', 'Reviews — Letizia Mancini, Kinesiologist in Trento'],
    description: [
      'Leggi le recensioni di chi ha già scelto i servizi di Letizia Mancini, chinesiologa clinica e personal trainer a Trento e Rovereto.',
      'Read the reviews of those who have already chosen the services of Letizia Mancini, clinical kinesiologist and personal trainer in Trento and Rovereto.',
    ],
  },
  header: {
    badge: ['Testimonianze', 'Testimonials'],
    title: ['Dicono di me', 'Reviews'],
    subtitle: ['Le parole di chi ha già intrapreso un percorso con me.', 'The words of people who have already started a journey with me.'],
  },
  filters: {
    search_label: ['Cerca nelle recensioni', 'Search reviews'],
    search_placeholder: ['Cerca nelle recensioni…', 'Search reviews…'],
    rating_label: ['Filtra per stelle', 'Filter by stars'],
    all_stars: ['Tutte le stelle', 'All stars'],
    star_one: ['stella', 'star'],
    star_many: ['stelle', 'stars'],
    sort_label: ['Ordina per', 'Sort by'],
    sort_recent: ['Più recenti', 'Most recent'],
    sort_oldest: ['Meno recenti', 'Oldest'],
    sort_high: ['Voto più alto', 'Highest rating'],
    sort_low: ['Voto più basso', 'Lowest rating'],
    count_one: ['recensione', 'review'],
    count_many: ['recensioni', 'reviews'],
    empty: ['Nessuna recensione corrisponde alla ricerca.', 'No reviews match your search.'],
  },
  card: {
    aria: ['Recensione di', 'Review by'],
    stars_aria_suffix: ['stelle su 5', 'out of 5 stars'],
  },
  google_note: ['Queste sono le recensioni lasciate dai miei clienti su Google.', 'These are the reviews my clients have left on Google (shown in the original Italian).'],
  google_link: ['Leggile sulla scheda Google →', 'Read them on the Google listing →'],
  cta: {
    title: ['Sei la prossima?', 'Could you be next?'],
    text: [
      "Dai un'occhiata a <a href=\"@/cosa-offro\">i percorsi che offro a Trento, Rovereto e online</a>, oppure vieni a conoscermi con una consulenza.",
      'Take a look at <a href="@/cosa-offro">the programmes I offer in Trento, Rovereto and online</a>, or come and meet me with a consultation.',
    ],
    button: ['Prenota una consulenza', 'Book a consultation'],
  },
} as const;
