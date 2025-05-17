import React, { useEffect } from 'react'
import ViewRoleSection from '../Sections/Careers/ViewRoleSection'
import Jobs from '../Sections/Careers/Jobs'

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [location]);

  return (
    <div className='bg-[#f8f8f8] pt-20 sm:pt-24 w-full mx-auto pb-5'>
      <ViewRoleSection />
      <Jobs />
    </div>
  )
}

export default Careers
