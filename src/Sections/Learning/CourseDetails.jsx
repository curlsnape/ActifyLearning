// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { mainData } from "../../data";
// import { FaBook, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { IoBusiness } from "react-icons/io5";

// const CourseDetails = () => {
//   const [expandedModule, setExpandedModule] = useState("Web Design");
//   const [courseData, setCourseData] = useState();

//   const params = useParams();
//   console.log(params)

//   const filterData = () => {
//     const data = mainData.find((item) => item.id == params.id)
//     // console.log(data)
//     setCourseData(data)
//   }
//   useEffect(() => {
//     filterData()
//   }, [])

//   // const courseModules = [
//   //   {
//   //     title: "Front End Development",
//   //     tag: "Frontend",
//   //     duration: "3.2 Weeks",
//   //     topics: [
//   //       "Basic Structures of Html",
//   //       "Layouts and Validations",
//   //       "Html5",
//   //       "Interview Questions and DIY",
//   //       "Basic of CSS",
//   //       "Responsive Design",
//   //       "Transitions and Animations",
//   //       "CSS Framework",
//   //       "Project - 1 and Interview Questions",
//   //       "Basics of Javascript",
//   //       "Arrays and Objects",
//   //       "Events and Functions",
//   //       "Project -1 and Interview Questions",
//   //     ],
//   //   },
//   //   {
//   //     title: "Python",
//   //     tag: "Backend",
//   //     duration: "4 Weeks",
//   //     topics: [
//   //       "Fundamentals of python",
//   //       "Functions and loops",
//   //       "Data structures(arrays, binary, stack, etc.)",
//   //       "Advanced python",
//   //       "Object-oriented programming (OOP)",
//   //       "Projects - 3"
//   //     ],
//   //   },
//   //   {
//   //     title: "SQL",
//   //     tag: "Database",
//   //     duration: "4 Weeks",
//   //     topics: [
//   //       "Basics concepts",
//   //       "Industry Use Cases",
//   //       "Joins",
//   //       "Sub Query",
//   //       "Triggers",
//   //       "Functions",
//   //       "Interviews Questions",
//   //     ],
//   //   },
//   //   {
//   //     title: "Django",
//   //     tag: "Backend",
//   //     duration: "5.6 Weeks",
//   //     topics: [
//   //       "Django basics",
//   //       "Creating Models and Databases",
//   //       "Views and URLs",
//   //       "Queries in Django",
//   //       "Projects - 7",
//   //     ],
//   //   },
//   // ];

//   function CurriculumCard() {
//     return (
//       <div className="max-w-sm mx-auto bg-[#062b5f] rounded-lg shadow-xl p-4 space-y-4">
//         <div className="space-y-1">
//           <h2 className="text-xl font-bold text-white">
//             Job-Ready Curriculum
//           </h2>
//           <p className="text-blue-100 text-xs">
//           A comprehensive curriculum crafted by our industry specialists to assist you in securing a position at your ideal IT company.
//           </p>
//         </div>

//         <div className="space-y-3">
//           {[
//             {
//               icon: <PiSuitcaseSimpleDuotone color="#062b5f" size={20} />,
//               title: "55000+",
//               subtitle: "No. of Jobs available",
//             },
//             {
//               icon: <FaIndianRupeeSign color="#062b5f" />,
//               title: "4 LPA+",
//               subtitle: "Average Salary",
//             },
//             {
//               icon: <IoBusiness color="#062b5f" />,
//               title: "2,000+",
//               subtitle: "No. of companies available",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-md p-3 flex items-center space-x-3 transform transition hover:scale-105"
//             >
//               <div className="bg-blue-50 p-2 rounded-md">
//                 {/* <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                 </svg> */}
//                 {item.icon}
//               </div>
//               <div>
//                 <div className="text-lg font-bold text-gray-800">
//                   {item.title}
//                 </div>
//                 <div className="text-xs text-gray-600">{item.subtitle}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="w-full bg-[#c14646] text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-1 text-sm">
//           <span className="text-white">Download Brochure</span>
//           <svg
//             className="w-4 h-4 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//             />
//           </svg>
//         </button>
//       </div>
//     );
//   }

