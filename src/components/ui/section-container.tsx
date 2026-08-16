import type React from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionContainer = ({
  className,
  children,
}: SectionContainerProps) => {
  return <section className={cn("p-4 lg:p-8", className)}>{children}</section>;
};
