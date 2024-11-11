import getWorkExperience from '../lib/get-work-experience';

import WorkExperienceCard from './WorkExperienceCard';

const WorkExperience = () => {
  const workExperience = getWorkExperience();

  return (
    <section className="p-4 lg:p-8">
      <h2 className="text-[28px] lg:text-[32px]">Professional Experience</h2>
      <div className="mt-6 flex flex-col gap-y-7 lg:mt-8">
        {workExperience.map((item, index) => (
          <WorkExperienceCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
