import { BioSection } from "@/features/home/components/bio-section";
import { ProjectSection } from "@/features/home/components/project-section";
import { ToolbeltSection } from "@/features/home/components/toolbelt-section";
import WorkExperienceSection from "@/features/home/components/work-experience-section";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col justify-start font-(family-name:--font-geist-sans)">
      <BioSection />
      <ToolbeltSection />
      <WorkExperienceSection />
      <ProjectSection />
    </div>
  );
}
