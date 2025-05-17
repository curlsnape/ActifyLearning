import React from "react";
import crm1 from "../../assets/crm1.png";
import portalImg from "../../assets/portal-logo.png";
import jobs1 from "../../assets/jobs2.png";
import hrImg from "../../assets/hr1.webp";
import { Link } from "react-router-dom";

const DataArray = [
  {
    id: 1,
    name: "CRM PORTAL",
    category: "Productivity",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="orange"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
    subImage: crm1,
    hoverName: "Actify CRM",
    bgColor: "bg-orange-300",
    hoverBgColor: "hover:bg-orange-300",
    highlights: [
      {
        id: "1",
        title: "Contact Management",
      },
      {
        id: "2",
        title: "Customer Accounts",
      },
      {
        id: "3",
        title: "Lead Management",
      },
      {
        id: "4",
        title: "Deal Management",
      },
    ],
  },
  {
    id: 2,
    name: "HR PORTAL",
    category: "Management",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="violet"
        className="sm:size-6 size-4 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    subImage: hrImg,
    hoverName: "Actify HR",
    bgColor: "bg-purple-300",
    hoverBgColor: "hover:bg-purple-300",
    highlights: [
      {
        id: "1",
        title: "Expense Management",
      },
      {
        id: "2",
        title: "Project Management",
      },
      {
        id: "3",
        title: "Employee Database",
      },
      {
        id: "4",
        title: "Leave Management",
      },
      {
        id: "5",
        title: "Time Sheets",
      },
    ],
  },
  {
    id: 8,
    name: "LMS Portal",
    category: "Recruitment",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="#6495ED"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    subImage: jobs1,
    hoverName: "LMS Portal",
    bgColor: "bg-[#e67f6f]",
    hoverBgColor: "hover:bg-[#e67f6f]",
    highlights: [
      {
        id: "1",
        title: "Job Listings",
      },
      {
        id: "2",
        title: "Role Assessments",
      },
      {
        id: "3",
        title: "Scheduled Tests",
      },
      {
        id: "4",
        title: "Real-Time Results",
      },
      {
        id: "5",
        title: "Candidate Matching",
      },
    ],
  },
  {
    id: 5,
    name: "JOB PORTAL",
    category: "Recruitment",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="#6495ED"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    subImage: jobs1,
    hoverName: "Job portal",
    bgColor: "bg-[#69cbeb]",
    hoverBgColor: "hover:bg-[#69cbeb]",
    highlights: [
      {
        id: "1",
        title: "Job Listings",
      },
      {
        id: "2",
        title: "Role Assessments",
      },
      {
        id: "3",
        title: "Scheduled Tests",
      },
      {
        id: "4",
        title: "Real-Time Results",
      },
      {
        id: "5",
        title: "Candidate Matching",
      },
    ],
  },
  {
    id: 6,
    name: "VENDOR PORTAL",
    category: "Recruitment",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="#6495ED"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    subImage: jobs1,
    hoverName: "Vendor portal",
    bgColor: "bg-[#9ED2BE]",
    hoverBgColor: "hover:bg-[#9ED2BE]",
    highlights: [
      {
        id: "1",
        title: "Job Listings",
      },
      {
        id: "2",
        title: "Role Assessments",
      },
      {
        id: "3",
        title: "Scheduled Tests",
      },
      {
        id: "4",
        title: "Real-Time Results",
      },
      {
        id: "5",
        title: "Candidate Matching",
      },
    ],
  },
  {
    id: 7,
    name: "STORE APP",
    category: "Recruitment",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="#6495ED"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    subImage: jobs1,
    hoverName: "Store App",
    bgColor: "bg-[#e67f6f]",
    hoverBgColor: "hover:bg-[#e67f6f]",
    highlights: [
      {
        id: "1",
        title: "Job Listings",
      },
      {
        id: "2",
        title: "Role Assessments",
      },
      {
        id: "3",
        title: "Scheduled Tests",
      },
      {
        id: "4",
        title: "Real-Time Results",
      },
      {
        id: "5",
        title: "Candidate Matching",
      },
    ],
  },
  {
    id: 4,
    name: "ATTENDANCE",
    category: "Timekeeping",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 fill-slate-800 rounded-full"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0L360 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 19c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445l0 19 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-19c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67l0-19-8 0C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5l184.4 0c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67l0-19L80 48l0 19c0 22.1 7 43.4 19.8 61l184.4 0z" />
      </svg>
    ),
    subImage:
      "https://static.wixstatic.com/media/cc6bf1_bc00d3c4c47740479aeb2637a0958d53~mv2.png/v1/crop/x_0,y_0,w_1919,h_886/fill/w_600,h_277,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/attend-5.png",
    hoverName: "Attendance Tracker",
    bgColor: "bg-slate-300",
    hoverBgColor: "hover:bg-slate-300",
    highlights: [
      {
        id: "1",
        title: "Real-time Tracking",
      },
      {
        id: "2",
        title: "Attendance Reports",
      },
      {
        id: "3",
        title: "Mobile App Accessibility",
      },
      {
        id: "4",
        title: "Dashboards",
      },
    ],
  },
  {
    id: 3,
    name: "ACTIFY CMS",
    category: "Organization",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="blue"
        className="sm:size-6 size-4 sm:p-1 p-[0.10rem] bg-slate-50 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>
    ),
    subImage:
      "https://static.wixstatic.com/media/cc6bf1_e76be05b887a435583f8321f0ddd8673~mv2.png/v1/crop/x_0,y_0,w_1919,h_881/fill/w_560,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cms-image1.png",
    hoverName: "Actify CMS",
    bgColor: "bg-indigo-300",
    hoverBgColor: "hover:bg-indigo-300",
    highlights: [
      {
        id: "1",
        title: "Content Organization",
      },
      {
        id: "2",
        title: "User Management",
      },
      {
        id: "3",
        title: "Access Controls",
      },
      {
        id: "4",
        title: "File System",
      },
    ],
  },
];

