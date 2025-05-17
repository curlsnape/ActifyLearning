import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Book, Users, Star } from "lucide-react";

const StatItem = ({ icon, label, value, suffix = "", delay }) => {
  const [count, setCount] = useState(0);
  const finalValue = parseFloat(value);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = finalValue * progress;

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(finalValue);
        } else {
          setCount(currentCount);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, finalValue, controls]);

  const isDecimal = value.includes(".");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      className="flex flex-col items-center"
    >
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="relative bg-white p-5 rounded-full shadow-lg">{icon}</div>
      </div>

      <h3 className="text-xl font-medium text-gray-700 mb-2 text-center">{label}</h3>

      <div className="flex items-baseline">
        <span className="text-4xl md:text-5xl font-bold text-blue-800">
          {isDecimal ? count.toFixed(1) : Math.round(count)}
          {suffix}
        </span>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <StatItem icon={<Book className="h-10 w-10 text-blue-600" />} label="No. of Courses" value="12" delay={0} />

          <StatItem
            icon={<Users className="h-10 w-10 text-blue-600" />}
            label="No. of Students Enrolled"
            value="100"
            suffix="+"
            delay={0.2}
          />

          <StatItem
            icon={<Star className="h-10 w-10 text-yellow-500" />}
            label="Overall Rating"
            value="4.1"
            suffix="/5"
            delay={0.4}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
