import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "DESIGN Lead at IEEE Student branch - GNI",
    description: [
      "Oversaw posts initiatives and Social media , marketing Managed a cross-functional team for event web apps and promotional material Designed UI/UX assets and implemented responsive layouts Formed and onboarded the Design team",
    ],
    button: {
      text: "Visit Website",
      link: "https://ieeegnitc.org/",
    },
    routeButton: {
      text: "IEEE",
      route: "/ieee",
      color: "from-indigo-500 to-purple-600", // Custom color
    },
  },
  {
    title: "Core Team Member at Google Developer Groups On Campus GNI",
    description: [
      "Organized and led the Web Development Bootcamp held in (April 2025) Coordinated design workflows and collaborated with graphic designers Provided technical support during the GEN-AI Bootcamp (February 2025) Assisted the core team with all required technical and event coordination support.",
    ],
    routeButton: {
      text: "GDG",
      route: "/gdg",
      color: "from-green-400 to-blue-500", // Custom color
    },
  },
  {
    title: "Member @ Computer Society of India",
    description: [
      "Active member contributing to discussions, events, and technical initiatives.",
    ],
  },
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % experiences.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section
      id="experience"
      className="bg-black text-white py-12 px-4 sm:px-8 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="w-full flex flex-col items-center">
        {/* Mobile View */}
        <div className="sm:hidden w-full max-w-sm relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={experiences[index].title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-2xl shadow-xl p-4 mb-4 backdrop-blur-md cursor-grab select-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                if (info.offset.x < -80) handleNext();
                else if (info.offset.x > 80) handlePrev();
              }}
            >
              <h3 className="text-base font-semibold mb-2 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
                {experiences[index].title}
              </h3>
              <div className="text-gray-300 mb-3 text-xs leading-snug">
                {experiences[index].description}
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col gap-2 mt-4">
                {experiences[index].button && (
                  <a
                    href={experiences[index].button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold text-sm py-2 rounded-lg hover:from-pink-300 hover:to-violet-400 transition"
                  >
                    {experiences[index].button.text}
                  </a>
                )}
                {experiences[index].routeButton && (
                  <Link
                    to={experiences[index].routeButton.route}
                    className={`block w-full text-center bg-gradient-to-r ${
                      experiences[index].routeButton.color
                    } text-white font-semibold text-sm py-2 rounded-lg hover:brightness-110 transition`}
                  >
                    {experiences[index].routeButton.text}
                  </Link>
                )}
              </div>

              <p className="mt-3 text-gray-400 text-[11px] text-center italic">
                Swipe or tap arrows to navigate
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between max-w-sm mx-auto px-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#ff70b5] hover:bg-[#ff4c96] transition"
            >
              <FiChevronLeft className="text-white" size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-[#ff70b5] hover:bg-[#ff4c96] transition"
            >
              <FiChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {experiences.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                  i === index ? "bg-pink-500" : "bg-gray-600"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex relative w-full max-w-md md:max-w-2xl lg:max-w-4xl h-[480px] items-center justify-center">
          <AnimatePresence>
            {experiences.map((exp, i) => {
              const isActive = i === index;
              const offset = (i - index + experiences.length) % experiences.length;
              const x = offset * 15;
              const y = Math.abs(offset) * -15;
              const rotate = offset * 4;
              const zIndex = isActive ? 30 : 20 - Math.abs(offset);

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, scale: 0.8, y: 60 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.9,
                    x,
                    y,
                    rotate,
                    zIndex,
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: 60 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-[90%] sm:w-[92%] md:w-[95%] h-[85%] rounded-2xl shadow-2xl p-6 md:p-8 cursor-pointer border border-[#ff70b5] backdrop-blur-md"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 240, 250, 0.12), rgba(255, 224, 255, 0.05))",
                  }}
                  onClick={handleNext}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <div className="text-gray-100 mb-6 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-col sm:items-center sm:justify-center gap-3">
                    {exp.button && (
                      <a
                        href={exp.button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-violet-500 text-black font-medium px-4 py-2 rounded-lg hover:from-pink-300 hover:to-violet-400 transition duration-300"
                      >
                        {exp.button.text} <FiArrowRight />
                      </a>
                    )}
                    {exp.routeButton && (
                      <Link
                        to={exp.routeButton.route}
                        className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${
                          exp.routeButton.color
                        } text-white font-medium px-4 py-2 rounded-lg hover:brightness-110 transition duration-300`}
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
      </div>
    </section>
  );
}
