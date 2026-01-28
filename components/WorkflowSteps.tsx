'use client';

import { useTranslations } from 'next-intl';
import { getWorkflow, WorkflowStep } from '@/lib/cms';

export default function WorkflowSteps() {
  const t = useTranslations('workflow');
  const steps = getWorkflow() || [];

  if (steps.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-foreground/60 mb-16 text-lg">
          {t('subtitle')}
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <WorkflowStepItem key={step.number || index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowStepItem({ step, index }: { step: WorkflowStep; index: number }) {
  const t = useTranslations('workflow');
  
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-shrink-0">
        <div className="text-6xl md:text-7xl font-bold text-primary/30">
          {step.number}
        </div>
      </div>
      <div className="flex-1 pt-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          {step.description}
        </p>
        
        {/* Roles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Customer Role */}
          <div className="bg-background border-2 border-primary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h4 className="font-semibold text-sm text-primary">{t('customer')}</h4>
            </div>
            <p className="text-sm text-foreground/70">{step.customerRole || t('customerDefault')}</p>
          </div>
          
          {/* MUADDIB Role */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h4 className="font-semibold text-sm text-primary">SONG MUADDIB</h4>
            </div>
            <p className="text-sm text-foreground/70">{step.muaddibRole || t('muaddibDefault')}</p>
          </div>
        </div>
      </div>
      {index < 3 && (
        <div className="hidden md:block w-px h-16 bg-primary/20 mx-8 mt-4" />
      )}
    </div>
  );
}
