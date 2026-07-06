import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
          {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-cream md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{subtitle}</p> : null}
    </div>
  );
}
