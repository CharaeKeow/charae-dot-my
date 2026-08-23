import ruamThaiLogo from '@/assets/png/ruam-thai-logo.png';

import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Ruam Thai',
    description: (
      <>
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
        youth camp and community that has been running since 1993. It currently introduces the camp
        and preserves some of its history.
        <br />
        Currently exploring how it could grow into a directory that helps Malaysian Siamese find and
        connect with one another.
      </>
    ),
    website: 'https://ruamthai.charae.my',
    logo: ruamThaiLogo,
    status: 'WIP',
    tags: ['Community Website'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '🗑️ Wastely',
    description:
      'My FYP project built with Expo bare workflow for native API support (mainly for maps) and React Native Firebase for backend services.',
    github: 'https://github.com/CharaeKeow/wastely',
    tags: ['Mobile App'],
    stack: ['React Native', 'Expo', 'Firebase'],
  },
  {
    title: '📰 News Aggregator Backend',
    description:
      'A simple backend with cron job to scrape news from RSS feeds from Berita Harian, Utusan Malaysia, and SAYS.',
    github: 'https://github.com/CharaeKeow/news-aggregator-backend',
    tags: ['Backend', 'Web Scraping'],
    stack: ['Express', 'TypeScript', 'Postgres'],
  },
  {
    title: '🏨 Vacation Rental Price Recommendation System',
    description:
      'Part of recommendation system - module to scrap vacation rental data from Google vacation. College subject project.',
    github: 'https://github.com/CharaeKeow/Vacation-Rental-Price-Recommendation-System-',
    tags: ['CLI App', 'Web Scraping'],
    stack: ['C++', 'MySQL'],
  },
];