//   function Accordian() {
//     return (
//       <div className="space-y-4 flex-1 my-10 lg:my-0">
//         {mainData.courseModule.map((module) => (
//           <div key={module.title} className="border rounded-lg overflow-hidden">
//             <button
//               onClick={() =>
//                 setExpandedModule(
//                   expandedModule === module.title ? "" : module.title
//                 )
//               }
//               className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
//             >
//               <div className="flex items-start lg:space-x-4">
//                 <div
//                   className={`w-2 hidden lg:block h-2 rounded-full ${
//                     expandedModule === mainData.courseModule.title
//                       ? "bg-[#35aecf]"
//                       : "bg-gray-300"
//                   }`}
//                 />
//                 {/* <div className={`w-2 h-2 rounded-full`} /> */}
//                 <div className="flex flex-col lg:flex-row w-fit items-start lg:items-center lg:space-x-4">
//                   <h3 className="font-semibold text-base lg:text-lg">{mainData.courseModule.title}</h3>
//                   <span
//                     className={`text-xs px-2 w-fit py-1 rounded-full ${
//                       mainData.courseModule.tag === "Frontend"
//                         ? "bg-[#c2e837]/20 text-[#6a7c1e]"
//                         : mainData.courseModule.tag === "Backend"
//                         ? "bg-blue-100 text-blue-700"
//                         : "bg-purple-100 text-purple-700"
//                     }`}
//                   >
//                     #{mainData.courseModule.tag}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4 text-gray-500">
//                 <div className="flex items-center space-x-1">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span className="text-sm">{mainData.courseModule.duration}</span>
//                 </div>
//                 {expandedModule === module.title ? (
//                   <FaChevronUp />
//                 ) : (
//                   <FaChevronDown />
//                 )}
//               </div>
//             </button>
//             {expandedModule === module.title && module.topics.length > 0 && (
//               <div className="bg-gray-50 px-4 py-3 border-t">
//                 <ul className="space-y-2 grid grid-cols-2 gap-x-6">
//                   {
//                   for(let i = 0,i < )
//                   mainData.courseModule.topics.map((topic, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center space-x-2 text-sm text-gray-600"
//                     >
//                       <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
//                       <span>{topic}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const FAQ = () => {
//     return (
//       <div className="w-11/12 sm:w-6/12 mx-auto mt-10">
//           <p className="text-black text-4xl text-center mb-4">FAQ</p>
//           {/* {mainData.map((item, index) => {
//             return ( */}
//               <div
//                 // key={index}
//                 className="collapse collapse-plus bg-white text-black hover:bg-[#d3eaff89] rounded-none"
//               >
//                 <input type="radio" name="my-accordion-3" />
//                 <div className="collapse-title text-2xl font-bold">
//                   <p>How is Data Analytics relevant to the industry?</p>
//                 </div>
//                 <div className="collapse-content text-xl">
//                   <p>Data Analytics is a vital function for extracting actionable insights from raw data. It is widely used across industries for:</p>
//                 </div>
//               </div>
//             {/* );
//           })} */}
//         </div>
//     )
//   }

//   console.log(mainData)
//   return (
//     <div
//   data-theme="light"
//   className="py-24 w-full flex items-center justify-center"
// >
//   <div className="w-[95%] lg:w-[80%] gap-4 flex flex-wrap items-start justify-center mx-auto">
//     <div className="w-full lg:w-auto"> {/* CurriculumCard */}
//       <CurriculumCard />
//     </div>
//     <div className="w-full lg:w-auto"> {/* Accordian */}
//       <Accordian />
//     </div>
//     <div className="w-full"> {/* FAQ */}
//       <FAQ />
//     </div>
//   </div>
// </div>

//   );
// };

