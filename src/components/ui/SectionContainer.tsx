import { cn } from '@/lib/utils';

import type React from 'react';

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ className, children }: SectionContainerProps) => {
  return <section className={cn('p-4 lg:p-8', className)}>{children}</section>;
};

export default SectionContainer;
