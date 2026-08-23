import Image from "next/image";

import type { WorkExperienceData } from "../types";

type WorkExperienceCardProps = {
  data: WorkExperienceData;
};

const WorkExperienceCard = ({ data }: WorkExperienceCardProps) => {
  const formatter = new Intl.ListFormat("en", {
    style: "short",
    type: "unit",
  });

  const {
    company,
    companyLink,
    date,
    description,
    image,
    jobTitle,
    techStack,
  } = data;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-8">
      {/* Company logo */}
      <div className="w-25 self-center sm:self-start lg:w-30">
        <Image className="lg:min-w-30" src={image} alt="Uni Enrol logo" />
      </div>
      {/* Experience details */}
      <div className="flex w-fit flex-col gap-y-2">
        <h3 className="text-xl lg:text-2xl">{jobTitle}</h3>
        <a
          href={companyLink}
          target="_blank"
          className="w-fit text-lg font-semibold hover:underline lg:text-xl"
          rel="noreferrer"
        >
          {company}
        </a>
        <span className="italic">{date}</span>
        <p>{description}</p>
        <span>
          <strong>Tech stack: </strong>
          {formatter.format(techStack)}
        </span>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
