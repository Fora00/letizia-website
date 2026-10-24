import { translations } from './translations';
import { routes } from './routes';

export const languages = ['it', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'it';

// Routes (language-neutral, Italian slugs) that exist in each language.
// Derived from ./routes.ts: every page is built in every language.
export const translatedRoutes: Record<Lang, string[]> = Object.fromEntries(
  languages.map((l) => [l, routes.map((r) => r.route as string)])
) as Record<Lang, string[]>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

type Paths<T> = {
  [K in keyof T & string]: T[K] extends readonly string[] ? K : `${K}.${Paths<T[K]>}`;
}[keyof T & string];
export type TranslationKey = Paths<typeof translations>;

const isLeaf = (node: unknown): node is readonly string[] =>
  Array.isArray(node) && node.length === languages.length && node.every((v) => typeof v === 'string');

// Recursively turns every [it, en] tuple into the string for `lang`.
function localize(node: any, lang: Lang): any {
  if (isLeaf(node)) return node[languages.indexOf(lang)] || node[languages.indexOf(defaultLang)];
  if (Array.isArray(node)) return node.map((n) => localize(n, lang));
  if (node && typeof node === 'object') {
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, localize(v, lang)]));
  }
  return node;
}

const linkClass = 'text-accent-text dark:text-accent-dark font-semibold hover:underline';

export function useTranslations(lang: Lang) {
  const get = (key: string): any => {
    let node: any = translations;
    for (const part of key.split('.')) node = node?.[part];
    return node;
  };

  /** One string: t('navbar.button_cta') */
  const t = (key: TranslationKey): string => {
    const node = get(key);
    return node === undefined ? key : localize(node, lang);
  };

  /** A whole branch (object or list of objects) localized: t.group('home.faqs') */
  t.group = (key: string): any => localize(get(key), lang);

  /**
   * String that may contain HTML, for `set:html`. `<a href="@/cosa-offro">` is rewritten to the
   * localized route and gets the standard link style.
   */
  t.html = (key: TranslationKey): string =>
    t(key).replace(/<a href="@(\/[^"]*)">/g, (_, route) => `<a href="${localizedHref(route, lang)}" class="${linkClass}">`);

  return t;
}

/** Language and language-neutral route ('/chi-sono') of a pathname. */
export function parsePath(pathname: string): { lang: Lang; route: string } {
  const rel = (base ? pathname.slice(base.length) : pathname).replace(/\/$/, '') || '/';
  for (const lang of languages) {
    if (lang === defaultLang) continue;
    if (rel === `/${lang}` || rel.startsWith(`/${lang}/`)) {
      return { lang, route: rel.slice(lang.length + 1) || '/' };
    }
  }
  return { lang: defaultLang, route: rel };
}

function build(route: string, lang: Lang): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  if (route === '/') return `${base}${prefix}/`;
  return `${base}${prefix}${route}`;
}

/** Link to a route in `lang`; falls back to the Italian page if it isn't translated yet. */
export function localizedHref(route: string, lang: Lang): string {
  return build(route, translatedRoutes[lang].includes(route) ? lang : defaultLang);
}

/** The same page in another language, or that language's home if it has no equivalent. */
export function switchHref(route: string, target: Lang): string {
  return build(translatedRoutes[target].includes(route) ? route : '/', target);
}

/** Languages in which `route` exists (for hreflang). */
export function alternates(route: string): { lang: Lang; href: string }[] {
  return languages
    .filter((l) => translatedRoutes[l].includes(route))
    .map((lang) => ({ lang, href: build(route, lang) }));
}
