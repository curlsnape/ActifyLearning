import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import rpaGif from "../../assets/RPA.gif";
import customizationGif from "../../assets/customization.gif";
import scalabilityGif from "../../assets/scalable.gif";
import securityGif from "../../assets/security.gif";
import collaborationGif from "../../assets/collab.gif";
import governanceGif from "../../assets/govern.gif";

const nodeItemDetails = [
  {
    id: 1,
    title: "Automation",
    info: "Automate repetitive tasks and processes, allowing your team to focus on innovation and strategic growth.",
    icon: (
      <svg viewBox="0 0 640 512" fill="white" height="2em" width="2em">
        <path d="M320 0c17.7 0 32 14.3 32 32v64h128c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h128V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zM264 256c0-22.1-17.9-40-40-40s-40 17.9-40 40 17.9 40 40 40 40-17.9 40-40zm152 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zM48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224h16z" />
      </svg>
    ),
    gif: rpaGif,
  },
  {
    id: 2,
    title: "Customization",
    info: "Adapt our softwares to your unique requirements, providing tailored solutions that align with your business goals",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    gif: customizationGif,
  },
  {
    id: 3,
    title: "Scalability",
    info: "Scale your business effortlessly with flexible solutions that grow with your needs, ensuring long-term success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
    gif: scalabilityGif,
  },
  {
    id: 4,
    title: "Security",
    info: "Ensure data integrity and protection with advanced security protocols designed to safeguard your business operations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    gif: securityGif,
  },
  {
    id: 5,
    title: "Collaboration",
    info: "Empower teams to work together with cutting-edge software solutions tailored for seamless collaboration and communication.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    gif: collaborationGif,
  },
  {
    id: 6,
    title: "Governance",
    info: "Implement robust governance frameworks, using real-time insights and analytics to optimize performance and compliance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    gif: governanceGif,
  },
];

const InfoTree = () => {
  const InfoNode = ({ item, index }) => (
    <li key={item.id}>
      {index !== 0 && <hr />}

      <div className="timeline-middle">
        <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      <div
        className={` ${
          index % 2 == 0 ? "timeline-start md:text-end" : "timeline-end"
        } mb-10 px-4`}
      >
        <div className=" font-black mt-4">
          <p className="text-xl font-mono">

          {item.title}
          </p>
        </div>
        <p className="font-sans sm:mb-8 py-3 sm:text-lg">{item.info}</p>
      </div>
      {item.gif && (
        <div
          className={` ${
            index % 2 !== 0 ? "timeline-start md:text-end" : "timeline-end md:text-start"
          } mb-10 px-4 flex-col-reverse`}
        >
          <img loading="lazy" src={item.gif} className="sm:w-80 sm:h-w-80 w-48 object-contain" />
        </div>
      )}
      {index !== nodeItemDetails.length - 1 && <hr />}
    </li>
  );

  return (
    <div className="flex items-center justify-center w-full flex-col text-black py-8 pt-16">
      <p className="text-center sm:font-bold font-semibold sm:text-3xl text-2xl ">
        How Actify Business Softwares Empowers Your Organization?
      </p>
      <div className="md:w-1/2 mx-auto mt-6 max-sm:pl-1">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {nodeItemDetails.map((item, index) => (
            <InfoNode key={index} item={item} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoTree;
