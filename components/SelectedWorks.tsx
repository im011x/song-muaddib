'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { getTracks, Track } from '@/lib/cms';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SelectedWorks() {
  const t = useTranslations('selectedWorks');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  
  const allTracks = getTracks();
  const allGenres = Array.from(new Set(allTracks.flatMap(track => track.genre)));
  
  const filteredTracks = selectedGenre === 'all' 
    ? allTracks 
    : allTracks.filter(track => track.genre.includes(selectedGenre));

  return (
    <section className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-foreground/60 mb-12 text-lg">
          {t('subtitle')}
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedGenre('all')}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all border-2",
              selectedGenre === 'all'
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-foreground/70 border-foreground/20 hover:border-primary/50"
            )}
          >
            {t('all')}
          </button>
          {allGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all border-2",
                selectedGenre === genre
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/70 border-foreground/20 hover:border-primary/50"
              )}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        {filteredTracks.length === 0 && (
          <div className="text-center py-16 text-foreground/50">
            {t('noTracks')}
          </div>
        )}
      </div>
    </section>
  );
}

function TrackCard({ track }: { track: Track }) {
  const t = useTranslations('selectedWorks');
  
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-muted overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-foreground/30">{t('albumArt')}</span>
        </div>
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="p-4 bg-primary rounded-full hover:bg-primary/90 transition-colors">
            <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{track.title}</h3>
        <p className="text-foreground/60 mb-3">{track.artist}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {track.genre.map((g) => (
            <span
              key={g}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-sm text-foreground/50">{track.year}</p>
      </div>
    </div>
  );
}
