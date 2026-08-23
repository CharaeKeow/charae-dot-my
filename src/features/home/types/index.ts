import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

export type WorkExperienceData = {
  jobTitle: string;
  company: string;
  companyLink: string;
  date: string;
  description: ReactNode;
};

export type Project = {
  title: string;
  description: ReactNode;
  stack: string[];
  tags: string[];
  github?: string;
  website?: string;
  logo?: StaticImageData;
  status?: 'WIP'; // Still not sure if I want this, since software is always in progress :p
};
