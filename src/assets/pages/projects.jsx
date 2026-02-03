import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

const GITHUB_FALLBACK = "https://github.com/Advaitkasturi";

export default function Projects() {
  const [index, setIndex] = useState(0);

  // ❌ Remove Spotify / Clone projects
  const filteredProjects = projectsData.filter(
    (p) =>
      !(
        (p.name || "").toLowerCase().includes("spotify") ||
        (p.name || "").toLowerCase().includes("clone") ||
        (p.category || "").toLowerCase().includes("clone")
      )
  );

  // ✅ CampusHub project
  const campusHub = {
    name: "CampusHub",
    description:
      "A smart campus platform for events discovery, registrations, notices, and lost & found management. Designed to centralize campus communication with a clean, role-based user experience.",
    liveLink: "",
    repoLink: "https://github.com/Advaitkasturi",
  };

  const finalProjects = [campusHub, ...filteredProjects];

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % finalProjects.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + finalProjects.length) % finalProjects.length);

  const resolveLink = (link) => link || GITHUB_FALLBACK;

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Projects
        </span>
        <span className="block mt-4 w-24 h-[3px] mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
      </motion.h2>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={finalProjects[index].name}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_60px_rgba(0,0,0,0.65)] p-6"
          >
            <h3 className="text-xl font-bold mb-3">
              {finalProjects[index].name}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {finalProjects[index].description}
            </p>

            <div className="flex gap-3">
              <a
                href={resolveLink(finalProjects[index].liveLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 
                           bg-white text-black font-semibold py-2.5 rounded-xl 
                           hover:bg-gray-200 transition"
              >
                Live <FiExternalLink />
              </a>

              <a
                href={resolveLink(finalProjects[index].repoLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 
                           bg-white/10 border border-white/15 text-white font-semibold 
                           py-2.5 rounded-xl hover:bg-white/15 transition"
              >
                Code <FiGithub />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
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
      <div className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {finalProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_60px_rgba(0,0,0,0.65)] p-6 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-3">{project.name}</h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto flex gap-3">
              <a
                href={resolveLink(project.liveLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 
                           bg-white text-black font-semibold py-2.5 rounded-xl 
                           hover:bg-gray-200 transition"
              >
                Live <FiExternalLink />
              </a>

              <a
                href={resolveLink(project.repoLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 
                           bg-white/10 border border-white/15 text-white font-semibold 
                           py-2.5 rounded-xl hover:bg-white/15 transition"
              >
                Code <FiGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
