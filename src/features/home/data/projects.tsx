import ruamThaiLogo from '@/assets/png/ruam-thai-logo.png';

import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Ruam Thai',
    description: (
      <div className="space-y-3">
        <p>
          I’m rebuilding the website for Ruam Thai, a{' '}
          <a
            href="https://en.wikipedia.org/wiki/Malaysian_Siamese"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Malaysian Siamese
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{' '}
          youth camp and community that has been running since 1993. It currently introduces the
          camp and preserves some of its history.
        </p>
        <p>
          Currently exploring how it could grow into a directory that helps Malaysian Siamese find
          and connect with one another.
        </p>
      </div>
    ),
    website: 'https://ruamthai.charae.my',
    logo: ruamThaiLogo,
    status: 'WIP',
    tags: ['Community Website'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];
