'use client';

import { useState } from 'react';
import { siteConfig, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export default function ThemeSettings() {
  const [theme, setTheme] = useState(siteConfig.theme);

  const handleSave = () => {
    updateSiteConfig({ theme });
    // Apply theme colors to CSS variables (in production, this would update the theme dynamically)
    document.documentElement.style.setProperty('--primary', theme.primaryColor);
    alert('테마 설정이 저장되었습니다! 페이지를 새로고침하면 적용됩니다.');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>테마 설정</CardTitle>
        <CardDescription>사이트의 주요 색상을 변경하세요.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="primary-color">Primary Color (포인트 컬러)</Label>
          <div className="flex gap-4 mt-2">
            <Input
              id="primary-color"
              type="color"
              value={theme.primaryColor}
              onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
              className="w-20 h-10"
            />
            <Input
              value={theme.primaryColor}
              onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
              placeholder="#C5A059"
              className="flex-1"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            현재: {theme.primaryColor}
          </p>
        </div>

        <div>
          <Label htmlFor="bg-color">Background Color (배경 컬러)</Label>
          <div className="flex gap-4 mt-2">
            <Input
              id="bg-color"
              type="color"
              value={theme.backgroundColor}
              onChange={(e) => setTheme({ ...theme, backgroundColor: e.target.value })}
              className="w-20 h-10"
            />
            <Input
              value={theme.backgroundColor}
              onChange={(e) => setTheme({ ...theme, backgroundColor: e.target.value })}
              placeholder="#F9F8F6"
              className="flex-1"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            현재: {theme.backgroundColor}
          </p>
        </div>

        <div className="pt-4 border-t">
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <div className="space-y-2">
              <div
                className="px-4 py-2 rounded inline-block"
                style={{ backgroundColor: theme.primaryColor, color: '#FFFFFF' }}
              >
                샘플 버튼
              </div>
              <p className="text-sm text-foreground/70">
                미리보기: 위의 색상이 사이트에 적용됩니다.
              </p>
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full md:w-auto">
          <Save className="mr-2 h-4 w-4" />
          저장하기
        </Button>
      </CardContent>
    </Card>
  );
}
