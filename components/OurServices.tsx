'use client';

import { useTranslations } from 'next-intl';
import { getServices, Service } from '@/lib/cms';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function OurServices() {
  const t = useTranslations('services');
  const services = getServices() || [];

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-foreground/60 mb-16 text-lg">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations('services');
  
  return (
    <div
      className={cn(
        "relative rounded-xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300",
        "transform hover:-translate-y-2 border-2",
        service.popular
          ? "border-primary scale-105"
          : "border-foreground/10"
      )}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            {t('popular')}
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-foreground/60 mb-6">{service.description}</p>

      <div className="mb-6">
        <span className="text-3xl font-bold text-primary">{service.price}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {(service.features || []).map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "w-full py-3 rounded-lg font-semibold transition-all",
          service.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
        )}
      >
        {t('getStarted')}
      </button>
    </div>
  );
}
