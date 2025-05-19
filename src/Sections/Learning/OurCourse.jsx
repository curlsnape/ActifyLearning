import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function scrollToHash(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "RPA Developer",
      description: "RPA developers create automation solutions to streamline tasks using software robots.",
      sectionId: "rpa",
      bgImage: "https://i.pinimg.com/736x/47/4c/f3/474cf3b31e3f2f08863030d1dfa9f4ff.jpg",
      courses: [
        { id: "8", title: "UiPath" },
        { id: "9", title: "Power Automate" },
      ],
    },
    {
      id: 2,
      title: "Application Developer",
      description: "Application developers create and maintain software applications to meet business needs.",
      sectionId: "appdev",
      bgImage: "https://i.pinimg.com/736x/41/7c/62/417c6272d5856068eeb52e453681d5b3.jpg",
      courses: [
        { id: "11", title: "React Native" },
        { id: "12", title: "Full Stack Java" },
        { id: "13", title: "React Developer" },
        { id: "14", title: "Full Stack Python" },
        { id: "15", title: "Frontend Developer" },
      ],
    },
    {
      id: 3,
      title: "Data Analyst",
      description: "Data analysts interpret data to provide insights for informed decisions.",
      sectionId: "dataanalyst",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      courses: [
        { id: "1", title: "Data Analyst" },
        { id: "2", title: "Advance Excel" },
        { id: "3", title: "SQL Developer" },
        { id: "4", title: "Tableau Developer" },
        { id: "5", title: "Power BI Developer" },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
        >
          {/* Parallax layered background */}
          <div
            className="absolute inset-0 bg-contain bg-repeat-none bg-center will-change-transform"
            style={{
              backgroundImage: `url(${carouselItems[currentIndex].bgImage})`,
              backgroundAttachment: "fixed",
              transform: "scale(1.05)",
              filter: "brightness(0.5)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-500/30" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              {carouselItems[currentIndex].title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8"
            >
              {carouselItems[currentIndex].description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {carouselItems[currentIndex].courses.map((course) => (
                <a
                  key={course.id}
                  href={`/courseDetails/${course.id}`}
                  className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white transition-all duration-300 text-base md:text-lg font-medium px-4 py-2 rounded"
                >
                  {course.title}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="/contact"
                className="bg-white text-blue-800 hover:bg-white/90 font-medium text-lg px-8 py-3 rounded transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}