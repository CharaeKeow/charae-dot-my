import GithubLogo from '@/assets/svg/github-logo.svg';

import type { Project } from '../types';

type ProjectCardProps = {
  data: Project;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  const { description, link, stack, tags, title } = data;

  return (
    <div className="flex h-fit flex-col gap-y-3 rounded-sm border border-[#d1d9e0] p-4">
      <h3 className="text-xl lg:text-2xl">{title}</h3>
      <p>{description}</p>
      <div className="flex gap-x-2">
        {stack.map((text, index) => (
          <div
            className="w-fit rounded-full bg-[#fcbf49] px-2.5 py-0.5 text-xs font-bold leading-[14px] transition-colors hover:bg-[#fcbf49]/80"
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="flex gap-x-3">
        {tags.map((text, index) => (
          <div
            key={index}
            className="w-fit rounded-sm bg-[#003049] px-2.5 py-2 text-xs font-bold leading-[14px] text-white transition-colors hover:bg-[#003049]/90"
          >
            {text}
          </div>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-fit"
        title="View source code on GitHub"
      >
        <span className="sr-only">View source code on GitHub</span>
        <GithubLogo className="size-5 hover:text-orange-main" />
      </a>
    </div>
  );
};

export default ProjectCard;
