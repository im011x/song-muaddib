'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-24 max-w-4xl">
      <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-center">
        {t('title')}
      </h1>
      <p className="text-center text-foreground/60 mb-12">
        {t('subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t('formTitle')}</CardTitle>
            <CardDescription>{t('formDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">{t('name')}</Label>
                <Input id="name" placeholder={t('namePlaceholder')} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">{t('email')}</Label>
                <Input id="email" type="email" placeholder={t('emailPlaceholder')} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">{t('message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('messagePlaceholder')}
                  className="mt-1"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                {t('send')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('contactInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">{t('email')}</p>
                  <p className="text-foreground/60">contact@songmuaddib.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">{t('phone')}</p>
                  <p className="text-foreground/60">+82-2-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">{t('address')}</p>
                  <p className="text-foreground/60">
                    {t('addressDetail')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('businessHours')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">{t('weekdays')}</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">{t('saturday')}</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">{t('sunday')}</span>
                  <span className="font-medium">{t('closed')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
