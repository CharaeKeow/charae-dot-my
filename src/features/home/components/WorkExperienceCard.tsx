import Image from 'next/image';

import { WorkExperienceData } from '../lib/get-work-experience';

type WorkExperienceCardProps = {
  // image: StaticImageData;
  // jobTitle: string;
  // company: string;
  // date: string;
  // description: string;
  // techStack: string[];
  // otherStack?: string[];
  data: WorkExperienceData;
};

const WorkExperienceCard = ({
  // company,
  // date,
  // description,
  // image,
  // jobTitle,
  // techStack,
  // otherStack,
  data,
}: WorkExperienceCardProps) => {
  const formatter = new Intl.ListFormat('en', {
    style: 'short',
    type: 'unit',
  });

  const { company, date, description, image, jobTitle, techStack, otherStack } =
    data;

  const isHasOtherStack = otherStack ? true : false;
  const mainStackText = isHasOtherStack ? 'Main stack' : 'Tech stack';

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-8">
      {/* Company logo */}
      <div className="w-[100px] self-center sm:self-start lg:w-[120px]">
        <Image className="lg:min-w-[120px]" src={image} alt="Uni Enrol logo" />
      </div>
      {/* Experience details */}
      <div className="flex w-fit flex-col gap-y-2">
        <h3 className="text-xl lg:text-2xl">{jobTitle}</h3>
        <h4 className="text-lg lg:text-xl">{company}</h4>
        <span className="italic">{date}</span>
        <p>{description}</p>
        <span>
          <strong>{mainStackText}: </strong>
          {formatter.format(techStack)}
        </span>
        {otherStack ? (
          <span>
            <strong>Other: </strong>
            {formatter.format(otherStack)}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
