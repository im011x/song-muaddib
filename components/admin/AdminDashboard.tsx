'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/admin/Tabs';
import PostsManager from './PostsManager';
import ServicesManager from './ServicesManager';
import WorkflowManager from './WorkflowManager';
import ContentEditor from './ContentEditor';
import SEOSettings from './SEOSettings';
import ThemeSettings from './ThemeSettings';

export default function AdminDashboard() {
  const t = useTranslations('admin');

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold mb-2">{t('title')}</h1>
        <p className="text-foreground/60">사이트 콘텐츠를 관리하고 설정을 변경하세요.</p>
      </div>

      <Tabs defaultValue="posts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="posts">{t('posts')}</TabsTrigger>
          <TabsTrigger value="services">서비스</TabsTrigger>
          <TabsTrigger value="workflow">워크플로우</TabsTrigger>
          <TabsTrigger value="content">{t('content')}</TabsTrigger>
          <TabsTrigger value="seo">{t('seo')}</TabsTrigger>
          <TabsTrigger value="settings">{t('settings')}</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <PostsManager />
        </TabsContent>

        <TabsContent value="services">
          <ServicesManager />
        </TabsContent>

        <TabsContent value="workflow">
          <WorkflowManager />
        </TabsContent>

        <TabsContent value="content">
          <ContentEditor />
        </TabsContent>

        <TabsContent value="seo">
          <SEOSettings />
        </TabsContent>

        <TabsContent value="settings">
          <ThemeSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
