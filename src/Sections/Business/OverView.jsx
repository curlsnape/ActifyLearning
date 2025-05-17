import React, { useRef } from "react";

import empdata from "../../assets/empdata.png";
import pm from "../../assets/project-management.png";
import hiring from "../../assets/hiring.png";
import timesheet from "../../assets/timesheet.png";
import wfh from "../../assets/wfh.png";
import expense from "../../assets/expenseManagement.png";
import leave from "../../assets/leave.png";
import payroll from "../../assets/payroll.png";
import { motion, useInView } from "framer-motion";


const OverView = () => {
  const ref = useRef();
  const InView = useInView(ref, { once: false });

  return (
    <>
    
    <div className="w-full flex items-center justify-center max-md:hidden ">
      <div className="w-full min-h-max h-screen flex items-center justify-center ">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col gap-14">
            {/* Employee Database */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: -20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row gap-10 items-center justify-end "
            >
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Employee Database
                </p>
                <p>
                  Create, View and Maintain <br /> Employee records
                </p>
              </span>
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={empdata}
                  alt="Employee Database"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Project Management */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: -20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row gap-10 items-center justify-end mr-20"
            >
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Project Management
                </p>
                <p>
                  Define Project Parameters <br /> Oversee its progress
                </p>
              </span>
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={pm}
                  alt="Project Management"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Leave Management */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: -20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row gap-10 items-center justify-end mr-20"
            >
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Leave Management
                </p>
                <p>
                  Create a Roster of holidays <br /> and Oversee leave requests
                </p>
              </span>
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={leave}
                  alt="Leave Management"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Expense Management */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: -20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row gap-10 items-center justify-end "
            >
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Expense Management
                </p>
                <p>
                  Control, Track and Optimize <br /> Expenses incurred
                </p>
              </span>
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={expense}
                  alt="Expense Management"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="h-96 flex items-center justify-center w-96 rounded-full border-4 border-blue-900 ">
            <div className="flex flex-col items-center justify-center w-[90%] h-[90%] rounded-full border-8 border-red-600">
              <big className="font-syne text-6xl font-bold">HR</big>
              <p ref={ref} className="font-sans text-3xl font-semibold">
                Portal
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-14">
            {/* Talent Acquisition */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: 20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row -ml-16 gap-10"
            >
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={hiring}
                  alt="Talent Acquisition"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Talent Acquisition
                </p>
                <p>
                  Sourcing Talent for <br />
                  Organizational Success
                </p>
              </span>
            </motion.div>

            {/* Payroll */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: 20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row ml-20 gap-10"
            >
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={payroll}
                  alt="Payroll"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Payroll
                </p>
                <p>
                  Outlines the Components <br /> Associated with Employee <br />
                  Compensation
                </p>
              </span>
            </motion.div>

            {/* Time Sheets */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: 20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row  ml-20 gap-10 "
            >
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={timesheet}
                  alt="Time Sheets"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Time Sheets
                </p>
                <p>
                  Oversee Employee Man-Hours <br /> and Tasks Completed
                </p>
              </span>
            </motion.div>

            {/* Work From Home */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: 20 }}
              animate={
                InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}
              }
              transition={{ duration: 1 }}
              className="flex flex-row gap-10"
            >
              <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
                <img
                  src={wfh}
                  alt="Work From Home"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex flex-col items-start justify-center">
                <p className="text-xl text-blue-900 font-semibold font-sans">
                  Work From Home
                </p>
                <p>
                  Handle Remote Work Requests <br /> and Approvals Efficiently
                </p>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
      <HRInfoMobile />
      </>
  );
};

export default OverView;


const HRInfoMobile = () => {
  const ref = useRef();
  const InView = useInView(ref, { once: false });
  return (
    <div className="w-screen h-fit lg:hidden overflow-hidden items-center justify-center ">
    <div className="w-full  flex items-center justify-center ">
      <div className="flex flex-col items-start justify-start md:gap-4 gap-14 max-md:pt-8">
      <div className="flex flex-col items-start order-2 justify-start gap-14">
          {/* Employee Database */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10 items-center justify-end"
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
              <img
                src={empdata}
                alt="Employee Database"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Employee Database
              </p>
              <p>
                Create, View and Maintain <br /> Employee records
              </p>
            </span>
          </motion.div>

          {/* Project Management */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10 "
            >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={pm}
                alt="Project Management"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Project Management
              </p>
              <p>
                Define Project Parameters <br /> Oversee its progress
              </p>
            </span>
         
          </motion.div>

          {/* Leave Management */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10 items-center justify-end"
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={leave}
                alt="Leave Management"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Leave Management
              </p>
              <p>
                Create a Roster of holidays <br /> and Oversee leave requests
              </p>
            </span>
          </motion.div>

          {/* Expense Management */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10 items-center justify-end "
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={expense}
                alt="Expense Management"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Expense Management
              </p>
              <p>
                Control, Track and Optimize <br /> Expenses incurred
              </p>
            </span>
          </motion.div>
        </div>

        <div className="h-64 flex items-center justify-center w-64 mx-auto rounded-full border-4 border-blue-900 ">
          <div className="flex flex-col items-center justify-center w-[90%] h-[90%] rounded-full border-8 border-red-600">
            <big className="font-syne text-6xl font-bold">HR</big>
            <p ref={ref} className="font-sans text-3xl font-semibold">
              Portal
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start order-2 justify-start gap-14">
          
        {/* Talent Acquisition */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10 items-center justify-end "
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={hiring}
                alt="Talent Acquisition"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Talent Acquisition
              </p>
              <p>
                Sourcing Talent for <br />
                Organizational Success
              </p>
            </span>
          </motion.div>

          {/* Payroll */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row  gap-10"
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={payroll}
                alt="Payroll"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Payroll
              </p>
              <p>
                Outlines the Components <br /> Associated with Employee <br />
                Compensation
              </p>
            </span>
          </motion.div>

          {/* Time Sheets */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row  gap-10 "
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={timesheet}
                alt="Time Sheets"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Time Sheets
              </p>
              <p>
                Oversee Employee Man-Hours <br /> and Tasks Completed
              </p>
            </span>
          </motion.div>

          {/* Work From Home */}
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={
               { opacity: 1, translateY: 0, translateX: 0 } 
            }
            transition={{ duration: 1 }}
            className="flex flex-row gap-10"
          >
            <div className="md:w-24 md:h-24 w-16 h-16 md:p-5 p-3 flex items-center justify-center bg-blue-800 rounded-full">
            <img
                src={wfh}
                alt="Work From Home"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex flex-col items-start justify-center">
              <p className="text-xl text-blue-900 font-semibold font-sans">
                Work From Home
              </p>
              <p>
                Handle Remote Work Requests <br /> and Approvals Efficiently
              </p>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  )
}

// import React from "react";

// import empdata from "../../assets/empdata.png";
// import pm from "../../assets/project-management.png";
// import hiring from "../../assets/hiring.png";
// import timesheet from "../../assets/timesheet.png";
// import wfh from "../../assets/wfh.png";
// import expense from "../../assets/expenseManagement.png";
// import leave from "../../assets/leave.png";
// import payroll from "../../assets/payroll.png";

// const OverView = () => {
//   return (
//     //     <div className="w-[90%] mx-auto flex items-center justify-center flex-col p-4">
//     //     <p className="py-8 sm:text-4xl text-2xl font-semibold text-center">
//     //       Over view of the software
//     //     </p>
//     //     <div className="w-full flex flex-col lg:flex-row sm:p-4 items-center justify-center">
//     //       <img
//     //         src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/itsm-intro.sm.jpg"
//     //         className="sm:w-[40%]"
//     //         alt=""
//     //       />
//     //       <div className="sm:p-5 flex items-center justify-center flex-col">
//     //         <p className="text-xl sm:text-3xl text-center font-semibold py-8 text-black">
//     //           Streamlined Human Resource Management
//     //         </p>
//     //         <p className="md:text-center text-left sm:text-xl sm:w-[90%] text-gray-800">
//     //           Our HR Portal is designed to simplify and automate your HR
//     //           processes, making it easier for your team to manage employee
//     //           records, payroll, performance evaluations, and more. With an
//     //           intuitive user interface and comprehensive features, the portal
//     //           serves as a central hub for all HR-related activities.
//     //         </p>
//     //       </div>
//     //     </div>
//     //     <div className="w-full flex flex-col lg:flex-row-reverse sm:p-4 items-center justify-center mt-16">
//     //       <img
//     //         src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-screenshots/itsm-benefit-3.sm.jpg"
//     //         className="sm:w-[40%]"
//     //         alt=""
//     //       />
//     //       <div className="sm:p-5 flex items-center justify-center flex-col">
//     //         <p className="text-xl sm:text-3xl text-center font-semibold py-8 text-black">
//     //           Task and Workflow Automation
//     //         </p>
//     //         <p className="md:text-center text-left sm:text-xl sm:w-[90%] text-gray-800">
//     //           Actify CRM automates repetitive tasks, allowing your team to
//     //           focus on what matters most—building relationships and closing
//     //           deals. With automated workflows, you can create triggers for
//     //           task assignments, reminders for follow-ups, and even automatic
//     //           escalation for unresolved issues.
//     //         </p>
//     //       </div>
//     //     </div>
//     //     {/* <Infographics/> */}
//     //   </div>
//     <div className="w-full">
//       <div className="w-full min-h-max h-screen flex items-center justify-center">
//         <div className="flex gap-8 ">
//           <div className="flex flex-col gap-10">
//             <div className="flex flex-row">
//               <span className="flex flex-col items-start justify-center">
//                 <p className="text-xl text-blue-900 font-semibold font-sans">
//                   Employee Database
//                 </p>
//                 <p>
//                   Create, View and Maintain <br /> Employee records
//                 </p>
//               </span>
//               <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//                 <img
//                   src={empdata}
//                   alt=""
//                   className="w-full h-full object-contain "
//                 />
//               </div>
//             </div>
//             <div className="flex flex-row">
//               <span className="flex flex-col items-start justify-center">
//                 <p className="text-xl text-blue-900 font-semibold font-sans">
//                   Project Management
//                 </p>
//                 <p>
//                   Define Project Paramaters <br /> Oversee its progress
//                 </p>
//               </span>
//               <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//                 <img
//                   src={pm}
//                   alt=""
//                   className="w-full h-full object-contain "
//                 />
//               </div>
//             </div>
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl text-blue-900 font-semibold font-sans">
//                 Leave Management
//               </p>
//               <p>
//                 Create a Roster of holidays <br /> and Oversee leave requests
//               </p>
//             </span>
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl text-blue-900 font-semibold font-sans">
//                 Expense Management
//               </p>
//               <p>
//                 Control, Track and Optimize <br /> Expenses incurred
//               </p>
//             </span>
//           </div>
//           <div className="flex flex-col gap-5">
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img
//                 src={leave}
//                 alt=""
//                 className="w-full h-full object-contain "
//               />
//             </div>
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img
//                 src={expense}
//                 alt=""
//                 className="w-full h-full object-contain "
//               />
//             </div>
//           </div>
//         </div>
//         <div className="h-96 flex items-center justify-center w-96 rounded-full border-4 border-blue-900">
//           <div className="flex flex-col items-center justify-center w-[90%] h-[90%] rounded-full border-8 border-red-600">
//             <big className="font-syne text-6xl font-bold"> HR</big>
//             <p className="font-sans text-3xl font-semibold"> Portal</p>
//           </div>
//         </div>
//         <div className="flex flex-row-reverse gap-8">
//           <div className="flex flex-col gap-10">
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl  text-blue-900 font-semibold font-sans">
//                 Talent Acquisition
//               </p>
//               <p>
//                 Sourcing Talent for <br />
//                 Organizational Success
//               </p>
//             </span>
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl text-blue-900 font-semibold font-sans">
//                 Payroll
//               </p>
//               <p>
//                 Outlines the Components <br /> Associated with Employee <br />{" "}
//                 Compensation{" "}
//               </p>
//             </span>
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl text-blue-900 font-semibold font-sans">
//                 Time Sheets
//               </p>
//               <p>
//                 Oversee Employee Man-Hours <br /> and Tasks Completed
//               </p>
//             </span>
//             <span className="flex flex-col items-start justify-center">
//               <p className="text-xl text-blue-900 font-semibold font-sans">
//                 Work From Home
//               </p>
//               <p>
//                 Handle Remote Work Requests <br /> and Approvals Efficiently
//               </p>
//             </span>
//           </div>
//           <div className="flex flex-col gap-5">
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img
//                 src={hiring}
//                 alt=""
//                 className="w-full h-full object-contain "
//               />
//             </div>
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img
//                 src={payroll}
//                 alt=""
//                 className="w-full h-full object-contain "
//               />
//             </div>
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img
//                 src={timesheet}
//                 alt=""
//                 className="w-full h-full object-contain "
//               />
//             </div>
//             <div className="w-24 h-24 p-5 flex items-center justify-center bg-blue-800 rounded-full">
//               <img src={wfh} alt="" className="w-full h-full object-contain " />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverView;
