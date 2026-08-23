import { ArrowUpRightFromSquare } from 'lucide-react';

import type { WorkExperienceData } from '../types';

type WorkExperienceCardProps = {
  data: WorkExperienceData;
};

const WorkExperienceCard = ({ data }: WorkExperienceCardProps) => {
  const { company, companyLink, date, description, jobTitle } = data;

  return (
    <div className="group flex flex-col gap-y-2">
      <h3 className="text-xl lg:text-2xl">{jobTitle}</h3>
      <div className="flex h-fit items-center gap-2 group-hover:underline">
        <a
          href={companyLink}
          className="w-fit text-lg font-semibold lg:text-xl"
          rel="noreferrer"
          target="_blank"
        >
          {company}
        </a>
        <ArrowUpRightFromSquare className="hidden size-4 group-hover:block" />
      </div>
      <span className="italic">{date}</span>
      <p>{description}</p>
    </div>
  );
};

export default WorkExperienceCard;
