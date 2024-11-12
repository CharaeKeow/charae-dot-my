import BioSection from '@/features/home/components/BioSection';
import ToolbeltSection from '@/features/home/components/ToolbeltSection';
import WorkExperienceSection from '@/features/home/components/WorkExperienceSection';

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-start font-[family-name:var(--font-geist-sans)]">
      <BioSection />
      <ToolbeltSection />
      <WorkExperienceSection />
    </div>
  );
}
