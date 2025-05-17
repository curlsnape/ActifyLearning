import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import CRMF1 from "../../assets/Features/CRMF1.png";
import MASTER from "../../assets/Features/master.png";
import ACCOUNTS from "../../assets/Features/Account.png";
import CONTACT from "../../assets/Features/Contactt.png";
import LEAD from "../../assets/Features/Lead.png";
import DEALS from "../../assets/Features/Deal.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import dashboard1 from "../../assets/Features/dashboard1.png";
import project2 from "../../assets/Features/project2.png";
import work3 from "../../assets/Features/work3.png";
import timesheret4 from "../../assets/Features/timesheret4.png";
import expense8 from "../../assets/Features/expense8.png";
import applyleave4 from "../../assets/Features/applyleave4.png";
import WFH5 from "../../assets/Features/WFH5.png";
import attende6 from "../../assets/Features/attende6.png";
import fieldvisit7 from "../../assets/Features/fieldvisit7.png";
import payroll9 from "../../assets/Features/payroll9.png";

// import ScrollAnimation from "../../components/ScrollAnimation";
gsap.registerPlugin(ScrollTrigger);

function ServiceType({ data }) {
  const [opacity, setOpacity] = useState(1);

  console.log(data);

  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const ref6 = useRef(null);

  // const inView1 = useInView(ref1, { once: false });
  // const inView2 = useInView(ref2, { once: false });
  // const inView3 = useInView(ref3, { once: false });
  // const inView4 = useInView(ref4, { once: false });
  // const inView5 = useInView(ref5, { once: false });
  // const inView6 = useInView(ref6, { once: false });

  // console.log(data)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  const contentArray = [
    {
      id: 1,
      name: "HR Portal",
      videoPath: "",
      infograph: <></>,
      features1: {
        title: "Dash Boards and Reports:",
        img: dashboard1,
        list1: [
          {
            svg: "",
            desc: "Dashboards display Pending Approvals, Scheduled Meetings for the day, team Birthdays, and Members on Leave, offering a clear overview of daily priorities and team updates.",
          },
          {
            svg: "",
            desc: "Our reports can be Exported to Excel, with Global Filters, Field Customization, and Column-wise sorting and searching for greater flexibility and ease.",
          },
        ],
      },
      features2: {
        title: "Project Management:",
        img: project2,
        list1: [
          {
            svg: "",
            desc: "Simplify the Planning, Execution, and Tracking by ensuring Tasks, Timelines, and Resources are efficiently aligned.",
          },
        ],
      },
      features3: {
        title: "Work Planners:",
        img: work3,
        list1: [
          {
            svg: "",
            desc: "Our Work Planners help employees stay organized by Streamlining Task Management and prioritization ensuring deadlines are met efficiently.",
          },
        ],
      },
      features4: {
        title: "TimeSheet:",
        img: timesheret4,
        list1: [
          {
            svg: "",
            desc: "Task statuses are Automatically recorded in the timesheet, ensuring accurate and effortless tracking of work progress and time spent.",
          },
        ],
      },
      features5: {
        title: "Leave Management:",
        img: applyleave4,
        list1: [
          {
            svg: "",
            desc: "Optimize Applying, Tracking, and Approving leaves, with checks to monitor Leave Balances and alerts for excessive leave applications.",
          },
        ],
      },
      features6: {
        title: "Work From Home:",
        img: WFH5,
        list1: [
          {
            svg: "",
            desc: "Employees who wish to work from home can Submit a request, and a record of these applications can be maintained.",
          },
        ],
      },
      features7: {
        title: "Attendance:",
        img: attende6,
        list1: [
          {
            svg: "",
            desc: "The Attendance module is integrated with Actify Attendance Application, allowing employees to easily Mark Attendance, Track Working Hours, and Manage Shifts.",
          },
          {
            svg: "",
            desc: "It automates attendance records, generates reports, and syncs with leave management to ensure accurate timekeeping and compliance with company policies.",
          },
        ],
      },
      features8: {
        title: "Attendance & Field Visit:",
        img: fieldvisit7,
        list1: [
          {
            svg: "",
            desc: "The attendance app marks attendance when Field Visits are applied through it.",
          },
        ],
      },
      features9: {
        title: "Expense Management:",
        img: expense8,
        list1: [
          {
            svg: "",
            desc: "Systemizes the process of Tracking and Approving employee expenses.",
          },
          {
            svg: "",
            desc: "Enables Efficient Submissions, Approval Workflows ensuring compliance with company policies.",
          },
          {
            svg: "",
            desc: "Our Systems ensure Detailed Reporting, Transparency and Cost Control.",
          },
        ],
      },
      features10: {
        title: "Salary and PayRoll:",
        img: payroll9,
        list1: [
          {
            svg: "",
            desc: "Streamline PayRoll Process by Automating Calculations, Generating Payslips, and ensuring timely, accurate disbursals. ",
          },
          {
            svg: "",
            desc: "It also simplifies defining Deductions and Allowances adhering to Compliances  ",
          },
        ],
      },
    },
    {
      id: 2,
      name: "CRM Portal",
      videoPath: "",
      infograph: <></>,
      features1: {
        title: "Our Dashboards provide:",
        img: CRMF1,
        list1: [
          {
            svg: "",
            desc: "A Visual summary of sales performance",
          },
          {
            svg: "",
            desc: "Tracking key metrics like contacts, Leads and Deals",
          },
          {
            svg: "",
            desc: "Notifications and Reminders that helps sales teams stay organized and focused on closing opportunities efficiently",
          },
        ],
      },
      features2: {
        title: "Masters section:",
        img: MASTER,
        list1: [
          {
            svg: "",
            desc: "The Masters section in a CRM helps define the dropdown values for various interfaces, allowing customization based on your industry needs.",
          },
          {
            svg: "",
            desc: "It ensures that fields such as contact sources, contact stage, contact status, industry types …. are tailored to your specific business processes",
          },
          {
            svg: "",
            desc: "Notifications and Reminders that helps sales teams stay organized and focused on closing opportunities efficiently",
          },
        ],
      },
      features3: {
        title: "Maintaining Accounts:",
        img: ACCOUNTS,
        list1: [
          {
            svg: "",
            desc: "Manage detailed information about the companies or organizations (clients, partners, vendors)",
          },
          {
            svg: "",
            desc: "Organize accounts by categories, regions, or other relevant factors.",
          },
        ],
      },
      features4: {
        title: "Overseeing Leads:",
        img: LEAD,
        list1: [
          {
            svg: "",
            desc: "Helps manage potential customers or prospects who have shown interest in your products or services",
          },
          {
            svg: "",
            desc: "Transform the qualified leads into deal",
          },
          {
            svg: "",
            desc: "Monitor the status and progress of each lead",
          },
        ],
      },
      features5: {
        title: "Managing Deals:",
        img: DEALS,
        list1: [
          {
            svg: "",
            desc: "Monitor the status of deals at each stage, from initial contact to closing, allowing teams to focus on moving deals forward",
          },
          {
            svg: "",
            desc: "Transform the qualified leads into deal",
          },
          {
            svg: "",
            desc: "Generate invoices",
          },
        ],
      },
      features6: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features7: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features8: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features9: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features10: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
    },
    {
      id: 3,
      name: "LMS Portal",
      videoPath: "",
      infograph: <></>,
      features1: {
        title: "Our Dashboards provide:",
        img: CRMF1,
        list1: [
          {
            svg: "",
            desc: "A Visual summary of sales performance",
          },
          {
            svg: "",
            desc: "Tracking key metrics like contacts, Leads and Deals",
          },
          {
            svg: "",
            desc: "Notifications and Reminders that helps sales teams stay organized and focused on closing opportunities efficiently",
          },
        ],
      },
      features2: {
        title: "Masters section:",
        img: MASTER,
        list1: [
          {
            svg: "",
            desc: "The Masters section in a CRM helps define the dropdown values for various interfaces, allowing customization based on your industry needs.",
          },
          {
            svg: "",
            desc: "It ensures that fields such as contact sources, contact stage, contact status, industry types …. are tailored to your specific business processes",
          },
          {
            svg: "",
            desc: "Notifications and Reminders that helps sales teams stay organized and focused on closing opportunities efficiently",
          },
        ],
      },
      features3: {
        title: "Maintaining Accounts:",
        img: ACCOUNTS,
        list1: [
          {
            svg: "",
            desc: "Manage detailed information about the companies or organizations (clients, partners, vendors)",
          },
          {
            svg: "",
            desc: "Organize accounts by categories, regions, or other relevant factors.",
          },
        ],
      },
      features4: {
        title: "Overseeing Leads:",
        img: LEAD,
        list1: [
          {
            svg: "",
            desc: "Helps manage potential customers or prospects who have shown interest in your products or services",
          },
          {
            svg: "",
            desc: "Transform the qualified leads into deal",
          },
          {
            svg: "",
            desc: "Monitor the status and progress of each lead",
          },
        ],
      },
      features5: {
        title: "Managing Deals:",
        img: DEALS,
        list1: [
          {
            svg: "",
            desc: "Monitor the status of deals at each stage, from initial contact to closing, allowing teams to focus on moving deals forward",
          },
          {
            svg: "",
            desc: "Transform the qualified leads into deal",
          },
          {
            svg: "",
            desc: "Generate invoices",
          },
        ],
      },
      features6: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features7: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features8: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features9: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
      features10: {
        title: "Maintaining Contacts:",
        img: CONTACT,
        list1: [
          {
            svg: "",
            desc: "Stores and Manages individual contact information, such as names, phone numbers, email addresses, and roles within an organization",
          },
          {
            svg: "",
            desc: "Track communication and interaction history with each contact",
          },
          {
            svg: "",
            desc: "Segment contacts based on roles, industries, or other criteria for targeted outreach",
          },
          {
            svg: "",
            desc: "Manage follow-up activities, tasks, and reminders.",
          },
        ],
      },
    },
  ];

  return (
    <div className="flex items-center justify-center font-serif">
      <div className="gallery hidden lg:flex">
      {/* Left Block */}
      <div
          className="left w-1/2 ml-auto
        "
        >
          {data?.map((item) => {
            return (
              <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto  text-6xl font-bold">
                <motion.div
                  transition={{ duration: 1 }}
                  className={`flex flex-col items-center space-y-2 `}
                >
                {
                typeof item.title === 'function' && item.title()
                }
                  <div className="w-10/12 text-2xl  font-semibold font-serif">
                    <ul className="space-y-8 text-left text-gray-500">
                      {
                        typeof item.list1 === 'function' && item.list1()
                      }
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      {/* Right Block */}
      <div className="rightblock w-1/2 h-screen flex flex-col justify-center pointer-events-none touch-none">
          <div className="relative w-[50vw] h-[50vw]  rounded-2xl">
         {
          data?.map((item) => {
            return (
              <div className="w-full h-full flex items-end justify-start bg-white photo ">
              <img
                className="h-full w-full object-contain"
                src={item?.img}
                alt="img-1"
              />
            </div>
            )
          })
         }
            
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
          <div>
          {data?.map((item) => {
            return (
              <div className="details w-full text-xl ">
                <motion.div
                  transition={{ duration: 1 }}
                  className={`flex flex-col items-center mt-20`}
                >
                {
                typeof item.title === 'function' && item.title()
                }
                  <div className="w-full text-xl lg:text-2xl  font-semibold font-serif px-5">
                    <ul className="w-full text-gray-500 h-auto">
                      {
                        <div className="w-full flex flex-col items-center">
                          <img
                        className="h-full w-full  object-contain"
                        src={item?.img}
                        alt="img-1"
                      />
                        {typeof item.list1 === 'function' && item.list1()}
                        </div>
                      }
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
          </div>
      </div>
      
    </div>
  );
}

export default ServiceType;

{
  /* bg-gradient-to-b from-white via-blue-50 to-blue-300 */
}
{
  /* <p>Dashboards:</p> */
}
<div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref1} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      <span className="text-orange-400">Dashboards </span>
      provide
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            <span className="font-sans font-bold">Reminders</span> that helps
            sales teams stay organized and focused on closing opportunities
            efficiently
          </span>
        </li>
      </ul>
    </div>
  </motion.div>
</div>;
{
  /* <p>Master Section:</p> */
}
<div className="details h-screen flex flex-col justify-start w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref2} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      <span className="text-green-600">Masters</span> section
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            The <span className="font-sans font-bold">Masters section</span> in
            a CRM helps define the dropdown values for various interfaces,
            allowing customization based on your industry needs.
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
      </ul>
    </div>
  </motion.div>
</div>;
{
  /* <p>Accounts Section:</p> */
}
<div className="details h-screen flex flex-col justify-start w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref3} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      Maintaining <span className="text-blue-700">Accounts</span>
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            Organize accounts by categories, regions, or other relevant factors.
          </span>
        </li>
      </ul>
    </div>
  </motion.div>
</div>;
{
  /* <p>Overseeing Leads Section:</p> */
}
<div className="details h-screen flex flex-col justify-start w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref4} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      Overseeing <span className="text-red-600">Leads</span>
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            <span className="font-sans font-bold">Potential Customers</span> or
            prospects who have shown interest in your products or services
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
            <span className="font-sans font-bold">Monitor</span> the status and
            progress of each lead
          </span>
        </li>
      </ul>
    </div>
  </motion.div>
</div>;
{
  /* <p>Managing Deals Section:</p> */
}
<div className="details h-screen flex flex-col justify-start w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref5} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView5 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      Managing <span className="text-yellow-600">Deals</span>
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            <span className="font-sans font-bold">moving deals forward</span>
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
      </ul>
    </div>
  </motion.div>
</div>;
{
  /* <p>Contacts Section:</p> */
}
<div className="details h-screen flex flex-col justify-start mt-[2%] w-[40vw] ml-auto text-black text-6xl font-bold">
  <motion.div
    // ref={ref6} // Attach the ref to this div to track visibility
    // style={{ opacity:opacity }}  // Apply dynamic opacity based on inView
    // initial={{ opacity: 0 }}
    // animate={inView6 ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1 }}
    className={`text-black flex flex-col items-center space-y-2 `}
  >
    <p className="text-5xl font-sans p-5 pb-12">
      Maintaining <span className="text-cyan-600">Contacts</span>
    </p>
    <div className="w-10/12 text-2xl  font-semibold font-serif">
      <ul className="space-y-8 text-left text-gray-500">
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
            contact information, such as names, phone numbers, email addresses,
            and roles within an organization
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
            Track <span className="font-sans font-bold">communication</span> and{" "}
            <span className="font-sans font-bold">interaction</span> history
            with each contact
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
            Segment contacts based on roles, industries, or other criteria for
            targeted outreach
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
      </ul>
    </div>
  </motion.div>
</div>;
