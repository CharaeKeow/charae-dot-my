import { SectionContainer } from '@/components/ui/section-container';

import { preferredTools } from '../data/toolbelts';

export const ToolbeltSection = () => {
  return (
    <SectionContainer>
      <h2 className="text-[28px] lg:text-[32px]">Tools I Prefer</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:mt-8 lg:justify-start lg:gap-x-12">
        {preferredTools.map((tool) => {
          const LogoComponent = tool.logo;

          return (
            <div key={tool.name} className="flex flex-col items-center justify-between gap-y-2">
              <LogoComponent className="size-8 md:size-10" aria-hidden="true" />
              <span>{tool.name}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-6 space-y-2"></div>
      <p>I’m most at home in React-land, with TypeScript and Tailwind CSS.</p>
      <p>
        <strong>Other tools I’ve used professionally: </strong>
        tRPC, Express, SQL (Postgres & MySQL), MongoDB, standard cloud platform (AWS, GCP, Vercel,
        Firebase). And Angular (yeah).
      </p>
    </SectionContainer>
  );
};
