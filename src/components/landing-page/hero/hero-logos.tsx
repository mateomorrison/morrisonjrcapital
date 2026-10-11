"use client";

import { motion } from "motion/react";

const LOCKUPS = [
  { text: "AI",           cls: "absolute top-[15%] left-[5%] md:top-[18%] md:left-[12%]" },
  { text: "QUANT",        cls: "absolute top-[10%] right-[5%] md:top-[8%] md:right-[14%]" },
  { text: "CYBERSECURITY",cls: "absolute bottom-[22%] left-[8%] md:bottom-auto md:top-[62%] md:left-[7%]" },
  { text: "E-COMMERCE",   cls: "absolute bottom-[18%] right-[8%] md:bottom-auto md:top-[58%] md:right-[7%]" },
];

const HeroLogos = () => (
  <>
    {LOCKUPS.map((l) => (
      <motion.div
        key={l.text}
        className={l.cls + " floating-lockup"}
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 6 + Math.random() % 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {l.text}
      </motion.div>
    ))}
  </>
);

export default HeroLogos;
