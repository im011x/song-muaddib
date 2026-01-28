import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Hero from '@/components/Hero';
import SelectedWorks from '@/components/SelectedWorks';
import OurServices from '@/components/OurServices';
import WorkflowSteps from '@/components/WorkflowSteps';
import ProjectInquiry from '@/components/ProjectInquiry';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="smooth-scroll">
      <Hero />
      <SelectedWorks />
      <OurServices />
      <WorkflowSteps />
      <ProjectInquiry />
    </div>
  );
}
