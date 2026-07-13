"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";

import { ResumeComingSoonModal } from "@/components/ui/resume-coming-soon-modal";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  x: SiX,
  mail: Mail,
  resume: FileText,
};

const colorMap = {
  cream: "#f5f1d8",
  cyan: "#22d3ee",
  purple: "#a855f7",
  yellow: "#facc15",
  white: "#ffffff",
};

export function SocialBar() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section className="px-5 pb-14 md:px-8 lg:px-10">
      <div className="surface flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {socials.map((item) => {
            const Icon = iconMap[item.icon];
            const color = colorMap[item.accent];
            const content = (
              <>
                <span
                  className="inline-flex transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-110"
                  style={{ color }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-cream/10 bg-card px-2 py-1 font-mono text-xs text-cream opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </>
            );
            const className = cn(
              "group relative inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cream/10 bg-cream/4 px-3 py-2 text-sm text-muted transition-colors hover:text-cream",
            );

            if (item.icon === "resume") {
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className={className}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content}
                </motion.button>
              );
            }

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={className}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {content}
              </motion.a>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <motion.a
            href="mailto:hello@takshil.in"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan"
            whileHover={{ boxShadow: "0 0 14px rgba(34,211,238,0.12)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-110" />
            hello@takshil.in
          </motion.a>

          <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-3 py-1.5 font-mono text-xs text-green">
            <MapPin className="h-3.5 w-3.5" />
            India
          </div>
        </div>
      </div>

      <ResumeComingSoonModal
        open={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}