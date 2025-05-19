import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Target, FileText, Globe, Link as LinkIcon, Rocket, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Industry Projects",
    description: "Work on real-world projects following industry standards",
    color: "bg-violet-600",
    textColor: "text-violet-600",
    lightColor: "bg-violet-50",
    borderColor: "border-violet-200",
    icon: <Briefcase className="h-6 w-6" />,
    gradient: "from-violet-500 to-violet-600",
  },
  {
    id: 2,
    title: "Mock Interviews",
    description: "Practice with industry experts to prepare for job interviews",
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    icon: <Target className="h-6 w-6" />,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Resume Building",
    description: "Create a professional resume that stands out to employers",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: <FileText className="h-6 w-6" />,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 4,
    title: "Web Portfolio",
    description: "Showcase your skills and projects in a professional portfolio",
    color: "bg-amber-600",
    textColor: "text-amber-600",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-amber-500 to-amber-600",
  },
  {
    id: 5,
    title: "Git & LinkedIn",
    description: "Establish your professional online presence",
    color: "bg-orange-600",
    textColor: "text-orange-600",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: <LinkIcon className="h-6 w-6" />,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: 6,
    title: "Job Ready",
    description: "Prepared with all skills needed to excel in your career",
    color: "bg-indigo-600",
    textColor: "text-indigo-600",
    lightColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    icon: <Rocket className="h-6 w-6" />,
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export default function SuccessPathEnhanced() {
  const controls = useAnimation();
  const [activeStep, setActiveStep] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Here's How Our Course Will Help You Get Your Dream Job
          </h2>
      
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Zigzag connector lines */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-0">
              {steps.map((_, index) => {
                if (index === steps.length - 1) return null;

                const startX = `${(index * 100) / (steps.length - 1)}%`;
                const endX = `${((index + 1) * 100) / (steps.length - 1)}%`;
                const isEven = index % 2 === 0;
                const nextIsEven = (index + 1) % 2 === 0;

                return (
                  <div
                    key={`connector-${index}`}
                    className="absolute"
                    style={{
                      left: startX,
                      width: `${100 / (steps.length - 1)}%`,
                      height: "200px",
                      top: "-100px",
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path
                        d={
                          isEven !== nextIsEven
                            ? "M0,25 C20,25 30,75 50,75 C70,75 80,25 100,25"
                            : isEven
                              ? "M0,25 L100,25"
                              : "M0,75 L100,75"
                        }
                        stroke="#4ade80"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className={`relative ${isEven ? "lg:mt-0" : "lg:mt-32"}`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step number */}
                    <div className="absolute -top-9 -right-6 text-5xl font-bold text-gray-800 opacity-40 z-0">
                      {step.id.toString().padStart(2, "0")}
                    </div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white text-gray-800 rounded-lg p-6 shadow-lg relative z-10 h-full"
                    >
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                          <div className={step.textColor}>{step.icon}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <Link 
                        to={`/step/${step.id}`} 
                        className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn more →
                      </Link>
                    </motion.div>

                    {/* Checkpoint indicator */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      {/* <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {step.id}
                      </motion.div> */}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Final success indicator */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block absolute -bottom-16 right-0 transform translate-y-1/2 z-20"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1f3baa] to-[#152d8d] flex items-center justify-center shadow-lg"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                    }}
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Celebration particles */}
                <AnimatePresence>
                  {activeStep === steps.length && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                          }}
                          animate={{
                            opacity: [1, 0],
                            x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                            y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 0.5,
                          }}
                          className="absolute top-0 left-0 w-2 h-2 rounded-full bg-yellow-300"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}