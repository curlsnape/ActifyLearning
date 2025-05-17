import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from 'swiper';
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const AnnouncementBar = () => {
  return (
    <div
      className="bg-black  px-4 py-3"
      // ref={ref}
    >
      <div className="mx-auto flex max-w-3xl text-white items-center  justify-center">
        <button
          className="swiper-prev-button sm:block sm:rounded sm:transition"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 rtl:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000 }}
          fadeEffect={{ crossFade: true }}
          navigation={{
            prevEl: ".swiper-prev-button",
            nextEl: ".swiper-next-button",
          }}
          className="swiper"
        >
          <SwiperSlide>
            <p className="text-center text-sm font-medium ">
              Want to be a Data Analyst?{" "}
              <a href="#" className="block underline sm:inline-block">
                Check out this new course!
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-center text-sm font-medium ">
              Want to be a Python Developer?{" "}
              <a href="#" className="block underline sm:inline-block">
                Check out this new course!
              </a>
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-center text-sm font-medium ">
              Want to be a Full-Stack Developer?{" "}
              <a href="#" className="block underline sm:inline-block">
                Check out this new course!
              </a>
            </p>
          </SwiperSlide>
        </Swiper>

        <button
          className="swiper-next-button text-white sm:block sm:rounded sm:transition"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 rtl:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
