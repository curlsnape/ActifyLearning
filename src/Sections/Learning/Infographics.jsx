"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Industry Projects",
    description: "Work on real-world projects following industry standards",
    color: "bg-purple-600",
    icon: "💼",
  },
  {
    id: 2,
    title: "Mock Interviews",
    description: "Practice with industry experts to prepare for job interviews",
    color: "bg-green-600",
    icon: "🎯",
  },
  {
    id: 3,
    title: "Resume Building",
    description: "Create a professional resume that stands out to employers",
    color: "bg-blue-500",
    icon: "📄",
  },
  {
    id: 4,
    title: "Web Portfolio",
    description: "Showcase your skills and projects in a professional portfolio",
    color: "bg-amber-500",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Git & LinkedIn",
    description: "Establish your professional online presence",
    color: "bg-orange-500",
    icon: "🔗",
  },
  {
    id: 6,
    title: "Job Ready",
    description: "Prepared with all skills needed to excel in your career",
    color: "bg-blue-600",
    icon: "🚀",
  },
]

export default function Infographics() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-black md:text-5xl font-bold text-center mb-20"
        >
          Our Path Towards Success
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto relative pb-32" // keep padding bottom for endpoint spacing
        >
          {/* Vertical line */}
          <div className="absolute top-0" style={{
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: 'calc(100% - 96px)', // stop above endpoint
            borderRadius: '9999px',
            background: 'linear-gradient(to bottom, #2563EB, #7C3AED)', // blue to purple gradient
            zIndex: 0,
          }} />

          {/* Cards */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-20 relative z-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ zIndex: 10 }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg text-white bg-gradient-to-tr from-indigo-500 to-purple-700 ${
                  step.color
                }`}
              >
                {step.icon}
              </div>

              <div
                className={`flex-1 bg-white rounded-xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
                  <span className="inline-block w-9 h-9 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-semibold text-base">
                    {step.id}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Endpoint Checkmark - placed fully below last card */}
          <motion.div
            variants={itemVariants}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ bottom: 0, zIndex: 20 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl ring-4 ring-white">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
