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
  github?: string;
  website?: string;
  logo?: StaticImageData;
  status?: 'WIP'; // Still not sure if I want this, since software is always in progress :p
};
