import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Infographics from "../../components/Infographics";
import { StickyScroll } from "../../components/StickyScrollReveal";

import SmoothScrollReveal from "../../Sections/Home/VideoSection";
import OverView from "./OverView";
import PricingPage from "../../components/PricingsCards";
import CRMInfoGraphics from "./CRMInfoGraphics";
import JobPortalInfographics from "./JobPortalInfographics";
import LMSInfographics from "./LMSInfographics";
import VendorInfographics from "./VendorInfographics";
import StoreInfographics from "./StoreInfographics";

// const CarouselItems = [
//   {
//     id: 1,
//     bgImg: "from-[#fe890c7a]",
//     title: "Actify CRM",
//     description:
//       "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
//     about:
//       " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
//   },
//   {
//     id: 2,
//     bgImg: "from-[#440cfe81]",
//     title: "Actify HR Portal",
//     description:
//       "Actify's HR portal is a comprehensive digital platform designed to streamline and centralize all human resources - Related Tasks, Information and Processes with in an organization. ",
//     about:
//       "The HR portal is a comprehensive digital platform designed to streamline and centralize all human resources-related organizational tasks, information, and processes. It serves as a one-stop destination for employees, managers, and HR personnel, providing easy access to a multitude of tools and resources.",
//   },
//   {
//     id: 3,
//     bgImg: "from-[#0075f341]",
//     title: "Actify LMS Portal",
//     description:
//       "A digital platform for managing and delivering educational content, creating an interactive learning environment.",
//     about:
//       "A comprehensive digital platform designed to facilitate the management, delivery, and tracking of educational content. It enables trainers or organizations to create and organize learning materials efficiently, providing an interactive learning environment. It enables the development and availability of structured learning content containing course material, quizzes, hands-on practical sessions, and industry-relevant projects.",
//   },
// ];

// const infoArray = [
//   { id: 1, infograph: CRMInfoGraphics },
//   { id: 2, infograph: JobPortalInfographics },
//   { id: 3, infograph: LMSInfographics },
// ];

const InfoTabs = ({ data }) => {
  // console.log(data)
  let [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = React.useState("/overview");

  const handleTabChange = (data) => {
    console.log(data);

    setSearchParams({ tab: data });
    // searchParams.get("tab") || "/overview";
    setTab(data);
  };

  // const id = useParams().id;
  // console.log(id);

  // const [Product, setProduct] = useState([]);

  // useEffect(() => {
  //   const data = CarouselItems.filter((item) => {
  //     return id === item.id.toString();
  //   });

  //   setProduct(data);
  //   console.log(data);
  // }, []);

  useEffect(() => {
    const tabValue = searchParams.get("tab") || "/overview";
    setTab(tabValue);
  }, [searchParams]);

  console.log(tab);

  return (
    <div className={``}>
      <div className={` p-4 bg-gradient-to-b  ${data?.data?.bgImg} to-white`}>
        <div
          role="tablist"
          className={`tabs  tabs-bordered mx-auto md:w-[75%]`}
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={`tab active sm:text-xl sm:font-semibold  `}
            aria-label="Overview"
            checked={tab == "/overview"}
            onChange={() => handleTabChange("/overview")}
          />
          {/* <div role="tabpanel" className="tab-content p-10">Tab content 1</div> */}
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab sm:text-xl sm:font-semibold "
            aria-label="Features"
            checked={tab == "/features"}
            onChange={() => handleTabChange("/features")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab sm:text-xl  sm:font-semibold "
            aria-label="Plans"
            checked={tab == "/plans"}
            onChange={() => handleTabChange("/plans")}
          />
        </div>
      </div>
      {tab == "/overview" ? (
        <>
          {data?.id == 1 ? (
            <CRMInfoGraphics />
          ) : data?.id == 2 ? (
            <OverView />
          ) : 
          data?.id==3 ? (
            <LMSInfographics />
          ) : data?.id == 4 ? (<JobPortalInfographics />) : data?.id == 5 ? (<StoreInfographics />) : (<VendorInfographics />)}
        </>
      ) : tab == "/features" ? (
        // <div className="sm:w-[90%] mx-auto flex items-center justify-center flex-col p-4">
        //   <p className="pt-8 sm:text-4xl text-2xl font-semibold text-center">
        //     Benefits
        //   </p>
        //   <p className="py-4 sm:text-2xl max-sm:mb-10 text-lg font-medium text-center">
        //     Transform the impact, speed, and delivery of technology services
        //     with CRM Portal
        //   </p>
        //   <div className="sm:w-[90%] mb-8 mx-auto flex flex-col md:flex-row sm:p-4">
        //     <img
        //       src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-screenshots/itsm-benefit-1.sm.jpg"
        //       alt=""
        //       className="sm:w-[40%] p-4"
        //     />
        //     <div className="sm:p-5 flex items-center justify-center flex-col">
        //       <p className="text-xl sm:text-3xl font-semibold py-8 text-black overflow-ellipsis break-before-avoid">
        //         Performance Reviews
        //       </p>
        //       <p className="md:text-center text-left sm:text-xl sm:w-[80%] text-gray-800">
        //         Manage performance evaluation processes with custom templates
        //         and automated reminders. Track employee growth and development
        //         over time
        //       </p>
        //     </div>
        //   </div>
        //   <div className="sm:w-[90%] mx-auto flex flex-col md:flex-row-reverse sm:p-4">
        //     <img
        //       src="https://www.shutterstock.com/image-photo/document-management-system-dms-software-600nw-2235615805.jpg"
        //       alt=""
        //       className="sm:w-[40%] p-4"
        //     />
        //     <div className="sm:p-5 flex items-center justify-center flex-col">
        //       <p className="text-xl sm:text-3xl font-semibold py-8 text-black overflow-ellipsis break-before-avoid">
        //         Performance Reviews
        //       </p>
        //       <p className="md:text-center text-left sm:text-xl sm:w-[80%] text-gray-800">
        //         Manage performance evaluation processes with custom templates
        //         and automated reminders. Track employee growth and development
        //         over time
        //       </p>
        //     </div>
        //   </div>
        // </div>
        // <div className="w-full h-screen">
        // <StickyScroll content={content} />
        // </div>

        <SmoothScrollReveal data={data?.featuresContent} />
      ) : (
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center md:flex-row p-4">
          {/* <img
            src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/itsm-intro.sm.jpg"
            alt=""
          /> */}
          {/* <div className="sm:p-5 flex items-center justify-center flex-col">
            <p className="text-xl sm:text-3xl font-semibold py-8 text-black">
              What You Get
            </p>
            <p className="md:text-center  sm:text-xl sm:w-[80%] text-black py-5 text-center">
              We offer services tailored to your needs and unrivaled support.
              Whatever workflow you need to simplify, we have a package and
              pricing plan that works for you.
            </p>
            <button className="btn sm:btn-wide btn-block bg-blue-600 text-white hover:bg-blue-900">
              Contact Us for your Custom Quote
            </button>
          </div> */}
          <PricingPage />
        </div>
      )}
    </div>
  );
};

export default InfoTabs;
