"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

import { accent } from "@/components/ui/accent";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreSkills, learningSkills, type Skill } from "@/data/skills";

function SkillBadge({ skill, dashed = false }: { skill: Skill; dashed?: boolean }) {
  const tone = accent[skill.color];
  const Icon = skill.icon;

  return (
    <motion.div
      className="group inline-flex cursor-default items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors duration-200"
      style={{
        color: dashed ? "#a1a1aa" : tone.hex,
        borderColor: dashed ? `${tone.hex}38` : `${tone.hex}2c`,
        backgroundColor: dashed ? "rgba(255,255,255,0.022)" : `${tone.hex}0d`,
        borderStyle: dashed ? "dashed" : "solid",
      }}
      whileHover={{
        scale: 1.015,
        boxShadow: `0 0 14px ${tone.hex}18`,
        borderColor: `${tone.hex}4a`,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <span
        className="inline-flex transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-110"
        style={{ color: tone.hex }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="transition-colors duration-200 group-hover:text-cream">{skill.label}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="px-5 pb-16 md:px-8 lg:px-10">
      <SectionHeading icon={Code2} eyebrow="Skills" title="Core Skills" className="mb-6" />

      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.025 } },
        }}
      >
        {coreSkills.map((skill) => (
          <motion.div
            key={skill.label}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-9">
        <div className="mb-3 font-mono text-xs text-muted">Currently Learning</div>
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
        >
          {learningSkills.map((skill) => (
            <motion.div
              key={skill.label}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SkillBadge skill={skill} dashed />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}