import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function HackSection({ title, description, images, githubLink }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-violet-500 to-orange-400 text-transparent bg-clip-text mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center max-w-3xl mb-8 leading-relaxed tracking-wide">
        {description}
      </p>

      {/* Desktop Carousel */}
      <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-lg mb-3 shadow-lg border border-orange-400/20 bg-black/30 hidden sm:block">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover sm:object-contain transition-all duration-500 ease-in-out"
          />
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-orange-400 scale-110" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Arrows Below */}
      <div className="hidden sm:flex justify-between w-full max-w-3xl mb-6 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-black/40 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 backdrop-blur-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-black/40 hover:bg-black/70 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 backdrop-blur-md"
        >
          ❯
        </button>
      </div>

      {/* Mobile Carousel */}
      <div
        {...handlers}
        className="relative w-full max-w-md aspect-[4/3] rounded-lg mb-3 shadow-lg border border-orange-400/20 bg-black/30 block sm:hidden select-none"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-full max-h-full object-contain rounded-lg mx-auto"
            draggable={false}
          />
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex space-x-3 absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                i === index ? "bg-orange-400 scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Arrows Below */}
      <div className="flex sm:hidden justify-between w-full max-w-md mb-6 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-gradient-to-tr from-orange-500 to-pink-500 hover:brightness-110 text-white p-3 rounded-full shadow-lg transform hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-gradient-to-tr from-orange-500 to-pink-500 hover:brightness-110 text-white p-3 rounded-full shadow-lg transform hover:scale-110"
        >
          ❯
        </button>
      </div>

      {/* GitHub Button */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-md text-sm sm:text-base font-medium shadow-md transition-all hover:scale-105"
        >
          <Github size={18} />
          View on GitHub
        </a>
      )}
    </section>
  );
}
