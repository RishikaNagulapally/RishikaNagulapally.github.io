import React from "react";
import AdvaitImage from "../pictures/rishika.jpg";

export default function AboutMe() {
  return (
    <section
      id="home"
      className="relative bg-black text-white py-24 px-6 sm:px-10 flex justify-center overflow-hidden"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[420px] h-[420px] bg-white/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[520px] h-[520px] bg-white/10 rounded-full blur-[160px]" />
      </div>

      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                      shadow-[0_0_70px_rgba(0,0,0,0.7)] px-6 sm:px-10 py-16">
        {/* Profile */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden 
                            border border-white/20 shadow-xl hover:scale-105 transition">
              <img
                src={AdvaitImage}
                alt="Rishika"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
   
            </h2>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Rishika
          </span>{" "}
          👋
        </h1>

        {/* Subheading */}
        <h3 className="text-lg sm:text-2xl text-center text-gray-300 mb-6 italic">
          Full-Stack Developer & Tech Explorer 🚀
        </h3>

        {/* Description */}
        <p className="text-center text-gray-400 text-sm sm:text-lg leading-relaxed 
                      max-w-2xl mx-auto mb-6">
          Exploring the potential of{" "}
          <span className="text-white font-semibold">Artificial Intelligence</span>{" "}
          and{" "}
          <span className="text-white font-semibold">Machine Learning</span>{" "}
          to solve real-world problems. I blend smart algorithms with intuitive
          design to build intelligent, user-focused web and mobile experiences.
        </p>

        {/* Tech Stack */}
        <p className="text-center text-gray-400 text-sm sm:text-lg mb-10">
          Currently exploring{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">Flutter</span>,{" "}
          <span className="text-white font-semibold">AI / ML</span> &{" "}
          <span className="text-white font-semibold">AI Bots</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <a
            href="/rishika.pdf"
            download="rishika.pdf"
            className="inline-flex items-center justify-center gap-2 
                       bg-white text-black font-semibold px-6 py-2.5 rounded-xl 
                       hover:bg-gray-200 transition"
          >
            ⬇️ Download CV
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 
                       bg-white/10 border border-white/15 text-white font-semibold 
                       px-6 py-2.5 rounded-xl hover:bg-white/15 transition"
          >
            💼 My Projects
          </a>
        </div>

        {/* Quote */}
        <blockquote className="italic text-center text-gray-300 max-w-xl mx-auto 
                               border-l-4 border-white/30 pl-4 text-sm sm:text-lg">
          “Every bug is a lesson. Every feature is a story waiting to be told.”
        </blockquote>

        {/* Scroll Cue */}
        <div className="mt-12 flex justify-center">
          <div className="animate-bounce text-white/60 text-2xl">⌄</div>
        </div>
      </div>
    </section>
  );
}
