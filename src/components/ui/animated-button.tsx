"use client";

import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  className,
}: AnimatedButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
        isPrimary
          ? "border-cyan/45 bg-cyan/90 text-background hover:bg-cyan/90"
          : "border-cream/14 bg-cream/4 text-cream hover:border-cyan/30 hover:bg-cream/6",
        className,
      )}
    >
      {Icon ? (
        <Icon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-110" />
      ) : null}
      <span>{children}</span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </motion.a>
  );
}