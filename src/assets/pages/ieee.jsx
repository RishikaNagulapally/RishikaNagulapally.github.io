import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/assets/ieee/img1.jpg";
import img2 from "@/assets/ieee/img2.jpg";

const images = [img1, img2];

export default function IEEE() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        IEEE Gallery!
      </h1>

      {/* Carousel Section */}
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`IEEE Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] object-cover sm:h-[400px]"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-pink-500" : "bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
