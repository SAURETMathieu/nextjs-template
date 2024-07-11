import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/tables': '/tables',
  '/dealers': {
    en: '/dealers',
    fr: '/croupiers'
  },
  '/session': '/sessions',
  '/draws': {
    en: '/draws',
    fr: '/tirages'
  },
  '/help': {
    en: '/help',
    fr: '/aide'
  },
  '/settings': {
    en: '/settings',
    fr: '/parametres'
  },
  '/about': '/about',
  '/contact': '/contact',
  '/login': '/login',
  '/register': '/register',
  '/forgot-password': '/forgot-password',
  '/reset-password': '/reset-password',
  '/profile': {
    en: '/profile',
    fr: '/profil'
  },
  '/support': '/support',
} satisfies Pathnames<typeof locales>;

export const localePrefix = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;