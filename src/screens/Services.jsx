import React, { useEffect } from 'react'
import HorizontalPage from '../components/HorizontalPage'
import Webdesignsection from '../components/Webdesignsection';
import HeroSectionServices from '../components/HeroSectionServices';
import WebsiteSection from '../components/WebsiteSection';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top on route change
      }, [location]);
    

  return (
    <div className='bg-white'>
      <HeroSectionServices />
      <HorizontalPage/>
      <WebsiteSection />
      <Webdesignsection />
    </div>
  )
}

export default Services
