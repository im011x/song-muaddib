'use client';

import { useState } from 'react';
import { siteConfig, getTracks, Track, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit, Trash2, Plus, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PostsManager() {
  const [tracks, setTracks] = useState(getTracks());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTrack, setEditingTrack] = useState<Partial<Track> | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (track: Track) => {
    setEditingId(track.id);
    setEditingTrack({ ...track });
  };

  const handleSave = () => {
    if (!editingTrack || !editingId) return;

    const updatedTracks = tracks.map(t =>
      t.id === editingId ? { ...t, ...editingTrack } as Track : t
    );
    setTracks(updatedTracks);
    updateSiteConfig({ tracks: updatedTracks });
    setEditingId(null);
    setEditingTrack(null);
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('이 트랙을 삭제하시겠습니까?')) {
      const updatedTracks = tracks.filter(t => t.id !== id);
      setTracks(updatedTracks);
      updateSiteConfig({ tracks: updatedTracks });
    }
  };

  const handleAdd = () => {
    const newTrack: Track = {
      id: Date.now().toString(),
      title: '',
      artist: '',
      year: new Date().getFullYear(),
      genre: [],
      image: '',
      featured: false,
    };
    setTracks([...tracks, newTrack]);
    setEditingId(newTrack.id);
    setEditingTrack(newTrack);
    setIsAdding(true);
  };

  const handleCancel = () => {
    if (isAdding) {
      setTracks(tracks.filter(t => t.id !== editingId));
    }
    setEditingId(null);
    setEditingTrack(null);
    setIsAdding(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>트랙 관리</CardTitle>
            <CardDescription>디스코그래피의 트랙을 추가, 수정, 삭제할 수 있습니다.</CardDescription>
          </div>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            새 트랙 추가
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tracks.map((track) => (
            <Card key={track.id} className={cn("border-2", editingId === track.id && "border-primary")}>
              {editingId === track.id ? (
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>제목</Label>
                      <Input
                        value={editingTrack?.title || ''}
                        onChange={(e) => setEditingTrack({ ...editingTrack, title: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>아티스트</Label>
                      <Input
                        value={editingTrack?.artist || ''}
                        onChange={(e) => setEditingTrack({ ...editingTrack, artist: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>연도</Label>
                      <Input
                        type="number"
                        value={editingTrack?.year || ''}
                        onChange={(e) => setEditingTrack({ ...editingTrack, year: parseInt(e.target.value) })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>이미지 URL</Label>
                      <Input
                        value={editingTrack?.image || ''}
                        onChange={(e) => setEditingTrack({ ...editingTrack, image: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>장르 (쉼표로 구분)</Label>
                    <Input
                      value={Array.isArray(editingTrack?.genre) ? editingTrack.genre.join(', ') : ''}
                      onChange={(e) => setEditingTrack({ 
                        ...editingTrack, 
                        genre: e.target.value.split(',').map(g => g.trim()).filter(Boolean)
                      })}
                      className="mt-1"
                      placeholder="Pop, R&B, EDM"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`featured-${track.id}`}
                      checked={editingTrack?.featured || false}
                      onChange={(e) => setEditingTrack({ ...editingTrack, featured: e.target.checked })}
                    />
                    <Label htmlFor={`featured-${track.id}`}>추천 트랙으로 표시</Label>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="mr-2 h-4 w-4" />
                      저장
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="mr-2 h-4 w-4" />
                      취소
                    </Button>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{track.title}</h3>
                      <p className="text-foreground/60 mb-2">{track.artist}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{track.year}</span>
                        <span className="text-foreground/40">•</span>
                        <span>{track.genre.join(', ')}</span>
                        {track.featured && (
                          <>
                            <span className="text-foreground/40">•</span>
                            <span className="text-primary font-semibold">추천</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(track)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(track.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
