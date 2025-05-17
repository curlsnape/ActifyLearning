import { useRef } from "react";
import payroll from "../../assets/payroll.png";
import { inView, motion, useInView } from "framer-motion";

const CRMInfoGraphics = () => {
  const ref = useRef();
  const ref1 = useRef();
  const InView = useInView(ref, { once: false });
  const InView2 = useInView(ref1, { once: false });

  return (
    <div className="bg-white overflow-hidden pb-10">
      <div  ref={ref} className="bg-white pt-24 w-full  flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="order-2 lg:order-none">
          <motion.div
           
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={InView?{ opacity: 1, translateY: 0, translateX: 0 }:{}}
            transition={{ duration: 1 }}
            className="w-11/12 md:w-full lg:w-80 mx-auto"
          >
            <p className="text-xl lg:text-4xl text-red-600">01</p>
            <p className="text-xl text-blue-900 font-bold">
              Manage Customer Accounts
            </p>
            <p className="text-xl text-blue-900">
              Handle client Accounts efficiently
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: -20 }}
            animate={InView?{ opacity: 1, translateY: 0, translateX: 0 }:{}}
            transition={{ duration: 1 }}
            className="w-11/12  md:w-full lg:w-80 mx-auto"
          >
            <p className="text-xl lg:text-4xl text-red-600">02</p>
            <p className="text-xl text-blue-900 font-bold">
              Contact Management
            </p>
            <p className="text-xl text-blue-900">
              Consolidate and Maintain Customer Contacts
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-none m w-[300px] h-[300px] grid grid-cols-2 rounded-full overflow-hidden"
        >
          <div className=" w-[100%] h-[100%] flex justify-center items-center bg-blue-900">
            <img
              src={payroll}
              alt="Employee Database"
              className="w-[30%] h-[30%] object-contain"
            />
          </div>
          <div className=" w-[100%] h-[100%] flex justify-center items-center bg-red-800">
            <img
              src={payroll}
              alt="Employee Database"
              className="w-[30%] h-[30%] object-contain "
            />
          </div>
          <div className=" w-[100%] h-[100%] flex justify-center items-center bg-purple-800">
            <img
              src={payroll}
              alt="Employee Database"
              className="w-[30%] h-[30%] object-contain "
            />
          </div>
          <div  className=" w-[100%] h-[100%] flex justify-center items-center bg-green-800">
            <img
              src={payroll}
              alt="Employee Database"
              className="w-[30%] h-[30%] object-contain "
            />
          </div>
          <div className="absolute top-[25%] left-[25%] border bg-white z-10 w-[50%] h-[50%] rounded-full "></div>
        </motion.div>
        <div className="order-3 lg:order-none">
          <motion.div
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="w-11/12 md:w-9/12 lg:w-80 mx-auto"
          >
            <p className="text-xl lg:text-4xl text-red-600">03</p>
            <p className="text-xl text-blue-900 font-bold">Lead Management</p>
            <p className="text-xl text-blue-900 ">
              Capture, Monitor and Nurture  leads  across the sales pipeline
            </p>
          </motion.div>
          <motion.div
          
            initial={{ opacity: 0, translateY: 50, translateX: 20 }}
            animate={InView ? { opacity: 1, translateY: 0, translateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="w-11/12 md:w-9/12 lg:w-80 mx-auto"
          >
            <p className="text-xl lg:text-4xl text-red-600">04</p>
            <p className="text-xl text-blue-900 font-bold">Deal Management</p>
            <p className="text-xl text-blue-900 text-wrap w-8/12">
              Oversee and Finalize Business deals
            </p>
          </motion.div>
        </div>
      </div>
      <div ref={ref1} className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-black w-11/12 lg:w-8/12 mx-auto mt-10 justify-center">
        <motion.div
        
          initial={{ opacity: 0, translateX: -50 }}
          animate={InView2 ? { opacity: 1, translateX: 0 }: {}}
          transition={{ duration: 1 }}
          className="border-2 border-black border-l-8 border-l-red-600 px-2"
        >
          <ul className="pl-3 font-semibold">
            <li type="disc">
              Maintain <span className="text-blue-900">Contact Age</span> for
              Timely, Efficient customer interactions
            </li>
            <li type="disc">
              Continuous{" "}
              <span className="text-blue-900">Client Monitoring</span> and{" "}
              <span className="text-blue-900">Tracking</span>
            </li>
          </ul>
        </motion.div>
        <motion.div  initial={{opacity:0, translateX: 50}} animate={InView2 ? {opacity:1, translateX:0} : {}} transition={{duration:1}} className="border-2 border-black border-l-8 border-l-green-600 px-2">
          <ul className="pl-3 font-semibold">
            <li type="disc">
              Create <span className="text-blue-900">Payment Plans</span> and
              Automate <span className="text-blue-900">Payment Reminders</span>
            </li>
            <li type="disc">
              {" "}
              Finalize the deals, associate them with the{" "}
              <span className="text-blue-900">Products</span> purchased, and{" "}
              <span className="text-blue-900">Issue Invoices</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
        
          initial={{ opacity: 0, translateX: -50 }}
          animate={InView2 ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 1 }}
          className="border-2 border-black border-l-8 border-l-cyan-600 px-2"
        >
          <ul className="pl-3 font-semibold">
            <li type="disc">
              Generate{" "}
              <span className="text-blue-900">Customizable Reports</span> and{" "}
              <span className="text-blue-900">Dashboards</span>
            </li>
            <li type="disc">
              Enhance <span className="text-blue-900">Decisions</span> using{" "}
              <span className="text-blue-900">Power BI</span> Dashboards with
              Insights
            </li>
          </ul>
        </motion.div>
        <motion.div  initial={{opacity:0, translateX: 50}} animate={InView2 ? {
        opacity: 1,                 // Animate opacity to 1 when in view
        translateX: 0,             // Animate translateX to 0 when in view
      } : {}} transition={{duration:1}} className="flex flex-col gap-5">
          <div className="border-2 row-span- border-black border-l-8 border-l-purple-600 px-2">
            <ul className="pl-3 font-semibold">
              <li type="disc">
                Define <span className="text-blue-900">Target Budgets</span>
              </li>
            </ul>
          </div>
          <div className="border-2 row-span-1 border-black border-l-8 border-l-blue-900 px-2">
            <ul className="pl-3 font-semibold">
              <li type="disc">
                {" "}
                Monitor{" "}
                <span className="text-blue-900">
                  Customer Interactions
                </span> on <span className="text-blue-900">Social Media</span>{" "}
                channels
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CRMInfoGraphics;
