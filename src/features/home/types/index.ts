import type { StaticImageData } from 'next/image';

export type WorkExperienceData = {
  image: StaticImageData;
  jobTitle: string;
  company: string;
  companyLink: string;
  date: string;
  description: string;
  techStack: string[];
  otherStack?: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  link: string;
};
