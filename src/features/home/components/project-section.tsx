import { SectionContainer } from '@/components/ui/section-container';
import { cn } from '@/lib/utils';

import { projects } from '../data/projects';
import { ProjectCard } from './project-card';

export const ProjectSection = () => {
  return (
    <SectionContainer>
      <h2 className="text-[28px] lg:text-[32px]">Projects</h2>

      <div
        className={cn(
          'mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:gap-6',
          projects.length > 1 && 'lg:grid-cols-2',
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
