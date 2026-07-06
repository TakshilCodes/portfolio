"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const PROJECTS_PER_PAGE = 3;

export function Projects() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const shouldShowControls = projects.length > PROJECTS_PER_PAGE;

  const visibleProjects = useMemo(() => {
    const start = page * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  }, [page]);

  const goToPrevious = () => {
    setPage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1,
    );
  };

  const goToNext = () => {
    setPage((currentPage) =>
      currentPage === totalPages - 1 ? 0 : currentPage + 1,
    );
  };

  return (
    <section id="projects" className="px-5 pb-20 md:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-5">
        <SectionHeading
          icon={ExternalLink}
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Selected projects with multi-screenshot galleries for each product flow."
        />

        {shouldShowControls ? (
          <div className="mb-1 hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous projects"
              className="grid size-10 place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-cream/30 hover:bg-cream/10"
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Show next projects"
              className="grid size-10 place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-cream/30 hover:bg-cream/10"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {shouldShowControls ? (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to projects page ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  page === index
                    ? "w-8 bg-cream"
                    : "w-2 bg-cream/25 hover:bg-cream/45"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous projects"
              className="grid size-10 place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-cream/30 hover:bg-cream/10"
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Show next projects"
              className="grid size-10 place-items-center rounded-full border border-cream/15 bg-cream/5 text-cream transition-colors hover:border-cream/30 hover:bg-cream/10"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}