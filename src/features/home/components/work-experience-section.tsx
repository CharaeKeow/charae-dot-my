import { SectionContainer } from '@/components/ui/section-container';

import { workExperience } from '../data/work-experience';
import WorkExperienceCard from './work-experience-card';

const WorkExperienceSection = () => {
  return (
    <SectionContainer>
      <h2 className="text-[28px] lg:text-[32px]">Professional Experience</h2>
      <div className="mt-6 flex flex-col gap-y-7 lg:mt-8">
        {workExperience.map((item) => (
          <WorkExperienceCard data={item} key={item.company} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorkExperienceSection;
