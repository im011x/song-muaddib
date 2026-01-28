'use client';

import { useTranslations } from 'next-intl';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-24 max-w-4xl">
      <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-center">
        {t('title')}
      </h1>
      <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
        <p>{t('description')}</p>
        <p>{t('description2')}</p>
        <p>{t('description3')}</p>
      </div>
    </div>
  );
}
