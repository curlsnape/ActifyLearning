"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradualSpacingText } from "./GradualSpacingText";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonialImages = [
    {
      id: 1,
      img: "https://www.actifyzone.com/assets/Testimonials_2-B426xSV1.avif",
      alt: "User 1",
    },
    {
      id: 2,
      img: "https://www.actifyzone.com/assets/Testimonials_3-ohFnzbR4.avif",
      alt: "User 2",
    },
    // {
    //   id: 3,
    //   img: "https://dummyimage.com/400x400/222/fff&text=3",
    //   alt: "User 3",
    // },
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialImages.length) % testimonialImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 mb-16 text-center"
      >
        <div className="w-full flex justify-center mb-10 text-black">
          {" "}
          <GradualSpacingText text="Hear what our learners say about us" />
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="relative max-w-lg mx-auto" style={{ height: "384px" }}>
          <AnimatePresence
            initial={false}
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={testimonialImages[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5,
              }}
              className="flex justify-center items-center w-full h-full bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={testimonialImages[currentIndex].img}
                alt={testimonialImages[currentIndex].alt}
                className="h-96 object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-blue-600 hover:text-blue-800 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-blue-600 hover:text-blue-800 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-6"
                    : "bg-blue-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
