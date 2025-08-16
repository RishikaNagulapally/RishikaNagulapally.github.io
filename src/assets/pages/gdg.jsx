import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/gdg/img1.jpg";
import img2 from "@/assets/gdg/img2.jpg";
import img3 from "@/assets/gdg/img3.jpg";
import img4 from "@/assets/gdg/img4.jpg";
import img5 from "@/assets/gdg/img5.jpg";
import img6 from "@/assets/gdg/img6.jpg";
import img7 from "@/assets/gdg/img7.jpg";
import img8 from "@/assets/gdg/img8.jpg";
const images = [img1, img2, img3, img4,img8, img7,img6, img5,];

export default function GDG() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">

      </h1>
      <p className="mt-4 text-lg text-center text-gray-300 max-w-2xl">

      </p>

      {/* Carousel Section */}
      <div className="relative mt-12 w-full max-w-3xl h-[300px] sm:h-auto sm:aspect-[4/3] overflow-hidden rounded-lg">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`GDG Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index ? "bg-pink-500 scale-110" : "bg-gray-600"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
