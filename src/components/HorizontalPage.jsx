import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import webService from "../assets/web.jpg";
import dm from "../assets/digitalMarketing.jpg";
import appdev from "../assets/mobile.jpg";
import bi from "../assets/bi.jpg";
import ContactModal from "../Sections/Business/ContactModal";

const HorizontalPage = () => {

  return (
    <div className="">
      <AlternateSection />
      {/* <HorizontalScrollCarousel /> */}
      <ContactModal  />
    </div>
  );
};

const AlternateSection = () => (
  <>
    <div className="w-full flex flex-wrap items-center justify-center gap-8 py-10">
      <div className="  sm:mt-[4%] mt-[20%] md:mt-[9%] lg:mt-[4%] flex flex-col items-center justify-center w-full">
        <p className="sm:text-5xl text-3xl text-black font-semibold">
          Our Services
        </p>
        <p className="capitalize text-center text-gray-800 sm:text-2xl">
          Tailored Solutions For Your Success, Elevate Your Experience with Our
          Exceptional and Comprehensive Services Today
        </p>
      </div>
      {cards.map((card) => {
        return <Card key={card?.id} card={card} />;
      })}
    </div>
  </>
);

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex flex-col h-screen items-start overflow-hidden ">
        <div className="sm:mb-[6%]  sm:mt-[4%] mt-[20%] md:mt-[9%] lg:mt-[4%] flex flex-col items-center justify-center w-full">
          <p className="sm:text-5xl text-3xl text-black font-semibold">
            Our Services
          </p>
          <p className="capitalize text-center text-gray-800 sm:text-2xl">
            Tailored Solutions For Your Success, Elevate Your Experience with
            Our Exceptional and Comprehensive Services Today
          </p>
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-8 sm:pl-20 pl-6 max-sm:mt-8"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

// const Card = ({ card }) => {
//   const [SelectedService,setSelectedService] = useState()
//   return (
//     <div
//       key={card.id}
//       style={{
//         backgroundImage: `url(${card.url})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="group relative md:h-[450px] md:w-[400px] h-[370px] w-[290px] flex items-end overflow-hidden bg-blue-50 rounded-xl scale-[0.98] hover:scale-100 transition-all cursor-pointer hover:shadow-[5px_5px_rgba(180,_220,_280,_0.9),_10px_10px_rgba(173,_216,_230,_0.5),_15px_15px_rgba(173,_216,_230,_0.4),_20px_20px_rgba(173,_216,_230,_0.3),_25px_25px_rgba(173,_216,_230,_0.2)] duration-300"

//       // className="group relative md:h-[500px] md:w-[430px] h-[370px] w-[290px] flex items-center overflow-hidden bg-blue-50 rounded-xl hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  "
//     >
//       <span className="h-full w-full group-hover:bg-[#00000088] transition-all bg-[#00000073] absolute z-0" />
//       <div className="w-full flex flex-col items-center justify-cente z-10 p-4">
//         {/* <img
//           src={card.url}
//           alt="illustration"
//           className="sm:w-56 sm:h-56 w-32 h-32"
//         /> */}
//         <p className="text-white sm:font-bold font-semibold sm:text-3xl text-xl mt-8 text-center">
//           {card.title}
//         </p>
//         <p className="text-white font-medium sm:text-xl  mt-4 text-center">
//           {card.details}
//         </p>
//         <button
//           onClick={() => document.getElementById("my_modal_1").showModal()}
//           className="btn btn-square w-1/2 mt-8 outline-none border-0 hover:bg-blue-600 hover:text-white text-black bg-white"
//         >
//           <p className="text-[1rem]">Get in Touch</p>
//         </button>
//       </div>
//     </div>
//   );
// };

const Card = ({ card }) => {
  const [SelectedService,setSelectedService] = useState()
  return (
    <div
      key={card.id}
      // style={{
      //   backgroundImage: `url(${card.url})`,
      //   backgroundSize: '225px 400px',
      //   backgroundPosition: "center",
      // }}
      className="group relative md:h-[450px] md:w-[400px] h-[370px] w-[290px] flex items-end overflow-hidden bg-blue-50 rounded-xl scale-[0.98] hover:scale-100 transition-all cursor-pointer hover:shadow-[5px_5px_rgba(180,_220,_280,_0.9),_10px_10px_rgba(173,_216,_230,_0.5),_15px_15px_rgba(173,_216,_230,_0.4),_20px_20px_rgba(173,_216,_230,_0.3),_25px_25px_rgba(173,_216,_230,_0.2)] duration-300"

      // className="group relative md:h-[500px] md:w-[430px] h-[370px] w-[290px] flex items-center overflow-hidden bg-blue-50 rounded-xl hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  "
    >
      <img src={card.url} alt="" className="absolute top-0 h-4/6 w-full object-fill" />
      <span className="h-full w-full group-hover:bg-[#00000088] transition-all bg-[#00000073] absolute z-0" />
      <div className="w-full flex flex-col items-center justify-center z-10 p-2 h-2/6">
        {/* <img
          src={card.url}
          alt="illustration"
          className="sm:w-56 sm:h-56 w-32 h-32"
        /> */}
        <p className="text-white sm:font-bold font-semibold sm:text-3xl text-xl text-center">
          {card.title}
        </p>
        <p className="text-white font-medium sm:text-xl text-center">
          {card.details}
        </p>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-square w-1/2 mb-1 outline-none border-0 hover:bg-blue-600 hover:text-white text-black bg-white"
        >
          <p className="text-[1rem]">Get in Touch</p>
        </button>
      </div>
    </div>
  );
};

export default HorizontalPage;

const cards = [
  {
    url: webService,
    title: "Website development",
    details: "Create a website that meets your business needs and goals",
    // details: "Static and Dynamic Website Development",
    id: 1,
  },
  {
    url: appdev,
    title: "App Development",
    details: "Custom Software Solutions designed for your business needs",

    id: 2,
  },
  {
    url: bi,
    title: "Bi Reporting",
    details: "Business Intelligence Solutions for Data-Driven Decision Making",
    // details: "Business Intelligence (BI) Reporting Services",
    id: 3,
  },
  {
    url: dm,
    title: "Digital Marketing",
    details: "Digital Marketing Services for your business growth",
    id: 4,
  },
  // {
  //   url: "/imgs/abstract/5.jpg",
  //   title: "Title 5",
  //   id: 5,
  // },
  // {
  //   url: "/imgs/abstract/6.jpg",
  //   title: "Title 6",
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   title: "Title 7",
  //   id: 7,
  // },
];
