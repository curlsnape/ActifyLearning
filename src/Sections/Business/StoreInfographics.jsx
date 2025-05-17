import React from 'react'
import {motion, useInView} from "framer-motion"
import Store from '../../assets/Store.jpg'

const StoreInfographics = () => {

    const ref = React.useRef(null);
      const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-white py-20 w-full mx-auto">
      <motion.div ref={ref} initial={{translateY: 50, opacity: 0.5}} animate={isInView ? {translateY: 0, opacity: 1}: {}} transition={{duration: 1}} className="w-full mx-auto space-y-4">
      <img className='w-full lg:w-8/12 mx-auto' src={Store} alt="" />
      </motion.div>
    </div>
  )
}

export default StoreInfographics