import { motion, useInView } from "framer-motion";

import React, { useRef } from "react";
import Bulb from "../../assets/bulb.png";
import Puzzle from "../../assets/puzzle.png";
import tick from "../../assets/tick.png";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const ref2 = useRef(null); /// provide differnt view ref to diffrent div
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });

  return (
    <div
      id="whyChooseUs"
      className="bg-gradient-to-b from-[#EDEFFE]  to-white pb-10"
    >
      <div className="flex flex-col syne-font items-center justify-center py-28 ">
        <p className="text-center text-black lg:text-6xl md:text-4xl text-2xl resize font-bold max-w-[80%]">
          Reasons To Choose Us
        </p>
        <p
          id="learning"
          className="text-center mt-10 lg:text-2xl md:text-xl text-lg text-gray-800"
        >
          Discover the key benefits that make us the ideal choice for your needs
        </p>
      </div>
      <div
        id="whyChooseUsCardsWrapper"
        className="flex flex-wrap w-[80%] mx-auto items-center lg:justify-between justify-center lg:gap-0 gap-20 "
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35, x: -40, borderWidth: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  borderWidth: "2px",
                  borderColor: "#fecbca",
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center bg-white relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl lg:w-[32%]  w-[26rem] min-h-[18rem] "
        >
          <img
            src={Bulb}
            alt="Illustration"
            className="w-24 absolute lg:-top-12 -top-1/4"
          />
          <div className="flex flex-col items-center p-4">
            <p className="text-3xl font-semibold text-center text-gray-950">
              Innovative Approach
            </p>
            <p className="text-center text-wrap text-lg mt-4 text-slate-700">
              We leverage the latest tools and technologies to provide
              innovative solutions that give your business a competitive edge
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 35, borderWidth: 0 }}
          animate={
            isInView2
              ? { opacity: 1, y: 0, borderWidth: "2px", borderColor: "#fecbca" }
              : {}
          }
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center bg-white relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl lg:w-[32%]  w-[26rem] min-h-[18rem] lg:mb-20 "
        >
          <img
            src={Puzzle}
            alt="Illustration"
            className="w-24 absolute lg:-top-12 -top-1/4"
          />
          <div className="flex flex-col items-center p-4">
            <p className="text-3xl font-semibold text-center text-gray-950">
              Customized Solutions
            </p>
            <p className="text-center text-wrap text-lg mt-4 text-slate-700">
              We understand that every business is unique, so we offer solutions
              that are specifically designed to meet your individual needs
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 35, x: 40, borderWidth: 0 }}
          animate={
            isInView3
              ? {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  borderWidth: "2px",
                  borderColor: "#fecbca",
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl lg:w-[32%]  w-[26rem] min-h-[18rem] "
        >
          <img
            src={tick}
            alt="Illustration"
            className="w-24 absolute lg:-top-12 -top-1/4"
          />
          <div className="flex flex-col items-center p-4">
            <p className="text-3xl font-semibold text-center text-gray-950">
              Proven Results
            </p>
            <p className="text-center text-wrap text-lg mt-4 text-slate-700">
              Our clients have consistently achieved significant improvements
              and growth by partnering with us
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    // <div className="bg-white pb-10">
    // <div className="flex flex-col syne-font items-center justify-center py-28 ">
    //   <p className="text-center text-black text-5xl resize font-bold max-w-[80%]">
    //   Reasons to Choose Us
    //   </p>
    //   <p id="learning" className="text-center mt-10 text-2xl">
    //   Discover the key benefits that make us the ideal choice for your needs
    //   </p>
    //   </div>
    //   <div id="whyChooseUsCardsWrapper" className="flex flex-wrap w-[80%] mx-auto items-center justify-between">

    //   <div className="flex flex-col items-center justify-center bg-white relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl w-[26%] min-h-[16rem] ">
    //     <img src={Bulb} alt="Illustration" className="w-24 absolute -top-12" />
    //     <div className="flex flex-col items-center p-4">
    //       <p className="text-3xl font-semibold text-center ">Innovative Approach</p>
    //       <p className="text-center text-wrap">We leverage the latest tools and technologies to provide innovative solutions that give your business a competitive edge</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center justify-center bg-white relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl w-[26%] min-h-[16rem] mb-20">
    //     <img src={Puzzle} alt="Illustration" className="w-24 absolute -top-12" />
    //     <div className="flex flex-col items-center p-4">
    //       <p className="text-3xl font-semibold text-center ">Customized Solutions</p>
    //       <p className="text-center text-wrap">We understand that every business is unique, so we offer solutions that are specifically designed to meet your individual needs</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center justify-center bg-white relative shadow-[#dbcad9] cursor-pointer shadow-2xl hover:shadow-[#E4C7EF] rounded-xl w-[26%] min-h-[16rem] ">
    //     <img src={tick} alt="Illustration" className="w-24 absolute -top-12" />
    //     <div className="flex flex-col items-center p-4">
    //       <p className="text-3xl font-semibold text-center ">Proven Results</p>
    //       <p className="text-center text-wrap">Our clients have consistently achieved significant improvements and growth by partnering with us</p>
    //     </div>
    //   </div>

    //   </div>
    // </div>
  );
};

export default WhyChooseUs;
