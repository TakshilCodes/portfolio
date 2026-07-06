"use client";

import { FileText, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import { AnimatedButton } from "@/components/ui/animated-button";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight text-cream">
          Let&rsquo;s build something useful.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          I’m open to internships, freelance work, collaborations, and full-stack projects where I can turn ideas into working products.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <AnimatedButton href="mailto:hello@takshil.in" icon={Mail} variant="primary">
            Email Me
          </AnimatedButton>
          <AnimatedButton href="https://github.com/TakshilCodes" icon={SiGithub}>
            GitHub
          </AnimatedButton>
          <AnimatedButton href="https://www.linkedin.com/in/takshilpandya/" icon={FaLinkedin}>
            LinkedIn
          </AnimatedButton>
          <AnimatedButton href="/resume.pdf" icon={FileText}>
            Resume
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
