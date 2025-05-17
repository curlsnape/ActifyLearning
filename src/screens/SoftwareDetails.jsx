import React, { useEffect, useRef, useState } from "react";
import crm from "../assets/crm1.png";

import crmDemoVideo from "/Videos/crmDemo.mp4";

// import ActifyLogo from '../assets/'

import crmMobile from "../assets/mobilecrm2.png";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import InfoTabs from "../Sections/Business/InfoTabs";
import FAQ from "../components/FAQ";

import ScrollLaptop from "../components/ScrollLaptop";

import wavy from "../assets/wavy.png";
import orangeBg from "../assets/orangebg.jpg";
import purplebg from "../assets/purplebg.jpg";
import WhyUs from "../Sections/Business/WhyUs";
import { businessData } from "../../libs/businessData";

// const CarouselItems = [
//   {
//     id: 1,
//     primaryImage: crm,
//     primaryImageMobile: crmMobile,
//     // secondaryImage: crm2,
//     bgColor:"fill-[#fe890c9a]",
//     bgImg: orangeBg,
//     title: "Actify CRM",
//     description:
//       "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
//     about:
//       " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
//   },
//   {
//     id: 2,
//     primaryImage: crm,
//     // secondaryImage: hr1,
//     bgImg: purplebg,
//     bgColor:"fill-[#440cfe81]",
//     title: "Actify HR Portal",
//     description:
//       "Actify's HR portal is a comprehensive digital platform designed to streamline and centralize all human resources - Related Tasks, Information and Processes with in an organization. ",
//     about:
//       "The HR portal is a comprehensive digital platform designed to streamline and centralize all human resources-related organizational tasks, information, and processes. It serves as a one-stop destination for employees, managers, and HR personnel, providing easy access to a multitude of tools and resources.",
//   },
//   {
//     id: 3,
//     primaryImage: crm,
//     // secondaryImage: LMS2,
//     bgColor:"fill-[#0075f341]",
//     bgImg: wavy,
//     title: "Actify LMS Portal",
//     description:
//       "A digital platform for managing and delivering educational content, creating an interactive learning environment.",
//     about:
//       "A comprehensive digital platform designed to facilitate the management, delivery, and tracking of educational content. It enables trainers or organizations to create and organize learning materials efficiently, providing an interactive learning environment. It enables the development and availability of structured learning content containing course material, quizzes, hands-on practical sessions, and industry-relevant projects.",
//   },
// ];

const SoftwareDetails = () => {
  const [Product, setProduct] = useState([]);
  const id = useParams().id;
  console.log(id);

  const path = useLocation();
  console.log(path);

  useEffect(() => {
    const data = businessData.filter((item) => {
      return id === item.id.toString();
    });
console.log(data)
    setProduct(data);

    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

  }, []);
  
  const videoRef = useRef();
  
  const restartVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };
  
  const MockUpUI = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${Product[0]?.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: `${Product[0]?.id == 3 ? "darken" : "overlay"}`,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        className="w-full min-h-screen h-fit flex flex-col lg:flex-col items-center justify-center lg:justify-center"
      >
        <div className="hero lg:w-1/3  flex flex-col pt-8">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-4xl font-bold">{Product[0]?.title}</h1>
              {/* <p className="py-6 sm:text-2xl">{Product[0]?.description}</p> */}
            </div>
          </div>
          {/* <span className="w-full hidden lg:flex sm:flex-row-reverse flex-col-reverse items-center sm:gap-8 gap-4 justify-center py-6">
        <button className="btn btn-primary max-sm:btn-wide ">
          <p className="font-semibold md:px-2">
          Book Demo
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
        </button>
        <button className="btn max-sm:btn-wide" onClick={restartVideo}>
          Watch Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        </button>
      </span> */}
        </div>

        {/* Mockup UI Section */}
        <div className="">
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-xl h-[172px] max-w-[301px] md:h-[330px] md:max-w-[600px] lg:h-[540px] lg:max-w-[900px]">
            {/* <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white"> */}
            <div class="rounded-lg overflow-hidden h-full md:h-full bg-white">
              {/* {Product && (
              <img
                src={crm}
                alt="Actify crm portal"
                className="h-full w-full object-fill pointer-events-none select-none unclickable-image "
              />
            )}{" "} */}
              <video
                src={Product[0]?.bannerVid}
                ref={videoRef}
                muted={true}
                className="h-full w-full object-cover pointer-events-none transform rounded-lg overflow-hidden"
                autoPlay={true}
                loop={true}
              >
                <source src={Product[0]?.bannerVid} type="video/mp4" />
              </video>
            </div>
          </div>
          {/* <div class="relative mx-auto dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[15px] max-w-[351px] lg:h-[27px] lg:max-w-[970px] md:h-[25px] md:max-w-[700px] ">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] lg:h-[8px] bg-gray-800"></div>
        </div> */}
        </div>

        {/* Mockup UI Section End */}
        <span className="w-full lg:flex flex sm:flex-row-reverse flex-col-reverse items-center sm:gap-8 gap-4 justify-center py-6">
          <button className="btn btn-primary max-sm:btn-wide ">
            <p className="font-semibold md:px-2">Book A Demo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          </button>
          <button className="btn max-sm:btn-wide" onClick={restartVideo}>
            Watch Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </button>
        </span>
      </div>
    );
  };

  return (
    <div data-theme="light" className="w-full max-sm:pt-[5%] ">
      <MockUpUI/>
      {/* <ScrollLaptop
        title={
          <span>
           Actify CRM Portal<br />
          </span>
        }
        src={crmDemoVideo}
        showGradient={false}
      /> */}
      <InfoTabs data={Product[0]} />
      <WhyUs data={Product[0]?.title}/>
      <FAQ data={Product[0]?.FAQs} />
    </div>
  );
};

export default SoftwareDetails;
