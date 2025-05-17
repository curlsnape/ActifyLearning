import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section>
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl font-semibold tracking-tight xl:text-3xl text-gray-950 w-8/12 ">
          Access our innovative software solutions and training programs designed to propel you forward
        </h2>

        <div className="mt-6">
          <Link
            to="/business"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-md text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
          >
            <span className="mx-2">View Software Solutions</span>
          </Link>

          <Link
            to="learning"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mx-2">Explore Training Programs</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mx-2">Explore Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
