"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, FileText, Mail, X } from "lucide-react";

import { cn } from "@/lib/utils";

type ResumeComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeComingSoonModal({ open, onClose }: ResumeComingSoonModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-coming-soon-title"
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-cream/12 bg-card p-5 shadow-2xl"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow/50 to-transparent" />

            <button
              type="button"
              aria-label="Close resume coming soon modal"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-cream/10 bg-cream/4 text-muted transition-colors hover:text-cream"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-yellow/20 bg-yellow/10 text-yellow">
              <FileText className="h-5 w-5" />
            </div>

            <div className="pr-8">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/4 px-2.5 py-1 font-mono text-xs text-muted">
                <Clock3 className="h-3.5 w-3.5 text-yellow" />
                Coming soon
              </div>
              <h2 id="resume-coming-soon-title" className="font-serif text-2xl text-cream">
                Resume is almost ready.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                I am polishing the PDF version right now. For opportunities or project details, email me and I will share the latest version directly.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="mailto:hello@takshil.in"
                className={cn(
                  "group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cyan/35 bg-cyan/90 px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-cyan",
                )}
              >
                <Mail className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-110" />
                Email Me
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex cursor-pointer items-center rounded-xl border border-cream/12 bg-cream/4 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:border-cream/20 hover:bg-cream/6"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}