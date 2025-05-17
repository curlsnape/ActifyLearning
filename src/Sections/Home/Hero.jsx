import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroBg from "../../assets/HeroBg.png";
import { Link } from "react-router-dom";

import Illustration1 from "../../assets/illustration2.png";
import Illustration2 from "../../assets/illustration1.png";
import { Typewriter } from "../../components/TypeWriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ActionDiv = ({ url, title, subTitle, imgSrc, imgStyle }) => {
    return (
      <Link to={url}>
        <div className="bg-white border-4 border-red-100 p-4 flex flex-col items-center justify-start syne-font rounded-xl lg:min-w-[24rem] md:min-w-[20rem] w-[17rem]  hover:-translate-y-[0.2rem] hover:shadow-lg hover:shadow-[#d6bedd] transition-all ease-in-out">
          <p className="lg:text-2xl md:text-md text-md font-bold text-indigo-800">
            {title}
          </p>
          <div>
            <p
              className="text-center p-4 lg:text-lg md:text-md text-black text-sm"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            ></p>
          </div>
          <p className="text-blue-800 font-semibold uppercase">More Info</p>
        </div>
      </Link>
    );
  };

  return (
    <div
      id="home"
      className="relative max-w-full bg-white lg:h-screen overflow-hidden scroll-smooth"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroBg})`,
            transform: `scale(${1 + offset / 1000})`, // Scroll animation
          }}
        />
      </motion.div>
      <div className="relative z-10">
        <div className="max-w-7xl h-max mx-auto flex items-center justify-center min-h-screen flex-col syne-font lg:mt-10 md:mt-10 mt-12">
          {/* <motion.div initial={{opacity:0}} animate={{opacity:0.4}} transition={{duration:4}} className="absolute -z-10 top-[12%]  ">
            <div className="h-full w-full bg-transparent  bg-grid-black/[0.8] relative flex items-center justify-center">
             
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#FFFFFF] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,#EDEFFE)]"></div>
              <p className="text-4xl h-[50vh] w-[50vw] max-sm:w-[85vw] opacity-0 sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              </p>
            </div>
          </motion.div> */}
          <Typewriter text="Empowering Growth Through Learning And Innovation" />
          <p className="lg:w-[90%] w-[95%] lg:mt-14 mt-8  lg:text-2xl md:text-xl text-black  text-center ">
            Whether you're here to elevate your skills or enhance your business
            with cutting-edge software solutions,{" "}
            <span className="font-semibold">Actify</span> is your partner in
            success
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-8 lg:gap-32 md:gap-20 mt-14">
            <ActionDiv
              url={"/business"}
              title={"Actify Business"}
              subTitle={"Leverage Information<br/>Technology (IT) for business"}
              imgSrc={Illustration1}
              imgStyle={"w-28"}
            />
            <ActionDiv
              url={"/learning"}
              title={"Actify Learning"}
              subTitle={"Upgrade skills and competencies for career growth"}
              imgSrc={Illustration2}
              imgStyle={"w-40"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
