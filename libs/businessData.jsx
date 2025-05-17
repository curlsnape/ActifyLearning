import CRMInfoGraphics from "../src/Sections/Business/CRMInfoGraphics";
import JobInfoGraphics from "../src/Sections/Business/JobPortalInfographics";
import LMSInfographics from "../src/Sections/Business/LMSInfographics";
import BannerVidCrm from "/Videos/crmDemo.mp4";
import CRMF1 from "../src/assets/Features/CRMF1.png";
import MASTER from "../src/assets/Features/master.png";
import ACCOUNTS from "../src/assets/Features/Account.png";
import CONTACT from "../src/assets/Features/Contactt.png";
import LEAD from "../src/assets/Features/Lead.png";
import DEALS from "../src/assets/Features/Deal.png";

// import dashboard1 from "../../assets/Features/dashboard1.png";
import dashboard1 from "../src/assets/Features/dashboard1.png";
import project2 from "../src/assets/Features/project2.png";
import work3 from "../src/assets/Features/work3.png";
import timesheret4 from "../src/assets/Features/timesheret4.png";
import expense8 from "../src/assets/Features/expense8.png";
import applyleave4 from "../src/assets/Features/applyleave4.png";
import WFH5 from "../src/assets/Features/WFH5.png";
import attende6 from "../src/assets/Features/attende6.png";
import fieldvisit7 from "../src/assets/Features/fieldvisit7.png";
import payroll9 from "../src/assets/Features/payroll9.png";

import LMSdashboard1 from "../src/assets/Features/LMSdashboard1.png";
import LMSTrainer2 from "../src/assets/Features/LMSTrainer2.png";
import LMSsetCourse3 from "../src/assets/Features/LMSsetCourse.png";
import LMSCoursehierarchy4 from "../src/assets/Features/LMSCoursehierarchy4.png";
import Definecourse5 from "../src/assets/Features/Definecourse5.png";
import LMSPractice6 from "../src/assets/Features/LMSPractice6.png";
import CourseConfigure7 from "../src/assets/Features/CourseConfigure7.png";
import TestResult8 from "../src/assets/Features/TestResult8.png";
import StudentLogin9 from "../src/assets/Features/StudentLogin9.png";

import Job1 from "../src/assets/Features/Job2.png";
import Job2 from "../src/assets/Features/Job2.png";
import Job3 from "../src/assets/Features/Job3.png";
import Job4 from "../src/assets/Features/Job4.png";
import Job5 from "../src/assets/Features/Job5.png";
import Job6 from "../src/assets/Features/Job6.png";
import Job7 from "../src/assets/Features/Job7.png";
import Job8 from "../src/assets/Features/Job8.png";
import Job9 from "../src/assets/Features/Job9.png";
import Job10 from "../src/assets/Features/Job10.png";

import StoreApp1 from "../src/assets/Features/StoreApp1.png";
import StoreFeatures2 from "../src/assets/Features/StoreFeatures2.png";
import Store3 from "../src/assets/Features/Store3.png";
import Store4 from "../src/assets/Features/Store4.png";
import Store5 from "../src/assets/Features/Store5.png";
import Store6 from "../src/assets/Features/Store6.png";
import Store7 from "../src/assets/Features/Store7.png";

import VendorPortal1 from "../src/assets/Features/VendorPortal1.png";
import VendorPortal2 from "../src/assets/Features/VendorPortal2.png";
import VendorPortal3 from "../src/assets/Features/VendorPortal3.png";
import VendorPortal4 from "../src/assets/Features/VendorPortal4.png";
import VendorPortal5 from "../src/assets/Features/VendorPortal5.png";
import VendorPortal6 from "../src/assets/Features/VendorPortal6.png";

// import wavy from "../assets/wavy.png";
import orangeBg from "../src/assets/orangebg.jpg";
// import purplebg from "../assets/purplebg.jpg";