// export default CourseDetails;

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { mainData } from "../../data";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {
  // Using a dummy id of 1 since we don't have actual params
  const dummyId = 1;
  const [courseData, setCourseData] = useState();
  const [expandedModule, setExpandedModule] = useState("");

  const [faqLength, setfaqLength] = useState(6);

  const params = useParams();

  useEffect(() => {
    const filterData = () => {
      const data = mainData.find((item) => item.id == params.id);
      setExpandedModule(data.courseModule[0].title);
      setCourseData(data);
      window.scrollTo(0, 0);
    };
    filterData();
  }, []);
  console.log(courseData);

  // if (!courseData) {
  //   return <div>Loading...</div>;
  // }

  function CurriculumCard() {
    return (
      <div className=" w-full lg:max-w-sm mx-auto bg-[#062b5f] rounded-lg shadow-xl p-4 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white">Job-Ready Curriculum</h2>
          <p className="text-blue-100 text-xs">
            A comprehensive curriculum crafted by our industry specialists to
            assist you in securing a position at your ideal IT company.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: <PiSuitcaseSimpleDuotone color="#062b5f" size={20} />,
              title: "55000+",
              subtitle: "No. of Jobs available",
            },
            {
              icon: <FaIndianRupeeSign color="#062b5f" />,
              title: "4 LPA+",
              subtitle: "Average Salary",
            },
            {
              icon: <IoBusiness color="#062b5f" />,
              title: "2,000+",
              subtitle: "No. of companies available",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-3 flex items-center space-x-3 transform transition hover:scale-105"
            >
              <div className="bg-blue-50 p-2 rounded-md">{item.icon}</div>
              <div>
                <div className="text-lg font-bold text-gray-800">
                  {item.title}
                </div>
                <div className="text-xs text-gray-600">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#c14646] text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-1 text-sm">
          <span className="text-white">Download Brochure</span>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      </div>
    );
  }

  function Accordian() {
    if (!courseData?.courseModule || courseData.courseModule?.length === 0) {
      return <div>No course modules available</div>;
    }

    return (
      <div className="space-y-4 my-10 lg:my-0 w-[95vw] lg:w-[40vw]">
        {courseData.courseModule?.map((module, index) => (
          <div
            key={index}
            className="border flex-1 rounded-lg overflow-hidden "
          >
            <button
              onClick={() =>
                setExpandedModule(
                  expandedModule === module.title ? "" : module.title
                )
              }
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
            >
              <div className="flex items-start lg:space-x-4">
                <div
                  className={`w-2 hidden lg:block h-2 rounded-full ${
                    expandedModule === module.title
                      ? "bg-blue-950"
                      : "bg-gray-300"
                  }`}
                />
                <div className="flex flex-col lg:flex-row w-fit items-start lg:items-center lg:space-x-4">
                  <h3 className="font-semibold text-base lg:text-lg">
                    {module.title}
                  </h3>
                  {/* <span
                    className="text-xs px-2 w-fit py-1 rounded-full bg-purple-100 text-purple-700"
                  >
                    #{module.tag}
                  </span> */}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                {/* <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">{module.duration}</span>
                </div> */}
                {expandedModule === module.title ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </button>
            {expandedModule === module.title &&
              module.topics &&
              module.topics.length > 0 && (
                <div className="bg-gray-50 px-4 py-3 border-t ">
                  <ul className="space-y-2 grid grid-cols-2 gap-x-6">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        {/* <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> */}
                        {/* <span>•</span> */}
                        <span className="pr-2">
                          &bull; <span>{topic}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    );
  }

  function FAQ() {
    if (!courseData?.FAQ || courseData.FAQ?.length == 0) {
      return null;
    }

    return (
      <div className="w-11/12 sm:w-10/12 mx-auto mt-10">
        <p className="text-black text-2xl  md:text-4xl font-bold text-center mb-4">
          FAQ's
        </p>
        {courseData.FAQ.slice(0, faqLength).map((item, index) => (
          <div
            key={index}
            className="collapse collapse-plus bg-white text-black hover:bg-blue-950 hover:text-white rounded-none"
          >
            {/* <div
            key={index}
            className="collapse collapse-plus bg-white text-black hover:bg-[#d3eaff89] rounded-none"
          > */}
            <input type="radio" name={`my-accordion-1`} />
            <div className="collapse-title text-xl md:text-2xl font-bold">
              <p>{item.question}</p>
            </div>
            <div className="collapse-content text-base md:text-xl">
              <p>{item.answer}</p>

              {
                // console.log(item.answerPoints)
                item.answerPoints?.map((item2, index2) => {
                  return <li key={index2}>{item2}</li>;
                })
              }
            </div>
          </div>
        ))}
        <div className="w-full mx-auto text-center">
        <button className="text-blue-700 mt-4"
          onClick={() => {
            courseData.FAQ.length - 1 <= faqLength
              ? setfaqLength(6)
              : setfaqLength(faqLength + 6);
          }}
        >
          {courseData.FAQ.length - 1 <= faqLength ? "See Less" : "See More"}
        </button>
        </div>
      </div>
    );
  }

  function ImageSection() {
    return (
      <div className="w-full mx-auto mb-4">
        <p className="text-center text-4xl lg:text-6xl font-bold mb-20 text-blue-950 w-full lg:w-6/12 mx-auto">
          {courseData?.title}
        </p>
        <img
          className="w-11/12 lg:w-5/12 mx-auto rounded-3xl border-4 border-black"
          src={courseData?.img}
          alt=""
        />
      </div>
    );
  }

  function ParagraphSection() {
    return (
      <div className="w-full lg:w-10/12 mx-auto mb-4 mt-14 p-4 lg:p-10 bg-white rounded-3xl">
        <p className="text-2xl lg:text-4xl font-bold text-center mb-3">
          About this course
        </p>
        <p className="text-xl lg:text-2xl font-semibold text-gray-500">
          {courseData?.paragraph}
        </p>
      </div>
    );
  }

  function RoadmapSection() {
    return (
      <div className="w-full mx-auto mb-4 my-10">
        <p className="text-2xl lg:text-4xl font-bold text-center mb-3">
          Road Map
        </p>
        <img className="w-11/12 lg:w-5/12 mx-auto" src={courseData?.roadMap} />
      </div>
    );
  }

  return (
    <div data-theme="light" className="py-24 w-full mx-auto">
      <div className="w-full lg:w-auto mx-auto">
        <ImageSection />
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <ParagraphSection />
        {courseData?.roadMap && <RoadmapSection />}
      </div>
      <div className="w-[95%] lg:w-[80%] gap-4 flex flex-wrap items-start justify-center mx-auto mt-14">
        <div className="w-full lg:w-auto">
          <CurriculumCard />
        </div>
        <div className="w-full lg:w-auto">
          <Accordian />
        </div>

        <Link to={"/contact"}>
          <p className="px-10 py-4 bg-[#062b5f] mt-14 text-white text-2xl rounded-full">
            Get in Touch!
          </p>
        </Link>
        <div className="w-full">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
