'use client';

import { useState } from 'react';
import { siteConfig, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export default function SEOSettings() {
  const [seoData, setSeoData] = useState(siteConfig.seo);

  const handleSave = () => {
    updateSiteConfig({ seo: seoData });
    alert('SEO 설정이 저장되었습니다!');
  };

  const updatePageSEO = (page: string, field: string, value: string) => {
    setSeoData({
      ...seoData,
      [page]: {
        ...seoData[page],
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Home Page SEO */}
      <Card>
        <CardHeader>
          <CardTitle>홈 페이지 SEO</CardTitle>
          <CardDescription>메타 태그 및 Open Graph 설정</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="home-title">Meta Title</Label>
            <Input
              id="home-title"
              value={seoData.home.title}
              onChange={(e) => updatePageSEO('home', 'title', e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="home-description">Meta Description</Label>
            <Textarea
              id="home-description"
              value={seoData.home.description}
              onChange={(e) => updatePageSEO('home', 'description', e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="home-og-image">Open Graph Image URL</Label>
            <Input
              id="home-og-image"
              value={seoData.home.ogImage}
              onChange={(e) => updatePageSEO('home', 'ogImage', e.target.value)}
              className="mt-1"
              placeholder="/images/og-home.jpg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Page SEO */}
      <Card>
        <CardHeader>
          <CardTitle>포트폴리오 페이지 SEO</CardTitle>
          <CardDescription>메타 태그 및 Open Graph 설정</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="portfolio-title">Meta Title</Label>
            <Input
              id="portfolio-title"
              value={seoData.portfolio.title}
              onChange={(e) => updatePageSEO('portfolio', 'title', e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="portfolio-description">Meta Description</Label>
            <Textarea
              id="portfolio-description"
              value={seoData.portfolio.description}
              onChange={(e) => updatePageSEO('portfolio', 'description', e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="portfolio-og-image">Open Graph Image URL</Label>
            <Input
              id="portfolio-og-image"
              value={seoData.portfolio.ogImage}
              onChange={(e) => updatePageSEO('portfolio', 'ogImage', e.target.value)}
              className="mt-1"
              placeholder="/images/og-portfolio.jpg"
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
