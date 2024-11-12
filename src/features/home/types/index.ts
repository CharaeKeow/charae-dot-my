import type { SOCIALS_SITE } from '../constants';
import type { StaticImageData } from 'next/image';

export type Socials = {
  name: keyof typeof SOCIALS_SITE;
  link: string;
};

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
