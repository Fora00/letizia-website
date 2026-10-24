// Every page that exists in both languages. To add a page:
//   1. create src/views/<View>.astro (copy in src/i18n/pages/<x>.ts)
//   2. add one line here
// src/pages/[...slug].astro then builds it at /<slug> and /en/<slug>, and the
// navbar, language switcher and hreflang tags pick it up automatically.
export const routes = [
  { route: '/', view: 'Home' },
  { route: '/chi-sono', view: 'About' },
  { route: '/cosa-offro', view: 'Services' },
  { route: '/dicono-di-me', view: 'Reviews' },
  { route: '/newsletter', view: 'Newsletter' },
  { route: '/contatti', view: 'Contact' },
  { route: '/privacy', view: 'Privacy' },
] as const;
