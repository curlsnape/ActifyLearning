import React from 'react'
// import JobInfo from '../../assets/Job Portal chart.jpg'
import JobPortalInfographic from '../../assets/JobPortalInfographics.png'
import {motion, useInView} from "framer-motion"

const JobPortalInfographics = () => {
    const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-white py-20 w-full mx-auto">
      <motion.div ref={ref} initial={{translateY: 50, opacity: 0.5}} animate={isInView ? {translateY: 0, opacity: 1}: {}} transition={{duration: 1}} className="w-full mx-auto space-y-4">
      <img className='w-full lg:w-8/12 mx-auto' src={JobPortalInfographic} alt="" />
      <div className='space-y-2'>
        <p className='text-3xl md:text-4xl w-full lg:w-5/12 px-4 lg:px-0 mx-auto text-blue-900 text-center font-bold'>Why Actify Job Portal?</p>
        <div className='w-full lg:w-5/12 px-4 lg:px-0 mx-auto text-xl space-y-4'>
            <li className='text-black' type-disc><span className='text-blue-900'>Efficient Job Posting: </span><span className='text-black'>Post job openings swiftly an effortlessly, reaching a vast pool of qualified candidates</span></li>
            <li className='text-black' type-disc><span className='text-blue-900'>Seamless Candidate Management: </span><span className='text-black'>Easily organize applications, track progress, and communicate seamlessly with potential hires.</span></li>
            <li className='text-black' type-disc><span className='text-blue-900'>Streamline Selection: </span><span className='text-black'>Tailor the portal to suit your unique recruitments process, ensuring maximum efficiency and effectiveness.</span></li>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default JobPortalInfographics