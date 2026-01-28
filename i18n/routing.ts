import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'ko',
  localePrefix: 'always'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
