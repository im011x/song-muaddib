import Hero from '@/components/Hero';
import SelectedWorks from '@/components/SelectedWorks';
import OurServices from '@/components/OurServices';
import WorkflowSteps from '@/components/WorkflowSteps';
import ProjectInquiry from '@/components/ProjectInquiry';

export default function HomePage() {
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
