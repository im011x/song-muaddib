'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function ProjectInquiry() {
  const t = useTranslations('inquiry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(t('success'));
        setFormData({ name: '', email: '', type: '', message: '' });
      } else {
        alert(t('error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-foreground/60 mb-12 text-lg">
          {t('subtitle')}
        </p>

        <Card className="shadow-xl border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">{t('formTitle')}</CardTitle>
            <CardDescription>
              {t('formDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t('name')} *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1"
                  placeholder={t('name')}
                />
              </div>

              <div>
                <Label htmlFor="email">{t('email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                  placeholder={t('email')}
                />
              </div>

              <div>
                <Label htmlFor="type">{t('type')} *</Label>
                <Input
                  id="type"
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="mt-1"
                  placeholder={t('typePlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="message">{t('message')} *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1"
                  rows={6}
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? t('sending') : t('send')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
