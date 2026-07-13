"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, ExternalLink, Maximize2, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { accent } from "@/components/ui/accent";
import type { Project, ProjectVisual } from "@/data/projects";
import { cn } from "@/lib/utils";

function PlaceholderVisual({
  visual,
  color,
  compact = false,
}: {
  visual: Extract<ProjectVisual, { type: "placeholder" }>;
  color: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-background",
        compact ? "p-1.5" : "p-6",
      )}
    >
      <div className="absolute inset-0 map-line opacity-45" />
      <div
        className="absolute -right-16 -top-20 h-44 w-44 rounded-full blur-3xl"
        style={{ backgroundColor: `${color}12` }}
      />
      <div className="relative z-10">
        {!compact ? (
          <div
            className="mb-4 inline-flex rounded-full border px-2.5 py-1 font-mono text-xs text-muted"
            style={{ borderColor: `${color}33` }}
          >
            {visual.eyebrow}
          </div>
        ) : null}
        <div
          className={cn("font-serif leading-tight text-cream", compact ? "text-[9px]" : "text-3xl")}
        >
          {visual.label}
        </div>
      </div>
      {!compact ? (
        <div className="relative z-10 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="h-14 rounded-lg border bg-cream/3"
              style={{ borderColor: `${color}${item === 0 ? "55" : "22"}` }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Visual({
  visual,
  projectName,
  color,
  compact = false,
  fit = "cover",
  sizes,
}: {
  visual: ProjectVisual;
  projectName: string;
  color: string;
  compact?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  if (visual.type === "placeholder") {
    return <PlaceholderVisual visual={visual} color={color} compact={compact} />;
  }

  return (
    <Image
      src={visual.src}
      alt={`${projectName} - ${visual.label}`}
      fill
      sizes={
        sizes ??
        (compact ? "70px" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px")
      }
      className={cn(
        "object-top",
        compact ? "object-cover" : fit === "contain" ? "object-contain" : "object-cover",
      )}
    />
  );
}

function buttonIcon(label: string) {
  if (label.includes("Source")) return SiGithub;
  if (label.includes("Case")) return BookOpen;
  return ExternalLink;
}

export function ProjectCard({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const tone = accent[project.accent];
  const visual = project.visuals[active];
  const hasMultipleVisuals = project.visuals.length > 1;

  const previous = useCallback(
    () => setActive((current) => (current - 1 + project.visuals.length) % project.visuals.length),
    [project.visuals.length],
  );
  const next = useCallback(
    () => setActive((current) => (current + 1) % project.visuals.length),
    [project.visuals.length],
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft" && hasMultipleVisuals) previous();
      if (event.key === "ArrowRight" && hasMultipleVisuals) next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasMultipleVisuals, lightboxOpen, next, previous]);

  return (
    <>
      <motion.article
        className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card"
        style={{ borderColor: `${tone.hex}33` }}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        whileHover={{
          y: -2,
          boxShadow: `0 14px 34px ${tone.hex}0f`,
          borderColor: `${tone.hex}46`,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="relative aspect-1920/911 overflow-hidden bg-background">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.slug}-${active}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Visual
                visual={visual}
                projectName={project.name}
                color={tone.hex}
                fit="contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 rounded-md border border-cream/10 bg-background/72 px-2.5 py-1 font-mono text-xs text-muted backdrop-blur">
            {active + 1} / {project.visuals.length}
          </div>

          {hasMultipleVisuals ? (
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={previous}
              className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/15 bg-background/75 text-cream opacity-100 backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          ) : null}
          {hasMultipleVisuals ? (
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={next}
              className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/15 bg-background/75 text-cream opacity-100 backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : null}
          <button
            type="button"
            aria-label="Open larger project preview"
            onClick={() => setLightboxOpen(true)}
            className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-cream/15 bg-background/70 text-muted opacity-100 backdrop-blur transition-colors hover:text-cream md:opacity-0 md:group-hover:opacity-100"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-3 max-w-[70%] truncate rounded-md border border-cream/10 bg-background/72 px-2.5 py-1 font-mono text-xs text-muted backdrop-blur">
            {visual.label}
          </div>
          {hasMultipleVisuals ? (
            <div className="absolute bottom-4 right-3 flex gap-1">
              {project.visuals.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setActive(index)}
                  className="h-1.5 cursor-pointer rounded-full transition-all"
                  style={{
                    width: active === index ? 18 : 6,
                    backgroundColor: active === index ? tone.hex : "rgba(245,241,216,0.32)",
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>

        {hasMultipleVisuals ? (
          <div className="scrollbar-hide flex gap-2 overflow-x-auto border-b border-cream/10 px-4 py-2">
            {project.visuals.map((item, index) => (
              <button
                key={item.label}
                type="button"
                aria-label={`Preview ${item.label}`}
                onClick={() => setActive(index)}
                className="relative h-10 w-16 shrink-0 cursor-pointer overflow-hidden rounded-md border bg-background transition-opacity"
                style={{
                  borderColor: active === index ? tone.hex : "rgba(245,241,216,0.12)",
                  opacity: active === index ? 1 : 0.52,
                }}
              >
                <Visual visual={item} projectName={project.name} color={tone.hex} compact />
              </button>
            ))}
          </div>
        ) : null}

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-2xl leading-tight text-cream">{project.name}</h3>
            <motion.span
              className="mt-2 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: tone.hex }}
              animate={{ opacity: [1, 0.38, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-sm leading-6 text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex rounded px-2 py-1 font-mono text-[11px]"
                style={{
                  color: tone.hex,
                  backgroundColor: `${tone.hex}12`,
                  border: `1px solid ${tone.hex}25`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {project.buttons.map((button) => {
              const Icon = buttonIcon(button.label);
              const primary = button.variant === "primary";

              return (
                <motion.a
                  key={button.label}
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold",
                    primary ? "text-background" : "border border-cream/10 bg-cream/4 text-cream",
                  )}
                  style={primary ? { backgroundColor: tone.hex } : undefined}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {button.label}
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-90 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-11 right-0 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-cream/15 bg-card text-cream"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-1920/911 max-h-[78vh] overflow-hidden rounded-xl border border-cream/10 bg-background">
                <Visual
                  visual={visual}
                  projectName={project.name}
                  color={tone.hex}
                  fit="contain"
                  sizes="(max-width: 768px) 94vw, 1120px"
                />
              </div>
              {hasMultipleVisuals ? (
                <div className="mt-4 flex justify-center gap-2">
                  {project.visuals.map((item, index) => (
                    <button
                      key={item.label}
                      type="button"
                      aria-label={`Show ${item.label}`}
                      onClick={() => setActive(index)}
                      className="h-2 cursor-pointer rounded-full"
                      style={{
                        width: active === index ? 24 : 8,
                        backgroundColor: active === index ? tone.hex : "rgba(245,241,216,0.26)",
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}