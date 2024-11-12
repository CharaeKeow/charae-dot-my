import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: '🗑️ Wastely',
    description:
      'My FYP project built with Expo bare workflow for native API support (mainly for maps) and React Native Firebase for backend services.',
    link: 'https://github.com/CharaeKeow/wastely',
    tags: ['Mobile App'],
    stack: ['React Native', 'Expo', 'Firebase'],
  },
  {
    title: '📰 News Aggregator Backend',
    description:
      'A simple backend with cron job to scrape news from RSS feeds from Berita Harian, Utusan Malaysia, and SAYS.',
    link: 'https://github.com/CharaeKeow/news-aggregator-backend',
    tags: ['Backend', 'Web Scraping'],
    stack: ['Express', 'TypeScript', 'Postgres'],
  },
  {
    title: '🏨 Vacation Rental Price Recommendation System',
    description:
      'Part of recommendation system - module to scrap vacation rental data from Google vacation. College subject project.',
    link: 'https://github.com/CharaeKeow/Vacation-Rental-Price-Recommendation-System-',
    tags: ['CLI App', 'Web Scraping'],
    stack: ['C++', 'MySQL'],
  },
];
