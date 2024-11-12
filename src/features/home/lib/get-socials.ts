import { SOCIALS_SITE } from '../constants';

import type { Socials } from '../types';

export default function getSocials() {
  const socials: Socials[] = [
    {
      name: SOCIALS_SITE.Twitter,
      link: 'https://twitter.com/charae_keow',
    },
    {
      name: SOCIALS_SITE.BlueSky,
      link: 'https://bsky.app/profile/charaekeow.bsky.social',
    },
    {
      name: SOCIALS_SITE.GitHub,
      link: 'https://github.com/CharaeKeow',
    },
    {
      name: SOCIALS_SITE.LinkedIn,
      link: 'https://www.linkedin.com/in/charaeehsin',
    },
  ];

  return socials;
}
