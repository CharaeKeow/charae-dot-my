import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import GithubLogo from '@/assets/svg/github-logo.svg';
import { Badge } from '@/components/ui/badge';

import type { Project } from '../types';

type ProjectCardProps = {
  data: Project;
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { description, github, logo, stack, status, tags, title, website } = data;

  return (
    <div className="flex h-full flex-col gap-y-3 rounded-sm border border-gray-main p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2.5">
          {logo && <Image src={logo} alt="" className="size-8 shrink-0 object-contain" />}
          <h3 className="text-xl lg:text-2xl">{title}</h3>
        </div>
        {/*Will revisit and update this once I got more status*/}
        {status && (
          <Badge variant="outline" className="shrink-0 border-orange-main text-orange-main">
            {status}
          </Badge>
        )}
      </div>
      <p className="whitespace-pre-line">{description}</p>
      <div className="mt-auto flex flex-col gap-y-3">
        <div className="flex flex-wrap gap-2">
          {stack.map((text, index) => (
            <div
              className="w-fit rounded-full bg-yellow-main px-2.5 py-0.5 text-xs font-bold leading-3.5 transition-colors hover:bg-yellow-main/80"
              key={index}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((text, index) => (
            <div
              key={index}
              className="w-fit rounded-sm bg-blue-main px-2.5 py-2 text-xs font-bold leading-3.5 text-white transition-colors hover:bg-blue-main/90"
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-1 font-medium link"
            >
              Visit website
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="w-fit"
              title="View source code on GitHub"
            >
              <span className="sr-only">View source code on GitHub</span>
              <GithubLogo className="size-5 hover:text-orange-main" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
