import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const JobCards = ({val}) => {
  return (
    <NavLink to={'/careersDetails'} state={{designation: val.designation, title:val.title, description:val.description, location:val.location, type: val.type, long_description: val.long_description}}>
    <div className="shadow-md rounded-3xl overflow-hidden w-full">
      <button className="bg-black text-white px-3 py-2 rounded-full font-medium text-sm mt-8 ml-4 md:ml-8">
            {val.designation}
      </button>
      <div className="p-5 sm:p-9 space-y-5">
        <div className="space-y-4">
          <h1 className="text-3xl text-black font-bold">{val.title}</h1>
          <p className="text-lg font-medium">{val.description}</p>
        </div>
        <div className="w-full space-y-3 sm:space-y-0 lg:flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="font-semibold text-base whitespace-nowrap">{val.location}</div>
            <div className="font-semibold text-base whitespace-nowrap">-</div>
            <div className="font-semibold text-base whitespace-nowrap">{val.type}</div>
          </div>
          
          {/* <div>
            {" "}
            <NavLink className="text-lg w-full font-bold text-blue-800 flex items-center whitespace-nowrap">
              <span className="text-center pl-0 sm:pl-4">Read More</span>
              <span className="ml-1">
                <FaArrowRight />
              </span>{" "}
            </NavLink>
          </div> */}
        </div>
      </div>
    </div>
    </NavLink>
  )
}

export default JobCards
