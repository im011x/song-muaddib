import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('contact');
  
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
        <ContactForm />

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
