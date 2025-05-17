import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import serviceweb1 from "../assets/serviceweb1.png";
import moneyfarmzservices from "../assets/moneyfarmzservices.png";
import dexteroservices from "../assets/dexteroservices.png";
import Covacsis from "../assets/CovacsisDesign.jpg";
import Hiring from "../assets/Hirings.png";
import MachineLearning from "../assets/MachineLearning.png";
import Covacsisbrochure from "../assets/Covacsisbrochure.png";
import HRBrochure from "../assets/HRBrochure.jpg";
import actifyhrms from "../assets/actifyhrms.png";
import { NavLink } from "react-router-dom";

const Webdesignsection = () => {
  const imageUrls = [
    {
      img: Covacsis,
      description: "Graphics design for Covacsis",
      id: 1
    },
    {
      img: Hiring,
      description: "Graphics design for Hiring",
      id: 2
    },
    {
      img: MachineLearning,
      description: "Graphics design for Machine Learning",
      id: 3
    },
    {
      img: Covacsisbrochure,
      description: "Graphics design for Covacsis Brochure",
      id: 4
    },
    {
      img: actifyhrms,
      description:
        "Graphics design for HRMS.",
      id: 5
    },
  ];

  return (
    <div id="graphics" className="shadow-xl">
      <p className="text-black text-3xl md:text-4xl lg:text-5xl text-center mt-8 mb-8 font-semibold">
        Graphic Designs
      </p>
      <ScrollCarousel
        speed={10}
        onReady={() => console.log("I am ready")}
        infinite={true}
        itemsToShow={1}
        autoplay={true}
        className="px-4 lg:px-10 pb-4"
      >
        {imageUrls.map((data, index) => (
          <span key={index}>
            <div className="rounded-[10%]  w-[80vw] md:w-[50vw] lg:w-[25vw] flex items-center flex-col gap-y-4 h-11/12 ">
              <img
                src={data.img}
                alt={`Image ${index + 1}`}
                className="object-cover w-11/12 md:w-11/12 lg:w-11/12 h-full rounded-3xl border-2 border-gray-200  overflow-hidden shadow-2xl"
              />
              {/* <div className="h-[230px] w-[300px] md:h-[300px] md:w-[500px] bg-white mt-4 rounded-[30px] p-4">
            <p className="text-lg">{data.date}</p>
            <h1 className="text-3xl hover:text-green-500">{data.statement}</h1>
            <span>{data.text}</span>
          </div> */}
              <div
                className={`w-11/12 md:w-11/12 lg:w-11/12 rounded-3xl min-h-24 ${data.id == 1 ? 'bg-[#1361ab]' : data.id == 2 ? 'bg-[#25728b]': data.id == 3 ? 'bg-[#33678f]' : data.id == 4 ? 'bg-[#295d6a]' : 'bg-blue-900'}`}
              >
                <p className="text-white text-xl w-full text-center px-4 py-2">
                  {data.description}
                </p>
              </div>
            </div>
          </span>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Webdesignsection;
