import React from 'react'
import lmsflow from '../../assets/lmsflow.png'
import LMSSmScreen from '../../assets/LMSSmScreen.png'
import {motion,useInView} from 'framer-motion'

const LMSInfographics = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-white py-20 w-full mx-auto space-y-4">
      <motion.div ref={ref} initial={{translateY: 50, opacity: 0.5 }} animate={isInView ? {translateY: 0, opacity: 1} : {}} transition={{duration: 1}} className='flex'>
      <img className='w-full lg:w-3/12 mx-auto block md:hidden' src={LMSSmScreen} alt="" />
      <img className='w-full lg:w-6/12 mx-auto hidden md:block' src={lmsflow} alt="" />

      </motion.div>
    </div>
  )
}

export default LMSInfographics
