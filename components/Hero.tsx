'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-foreground tracking-tight">
          SONG MUADDIB
        </h1>
        <p className="text-3xl md:text-4xl font-bold mb-4 text-foreground/90">
          STUDIO
        </p>
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${locale}/portfolio`}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground",
              "rounded-lg font-semibold hover:bg-primary/90 transition-all",
              "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
              "min-w-[200px] justify-center"
            )}
          >
            {t('cta1')}
            <ArrowRight size={20} />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary",
              "rounded-lg font-semibold hover:bg-primary/10 transition-all",
              "shadow-md hover:shadow-lg transform hover:-translate-y-1",
              "min-w-[200px] justify-center"
            )}
          >
            {t('cta2')}
            <Play size={20} />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
