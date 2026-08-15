import React from 'react';

import SectionContainer from '@/components/ui/SectionContainer';

const BioSection = () => {
  return (
    <SectionContainer>
      <h1 className="text-4xl lg:text-5xl">
        <span className="text-orange-main">Charae</span> Eh Sin
      </h1>
      <div className="mt-6 lg:mt-8 space-y-4">
        <p>
          Hello, I am Charae. I'm a full-stack developer from Malaysia,
          currently working on the platform team at{' '}
          <a
            className="underline"
            href="https://www.allocatespace.co/"
            target="_blank"
          >
            Allocate Space.
          </a>
        </p>
        <p>
          I got into tech back in 2016/17, while studying aircraft maintenance.
          My Windows laptop was slow, so I installed Ubuntu. That somehow led to
          me messing around with the terminal (going through a Bash manual at
          one point), learning Python, and eventually discovering web
          development through freeCodeCamp.
        </p>
        <p>
          Today, I enjoy building and shipping stuff at work, learning new
          things, and figuring out how things work.
        </p>
      </div>
    </SectionContainer>
  );
};

export default BioSection;
