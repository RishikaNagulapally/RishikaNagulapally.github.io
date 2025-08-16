import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Web Development",
    tagline: "I speak fluent HTML, CSS, and JavaScript!",
    items: [
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", border: "border-orange-500" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", border: "border-blue-500" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", border: "border-yellow-400" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", border: "border-blue-400" },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", border: "border-cyan-400" },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", border: "border-white" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", border: "border-green-500" },
      { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", border: "border-cyan-500" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", border: "border-green-500" }
    ]
  },
  {
    category: "App Development",
    tagline: "From iOS to Android, I've got you covered!",
    items: [
      { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", border: "border-blue-400" },
      { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", border: "border-cyan-400" },
      { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", border: "border-purple-500" },
      { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", border: "border-orange-400" },
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", border: "border-red-500" }
    ]
  },
  {
    category: "AI & ML",
    tagline: "Teaching computers to think… sort of.",
    items: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", border: "border-yellow-400" },
      { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", border: "border-orange-500" },
      { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", border: "border-red-500" },
      { name: "Keras", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", border: "border-red-400" },
      { name: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", border: "border-yellow-500" },
      { name: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", border: "border-blue-400" }
    ]
  },
  {
    category: "Design",
    tagline: "Making things pretty, one pixel at a time.",
    items: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", border: "border-pink-500" },
      { name: "Adobe XD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", border: "border-purple-500" },
      { name: "Canva", img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Canva_Logo.svg", border: "border-cyan-400" },
      { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg", border: "border-blue-500" },
      { name: "Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg", border: "border-orange-500" }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-14 px-4 bg-gradient-to-b from-black via-[#1a1310] to-[#2b1a14] text-white transition-colors duration-500"
    >
      <motion.h2
        className="text-center text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-orange-500">&lt;Skills/&gt;</span> My TechStack
      </motion.h2>
      <motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        A blend of technologies I’ve mastered, tools I adore, and a few I’m still learning (because tech never stops evolving! 🚀)
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsData.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-b from-[#1c1310] to-[#241814] rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-orange-500/30 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
              &lt;{section.category}/&gt;
            </h3>
            <p className="text-sm text-gray-400 text-center mb-4">{section.tagline}</p>

            <div className="grid grid-cols-3 gap-3 mt-auto">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className={`flex justify-center items-center p-3 border-2 ${skill.border} rounded-xl bg-white hover:bg-gray-200 transition`}
                  whileHover={{ scale: 1.08, rotate: -2 }}
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
};

export default Skills;
