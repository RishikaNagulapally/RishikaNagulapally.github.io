import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function HackSection({
  title,
  description,
  images = [],
  githubLink,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section className="relative bg-black text-white py-20 px-6 sm:px-10 md:px-16 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-white/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[520px] h-[520px] bg-white/10 rounded-full blur-[160px]" />
      </div>

      {/* Centered Container */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 items-center">
        {/* Text Block (LEFT ALIGNED, CENTERED PLACEMENT) */}
        <div className="w-full max-w-4xl text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div className="relative hidden sm:block w-full max-w-4xl aspect-[4/3] 
                        rounded-3xl border border-white/10 bg-white/5 
                        backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.45 }}
              className="w-full h-full object-contain p-4"
            />
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="hidden sm:flex justify-between w-full max-w-4xl">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 border border-white/15 
                       hover:bg-white/15 transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 border border-white/15 
                       hover:bg-white/15 transition"
          >
            ❯
          </button>
        </div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div
          {...handlers}
          className="relative sm:hidden w-full max-w-sm aspect-[4/3] 
                     rounded-3xl border border-white/10 bg-white/5 
                     backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] 
                     overflow-hidden select-none"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-contain p-4"
              draggable={false}
            />
          </AnimatePresence>

          {/* Mobile Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden justify-between w-full max-w-sm">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 border border-white/15 
                       hover:bg-white/15 transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 border border-white/15 
                       hover:bg-white/15 transition"
          >
            ❯
          </button>
        </div>

        {/* GitHub Button */}
        {githubLink && (
          <div className="mt-6">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 
                         bg-white text-black font-semibold 
                         px-6 py-2.5 rounded-xl 
                         hover:bg-gray-200 transition"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
