"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { SectionHeading } from "@/components/ui/section-heading";

const githubUrl = "https://github.com/TakshilCodes";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-40 min-w-212 grid-cols-[repeat(52,12px)] gap-1.25">
        {Array.from({ length: 52 * 7 }).map((_, index) => (
          <span
            key={index}
            className="h-3 w-3 rounded-sm bg-green/10"
            style={{ opacity: 0.2 + (index % 5) * 0.12 }}
          />
        ))}
      </div>
    ),
  },
);

export function GithubActivity() {
  return (
    <section className="px-5 pb-16 md:px-8 lg:px-10">
      <motion.div
        className="surface-strong rounded-2xl p-5 md:p-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            icon={Star}
            eyebrow="GitHub Activity"
            title="Consistency"
            subtitle="Building, learning and improving through real commits."
            className="mb-0"
          />

          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-cream/10 bg-cream/4 px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-cyan/25 hover:text-cream"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <SiGithub className="h-4 w-4 text-cream transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-110" />
            <span>Open GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <div className="rounded-xl border border-cream/6 bg-background/35 px-3 py-4 md:px-5">
          <div className="scrollbar-hide overflow-x-auto pb-2">
            <div className="flex min-w-full justify-center">
              <GitHubCalendar
                username="TakshilCodes"
                colorScheme="dark"
                blockSize={12}
                blockMargin={5}
                fontSize={12}
                theme={{
                  dark: [
                    "rgba(34,197,94,0.08)",
                    "rgba(34,197,94,0.28)",
                    "rgba(34,197,94,0.5)",
                    "rgba(34,197,94,0.75)",
                    "#22c55e",
                  ],
                }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
                className="github-calendar"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}