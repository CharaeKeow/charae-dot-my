import type { WorkExperienceData } from '../types';

export const workExperience: WorkExperienceData[] = [
  {
    company: 'Allocate Space',
    companyLink: 'https://www.allocatespace.co',
    jobTitle: 'Software Engineer',
    date: 'October 2025 – Present',
    description:
      'Full-stack role where I’ve ended up touching a bit of everything: product features, APIs, builds, and the occasional infrastructure problem. The bigger pieces so far were helping combine three apps into one monorepo, updating the shared UI library (in a big branding revamp), and creating the second version of our report editor with TipTap (make it more Notion like).',
  },
  {
    company: 'Uni Enrol',
    companyLink: 'https://unienrol.com',
    jobTitle: 'Junior Web Developer',
    date: 'February 2024 – October 2025',
    description:
      'Worked on the student-facing websites and internal tools used by education consultant at Malaysia’s largest university enrolment platform. Mostly helping making complicated education and application flows feel a little less complicated.',
  },
  {
    company: 'Plentisoft',
    companyLink: 'https://plentisoft.com',
    jobTitle: 'Full Stack Web Developer',
    date: 'August 2022 – September 2023',
    description:
      "First job out of college in a company shipping SEO-related products. One of my favourite projects was building version history for a ProseMirror editor (something like in Google Docs). And have some experience working with the early day Open AI API (believe it's GPT-3.5 turbo at that time) for one of the SEO related product",
  },
  {
    company: 'Efichain Solutions',
    companyLink: 'https://www.efichain.com',
    jobTitle: 'Full Stack Web Developer Intern',
    date: 'March 2022 – August 2022',
    description: (
      <>
        My first professional software role. Worked on reporting APIs, deployment pipelines, and
        data-heavy tables. React (
        <a
          href="https://react.dev/reference/react/Component"
          className="link"
          rel="noreferrer"
          target="_blank"
        >
          class components!
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        ), Redux, and Laravel were my best friends.
      </>
    ),
  },
];
