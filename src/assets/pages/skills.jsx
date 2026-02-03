import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Web Development",
    tagline: "Modern, scalable, and performance-focused web applications.",
    items: [
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "App Development",
    tagline: "Cross-platform mobile apps with native performance.",
    items: [
      { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    category: "AI & Machine Learning",
    tagline: "Building intelligent systems with data-driven models.",
    items: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Keras", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
  },
  {
    category: "Design",
    tagline: "User-centric design with clean visual systems.",
    items: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Canva", img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Canva_Logo.svg" },
      { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
      { name: "Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Skills
        </span>
        <span className="block mt-3 w-20 h-[3px] mx-auto bg-white/40 rounded-full" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mb-14"
      >
        Technologies, frameworks, and tools I actively use to build scalable,
        high-quality software solutions.
      </motion.p>

      {/* SKILLS GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
        {skillsData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group rounded-3xl border border-white/10 bg-white/5 
                       backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.65)] 
                       p-6 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-1 text-white text-center">
              {section.category}
            </h3>
            <p className="text-sm text-gray-400 text-center mb-5">
              {section.tagline}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-auto">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center justify-center p-3 rounded-xl 
                             bg-white/10 border border-white/10 
                             hover:bg-white/15 transition"
                  title={skill.name}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
