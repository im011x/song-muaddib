'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/cms';
import Image from 'next/image';

export default function StudioIntro() {
  const t = useTranslations('studio');
  const { studio } = siteConfig;

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden glass shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-foreground/30 text-lg">Studio Image</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              {t('title')}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {studio.description}
            </p>
            <p className="text-base text-foreground/60 leading-relaxed">
              최신 장비와 전문적인 환경에서 최고 품질의 음악을 제작합니다. 
              다양한 장르와 스타일에 대한 깊은 이해를 바탕으로 아티스트의 
              비전을 현실로 만들어냅니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
