import type { ComponentType } from "react";
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSwr,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { Radio, ShieldCheck } from "lucide-react";

export type Skill = {
  label: string;
  color: "cyan" | "green" | "purple" | "yellow" | "cream" | "red";
  icon: ComponentType<{ className?: string }>;
};

export const coreSkills: Skill[] = [
  { label: "JavaScript", color: "yellow", icon: SiJavascript },
  { label: "TypeScript", color: "cyan", icon: SiTypescript },
  { label: "React", color: "cyan", icon: SiReact },
  { label: "Next.js", color: "cream", icon: SiNextdotjs },
  { label: "Tailwind CSS", color: "cyan", icon: SiTailwindcss },
  { label: "Node.js", color: "green", icon: SiNodedotjs },
  { label: "Express", color: "cream", icon: SiExpress },
  { label: "Prisma", color: "purple", icon: SiPrisma },
  { label: "PostgreSQL", color: "cyan", icon: SiPostgresql },
  { label: "Redis", color: "red", icon: SiRedis },
  { label: "NextAuth", color: "cream", icon: ShieldCheck },
  { label: "Zod", color: "purple", icon: SiZod },
  { label: "Git & GitHub", color: "cream", icon: SiGithub },
  { label: "Vercel", color: "cream", icon: SiVercel },
];

export const learningSkills: Skill[] = [
  { label: "Docker", color: "cyan", icon: SiDocker },
  { label: "CI/CD", color: "green", icon: SiGithubactions },
  { label: "WebSockets", color: "purple", icon: Radio },
  { label: "SWR", color: "cream", icon: SiSwr },
];

export const gitIcon = SiGit;