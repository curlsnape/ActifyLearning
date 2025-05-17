import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = ({ title, img, id }) => {
  return (
    <NavLink to={"/courseDetails/" + id}>
      <div className="bg-gray-200 rounded-3xl text-black shadow-xl">
        <div>
          <img
            className="rounded-t-3xl h-56 w-full object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="space-y-4 pb-4 mt-4">
          <p className="text-[18px] font-bold text-center">{title}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default CourseCard;