export const businessData = [
  {
    id: 1,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify CRM",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify CRM Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Dashboards </span>
            provide
          </p>
        ),
        img: CRMF1,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1d4ed8"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>

              <span className="font-sans">
                A Visual summary of sales performance
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-blue-700"
                viewBox="0 0 512 512"
              >
                <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="font-sans">
                Tracking key metrics like contacts, Leads and Deals
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1d4ed8"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>

              <span className="font-sans">
                <span className="font-sans font-bold">Notifications </span> and{" "}
                <span className="font-sans font-bold">Reminders</span> that
                helps sales teams stay organized and focused on closing
                opportunities efficiently
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Masters section:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-green-600">Masters</span> section
          </p>
        ),
        img: MASTER,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1d4ed8"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>

              <span className="font-sans">
                The <span className="font-sans font-bold">Masters section</span>{" "}
                in a CRM helps define the dropdown values for various
                interfaces, allowing customization based on your industry needs.
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-12 fill-blue-600"
              >
                <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
              </svg>
              <span className="font-sans">
                It ensures that fields such as contact sources, contact stage,
                contact status, industry types …. are tailored to your specific
                business processes
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Accounts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Maintaining <span className="text-blue-700">Accounts</span>
          </p>
        ),
        img: ACCOUNTS,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-10 fill-blue-600"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>

              <span className="font-sans">
                Manage detailed information about the{" "}
                <span className="font-sans font-bold">Companies </span> or
                <span className="font-sans font-bold"> Organizations</span>{" "}
                (clients, partners, vendors)
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="size-7 fill-blue-600"
              >
                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
              </svg>
              <span className="font-sans">
                Organize accounts by categories, regions, or other relevant
                factors.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Overseeing <span className="text-red-600">Leads</span>
          </p>
        ),
        img: LEAD,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-14 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
              </svg>
              <span className="font-sans">
                Helps manage{" "}
                <span className="font-sans font-bold">Potential Customers</span>{" "}
                or prospects who have shown interest in your products or
                services
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
              </svg>
              <span className="font-sans">
                Transform the qualified leads into{" "}
                <span className="font-sans font-bold">deal</span>
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-blue-600"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
              <span className="font-sans">
                <span className="font-sans font-bold">Monitor</span> the status
                and progress of each lead
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Overseeing <span className="text-yellow-600">Deals</span>
          </p>
        ),
        img: DEALS,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-14 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
              </svg>
              <span className="font-sans">
                {/* Monitor the status of deals at each stage, from initial */}
                contact to closing, allowing teams to focus on{" "}
                <span className="font-sans font-bold">
                  moving deals forward
                </span>
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
              </svg>
              <span className="font-sans">
                Transform the qualified leads into deal
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-blue-600"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
              <span className="font-sans">Generate invoices</span>
            </li>
          </>
        ),
      },
      {
        // title: "Managing Deals:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Maintaining <span className="text-cyan-600">Contacts</span>
          </p>
        ),
        img: CONTACT,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                <span className="font-sans font-bold">Stores</span> and{" "}
                <span className="font-sans font-bold">Manages</span> individual
                contact information, such as names, phone numbers, email
                addresses, and roles within an organization
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 fill-blue-600"
                viewBox="0 0 512 512"
              >
                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" />
              </svg>
              <span className="font-sans">
                Track <span className="font-sans font-bold">communication</span>{" "}
                and <span className="font-sans font-bold">interaction</span>{" "}
                history with each contact
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-9 fill-blue-600"
                viewBox="0 0 576 512"
              >
                <path d="M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z" />
              </svg>
              <span className="font-sans">
                Segment contacts based on roles, industries, or other criteria
                for targeted outreach
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2563eb"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>

              <span className="font-sans">
                Manage follow-up activities, tasks, and reminders.
              </span>
            </li>
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    // primaryImage: crm,
    // primaryImageMobile: crmMobile,
    // secondaryImage: crm2,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify HR Portal",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    // infograph: <CRMInfoGraphics/>,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify CRM Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Dash Boards </span>and{" "}
            <span className="text-red-500">Reports :</span>
          </p>
        ),
        img: dashboard1,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Dashboards display{" "}
                <span className="font-sans font-bold">
                  Pending Approvals, Scheduled Meetings
                </span>{" "}
                for the day, team{" "}
                <span className="font-sans font-bold">Birthdays,</span> and{" "}
                <span className="font-sans font-bold">Members on Leave, </span>{" "}
                offering a clear overview of daily priorities and team updates.
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Our reports can be
                <span className="font-sans font-bold">Exported to Excel, </span>
                with{" "}
                <span className="font-sans font-bold">
                  Global Filters, Field Customization,
                </span>{" "}
                and <span className="font-sans font-bold">Column</span>-wise
                sorting and searching for greater flexibility and ease.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Masters section:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-green-600">Project</span> Management:
          </p>
        ),
        img: project2,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Simplify the{" "}
                <span className="font-sans font-bold">Planning, Execution</span>
                , and Tracking by ensuring{" "}
                <span className="font-sans font-bold">Tasks, Timelines,</span>{" "}
                and <span className="font-sans font-bold">Resources</span> are
                efficiently aligned.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Accounts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-blue-800">Work </span>Planners
          </p>
        ),
        img: work3,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Our Work Planners help employees stay organized by{" "}
                <span className="font-sans font-bold">
                  Streamlining Task Management
                </span>{" "}
                and prioritization ensuring deadlines are met efficiently.
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Task statuses are{" "}
                <span className="font-sans">Automatically</span> recorded in the
                timesheet, ensuring accurate and effortless tracking of work
                progress and time spent.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-blue-600">Timesheet : </span>
          </p>
        ),
        img: timesheret4,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Optimize{" "}
                <span className="font-sans font-bold">Applying, Tracking,</span>{" "}
                and <span className="font-sans font-bold">Approving</span>{" "}
                leaves, with checks to monitor{" "}
                <span className="font-sans font-bold">Leave Balances</span> and
                alerts for excessive leave applications.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Managing Deals:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-blue-600"> Expense </span>
            Management:
          </p>
        ),
        img: expense8,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Employees who wish to work from home can{" "}
                <span className="font-sans font-bol">Submit</span> a request,
                and a record of these applications can be maintained.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-green-600">Leave </span>
            Management:
          </p>
        ),
        img: applyleave4,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Optimize{" "}
                <span className="font-sans font-bold">Applying, Tracking,</span>{" "}
                and <span className="font-sans font-bold">Approving</span>{" "}
                leaves, with checks to monitor{" "}
                <span className="font-sans font-bold">Leave Balances</span> and
                alerts for excessive leave applications.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Work From </span>
            Home:
          </p>
        ),
        img: WFH5,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Employees who wish to work from home can{" "}
                <span className="font-sans font-bold">Submit</span> a request,
                and a record of these applications can be maintained.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Attendance: </span>
          </p>
        ),
        img: attende6,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                The Attendance module is integrated with{" "}
                <span className="font-sans font-bold">
                  Actify Attendance Application,
                </span>{" "}
                allowing employees to easily{" "}
                <span className="font-sans font-bold">
                  Mark Attendance Track Working Hours,
                </span>{" "}
                and <span className="font-sans font-bold">Manage Shifts.</span>
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                It automates attendance records, generates reports, and syncs
                with leave management to ensure accurate timekeeping and
                compliance with company policies.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Field </span>Visit:
          </p>
        ),
        img: fieldvisit7,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                The attendance app marks attendance when{" "}
                <span className="font-sans font-bold">Field Visits</span> are
                applied through it.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-blue-700">Salary </span>and PayRoll:
          </p>
        ),
        img: payroll9,
        list1: () => (
          <>
            <li className="flex items-start space-x-3 rtl:space-x-reverse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 fill-blue-600"
                viewBox="0 0 640 512"
              >
                <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
              </svg>

              <span className="font-sans">
                Streamline PayRoll Process by{" "}
                <span className="font-sans font-bold">
                  Automating Calculations, Generating Payslips,
                </span>{" "}
                and ensuring timely, accurate disbursals. It also simplifies
                defining <span className="font-sans font-bold">Deductions</span>{" "}
                and <span className="font-sans font-bold">Allowances</span>{" "}
                adhering to Compliances
              </span>
            </li>
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    // primaryImage: crm,
    // primaryImageMobile: crmMobile,
    // secondaryImage: crm2,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify LMS Portal",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    // infograph: LMSInfographics,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify CRM Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-0 lg:pb-12">
            <span className="text-blue-800">Insights </span>and Navigations:
          </p>
        ),
        img: LMSdashboard1,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                A Learning Management System (LMS) is a software platform
                designed{" "}
                <span className="font-sans font-bold">
                  to deliver, track, and manage
                </span>{" "}
                educational content and training programs.
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 fill-blue-700"
            viewBox="0 0 512 512"
          >
            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg> */}
              <span className="font-sans">
                It enables educators to{" "}
                <span className="font-sans font-bold">
                  create courses, assess learners,
                </span>{" "}
                and{" "}
                <span className="font-sans font-bold">monitor progress</span>{" "}
                efficiently.
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1d4ed8"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg> */}

              <span className="font-sans">
                An intuitive admin dashboard showcasing{" "}
                <span className="font-sans font-bold">current batches</span>{" "}
                with{" "}
                <span className="font-sans font-bold">trainer details,</span>{" "}
                providing instant access to{" "}
                <span className="font-sans font-bold">attendance reports</span>{" "}
                and <span className="font-sans font-bold">batch scores</span> at
                the click of a button.
              </span>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-0 lg:pb-12">
            <span className="text-orange-400">Trainer Configuration</span>
            <span> in the system:</span>
          </p>
        ),
        img: LMSTrainer2,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                Trainers can be added to the system with{" "}
                <span className="font-sans font-bold">
                  their personal, academic details.
                </span>{" "}
                Their skill sets are also recorded.
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                They can then be assigned to
                <span className="font-sans font-bold">batches </span>
                based on their{" "}
                <span className="font-sans font-bold">skill sets</span>
              </span>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-0 lg:pb-12">
            <span className="text-blue-700">Setting </span>Up Courses:
          </p>
        ),
        img: LMSsetCourse3,
        list1: () => (
          <>
            <li className="items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}
              <p>
                Courses can be configured in the system with detailed
                specifications.
                <p>Each course includes essential details such as:</p>
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Duration:</span> The
                total time required to complete the course.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Number of Modules:{" "}
                </span>{" "}
                A breakdown of the course content into manageable sections or
                topics.
              </p>
              <p>The training content for each course may consist of:</p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Presentations: </span>{" "}
                Structured visual aids to explain key concepts.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • DIY (Do-It-Yourself) Activities:{" "}
                </span>{" "}
                Hands-on exercises to encourage practical learning.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Quizzes:</span>{" "}
                Assessment tools to monitor learner progress and understanding.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">Reference Links:</span>{" "}
                External resources to supplement the course material and provide
                deeper insights.
              </p>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-0  pb-0 lg:pb-12">
            <span className="text-orange-400">Course </span>Linked Hierarchy:
          </p>
        ),
        img: LMSCoursehierarchy4,
        list1: () => (
          <>
            <li className=" items-center  rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Modular Structure:{" "}
                </span>{" "}
                Courses are designed in a modular format, allowing flexibility
                in their usage.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Reusability: </span>{" "}
                Each module can be reused independently across different
                training plans.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Customizable Training Plans:{" "}
                </span>{" "}
                Multiple courses or modules can be clubbed together to create
                comprehensive and tailored training plans.
              </p>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 fill-blue-700"
            viewBox="0 0 512 512"
          >
            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg> */}
              <span className="font-sans">
                It enables educators to{" "}
                <span className="font-sans font-bold">
                  create courses, assess learners,
                </span>{" "}
                and{" "}
                <span className="font-sans font-bold">monitor progress</span>{" "}
                efficiently.
              </span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1d4ed8"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg> */}

              <span className="font-sans">
                An intuitive admin dashboard showcasing{" "}
                <span className="font-sans font-bold">current batches</span>{" "}
                with{" "}
                <span className="font-sans font-bold">trainer details,</span>{" "}
                providing instant access to{" "}
                <span className="font-sans font-bold">attendance reports</span>{" "}
                and <span className="font-sans font-bold">batch scores</span> at
                the click of a button.
              </span>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-5 lg:pb-12">
            Defining <span className="text-blue-800"> Batches:</span>
          </p>
        ),
        img: Definecourse5,
        list1: () => (
          <>
            <li className=" items-center rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Batch Definition:{" "}
                </span>{" "}
                The system allows batches to be defined with all relevant
                details.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Courses: </span> Each
                batch is linked to specific courses included in its curriculum.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Trainer Information:{" "}
                </span>{" "}
                Details of the trainer assigned to the batch are recorded.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Student Enrolment:{" "}
                </span>{" "}
                The list of students registered for the batch is maintained.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Batch Timings: </span>{" "}
                Scheduled timings for the batch are specified to ensure proper
                coordination.
              </p>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-5 lg:pb-12">
            <span className="text-orange-400">Setting Up Modules</span> and{" "}
            <span className="text-blue-800">Practise Questions:</span>
          </p>
        ),
        img: LMSPractice6,
        list1: () => (
          <>
            <li className=" items-center  rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Module Definition:{" "}
                </span>{" "}
                Each module can be detailed with specific content to provide a
                clear learning structure.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Content Specification:{" "}
                </span>{" "}
                Modules can include various types of content, such as:
              </p>
              <ul className="ml-2">
                <li>• Presentations</li>
                <li>• Reference materials</li>
                <li>• Interactive activities</li>
              </ul>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Practice Questions:{" "}
                </span>{" "}
                Dedicated practice questions can be assigned to each module.
                These questions serve to evaluate the students' understanding
                and learning progress.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Evaluation Framework:{" "}
                </span>{" "}
                The practice questions help in assessing module-wise performance
                and identifying areas for improvement.
              </p>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-5 lg:pb-12">
            <span className="text-orange-400">Configuring </span>Course Access:
          </p>
        ),
        img: CourseConfigure7,
        list1: () => (
          <>
            <li className=" items-center rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Module Unlocking:{" "}
                </span>{" "}
                Modules can be made accessible based on the student's study plan
                and course progression.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Study Plan Alignment:{" "}
                </span>{" "}
                Access to modules is tailored to match the student's
                personalized learning schedule.
              </p>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-5 lg:pb-12">
            <span className="text-orange-400">Test </span>results:
          </p>
        ),
        img: TestResult8,
        list1: () => (
          <>
            <li className=" items-center rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Test Results Tracking:{" "}
                </span>{" "}
                Module-wise test results are systematically recorded.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Visibility: </span> Test
                results are made accessible to both students and trainers.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Performance Insights:{" "}
                </span>{" "}
                Results provide a clear understanding of student performance for
                each module.
              </p>
            </li>
          </>
        ),
      },
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5  pb-5 lg:pb-12">
            <span className="text-orange-400">Student Login</span>
            <span> and Enrolled courses:</span>
          </p>
        ),
        img: StudentLogin9,
        list1: () => (
          <>
            <li className=" items-center rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Course Dashboard:{" "}
                </span>{" "}
                Students can view all their enrolled courses upon logging in.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">
                  • Detailed Content Access:{" "}
                </span>{" "}
                Each course includes a detailed breakdown of the content, which
                is accessible to the student.
              </p>
              <p className="font-sans">
                <span className="font-sans font-bold">• Lifetime Access: </span>{" "}
                Students have unlimited, lifetime access to the course content.
              </p>
            </li>
          </>
        ),
      },
    ],
  },
  {
    id: 4,
    // primaryImage: crm,
    // primaryImageMobile: crmMobile,
    // secondaryImage: crm2,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify Job Portal",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    // infograph: JobInfoGraphics,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify Job Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans">
            <span className="text-orange-400">Multiple </span>
            Profile login:
          </p>
        ),
        img: Job1,
        list1: () => (
          <>
            <li>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>The application supports multiple profiles.</p>
                <p>Companies can:</p>
                <ul>
                  <li className="px-2">
                    • Create{" "}
                    <span className="font-sans font-bold">
                      Job Descriptions.
                    </span>
                  </li>
                  <li className="px-2">
                    • <span className="font-sans font-bold">View</span>{" "}
                    applicants.
                  </li>
                  <li className="px-2">
                    • Set filtering{" "}
                    <span className="font-sans font-bold">tests.</span>
                  </li>
                </ul>
                <p>Candidates can:</p>
                <ul>
                  <li className="px-2">
                    • <span className="font-sans font-bold">Apply</span> for
                    jobs.
                  </li>
                  <li className="px-2">
                    • Take tests with{" "}
                    <span className="font-sans font-bold">
                      instant feedback.
                    </span>
                  </li>
                </ul>
                <p>College Placement Heads can:</p>
                <ul>
                  <li className="px-2">
                    • Use for{" "}
                    <span className="font-sans font-bold">recruitment</span> and{" "}
                    <span className="font-sans font-bold">internships.</span>
                  </li>
                </ul>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Masters section:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Companies Listing their{" "}
            <span className="text-green-600">Job Postings</span>
          </p>
        ),
        img: Job2,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>Companies Listing their Job Postings</p>
                <p>Organizations can:</p>
                <li className="px-3">
                  • <span className="font-sans font-bold">Create</span> Job
                  Descriptions (JDs) to define roles and responsibilities for
                  open positions.
                </li>
                <li className="px-3">
                  • <span className="font-sans font-bold">Upload</span> JDs
                  directly to the application.
                </li>
                <p>All uploaded JDs will:</p>
                <li className="px-3">• Be listed on the platform.</li>
                <li className="px-3">
                  • Be{" "}
                  <span className="font-sans font-bold">
                    Visible and Accessible
                  </span>{" "}
                  to candidates.
                </li>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Accounts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Setting Up Tests for{" "}
            <span className="text-orange-400"> Preliminary Screening: </span>
          </p>
        ),
        img: Job3,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>
                  Companies can create role-specific screening tests using MCQ
                  questions.
                </p>
                <li className="px-3">
                  • If a test is associated with an opening, candidates can take
                  it upon applying.
                </li>
                <li className="px-3">
                  • Test results will be accessible to both the company and the
                  candidate.
                </li>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Managing Job Postings</span> and
            Applicant Details:
          </p>
        ),
        img: Job4,
        list1: () => (
          <>
            <p>
              The "Jobs and Responses" tab provides{" "}
              <span className="font-sans font-bold">
                Details of all the Candidates
              </span>{" "}
              for a specific{" "}
              <span className="font-sans font-bold">Opening.</span>
            </p>
            <li className="px-3">
              • <span className="font-sans font-bold">Resumes</span> of the
              applicants are also accessible within this tab.
            </li>
          </>
        ),
      },
      {
        // title: "Managing Deals:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Candidates <span className="text-orange-400"> Results</span>
          </p>
        ),
        img: Job5,
        list1: () => (
          <>
            <p>Detailed Performance Overview is provided with</p>
            <li>• Number of attempted questions </li>
            <li>• Number of unattempted questions</li>
            <li>• Total number of correct answers</li>
            <li>• Total number of incorrect answers</li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Candidate <span className="text-orange-400"> View:</span>
          </p>
        ),
        img: Job7,
        list1: () => (
          <>
            <p>
              Candidates register and complete their profiles, including resume
              uploads.
            </p>
            <li>
              • All entered information is subsequently{" "}
              <span className="font-sans font-bold">
                stored within the system.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Job Openings </span>and
            Application Process
          </p>
        ),
        img: Job8,
        list1: () => (
          <>
            <p>
              Candidates can view available{" "}
              <span className="font-sans font-bold">Job Listings</span> in the
              Vacancies tab, explore detailed{" "}
              <span className="font-sans font-bold">Job Descriptions,</span> and{" "}
              <span className="font-sans font-bold">Apply</span> directly.
            </p>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Applied Jobs </span>and Test
            Management
          </p>
        ),
        img: Job9,
        list1: () => (
          <>
            <p>
              The "<span className="font-sans font-bold">My Jobs</span>" section
              displays a list of{" "}
              <span className="font-sans font-bold">All Applied Positions</span>{" "}
              and provides an interface for candidates to take tests. Candidates
              can <span className="font-sans font-bold">Access Tests</span> via
              a link, <span className="font-sans font-bold">view</span> their{" "}
              <span className="font-sans font-bold">scores,</span> and share
              them with companies.
            </p>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            The company can then{" "}
            <span className="font-sans font-bold text-orange-400">
              Review the Results
            </span>{" "}
            and proceed with the recruitment process.
          </p>
        ),
        img: Job10,
      },
    ],
  },
  {
    id: 5,
    // primaryImage: crm,
    // primaryImageMobile: crmMobile,
    // secondaryImage: crm2,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify Store App",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    // infograph: JobInfoGraphics,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify Job Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans">
            <span className="text-orange-400">Launch your </span>
            Store:
          </p>
        ),
        img: StoreApp1,
        list1: () => (
          <>
            <li>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>
                  Are you a brand owner looking to establish your online
                  presence? With the Actify Store app, getting started is quick
                  and hassle-free. Simply register your brand, log in, and begin
                  building your website in minutes.
                </p>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Masters section:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Companies Listing their{" "}
            <span className="text-green-600">Setup the payment modes:</span>
          </p>
        ),
        img: StoreFeatures2,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                Set up your payment options with ease. Choose between two modes:
                QR Scanner or UPI ID. Take advantage of our inbuilt QR generator
                for seamless transactions.
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Accounts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            Setting Up Tests for{" "}
            <span className="text-orange-400"> Build your Brand Profile: </span>
          </p>
        ),
        img: Store3,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>
                  Create a personalized profile for your website to showcase
                  your brand's unique identity and offerings.
                </p>
                <li className="px-3">
                  •{" "}
                  <span className="font-sans font-bold">
                    Set up home screen images:
                  </span>{" "}
                  Upload visuals that represent your brand's identity and
                  attract attention.
                </li>
                <li className="px-3">
                  •{" "}
                  <span className="font-sans font-bold">
                    Create footer content:
                  </span>{" "}
                  Add essential details like contact information, social media
                  links, and business hours.
                </li>
                <li className="px-3">
                  •{" "}
                  <span className="font-sans font-bold">
                    Add gallery images:
                  </span>{" "}
                  Showcase your products or services with carefully chosen
                  images to establish the right context for your brand.
                </li>
                <li className="px-3">
                  •{" "}
                  <span className="font-sans font-bold">
                    Design a feedback form:
                  </span>{" "}
                  Gather customer insights with a simple form to improve your
                  offerings and steer your business in the right direction.
                </li>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Create and Organize Your</span>{" "}
            Product Catalogue:
          </p>
        ),
        img: Store4,
        list1: () => (
          <>
            <p>
              Upload your product catalog with images, organize items into
              specific categories, and list the products. Include detailed
              descriptions and pricing information for each item.
            </p>
          </>
        ),
      },
      {
        // title: "Managing Deals:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Attract Customers:</span>
          </p>
        ),
        img: Store5,
        list1: () => (
          <>
            <p>
              Once your StoreApp is live, your customers will be able to
              seamlessly explore your online store. They can browse through your
              well-organized product catalogs.
            </p>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400"> Attract Customers:</span>
          </p>
        ),
        img: Store6,
        list1: () => (
          <>
            <p>
              Customers will also have the ability to search for specific
              products using keywords and filter the results based on criteria
              such as price range, making it easier for them to find exactly
              what they’re looking for.
            </p>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">
              Streamlined Shopping and Order Management:
            </span>
          </p>
        ),
        img: Store7,
        list1: () => (
          <>
            <p>
              Customers can easily add products to their cart and proceed with
              placing an order. With the integrated payment gateway, they can
              securely complete their purchase within the app. Additionally,
              users can access a detailed history of their transactions,
              including payment records for completed orders and a log of any
              cancelled orders.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 6,
    // primaryImage: crm,
    // primaryImageMobile: crmMobile,
    // secondaryImage: crm2,
    bgColor: "fill-[#fe890c9a]",
    bgImg: orangeBg,
    title: "Actify Vendor Portal",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    about:
      " CRM software helps you manage deals, track leads, and nurture customer relationships all in one place. Streamline your sales process with powerful tools and insightful analytics. Enhance customer satisfaction and drive business growth efficiently",
    // infoBoxColor: "bg-green-300",
    bannerVid: BannerVidCrm,
    // infograph: JobInfoGraphics,
    blendColor: "from-[#fe890c7a]",
    infoBoxColor: "#fe890c7a",
    FAQs: [
      {
        question: "How can the Actify Job Portal benefit my business?",
        answer:
          "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
      },
      {
        question: "Is the CRM portal customizable for my business needs?",
        answer:
          "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
      },
      {
        question: "Is the Actify CRM Portal mobile-friendly?",
        answer:
          "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
      },
      {
        question: "How can the Actify CRM Portal improve my sales process?",
        answer:
          "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
      },
    ],
    featuresContent: [
      {
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans">
            <span className="text-orange-400">Dashboards and </span>
            Product Sidebar:
          </p>
        ),
        img: VendorPortal1,
        list1: () => (
          <>
            <li>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <ul>
                  <li>
                    •{" "}
                    <span className="font-sans font-bold">
                      Informative dashboards with purchase request details at
                      your fingertips.
                    </span>
                  </li>
                  <li>
                    •{" "}
                    <span className="font-sans font-bold">
                      Dashboards for easy navigation and management of vendors
                      and items.
                    </span>
                  </li>
                </ul>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Masters section:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-green-600">Vendor Creation:</span>
          </p>
        ),
        img: VendorPortal2,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>
                  Items from the Quotation List received via the ERP system can
                  be assigned to Vendors, with corresponding reports generated.
                </p>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Maintaining Accounts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">
              {" "}
              Managing ERP Quotation List:{" "}
            </span>
          </p>
        ),
        img: VendorPortal3,
        list1: () => (
          <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse ">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1d4ed8"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg> */}

              <span className="font-sans">
                <p>
                  Items from the Quotation List received via the ERP system can
                  be assigned to Vendors, with corresponding reports generated.
                </p>
              </span>
            </li>
          </>
        ),
      },
      {
        // title: "Overseeing Leads:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Intuitive Reports</span>
          </p>
        ),
        img: VendorPortal4,
        list1: () => (
          <>
            <p>
              Download reports with item-specific details, including RFQ
              information, vendor quotes, costs, and RFQ dates.
            </p>
          </>
        ),
      },
      {
        // title: "Managing Deals:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Vendor Dashboards:</span>
          </p>
        ),
        img: VendorPortal5,
        list1: () => (
          <>
            <p>
              Vendors can log in to the application to access all RFQs assigned
              to them. They can review the details of each item listed in the
              RFQs and prepare and submit their quotations directly through the
              portal.
            </p>
          </>
        ),
      },
      {
        // title: "Maintaining Contacts:",
        title: () => (
          <p className="text-3xl lg:text-5xl font-sans p-5 pb-12">
            <span className="text-orange-400">Quotation Report:</span>
          </p>
        ),
        img: VendorPortal6,
        list1: () => (
          <>
            <p>
              The report displays all quotations submitted by vendors, providing
              comprehensive details such as the RFQ date, RFQ validity period,
              expiry date, items included, and the quoted quantities for each
              item.
            </p>
          </>
        ),
      },
    ],
  },
];
