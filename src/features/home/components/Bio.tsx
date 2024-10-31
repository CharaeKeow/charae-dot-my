import React from 'react';

// TODO: Extract these `as const` and type into separate file
const SOCIALS_SITE = {
  Twitter: 'Twitter',
  BlueSky: 'BlueSky',
  GitHub: 'GitHub',
  LinkedIn: 'LinkedIn',
} as const;

type Socials = {
  name: keyof typeof SOCIALS_SITE;
  link: string;
};

// TODO: Extract this too. Maybe into `@/config`?
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

const Bio = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <h1>
        <span className="text-orange-main">Charae</span> Eh Sin
      </h1>
      <div>
        <p>
          Hi, I’m Charae, a web developer based in Malaysia who loves
          experimenting and exploring cool stuff on the internet. When I’m not
          coding, you can usually find me at the gym, out for a run, tending my
          farm in Stardew Valley, or attending tech meetups (if my social energy
          permits).
        </p>
        <br />
        <p>
          You can also find me on{' '}
          {/* Okay I might be overengineering this, but this is fun at least LMAO */}
          {socials.map((social, index) => {
            const isLastItem = index === socials.length - 1;
            const isSecondToLastItem = index === socials.length - 2;

            return (
              <React.Fragment key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-main hover:underline"
                >
                  {social.name}
                </a>
                {!isLastItem ? ', ' : ''}
                {isSecondToLastItem ? 'and ' : ''}
              </React.Fragment>
            );
          })}
          .
        </p>
      </div>
    </div>
  );
};

export default Bio;
