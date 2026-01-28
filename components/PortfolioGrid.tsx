'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { getTracks, Track } from '@/lib/cms';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortfolioGrid() {
  const t = useTranslations('portfolio');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  
  const allTracks = getTracks();
  const allGenres = Array.from(new Set(allTracks.flatMap(track => track.genre)));
  
  const filteredTracks = selectedGenre === 'all' 
    ? allTracks 
    : allTracks.filter(track => track.genre.includes(selectedGenre));

  return (
    <div>
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4">
        {t('title')}
      </h1>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-8">
        <button
          onClick={() => setSelectedGenre('all')}
          className={cn(
            "px-6 py-2 rounded-full font-medium transition-all",
            selectedGenre === 'all'
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground/70 hover:bg-muted/80"
          )}
        >
          {t('filter.all')}
        </button>
        {allGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all",
              selectedGenre === genre
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground/70 hover:bg-muted/80"
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
  );
}

function TrackCard({ track }: { track: Track }) {
  const t = useTranslations('portfolio');
  
  return (
    <div className="group relative glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-muted overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-foreground/30">{t('trackImage')}</span>
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
        <h3 className="text-xl font-serif font-bold mb-2">{track.title}</h3>
        <p className="text-foreground/60 mb-3">{track.artist}</p>
        <div className="flex flex-wrap gap-2">
          {track.genre.map((g) => (
            <span
              key={g}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-sm text-foreground/50 mt-3">{track.year}</p>
      </div>
    </div>
  );
}
