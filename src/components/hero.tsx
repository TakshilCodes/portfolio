"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

const gradients = {
  fullstack:
    "linear-gradient(105deg, #a855f7 0%, #22d3ee 44%, #f5f1d8 58%, #a855f7 100%)",
  saas:
    "linear-gradient(105deg, #facc15 0%, #f5f1d8 52%, #22c55e 100%)",
  ai: "linear-gradient(105deg, #22c55e 0%, #22d3ee 58%, #f5f1d8 100%)",
};

type KeywordProps = {
  children: string;
  tone: keyof typeof gradients;
  className?: string;
};

function Keyword({ children, tone, className }: KeywordProps) {
  return (
    <motion.span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: gradients[tone],
        backgroundSize: "190% 100%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}

function ProfileAvatar() {
  return (
    <motion.div
      className="relative z-10 mx-auto mt-3 flex w-full max-w-62.5 flex-col items-center justify-center lg:mx-0 lg:mt-14 lg:translate-x-0 xl:mt-16"
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.58, delay: 0.14, ease: "easeOut" }}
    >
      <div className="relative flex aspect-square w-[min(58vw,244px)] items-center justify-center lg:w-58 xl:w-61">
        <motion.div
          aria-hidden
          className="absolute -inset-2.5 rounded-full border border-dashed border-cyan/8"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="absolute -inset-6 rounded-full border border-purple/5"
          animate={{ opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-cream/16 bg-card"
          animate={{
            boxShadow: [
              "0 0 7px rgba(34,211,238,0.07), 0 0 18px rgba(34,211,238,0.03)",
              "0 0 12px rgba(34,211,238,0.1), 0 0 24px rgba(168,85,247,0.035)",
              "0 0 7px rgba(34,211,238,0.07), 0 0 18px rgba(34,211,238,0.03)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/profile_pic.png"
            alt="Takshil Pandya"
            fill
            priority
            sizes="(max-width: 868px) 80vw, 410px"
            className="scale-[1.02] object-top"
          />
        </motion.div>
      </div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green/20 bg-card px-3.5 py-1.5 text-xs font-semibold text-green shadow-[0_0_8px_rgba(34,197,94,0.07)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-35" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
        Open to opportunities
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 py-12 md:px-8 md:py-14 lg:px-10">
      <div className="pointer-events-none absolute inset-0 map-line opacity-16" />
      <div className="relative mx-auto max-w-6xl">
        <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[max-content_250px] lg:justify-center lg:gap-7 xl:grid-cols-[max-content_260px] xl:gap-60">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/14 bg-card/88 px-4 py-2.5 text-sm font-semibold text-cream backdrop-blur-md md:text-base">
              <span className="font-mono text-xs text-cyan/75 md:text-sm">~/</span>
              <span>Hello, I&apos;m Takshil</span>
            </div>

            <h1 className="font-sans text-[2.6rem] font-black uppercase leading-[0.84] tracking-normal text-cream min-[420px]:text-[3rem] sm:text-[3.75rem] md:text-[4.55rem] lg:text-[4.7rem] xl:text-[5.28rem]">
              <span className="block">
                <Keyword tone="fullstack">FULL-STACK</Keyword>
              </span>
              <span className="block text-cream">DEVELOPER</span>
              <span className="block text-cream">
                <span className="text-cream/90">BUILDING</span>{" "}
                <Keyword tone="saas" className="text-[0.96em]">
                  SAAS
                </Keyword>
              </span>
              <span className="block">
                <span className="inline-block translate-y-[0.02em] pr-2 text-[1.02em] text-cream">&</span>
                <Keyword tone="ai">AI TOOLS</Keyword>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-160 text-base leading-7 text-muted md:text-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
            >
              I build full-stack web apps from idea to working product &mdash; with clean UI, auth,
              databases, dashboards, and practical AI features.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
            >
              <AnimatedButton href="#projects" variant="primary">
                View Projects
              </AnimatedButton>
              <AnimatedButton href="#contact">Contact Me</AnimatedButton>
            </motion.div>
          </motion.div>

          <ProfileAvatar />
        </div>
      </div>
    </section>
  );
}