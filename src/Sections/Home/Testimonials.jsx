import React, { useEffect, useRef, useState } from "react";
import swapImg from "../../assets/swap_img.gif";
import { useInView, motion } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   if (currentIndex == 0) {
  //     return;
  //   } else {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
  //     );
  //   }
  // };

  // const handleNextClick = () => {
  //   if (currentIndex == reviews.length - 1) {
  //     return;
  //   } else {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }
  // };
  const instructionsRef = useRef(null);

  const inView = useInView(instructionsRef, { once: false });

  const constraintRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        instructionsRef.current.style.opacity = 0;
      }, 3000);
    }
    if (!inView) {
      setTimeout(() => {
        instructionsRef.current.style.opacity = 1;
      }, 3000);
    }
    // console.log(inView);
  }, [inView]);

  const reviews = [
    // Software Products Reviews
    {
      product: "CRM Portal",
      review:
        "The CRM portal from Actify has completely transformed the way we manage our customer relationships. The interface is intuitive, and the automation features have saved us countless hours. Now, our sales team can focus more on closing deals than on administrative tasks.",
      name: "Priya Sharma",
      imgSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80",
      profession: "Sales Manager at Tech Innovators Pvt. Ltd.",
    },

    // Courses Reviews
    {
      course: "Fullstack Development",
      review:
        "Enrolling in the Fullstack Development course at Actify was one of the best decisions I’ve made. The curriculum is comprehensive, and the hands-on projects prepared me well for real-world scenarios. I landed a job as a developer within a month of completing the course.",
      name: "Rohan Mehta",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80",
      profession: "Junior Developer at Infosys",
    },
    {
      product: "LMS Portal",
      review:
        "As an educational institution, we needed a robust and reliable LMS, and Actify’s solution has exceeded our expectations. The portal is easy to navigate for both students and teachers, and the analytics tools provide valuable insights into student performance.",
      name: "Meera Reddy",
      imgSrc:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80",
      profession: "Principal at Future Leaders Academy",
    },
    {
      course: "Data Science",
      review:
        "The Data Science course offered by Actify is top-notch. The instructors are industry experts, and the course material is up-to-date with the latest trends and technologies. I particularly enjoyed the project work, which helped me gain practical experience.",
      name: "Sunita Verma",
      imgSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      profession: "Data Scientist at Wipro",
    },
    {
      product: "HR Portal",
      review:
        "We implemented the HR portal across our company, and the results have been amazing. Employee management, payroll, and leave tracking have become seamless. The portal is user-friendly and has drastically reduced our HR workload.",
      name: "Ankit Patel",
      profession: "HR Head at NexGen Solutions",
    },
    {
      course: "RPA Developer",
      review:
        "The RPA Developer course provided by Actify is excellent for anyone looking to enter the field of automation. The course was thorough and covered everything from basics to advanced topics. The support from the mentors was also fantastic.",
      imgSrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100",
      name: "Rahul Kumar",
      profession: "Automation Engineer at TCS",
    },
  ];

  const ReviewCard = ({ item }) => {
    return (
      <article className="group  rounded-md flex min-w-md max-sm:w-[19rem] min-h-[100%] max-w-md flex-col border border-neutral-300 bg-neutral-50 p-4 text-neutral-600 dark:border-neutral-700 dark:bg-[#0B4084] dark:text-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-12 text-neutral-900 dark:text-white group-hover:scale-105 transition duration-500 ease-out"
          aria-hidden="true"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
        <p className="mt-2 text-pretty text-md">{item.review.length > 100 ? item.review.substring(0,500)+"...":item.review}</p>
        {/* avatar & rating */}
        <div className="flex flex-col-reverse md:flex-row md:items-center mt-8 justify-between gap-6">
          {/* avatar & title */}
          <div className="flex items-center gap-2">
            <img
              src={`${
                item.imgSrc
                  ? item.imgSrc
                  : "https://penguinui.s3.amazonaws.com/component-assets/avatar-1.webp"
              }`}
              className="size-10 rounded-full object-cover"
              alt="avatar"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold leading-4 text-neutral-900 dark:text-white">
                {item.name}
              </h3>
              <span className="text-xs lg:hidden">{item.profession.length > 30 ? item.profession.substring(0,30)+"...":item.profession}</span>
              <span className="text-xs hidden lg:block ">{item.profession}</span>
            </div>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="sr-only">Rated 4 stars</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-amber-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-amber-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-amber-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-amber-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-neutral-600/50 dark:text-neutral-300/50"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="py-20 pb-40 ">
      <div className="w-[100%] flex flex-col syne-font items-center justify-around py-16 ">
        <p className="text-center text-black lg:text-6xl md:text-4xl text-2xl resize font-bold max-w-[80%]">
          Hear From Our Clients
        </p>
        <p
          id="learning"
          className="text-center mt-4 lg:text-2xl md:text-xl text-gray-700 text-lg lg:w-[60%]"
        >
          Learn how our products and courses have made a difference
        </p>
      </div>
      <div className=" flex gap-20 w-[80%] mx-auto">
        <div
          title="Double click and drag gently!"
          id="motionDivCarousel"
          ref={constraintRef}
          className="overflow-x-hidden relative w-full h-full"
        >
          <motion.div
            id="card"
            drag="x"
            transition={{ stiffness: 30 }}
            dragElastic={1}
            dragMomentum={true}
            dragConstraints={constraintRef}
            // { right: 600, left: 0, right: -1 }
            className="w-max h-full flex justify-center items-center gap-10 cursor-grab"
          >
            {reviews.map((item, index) => {
              return <ReviewCard item={item} key={index} />;
            })}
          </motion.div>
          <div className="mt-4 w-full flex items-center justify-center ">
            <img
              ref={instructionsRef}
              src={swapImg}
              className=" w-28 opacity-60 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// {/* <div className="relative flex items-center justify-center w-full dark:text-gray-900">
// {/* <button
//   onClick={handlePrevClick}
//   aria-label="Slide back"
//   type="button"
//   className="absolute -left-14 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// >
//   <svg
//     width="8"
//     height="14"
//     fill="none"
//     viewBox="0 0 8 14"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-4 h-4"
//   >
//     <path
//       d="M7 1L1 7L7 13"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     ></path>
//   </svg>
// </button> */}
// <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 cursor-grabbing scroll-smooth">
//   {reviews.map((item,index) => {
//     return (
//       <div
//       key={index}
//         className="relative flex flex-shrink-0 w-full h-full sm:w-auto cards-wrapper"
//         style={{
//           transform: `translateX(-${currentIndex * 55}%)`,
//           // width: `${reviews.length * 100}%`,
//         }}
//       >
//         <ReviewCard  item={item} />
//       </div>
//     );
//   })}
//   {
//     <div className="absolute -bottom-12 w-full flex items-center justify-center ">

//     <img
//       ref={instructionsRef}
//       src={swapImg}
//       className=" w-28 opacity-60 "
//       alt=""
//       />
//       </div>
//   }
// </div>
// {/* <button
//   onClick={handleNextClick}
//   aria-label="Slide forward"
//   id="next"
//   className="absolute -right-14 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// >
//   <svg
//     width="8"
//     height="14"
//     viewBox="0 0 8 14"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-4 h-4"
//   >
//     <path
//       d="M1 1L7 7L1 13"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     ></path>
//   </svg>
// </button> */}
// </div> */}
