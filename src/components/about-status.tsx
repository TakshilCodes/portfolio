"use client";

import { motion } from "framer-motion";
import { Globe2, Navigation, Terminal } from "lucide-react";

import { accent } from "@/components/ui/accent";
import { CobeGlobe } from "@/components/ui/cobe-globe";

const workstreams = [
  {
    id: "aurbit",
    dot: "green",
    tag: "In Progress",
    text: "Building Aurbit, a production-grade feedback and issue management platform with embeddable widgets, multi-tenancy, and developer-focused infrastructure.",
  },
  {
    id: "townhawll",
    dot: "cyan",
    tag: "Research",
    text: "Researching and designing TownHawll, a social discovery platform for games, movies, and shows with communities, reviews, collections, and AI-powered features.",
  },
] as const;

export function AboutStatus() {
  return (
    <section id="about" className="px-5 pb-16 md:px-8 lg:px-10">
      <div className="grid gap-5 lg:grid-cols-2">
        <motion.article
          className="surface-strong rounded-2xl p-5 md:p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
            <Globe2 className="h-3.5 w-3.5" />
            About Me
          </div>
          <h2 className="font-serif text-2xl leading-tight text-cream md:text-3xl">
            Navigating the world of tech
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            I&apos;m a 17-year-old full-stack developer based in Ahmedabad, India. I build modern web applications with experience in authentication, databases, REST APIs, server-side rendering, caching, and AI integrations. I focus on building reliable, production-ready products and am currently open to internships, freelance projects, and junior full-stack opportunities.
          </p>
          <CobeGlobe className="mt-4 h-75 sm:h-85" />
        </motion.article>

        <motion.article
          className="surface-strong relative overflow-hidden rounded-2xl p-5 md:p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-3 py-1 font-mono text-xs text-green">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Live Status
          </div>

          <div className="mb-3 flex items-center gap-2 pr-28 font-mono text-xs text-muted">
            <Terminal className="h-3.5 w-3.5" />
            Currently Building
          </div>
          <h2 className="font-serif text-2xl leading-tight text-cream md:text-3xl">
            Active Workstreams
          </h2>

          <div className="mt-6 grid gap-4">
            {workstreams.map((item, index) => {
              const tone = accent[item.dot];

              return (
                <motion.div
                  key={item.id}
                  className="group flex items-start gap-3 rounded-xl border border-cream/5 bg-cream/3 p-3"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  style={{ borderColor: "rgba(245, 241, 216, 0.05)" }}
                  whileHover={{ x: 2, borderColor: `${tone.hex}34` }}
                >
                  <motion.span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: tone.hex, boxShadow: `0 0 12px ${tone.hex}88` }}
                    animate={{ scale: [1, 0.75, 1], opacity: [0.9, 0.62, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="min-w-0">
                    <p className="text-sm leading-6 text-cream">{item.text}</p>
                    <span
                      className="mt-2 inline-flex rounded-md px-2 py-0.5 font-mono text-xs"
                      style={{ backgroundColor: `${tone.hex}18`, color: tone.hex }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            aria-hidden
            className="absolute -bottom-20 -right-14 h-48 w-48 rounded-full border border-cyan/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Navigation className="absolute left-7 top-5 h-5 w-5 text-cyan/40" />
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
