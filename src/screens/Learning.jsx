import React, { useEffect } from "react";
import CourseSection from "../Sections/Learning/CourseSection";
import OurCourse from "../Sections/Learning/OurCourse";
import WhyChooseUs from "../Sections/Learning/WhyChooseUs";
import Information from "../Sections/Learning/Information";
import Testimonials from "../Sections/Learning/Testimonials";
import Gallery from "../Sections/Gallery";
import Infographics from "../Sections/Learning/Infographics";
import DummyCertificate from "../components/DummyCertificate";

const Learning = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [location]);

  return (
    <div className="pt-24 bg-white pb-10">
      <OurCourse />
      <Infographics />
      <WhyChooseUs />
      <CourseSection />
      <Information />
      <Testimonials />
      <DummyCertificate />
      <Gallery />
    </div>
  );
};

export default Learning;

// import { Wifi, FileText, Layout, Users, FileCode, GitBranch, Star } from "lucide-react"

// export default function SuccessPath() {
//   const steps = [
//     {
//       title: "Online-Offline",
//       icon: Wifi,
//       number: 1,
//       color: "gray",
//     },
//     {
//       title: "Hands-On-Training",
//       icon: Users,
//       number: 2,
//       color: "amber",
//     },
//     {
//       title: "Industry Projects",
//       icon: FileCode,
//       number: 3,
//       color: "fuchsia",
//     },
//     {
//       title: "Mock Interviews",
//       icon: Users,
//       number: 4,
//       color: "green",
//     },
//     {
//       title: "Resume Building",
//       icon: FileText,
//       number: 5,
//       color: "sky",
//     },
//     {
//       title: "Web Portfolio",
//       icon: Layout,
//       number: 6,
//       color: "red",
//     },
//     {
//       title: "Git & LinkedIn",
//       icon: GitBranch,
//       number: 7,
//       color: "orange",
//       badge: "Job Ready",
//     },
//   ]

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-12">Our Path Towards Success</h1>

//       <div className="relative">
//         {steps.map((step, index) => (
//           <div key={index} className="flex items-center mb-8 relative">
//             {/* Left side with icon */}
//             <div className={`flex-shrink-0 w-16 h-16 rounded-full border-4 bg-white border-${step.color}-500 flex items-center justify-center relative z-10`}>
//               <step.icon className={`w-8 h-8 text-${step.color}-500`} />
//             </div>

//             {/* Connecting line */}
//             {index < steps.length - 1 && (
//               <div className={`absolute left-8 top-16 w-0.5 h-8 bg-${step.color}-500`} />
//             )}

//             {/* Title and number */}
//             <div className="ml-8 flex items-center">
//               <h3 className="text-lg font-semibold">{step.title}</h3>
//               <div className={`ml-4 w-8 h-8 rounded-full bg-${step.color}-500 text-white flex items-center justify-center`}>
//                 {step.number}
//               </div>

//               {/* Job Ready badge */}
//               {step.badge && (
//                 <div className="ml-4 flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
//                   <Star className="w-4 h-4 mr-1" />
//                   {step.badge}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import Image from 'next/image'

// export default function SuccessPath() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-center mb-16 text-[#0a192f]">
//         Our Path Towards Success
//       </h1>

//       <div className="relative space-y-24">
//         {/* Git & LinkedIn - Orange */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#FFA500] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Git icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#FFA500]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#FFA500] flex items-center justify-center text-white">
//               7
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Git & LinkedIn</span>
//         </div>

//         {/* Web Portfolio - Red */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#FF4444] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Portfolio icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#FF4444]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#FF4444] flex items-center justify-center text-white">
//               6
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Web Portfolio</span>
//         </div>

//         {/* Resume Building - Blue */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#00A0DC] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Resume icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#00A0DC]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#00A0DC] flex items-center justify-center text-white">
//               5
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Resume Building</span>
//         </div>

//         {/* Mock Interviews - Green */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#28A745] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Interview icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#28A745]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#28A745] flex items-center justify-center text-white">
//               4
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Mock Interviews</span>
//         </div>

//         {/* Industry Projects - Purple */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#8B008B] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Projects icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#8B008B]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#8B008B] flex items-center justify-center text-white">
//               3
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Industry Projects</span>
//         </div>

//         {/* Hands-On-Training - Brown */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#8B4513] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Training icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#8B4513]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center text-white">
//               2
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Hands-On-Training</span>
//         </div>

//         {/* Online-Offline - Gray */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-full border-4 border-[#808080] flex items-center justify-center bg-white">
//               <div className="w-12 h-12 relative">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Online offline icon"
//                   width={48}
//                   height={48}
//                 />
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-full h-0.5 w-12 bg-[#808080]" />
//             <div className="absolute top-1/2 left-[calc(100%+48px)] w-8 h-8 rounded-full bg-[#808080] flex items-center justify-center text-white">
//               1
//             </div>
//           </div>
//           <span className="text-lg font-medium ml-24">Online-Offline</span>
//         </div>

//         {/* Job Ready Badge */}
//         <div className="absolute -top-20 right-0 flex items-center gap-2">
//           <div className="w-12 h-12 rounded-full bg-[#0052CC] flex items-center justify-center">
//             <div className="w-6 h-6 text-white">★</div>
//           </div>
//           <span className="text-lg font-medium">Job Ready</span>
//         </div>
//       </div>
//     </div>
//   )
// }