const Solutions = () => {
  const SolutionsCard = ({ item }) => {
    return (
      <div
        data-theme="light"
        className={`btn border-none sm:w-72 sm:h-96 md:w-64 md:h-80 w-44 h-60 relative flex overflow-hidden  flex-col items-start justify-between drop-shadow-2xl cursor-pointer
            ${item?.hoverBgColor} 
            {/* ${ !true ? item?.bgColor : "bg-slate-300"}  */}
           
            rounded-xl overflow-hidden`}
            >
        <div className="sm:py-4 py-1 flex flex-col sm:gap-1">
          <p className="text-black text-left font-bold md:text-2xl text-lg ">
            {item?.name}
          </p>
          <span className="text-sm w-fit pr-2 flex items-center sm:gap-2 gap-1 bg-[#55555548] p-1 rounded-badge">
            {item?.svg}
            <p className="text-white max-sm:text-xs font-semibold">
              {item?.category}
            </p>
          </span>
        </div>
        <div className="w-full h-full flex absolute -right-8 items-end justify-start overflow-hidden">
          <img
            src={item?.subImage}
            alt="Portal Image"
            className="rounded-tl-2xl sm:w-[30rem] sm:h-[11rem] w-[26rem] h-[9rem]  scale-100 object-cover "
          />
        </div>
        <div className="w-full h-full flex flex-col items-start bg-[#0000006e] absolute -translate-x-4 opacity-0 group hover:opacity-100 hover:backdrop-blur-md transition-all ease-in-out duration-200">
          <span className="sm:p-4 p-2 w-full flex items-center justify-start gap-2">
            <img
              src={portalImg}
              alt=""
              className="w-8 h-w-8 object-contain bg-white rounded-lg"
            />
            <p className="text-lg text-white text-left">{item?.hoverName}</p>
          </span>
          <div className="sm:p-3 p-1 gap-1 flex flex-col items-start">
            {item?.highlights.map((highlight) => (
              <span
                key={highlight?.id}
                className="inline-flex items-center justify-center rounded-full bg-transparent px-2.5 py-0.5 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 sm:size-5 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="whitespace-nowrap text-left sm:text-sm text-xs">
                  {highlight?.title}
                </p>
              </span>
            ))}
          </div>
          <div
            data-theme="dark"
            className="w-full bg-transparent absolute bottom-4 hidden group-hover:block"
          >
            <Link to={`/software-details/${item?.id}`}>
              <button className="btn md:btn-md btn-sm sm:w-8/12 w-9/12 btn-circle btn-outline border-white hover:text-black hover:bg-white  text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen">
      <div className="w-full flex items-center justify-center">
        <p className="sm:text-4xl text-3xl w-11/12 text-center text-black font-bold py-8">
          Innovative Solutions for Your Business
        </p>
      </div>
      <div className="sm:w-[80%] mx-auto w-full flex sm:gap-10 gap-4 flex-wrap items-center justify-center sm:p-8 p-2">
        {DataArray.map((item, index) => {
          return <SolutionsCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Solutions;
