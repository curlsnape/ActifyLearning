import React from 'react'
import {motion, useInView} from "framer-motion"
import VendorInfographicImg from '../../assets/VendorInfographicImg.png'

const VendorInfographics = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-white py-20 w-full mx-auto">
      <motion.div ref={ref} initial={{translateY: 50, opacity: 0.5}} animate={isInView ? {translateY: 0, opacity: 1}: {}} transition={{duration: 1}} className="w-full mx-auto space-y-4">
      <img className='w-full lg:w-8/12 mx-auto' src={VendorInfographicImg} alt="" />
      <div className='text-center space-y-4'>
        <p className='text-3xl md:text-4xl font-bold'>Vendor Portal & SAP BI Integration</p>
        <p className='text-2xl font-semibold'>Purchase Request Management</p>
      </div>
      <div className='mx-auto w-10/12 md:w-9/12 lg:w-6/12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
        <motion.div ref={ref} initial={{translateX: -50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>RealTime access to RFQ</p></motion.div>
        <motion.div ref={ref} initial={{translateX: 50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Easy Submission and management of Quotea</p></motion.div>
        <motion.div ref={ref} initial={{translateX: -50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Generate email notifications for key trigger points such as vendor creation or RFQ assignment to vendors</p></motion.div>
        <motion.div ref={ref} initial={{translateX: 50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Dashboards with Item and RFQ details</p></motion.div>
        <motion.div ref={ref} initial={{translateX: -50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Global filters and Column-Specific filters for precise search results across all reports</p></motion.div>
        <motion.div ref={ref} initial={{translateX: 50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Reports with filtered data and export them to Excel seamlessly</p></motion.div>
        <motion.div ref={ref} initial={{translateX: -50, opacity: 0.5}} animate={isInView ? {translateX: 0, opacity: 1}: {}} transition={{duration: 1}} className='flex items-center border-2 border-black px-2'><li></li><p>Access the portal seamlessly across device</p></motion.div>
      </div>  
      </div>  
      </motion.div>
    </div>
  )
}

export default VendorInfographics
