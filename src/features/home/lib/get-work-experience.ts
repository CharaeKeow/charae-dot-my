import { StaticImageData } from 'next/image';

import efichainLogo from '@/assets/png/efichain-logo.png';
import plentisoftLogo from '@/assets/png/plentisoft-logo.png';
import ueLogo from '@/assets/png/ue-logo.png';

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

export default function getWorkExperience(): WorkExperienceData[] {
  return [
    {
      company: 'Uni Enrol',
      companyLink: 'https://unienrol.com',
      jobTitle: 'Junior Web Developer',
      date: 'February 2024 - Present',
      description:
        'Develop and maintain student-facing websites and an internal platform for education counselors at Malaysia’s largest university enrollment platform. It’s rewarding to work on projects that make a real impact in the education space.',
      image: ueLogo,
      techStack: [
        'Next.js',
        'TypeScript',
        'Redux',
        'Tailwind',
        'Vercel',
        'AWS',
        'GraphQL',
        'Directus',
        'Strapi',
      ],
      otherStack: ['Laravel', 'WordPress'],
    },
    {
      company: 'Plentisoft',
      companyLink: 'https://plentisoft.com',
      jobTitle: 'Full Stack Web Developer',
      date: 'August 2022 - September 2023',
      description:
        'I developed landing pages for product launches, enhanced checkout flows for a smoother user experience, and integrated the OpenAI API to support product features. One highlight was adding version history to our content editor, like in Google Docs, letting users easily revert changes. I also optimized database performance by implementing a simple caching, which improved speed and reduced load.',
      image: plentisoftLogo,
      techStack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind',
        'Express',
        'GCP',
        'Postgres',
        'Nuxt.js',
        'MySQL',
        'MongoDB',
      ],
      otherStack: ['Laravel', 'WordPress'],
    },
    {
      company: 'Efichain Solutions',
      companyLink: 'https://www.efichain.com',
      jobTitle: 'Full Stack Web Developer Intern',
      date: 'March 2022 - August 2022',
      description:
        'During my internship, I developed REST APIs to support data export in various document formats. I also set up CI/CD pipelines for a React app using CircleCI, deploying to an on-prem server, and optimized front-end tables with server-side sorting, filtering, and pagination for efficient report display.',
      image: efichainLogo,
      techStack: ['React', 'Redux', 'Laravel', 'MySQL'],
    },
  ];
}
