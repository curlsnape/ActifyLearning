"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Users, UserCheck, BookOpen, Laptop } from "lucide-react"
import { GradualSpacingText } from "./GradualSpacingText"

// Features Data
const features = [
  {
    icon: Briefcase,
    title: "Relevant Project",
    description: "Practical projects as per industry standards",
    color: "from-blue-500 to-blue-600",
    glow: "from-blue-600 to-blue-800",
  },
  {
    icon: Users,
    title: "Personal attention",
    description: "Small batches of 3-4 students",
    color: "from-purple-500 to-purple-600",
    glow: "from-purple-600 to-purple-800",
  },
  {
    icon: UserCheck,
    title: "1:1 Session",
    description: "Mock interview and resume building sessions",
    color: "from-green-500 to-green-600",
    glow: "from-green-600 to-green-800",
  },
  {
    icon: BookOpen,
    title: "Teaching Methodology",
    description: "Everyday theory, Practical, DIY",
    color: "from-amber-500 to-amber-600",
    glow: "from-amber-600 to-amber-800",
  },
  {
    icon: Laptop,
    title: "Learning Mode",
    description: "Offline mode, Online mode, Hybrid mode",
    color: "from-rose-500 to-rose-600",
    glow: "from-rose-600 to-rose-800",
  },
]

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function WhyChooseUs() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center mb-10 text-black"> <GradualSpacingText text="Why Choose Us?" /></div>
  

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Reusable FeatureCard Component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon

  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center">
      <div className="relative group">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.glow} blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
        />
        <div
          className={`relative w-32 h-32 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-105 z-10`}
        >
          <Icon className="w-10 h-10" />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-center">{feature.title}</h3>
      <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
    </motion.div>
  )
}
