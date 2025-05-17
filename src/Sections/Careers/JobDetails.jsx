// import React, { useEffect, useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
// import { useLocation } from 'react-router-dom';

// const JobDetails = () => {

//     const location = useLocation();
//     const previousData = location.state;

//     // const [dataReceived, setDataReceived] = useState({})

//     // useEffect(() => {
//     //     setDataReceived(previousData);
//     // }, [previousData])

//     const [dataReceived, setDataReceived] = useState(() => {
//       const newDataReceived = localStorage.getItem('dataReceived');
//       return newDataReceived ? JSON.parse(newDataReceived) : previousData || {}
//     })

//     useEffect(() => {
//       if (previousData && typeof previousData === 'object') {
//       localStorage.setItem('dataReceived', JSON.stringify(dataReceived))
//         setDataReceived(previousData);
//       }
//     }, [previousData])

//   return (
//     <div className='bg-[#f8f8f8] '>
//       <div className='bg-[#f6f9fe] pt-20 sm:pt-24 w-[100vw] pb-5 flex flex-col items-center border-b-2'>
//          <div className='text-black text-center'>
//             <p className='text-2xl mb-2'>Actify | {dataReceived?.type}</p>
//             <p className='text-5xl'>{dataReceived?.title}</p>
//             <div>
//                 <button className='bg-[#0f2373] text-[#fff] text-[16px] w-52 py-3 flex justify-center items-center mt-6 mx-auto gap-3'>I am Interested <IoIosArrowForward className='text-xl' /></button>
//             </div>
//          </div>
//       </div>
//       <div className='flex flex-col items-center sm:items-start w-full sm:w-8/12 mx-auto'>
//         <p className='text-5xl text-black pt-10 mb-4'>Job Description</p>
//         <ul className='w-8/12'>
//         {
//           dataReceived?.long_description && dataReceived?.long_description.map((val, id) => {
//             return (
//               <li className='text-black text-xl my-4' type="disc" key={id}>{val}</li>
//             )
//           })
//         }
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default JobDetails

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const previousData = location.state;

  const [dataReceived, setDataReceived] = useState(() => {
    const savedData = localStorage.getItem("dataReceived");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    if (previousData && typeof previousData === "object") {
      localStorage.setItem("dataReceived", JSON.stringify(dataReceived));
      setDataReceived(previousData);
    }
  }, [dataReceived]);

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [location]);

  return (
    <div className="bg-[#f8f8f8] pb-10">
      <div className="bg-[#f6f9fe] pt-20 sm:pt-24 w-[100vw] pb-5 flex flex-col items-center border-b-2">
        <div className="text-black text-center">
          <p className="text-2xl mb-2">
            Actify | {dataReceived?.type || "N/A"}
          </p>
          <p className="text-5xl">{dataReceived?.title || "Job Title"}</p>
          <div>
            <button className="bg-[#0f2373] text-[#fff] text-[16px] w-52 py-3 flex justify-center items-center mt-6 mx-auto gap-3">
              I'm Interested <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full sm:w-8/12 mx-auto">
        <p className="text-5xl text-black pt-10 mb-4">Job Description</p>
        <ul className="w-8/12">
          {dataReceived?.long_description ? (
            dataReceived?.long_description.map((val, id) => (
              <li className="text-black text-xl my-4" type="disc" key={id}>
                {val}
              </li>
            ))
          ) : (
            <p className="text-black text-xl">No description available.</p>
          )}
        </ul>
      </div>
      <div className="mx-auto">
        <button className="bg-[#0f2373] text-[#fff] text-[16px] w-52 py-3 flex justify-center items-center mt-6 mx-auto gap-3">
          I'm Interested <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
