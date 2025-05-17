import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { carouselItems } from "../data";
import { Link } from "react-router-dom";

export default function App() {
  const DeskTopSlideItem = ({ item, index }) => {
    return (
      <div
        title="Draggable slider, not swipeable!"
        id="business"
        key={item.id}
        className={`w-[100%] hidden mx-auto px-[5%] border shadow-xl md:flex items-center justify-center montserrat-font h-[36rem] cursor-grab bg-gradient-to-r from-white ${item.bgColor} `}
      >
        <div className="w-[60%] p-10 z-20">
          <p className="  lg:text-4xl md:text-2xl text-black font-bold w-[70%] p-4 montserrat-font ">
            {item.title}
          </p>
          <p className="lg:text-2xl text-black w-[70%] p-4 montserrat-font">
            {item.description}
          </p>
          <span className="flex gap-4 p-4">
            <Link to={`/software-details/${item.id}`}>
              <button
                title=""
                className="btn btn-wide btn-outline focus:outline text-black text-lg montserrat-font"
              >
                Know more
              </button>
            </Link>
            <Link to={"/contact"}>
              <button
                title=""
                className="btn btn-wide focus:outline text-white text-lg montserrat-font relative"
              >
                Book a demo
                <span className="indicator-item badge text-white badge-primary text-xs absolute -top-2 -right-4">
                  Free
                </span>
              </button>
            </Link>
          </span>
        </div>
        <div
          className={`bg-transparent p-8 py-20 w-[40%] h-full relative flex items-center justify-center z-0`}
        >
          <img
            src={item.primaryImage}
            alt=""
            className=" w-[100%] top-[11%] -left-40 md:-left-24 rounded-lg absolute "
          />
          <img
            src={item.secondaryImage}
            alt=""
            className=" w-[100%] top-[36%] -left-10  -z-10 rounded-lg absolute "
          />
        </div>
      </div>
    );
  };

  const MobileSlideItem = ({ item, index }) => {
    return (
      <div
        key={item.id}
        className="w-[100%] mx-auto flex flex-col-reverse items-start justify-start montserrat-font h-[30rem] cursor-grab lg:hidden md:hidden"
      >
        <div className="overflow-hidden">
          <img
            src={item.primaryImage}
            alt=""
            className="absolute top-10 left-[0%] shadow-lg z-0"
          />
          <img
            src={item.secondaryImage}
            alt=""
            className="absolute hidden top-20 left-[7%] shadow-xl -z-10"
          />
        </div>
        <div className="mb-10">
          <div className="w-full flex flex-col items-center justify-end">
            <p className="text-center text-xl text-black">{item.title}</p>
            <p className="text-center text-gray-800">{item.description}</p>
          </div>
          <span className="w-full flex items-center justify-center gap-4 p-4">
            <Link to={`/software-details/${item.id}`}>
              <button
                title=""
                className="btn btn-sm btn-outline focus:outline text-black montserrat-font"
              >
                Know more
              </button>
            </Link>
            <Link to={`/contact`}>
              <button
                title=""
                className="btn btn-sm focus:outline text-white  montserrat-font relative"
              >
                Book a demo
                <span className="indicator-item badge text-white badge-primary text-xs absolute -top-2 -right-4">
                  Free
                </span>
              </button>
            </Link>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100%] mx-auto">
      <Swiper
        threshold={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop = {true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <DeskTopSlideItem item={item} index={index} />
            <MobileSlideItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
