import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://www.actifyzone.com/assets/Gallery_1-CAAVxJ73.webp",
      alt: "Students in classroom",
      description: "Students engaged in classroom learning"
    },
    {
      src: "https://www.actifyzone.com/assets/Gallery_2-tWfIgzc_.webp",
      alt: "Training session",
      description: "Interactive training session in progress"
    },
    {
      src: "https://www.actifyzone.com/assets/Gallery_3-BLb9ZENp.webp",
      alt: "Students discussing",
      description: "Group discussion among students"
    },
    {
      src: "https://www.actifyzone.com/assets/Gallery_4-RfC9Bh8c.webp",
      alt: "Presentation",
      description: "Student delivering a presentation"
    },
    {
      src: "https://www.actifyzone.com/assets/Gallery_5-BwX_j9S7.webp",
      alt: "Group discussion",
      description: "Collaborative group work session"
    },
    {
      src: "https://www.actifyzone.com/assets/Gallery_6-D1Iv6wnE.webp",
      alt: "Classroom activity",
      description: "Hands-on classroom activity"
    },
  ];

  return (
    <section className="py-16 bg-zinc-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-black mb-10"
        >
          View Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="aspect-video">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white px-3 py-2">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="text-gray-700 text-sm font-medium"
                  >
                    {image.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 focus:outline-none z-10"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
