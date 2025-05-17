import React, { useEffect } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import InfoTree from '../Sections/Business/InfoTree'
import HorizontalPage from '../components/HorizontalPage'
import Solutions from '../Sections/Business/Solutions'


const Business = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
      <div className='pt-14 w-screen bg-[#ffffff]'>
      <HeroCarousel />
      <InfoTree />
      <Solutions/>
    </div>
  )
}

export default Business