'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Youtube, Music } from 'lucide-react';
import { siteConfig } from '@/lib/cms';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const { social } = siteConfig;

  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">SONG MUADDIB</h3>
            <p className="text-background/70">
              {t('tagline')}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('follow')}</h4>
            <div className="flex gap-4">
              {social.instagram && (
                <Link
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={t('instagram')}
                >
                  <Instagram size={20} />
                </Link>
              )}
              {social.youtube && (
                <Link
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={t('youtube')}
                >
                  <Youtube size={20} />
                </Link>
              )}
              {social.soundcloud && (
                <Link
                  href={social.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={t('soundcloud')}
                >
                  <Music size={20} />
                </Link>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-background/70 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
