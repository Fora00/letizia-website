export interface Event {
  slug: string;
  date: string;
  dateISO: string; // ISO start date; last day of the month when no exact day is known
  title: string;
  shortTitle: string;
  location: string;
  locationType: 'presence' | 'online';
  description: string;
  fullDescription: string;
  duration: string;
  price: string;
  maxParticipants: number;
  program: { time: string; label: string }[];
  tags: string[];
}

export const events: Event[] = [
  {
    slug: "workshop-muoversi-senza-dolore",
    dateISO: "2026-06-30",
    date: "Giugno 2026",
    title: "Workshop: Muoversi senza dolore",
    shortTitle: "Muoversi senza dolore",
    location: "Trento · In presenza",
    locationType: "presence",
    description: "Una giornata dedicata a capire come il movimento consapevole può ridurre i dolori osteo-articolari nella vita quotidiana. Teoria, pratica e strumenti da usare subito.",
    fullDescription: "Un workshop intensivo di mezza giornata per scoprire come il movimento — fatto bene — può diventare il tuo strumento più potente contro il dolore cronico. Partiremo dalle basi della chinesiologia per capire perché ci fa male quello che fa male, e costruiremo insieme esercizi pratici da portare a casa.",
    duration: "Mezza giornata (4 ore)",
    price: "€60 a persona",
    maxParticipants: 12,
    program: [
      { time: "9:00", label: "Accoglienza e presentazioni" },
      { time: "9:30", label: "Come funziona il dolore — basi pratiche" },
      { time: "10:30", label: "Esercizi di mobilità guidati" },
      { time: "11:30", label: "Routine personalizzata e Q&A" },
      { time: "13:00", label: "Fine workshop" },
    ],
    tags: ["Dolore", "Mobilità", "Pratico"],
  },
  {
    slug: "corso-benessere-in-movimento",
    dateISO: "2026-07-31",
    date: "Luglio 2026",
    title: "Corso: Benessere in movimento",
    shortTitle: "Benessere in movimento",
    location: "Online · 4 incontri",
    locationType: "online",
    description: "Quattro incontri online per costruire una routine di movimento sostenibile. Adatto a chi vuole ricominciare a muoversi con gradualità e consapevolezza.",
    fullDescription: "Un percorso di quattro settimane in videochiamata pensato per chi parte da zero o sta riprendendo dopo una pausa lunga. Ogni incontro combina teoria, pratica guidata e uno spazio per domande personali. Tra un incontro e l'altro riceverai esercizi da svolgere autonomamente.",
    duration: "4 settimane · 1 ora a settimana",
    price: "€120 per il corso completo",
    maxParticipants: 8,
    program: [
      { time: "Settimana 1", label: "Ascolto del corpo — capire i segnali" },
      { time: "Settimana 2", label: "Costruire una base — mobilità e forza" },
      { time: "Settimana 3", label: "Progressione — alzare l'intensità con gradualità" },
      { time: "Settimana 4", label: "Routine autonoma — consolidare le abitudini" },
    ],
    tags: ["Online", "Principianti", "Routine"],
  },
  {
    slug: "mini-corso-corpo-e-mente",
    dateISO: "2026-09-30",
    date: "Settembre 2026",
    title: "Mini-corso: Corpo e Mente",
    shortTitle: "Corpo e Mente",
    location: "Rovereto · In presenza",
    locationType: "presence",
    description: "Un percorso breve per esplorare la connessione tra movimento fisico e benessere mentale. Esercizi pratici, respiro e rilassamento guidato.",
    fullDescription: "Tre incontri in presenza a Rovereto per esplorare come il movimento influenza umore, energia e gestione dello stress. Uniremo esercizi di movimento consapevole, tecniche di respiro e momenti di rilassamento guidato in un formato accessibile a tutte.",
    duration: "3 incontri da 90 minuti",
    price: "€75 per il mini-corso",
    maxParticipants: 10,
    program: [
      { time: "Incontro 1", label: "Il corpo che sente — consapevolezza e ascolto" },
      { time: "Incontro 2", label: "Movimento e respiro — energia e calma" },
      { time: "Incontro 3", label: "Integrazione — costruire la propria pratica" },
    ],
    tags: ["Benessere", "Stress", "Gruppi"],
  },
];

export function isPastEvent(event: Event): boolean {
  return new Date(event.dateISO) < new Date(new Date().toDateString());
}
