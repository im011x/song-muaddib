import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('about');
  
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
