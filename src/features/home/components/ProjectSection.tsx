import SectionContainer from '@/components/ui/SectionContainer';

import { projects } from '../data/projects';

import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <SectionContainer>
      <h2 className="text-[28px] lg:text-[32px]">Projects</h2>
      <p className="mt-2 italic">
        I know, most of these are university projects—but I’m definitely aiming
        to build out some real-world side projects soon!
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
