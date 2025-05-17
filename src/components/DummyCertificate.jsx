"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, CheckCircle, ArrowRight } from "lucide-react"

export default function EnrollSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="relative mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Enroll Now</h2>
              
            </div>

            <h3 className="text-xl md:text-2xl text-gray-600 mb-8">Earn a Certificate & Advance Your Career</h3>

            <p className="text-gray-700 mb-8 text-lg">
              Join our industry-recognized courses and get certified to boost your career prospects. Our certificates
              are valued by employers and demonstrate your expertise in the field.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Hands-on practical projects",
                "Industry-relevant curriculum",
                "Expert instructors",
                "Job placement assistance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center group rounded-md"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Certificate preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Certificate shadow and glow effect */}
              <div
                className={`absolute inset-0 bg-blue-600/20 rounded-xl blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-50"}`}
              ></div>

              {/* Certificate frame */}
              <motion.div
                animate={{
                  rotate: isHovered ? [0, -1, 1, -1, 0] : 0,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border-4 border-blue-700/20 rounded-xl overflow-hidden shadow-2xl p-8 max-w-md"
              >
                {/* Certificate content */}
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <Award className="h-16 w-16 text-yellow-500" />
                    <div className="absolute inset-0 bg-yellow-300/30 blur-md rounded-full"></div>
                  </div>
                  <img src="https://static.wixstatic.com/media/babd9b_ba57d40fd60d4d3bbc5a606f6fea1666~mv2.png/v1/fill/w_209,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac.png" alt="Actify Learning" className="h-8" />
                </div>

                <h3 className="text-3xl font-bold text-center text-blue-800 mb-6">CERTIFICATE</h3>

                <p className="text-center text-gray-700 mb-4">This is to Certify that</p>

                <div className="border-b-2 border-gray-300 w-full mb-6 py-2 text-center text-gray-400 italic">
                  Student Name
                </div>

                <p className="text-center text-gray-700 mb-8">
                  Successfully completed <span className="font-semibold">Course Name</span> With Hands On Projects, a
                  course of study offered by Actify Learning Center, Thane
                </p>

                <div className="flex justify-between items-end">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-800 font-bold">SEAL</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="border-b border-gray-400 mb-1 w-40"></div>
                    <p className="text-gray-700 text-sm">DIRECTOR</p>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 transform rotate-45 translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-600 transform rotate-45 -translate-x-10 translate-y-10"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
