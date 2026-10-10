"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const LEVELS = [
  {
    level: "Level 1",
    title: "AI Foundations",
    desc: "How modern AI actually works — models, tokens, context, agents. Built for operators who need fluency, not theory.",
  },
  {
    level: "Level 2",
    title: "AI in Practice",
    desc: "Deploying AI into real workflows: automation, decision infrastructure, and tooling you own — with the judgment to know when not to use it.",
  },
  {
    level: "Level 3",
    title: "Building with AI",
    desc: "Ship your own AI products end to end. Architecture, evaluation, deployment, and the operational discipline that separates toys from businesses.",
  },
];

const CourseCTA = () => {
  return (
    <section className="w-full h-fit px-6 lg:px-8 xl:px-10 2xl:px-20 my-16 sm:my-20 lg:my-24 overflow-x-hidden">
      <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#0F0F0F] border border-zinc-800 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col lg:flex-row justify-between gap-10"
        >
          <div className="flex flex-col gap-5 max-w-xl">
            <span className="text-[#FF2F00] text-sm font-semibold tracking-widest uppercase">
              The Academy
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight">
              A 3-level course for AI —{" "}
              <span className="text-zinc-400">from first principles to shipping products.</span>
            </h3>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              One path, three levels. No fluff, no theory dumping — the same
              operational AI knowledge the studio uses inside its own ventures.
              Waitlist is open; seats are limited per cohort.
            </p>
            <div className="w-fit">
              <Link
                id="waitlist-email-input"
                href="/#waitlist-email-input"
                className="text-[#FF2F00] text-base sm:text-lg font-semibold flex gap-3 items-center w-fit group"
              >
                <span>Join the waitlist</span>
                <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5 -rotate-45 group-hover:rotate-0 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:max-w-md w-full">
            {LEVELS.map((l, i) => (
              <motion.div
                key={l.level}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors duration-300"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[#FF2F00] text-xs font-semibold tracking-widest uppercase">
                    {l.level}
                  </span>
                  <span className="text-white text-lg sm:text-xl font-semibold">{l.title}</span>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCTA;
