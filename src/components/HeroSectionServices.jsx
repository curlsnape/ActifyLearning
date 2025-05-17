import React from 'react'
import bgImage from '../assets/background of nature.jpg'
import { CgWebsite } from 'react-icons/cg'
import { SiMarketo, SiTaichigraphics } from 'react-icons/si'
import { GradualSpacing } from './Gradualheroservices'

export const scrollToHash = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

const HeroSectionServices = () => {
    
  return (
    <div className='pt-16'>
        <div className='h-screen w-11/12 mx-auto rounded-3xl flex flex-col justify-center md:space-y-20' style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
            <div className='my-5 space-y-1 pt-10 px-2 '>
                {/* <p className='text-2xl lg:text-5xl text-white text-center w-10/12 mx-auto'>From Concept to Click : Your Vision Our Creation</p> */}
                <p className='text-3xl lg:text-5xl text-white text-center w-full lg:w-10/12 mx-auto'><GradualSpacing /></p>
                <p className='text-xl lg:text-2xl text-white text-center'>Crafting Clicks, Code and Creativity!</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center text-white gap-x-10 gap-y-8 px-2 pb-20'>
                <div onClick={() => scrollToHash('website')} className='flex flex-col items-center font-semibold cursor-pointer'>
                    <div className='border-2 border-white rounded-full inline-block p-4'><CgWebsite /></div>
                    <div className='text-2xl'>Web Designing</div>
                    <div className='text-center w-10/12 lg:w-8/12'>Transforming Your online presence into a business asset</div>
                </div>
                <div onClick={() => scrollToHash('graphics')} className='flex flex-col items-center font-semibold cursor-pointer'>
                    <div className='border-2 border-white rounded-full inline-block p-4'><SiTaichigraphics /></div>
                    <div className='text-2xl'>Graphics Designing</div>
                    <div className='text-center w-10/12 lg:w-8/12'>Transforming ideas into stunning, user-friendly digital experiences</div>
                </div>
                <div className='flex flex-col items-center font-semibold'>
                    <div className='border-2 border-white rounded-full inline-block p-4'><SiMarketo /></div>
                    <div className='text-2xl'>Digital Marketing</div>
                    <div className='text-center w-10/12 lg:w-8/12'>Driving brand growth with data-driven digital marketing strategies</div>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default HeroSectionServices
