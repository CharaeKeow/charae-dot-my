import { SOCIALS_SITE } from '../constants';

export type Socials = {
  name: keyof typeof SOCIALS_SITE;
  link: string;
};
