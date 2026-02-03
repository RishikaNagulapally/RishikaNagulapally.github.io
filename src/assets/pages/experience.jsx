import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Secretary AT IEEE Student Branch – GNI",
    points: [
      "Oversaw post initiatives, social media strategy, and technical outreach",
      "Managed cross-functional teams for event websites and promotional assets",
      "Designed UI/UX assets and implemented fully responsive layouts",
      "Formed and onboarded the core design and technical teams",
    ],
    button: {
      text: "Visit Website",
      link: "https://ieeegnitc.org/",
    },
    routeButton: {
      text: "IEEE",
      route: "/ieee",
    },
  },
  {
    title: "App Development Co-Lead AT GDG on Campus – GNI",
    points: [
      "Organized and led the Web Development Bootcamp (April 2025)",
      "Coordinated design workflows with developers and designers",
      "Provided technical support during the Gen-AI Bootcamp (Feb 2025)",
      "Assisted the core team with event tech and execution",
    ],
    routeButton: {
      text: "GDG",
      route: "/gdg",
    },
  },
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % experiences.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section
      id="experience"
      className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Experience
        </span>
        <span className="block mt-3 w-20 h-[3px] mx-auto bg-white/40 rounded-full" />
      </motion.h2>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={experiences[index].title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_60px_rgba(0,0,0,0.65)] p-6"
          >
            <h3 className="text-xl font-bold mb-4">
              {experiences[index].title}
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              {experiences[index].points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white/60">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              {experiences[index].button && (
                <a
                  href={experiences[index].button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 
                             bg-white text-black font-semibold py-2.5 rounded-xl 
                             hover:bg-gray-200 transition"
                >
                  {experiences[index].button.text}
                </a>
              )}
              {experiences[index].routeButton && (
                <Link
                  to={experiences[index].routeButton.route}
                  className="inline-flex items-center justify-center gap-2 
                             bg-white/10 border border-white/15 text-white font-semibold 
                             py-2.5 rounded-xl hover:bg-white/15 transition"
                >
                  {experiences[index].routeButton.text}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between px-6 mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden sm:flex relative w-full max-w-5xl h-[480px] items-center justify-center">
        <AnimatePresence>
          {experiences.map((exp, i) => {
            const isActive = i === index;
            const offset = (i - index + experiences.length) % experiences.length;

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, scale: 0.85, y: 60 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.9,
                  x: offset * 18,
                  y: Math.abs(offset) * -14,
                  zIndex: isActive ? 30 : 20,
                }}
                exit={{ opacity: 0, scale: 0.85, y: 60 }}
                transition={{ duration: 0.45 }}
                onClick={handleNext}
                className="absolute w-[92%] h-[85%] rounded-3xl border border-white/10 
                           bg-white/5 backdrop-blur-2xl p-8 cursor-pointer
                           shadow-[0_0_80px_rgba(0,0,0,0.7)]"
              >
                <h3 className="text-2xl font-bold mb-5">{exp.title}</h3>

                <ul className="space-y-3 text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-white/60 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-center gap-3 mt-8">
                  {exp.button && (
                    <a
                      href={exp.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 
                                 bg-white text-black font-semibold px-5 py-2.5 
                                 rounded-xl hover:bg-gray-200 transition"
                    >
                      {exp.button.text} <FiArrowRight />
                    </a>
                  )}
                  {exp.routeButton && (
                    <Link
                      to={exp.routeButton.route}
                      className="inline-flex items-center gap-2 
                                 bg-white/10 border border-white/15 text-white 
                                 font-semibold px-5 py-2.5 rounded-xl 
                                 hover:bg-white/15 transition"
                    >
                      {exp.routeButton.text} <FiArrowRight />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
