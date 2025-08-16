    import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projectsData.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section
      id="projects"
      className="bg-black text-white py-12 px-4 sm:px-8 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={projectsData[index].name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-4 cursor-grab select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.x < -80) handleNext();
              else if (info.offset.x > 80) handlePrev();
            }}
          >
            <h3 className="text-xl font-semibold mb-3">{projectsData[index].name}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{projectsData[index].description}</p>

            <div className="flex gap-4">
              <a
                href={projectsData[index].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-md hover:from-pink-300 hover:to-violet-400 transition"
              >
                Live Demo
              </a>
              <a
                href={projectsData[index].repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-md hover:from-gray-600 hover:to-gray-400 transition"
              >
                Git Repository
              </a>
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
            aria-label="Previous Project"
            className="p-2 rounded-full bg-[#ff70b5] hover:bg-[#ff4c96] transition"
          >
            <FiChevronLeft className="text-white" size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="p-2 rounded-full bg-[#ff70b5] hover:bg-[#ff4c96] transition"
          >
            <FiChevronRight className="text-white" size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {projectsData.map((_, i) => (
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

      {/* Desktop & Tablet View */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="bg-[rgba(255,255,255,0.08)] backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-md hover:from-pink-300 hover:to-violet-400 transition"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-md hover:from-gray-600 hover:to-gray-400 transition"
              >
                Git Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
