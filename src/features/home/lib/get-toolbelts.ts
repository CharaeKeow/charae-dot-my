import React from 'react';

import NextLogo from '@/assets/svg/next-logo.svg';
import NodeLogo from '@/assets/svg/node-logo.svg';
import ReactLogo from '@/assets/svg/react-logo.svg';
import TailwindLogo from '@/assets/svg/tailwind-logo.svg';
import TypeScriptLogo from '@/assets/svg/typescript-logo.svg';

type Toolbelt = {
  name: string;
  logo: React.FC<React.SVGProps<SVGElement>>;
};

export default function getToolbelts() {
  const toolbelts: Toolbelt[] = [
    {
      name: 'React',
      logo: ReactLogo,
    },
    {
      name: 'Next.js',
      logo: NextLogo,
    },
    {
      name: 'TypeScript',
      logo: TypeScriptLogo,
    },
    {
      name: 'TailwindCSS',
      logo: TailwindLogo,
    },
    {
      name: 'Node.js',
      logo: NodeLogo,
    },
  ];

  return toolbelts;
}
