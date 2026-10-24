// notfound page strings. Leaf = ['italiano', 'english'].
// 404.html is a single file and cannot know the visitor's language, so the page shows both.
export const notfound = {
  meta_title: ['Pagina non trovata', 'Page not found'],
  meta_description: [
    'La pagina che cerchi non esiste o è stata spostata. Torna alla home di letiziamancini.it.',
    "The page you're looking for doesn't exist or has been moved. Go back to the letiziamancini.it home page.",
  ],
  title: ['Pagina non trovata', 'Page not found'],
  text: [
    'La pagina che cerchi non esiste o è stata spostata. Ecco alcune destinazioni utili:',
    "The page you're looking for doesn't exist or has been moved. Here are some useful places to go:",
  ],
  home: ['Home', 'Home'],
  services: ['Servizi', 'Services'],
  contact: ['Contattami', 'Contact me'],
  about: ['Chi sono', 'About me'],
  reviews: ['Testimonianze', 'Testimonials'],
  newsletter: ['Newsletter', 'Newsletter'],
} as const;
