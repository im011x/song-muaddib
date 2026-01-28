'use client';

import { getTracks } from '@/lib/cms';
import { Track } from '@/lib/cms';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FeaturedTracks() {
  const featuredTracks = getTracks({ featured: true });

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
          Featured Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackCard({ track }: { track: Track }) {
  return (
    <div className="group relative glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-muted overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-foreground/30">Track Image</span>
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
