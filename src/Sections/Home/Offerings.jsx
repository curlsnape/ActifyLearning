import React from "react";
import CountUp from "react-countup";

import ProductsImg from "../../assets/products.png";
import CoursesImg from "../../assets/courses.png";
import SolutionImg from "../../assets/solution.png";

const Offerings = () => {
  return (
    <div id="OfferingsDivWrapper" className="w-full bg-gradient-to-b from-[#78befccc] to-[#E7E8FF] py-14">
      <div
        id="OfferingsDiv"
        className="w-[90%] flex flex-col items-center justify-center mx-auto"
      >
        <div
          id="titleDiv"
          className="flex flex-col items-center justify-center"
        >
          <p className="font-semibold text-4xl text-center text-gray-950">Discover Our Offerings</p>
          <p className="mt-4 text-2xl text-center text-gray-700">
            A wide range of products, solutions, and courses
          </p>
        </div>
        <div
          id="offeringNumber"
          className="flex flex-wrap items-center justify-center mt-10 lg:gap-14 md:gap-10 gap-8  font-mono"
        >
          <div className="flex bg-white w-52 h-52 items-center justify-center lg:p-28 md:p-28 p-24 rounded-full relative border-8 border-blue-600">
            <CountUp
              scrollSpyDelay={100}
              start={0}
              end={10}
              duration={7}
              enableScrollSpy={true} // set this to true
              scrollSpyOnce={true} // set this to true
              prefix="+"
              className="lg:text-8xl md:text-6xl text-4xl mb-6 text-gray-950"
            />
            <span className="absolute bottom-10 flex flex-row gap-2 items-center ">
              <img src={ProductsImg} alt="solutions-image" className="lg:w-9 md:w-7 w-6" />
              <p className="lg:text-xl md:text-lg  font-semibold text-gray-700">Products</p>
            </span>
          </div>
          <div className="flex bg-white w-52 h-52 items-center justify-center lg:28 md:p-28 p-24 rounded-full relative border-8 border-blue-600  ">
            <CountUp
              scrollSpyDelay={100}
              start={0}
              end={20}
              duration={7}
              enableScrollSpy={true} // set this to true
              scrollSpyOnce={true} // set this to true
              prefix="+"
              className="lg:text-8xl md:text-6xl text-4xl mb-6 text-gray-950"
            />
            <span className="absolute bottom-10 flex flex-row gap-2 items-center ">
              <img src={CoursesImg} alt="solutions-image" className="w-9" />
              <p className="text-xl font-semibold text-gray-700">Courses</p>
            </span>
          </div>
          <div className="flex bg-white w-52 h-52 items-center justify-center lg:p-28 md:p-28 p-24 rounded-full relative border-8 border-blue-600">
            <CountUp
              scrollSpyDelay={100}
              start={0}
              end={30}
              duration={7}
              enableScrollSpy={true} // set this to true
              scrollSpyOnce={true} // set this to true
              prefix="+"
              className="lg:text-8xl md:text-6xl text-4xl mb-6 text-gray-950"
            />
            <span className="absolute bottom-10 flex flex-row gap-2 items-center ">
              <img src={SolutionImg} alt="solutions-image" className="w-9" />
              <p className="text-xl font-semibold text-gray-700">Solutions</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
