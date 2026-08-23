import { buttonVariants } from '@/components/ui/button';
import { SectionContainer } from '@/components/ui/section-container';
import { cn } from '@/lib/utils';

import { socials } from '../data/socials';

export const BioSection = () => {
  return (
    <SectionContainer>
      <h1 className="text-4xl lg:text-5xl">
        <span className="text-orange-main">Charae</span> Eh Sin
      </h1>
      <div className="mt-6 space-y-4 lg:mt-8">
        <p>
          Hello, I am Charae,a full-stack developer from Malaysia, currently working on the platform
          team at{' '}
          <a className="link" href="https://www.allocatespace.co/" target="_blank">
            Allocate Space.
          </a>
        </p>
        <p>
          My journey in tech begin with me installing Ubuntu in my Lenovo laptop (back in 2016/17
          when I was studying aircraft maintenance in college), due to my Windows laptop was slow.
          That leads to me messing around with the terminal (reading Bash manual at one point),
          learning Python, and eventually discovering web development on freeCodeCamp.
        </p>
        <p>
          Today, I enjoy going down rabbit holes, tech or otherwise, and trying to make sense of
          things along the way.
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        {socials.map((social) => (
          <SocialButton key={social.name} {...social} />
        ))}
      </div>
    </SectionContainer>
  );
};

type SocialButtonProps = (typeof socials)[number];

const SocialButton = ({ name, link, logo: Logo }: SocialButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }))}>
      <Logo className="size-5" aria-hidden="true" />
      <span>{name}</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
};
