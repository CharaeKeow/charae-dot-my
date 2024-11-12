import BioSection from '@/features/home/components/BioSection';
import ProjectSection from '@/features/home/components/ProjectSection';
import ToolbeltSection from '@/features/home/components/ToolbeltSection';
import WorkExperienceSection from '@/features/home/components/WorkExperienceSection';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col justify-start font-[family-name:var(--font-geist-sans)]">
      <BioSection />
      <ToolbeltSection />
      <WorkExperienceSection />
      <ProjectSection />
    </div>
  );
}
