'use client';

import { useState } from 'react';
import { siteConfig, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export default function ContentEditor() {
  const [studioInfo, setStudioInfo] = useState(siteConfig.studio);
  const [socialLinks, setSocialLinks] = useState(siteConfig.social);

  const handleSave = () => {
    updateSiteConfig({
      studio: studioInfo,
      social: socialLinks,
    });
    alert('저장되었습니다!');
  };

  return (
    <div className="space-y-6">
      {/* Studio Info */}
      <Card>
        <CardHeader>
          <CardTitle>스튜디오 정보</CardTitle>
          <CardDescription>스튜디오 소개 및 기본 정보를 수정하세요.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="studio-name">스튜디오 이름</Label>
            <Input
              id="studio-name"
              value={studioInfo.name}
              onChange={(e) => setStudioInfo({ ...studioInfo, name: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="studio-description">설명</Label>
            <Textarea
              id="studio-description"
              value={studioInfo.description}
              onChange={(e) => setStudioInfo({ ...studioInfo, description: e.target.value })}
              className="mt-1"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="studio-image">이미지 URL</Label>
            <Input
              id="studio-image"
              value={studioInfo.image}
              onChange={(e) => setStudioInfo({ ...studioInfo, image: e.target.value })}
              className="mt-1"
              placeholder="/images/studio.jpg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>소셜 미디어 링크</CardTitle>
          <CardDescription>소셜 미디어 계정 링크를 업데이트하세요.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              value={socialLinks.instagram || ''}
              onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
              className="mt-1"
              placeholder="https://instagram.com/..."
            />
          </div>
          <div>
            <Label htmlFor="youtube">YouTube</Label>
            <Input
              id="youtube"
              value={socialLinks.youtube || ''}
              onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
              className="mt-1"
              placeholder="https://youtube.com/..."
            />
          </div>
          <div>
            <Label htmlFor="soundcloud">SoundCloud</Label>
            <Input
              id="soundcloud"
              value={socialLinks.soundcloud || ''}
              onChange={(e) => setSocialLinks({ ...socialLinks, soundcloud: e.target.value })}
              className="mt-1"
              placeholder="https://soundcloud.com/..."
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full md:w-auto">
        <Save className="mr-2 h-4 w-4" />
        저장하기
      </Button>
    </div>
  );
}
