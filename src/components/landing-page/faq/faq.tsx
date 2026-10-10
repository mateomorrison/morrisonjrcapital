"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

const FAQ_ITEMS = [
  {
    id: "01",
    question: "What does Morrison Jr do?",
    answer:
      "Morrison Jr is a private startup studio est. 2020, in stealth mode. We build proprietary ventures from scratch at the intersection of artificial intelligence, quantitative finance, and cybersecurity — engineered in-house, owned end to end, and aimed at emerging markets.",
  },
  {
    id: "02",
    question: "Where do the ventures operate?",
    answer:
      "The studio’s focus is emerging markets — regions where mobile-first infrastructure is still under-built. We treat those gaps as the largest unfair advantage for the ventures we launch.",
  },
  {
    id: "03",
    question: "What is the studio’s investment strategy?",
    answer:
      "We are operators and builders first. The studio primarily builds proprietary startups from scratch rather than allocating to existing deals. Where capital is deployed, every strategy earns allocation through out-of-sample evidence, disciplined risk limits, and infrastructure we can audit.",
  },
  {
    id: "04",
    question: "What is the studio building right now?",
    answer:
      "The studio operates in stealth mode — details of specific ventures are announced only when they graduate from internal development. Public communication is intentionally minimal while companies are being built.",
  },
  {
    id: "05",
    question: "Who is behind Morrison Jr?",
    answer:
      "The studio is led by Mateo Morrison Jr, a founder and technology builder working across AI, quantitative finance, and cybersecurity. Read the full biography at /mateo.",
  },
  {
    id: "06",
    question: "How do I get in touch?",
    answer:
      "Email General@morrisonjr.com — the studio reads everything, and replies when the timing is right.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full h-fit px-6 lg:px-8 xl:px-10 2xl:px-20 my-16 sm:my-20 lg:my-24 xl:my-32 2xl:my-40 overflow-x-hidden">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-zinc-900 leading-tight">
          Got questions?
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>We've got answers.
        </h3>

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 max-w-full lg:max-w-md text-left lg:text-right">
          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed">
            Here's everything you need to know before getting started.
          </p>

          <Link
            href="/contact"
            className="text-[#FF2F00] text-base sm:text-lg font-semibold flex gap-3 items-center justify-start lg:justify-end w-fit"
          >
            <span>Contact us</span>
            <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5 -rotate-45 shrink-0" />
          </Link>
        </div>
      </div>

      {/* FAQ List */}
      <div className="mt-12 sm:mt-16 lg:mt-20 space-y-3 sm:space-y-4 lg:space-y-5 w-full">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className="border border-orange-300 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all bg-white shadow-sm hover:shadow-md"
            >
              {/* Question Button */}
              <button
                className="w-full flex items-center justify-between cursor-pointer text-left"
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-1 min-w-0">
                  {/* Number Badge */}
                  <span className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full font-medium text-xs sm:text-sm shrink-0">
                    {item.id}
                  </span>

                  <span className="text-base sm:text-lg lg:text-xl font-medium text-zinc-900 leading-tight pr-2">
                    {item.question}
                  </span>
                </div>

                {/* Plus / Minus Icon with animation */}
                <motion.span
                  key={isOpen ? "minus" : "plus"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#FF2F00] text-xl sm:text-2xl lg:text-3xl leading-none select-none shrink-0 ml-2"
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </button>

              {/* Answer with smooth animation */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -4 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -4 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed pb-2 sm:pb-3 pl-11 sm:pl-13 lg:pl-15">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
