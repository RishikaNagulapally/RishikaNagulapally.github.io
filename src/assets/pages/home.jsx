import React from "react";
import AdvaitImage from "../pictures/rishika.jpg"; // Make sure the path is correct

export default function AboutMe() {
  return (
    <section
      id="home"
      className="bg-black text-gray-200 px-4 sm:px-6 py-16 mt-24 rounded-3xl max-w-4xl mx-auto shadow-lg border border-orange-600/20"
    >
      {/* Profile Image */}
      <div className="relative w-full flex justify-center mb-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-orange-500/40 shadow-xl transition-transform duration-300 hover:scale-105 hover:ring-orange-500/60">
            <img
              src={AdvaitImage}
              alt="Rishika"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-400">
              Rishika
            </h2>
            <p className="text-sm sm:text-base text-gray-400 italic"></p>
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-3 text-white leading-tight">
        Hi, I'm <span className="text-orange-500">Rishika</span> 👋
      </h1>

      {/* Subheading */}
      <h3 className="text-lg sm:text-2xl text-center font-medium text-gray-300 mb-5 italic">
        Fullstack Developer & Tech Explorer 🚀
      </h3>

      {/* Description */}
      <p className="text-center text-gray-400 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto mb-5 px-1 sm:px-0">
        Exploring the potential of{" "}
        <span className="text-orange-400 font-semibold">Artificial Intelligence</span>{" "}
        and{" "}
        <span className="text-orange-400 font-semibold">Machine Learning</span>{" "}
        to solve real-world problems. I blend smart algorithms with intuitive
        design to build intelligent, user-focused web and mobile experiences.
      </p>

      {/* Tech Stack */}
      <p className="text-center text-gray-400 text-sm sm:text-lg mb-8 px-2">
        Currently exploring{" "}
        <span className="text-orange-400 font-semibold">React</span>,{" "}
        <span className="text-orange-400 font-semibold">Flutter</span>,{" "}
        <span className="text-orange-400 font-semibold">AI/ML</span> &{" "}
        <span className="text-orange-400 font-semibold">AI bots</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {/* ✅ Download CV */}
        <a
          href="/rishika.pdf"
          download="rishika.pdf"
          className="bg-orange-500 text-white text-sm sm:text-base px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          ⬇️ Download CV
        </a>

        {/* ✅ Projects */}
        <a
          href="#projects"
          className="bg-gray-800 text-white text-sm sm:text-base px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          💼 My Projects
        </a>
      </div>

      {/* Quote */}
      <blockquote className="italic text-center text-gray-300 max-w-sm sm:max-w-lg mx-auto px-3 sm:px-4 border-l-4 border-orange-500 pl-3 sm:pl-5 text-sm sm:text-lg">
        Every bug is a lesson. Every feature is a story waiting to be told.
      </blockquote>

      {/* Scroll Cue */}
      <div className="mt-10 flex justify-center">
        <div className="animate-bounce text-orange-400 text-2xl">⌄</div>
      </div>
    </section>
  );
}
