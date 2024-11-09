import React from 'react';

import getSocials from '../lib/get-socials';

const Bio = () => {
  const socials = getSocials();

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