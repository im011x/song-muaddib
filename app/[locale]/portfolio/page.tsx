import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import PortfolioGrid from '@/components/PortfolioGrid';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function PortfolioPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <PortfolioGrid />
    </div>
  );
}
