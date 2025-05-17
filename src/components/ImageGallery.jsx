import React from "react";
import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import limg from "../assets/lgallery.png";
import { Link } from "react-router-dom";

const ImageGallery = () => {

  return (
    <div className="bg-gradient-to-b from-[#FCF4FE] via-[#e1c9e9] to-white ">
      <div className="w-[100%] flex flex-col syne-font items-center justify-around lg:pt-28 pt-10 lg:pb-12 pb-4 ">
        <p className="text-center text-black lg:text-6xl md:text-4xl text-2xl resize font-bold max-w-[80%]">
          Interactive Learning Moments
        </p>
        <p
          id="learning"
          className="text-center text-gray-800 mt-4 lg:text-2xl md:text-xl text-lg lg:w-[60%]"
        >
          A glimpse into our educational events and software training
        </p>
      </div>
      <div className="w-[98%] mx-auto flex flex-row items-center justify-center gap-4">
        <div className="w-[32%] lg:gap-8 gap-4 flex flex-col items-end justify-center">
          <img src={img1} className="lg:w-[60%] w-[90%]" alt="" />
          <img src={img2} className="lg:w-[60%] w-[90%]" alt="" />
        </div>
        <div className="w-[32%] flex  items-center justify-center">
          <img src={limg} alt="" className="lg:w-[70%] w-[100%]" />
        </div>
        <div className="w-[32%] lg:gap-8 gap-4 flex flex-col items-start justify-center">
          <img src={img3} alt="" className="lg:w-[60%] w-[90%] " />
          <img src={img4} alt="" className="lg:w-[60%] w-[90%] " />
        </div>
      </div>
      <div className="w-screen flex items-center justify-center mt-6">
        <Link
          to="#"
          className=" inline-flex items-center justify-center mx-auto px-4 py-2.5 mt-4 overflow-hidden text-md text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <span className="mx-2 text-lg ">Know more</span>
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;


// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import img1 from "../assets/gallery1.png";
// import img2 from "../assets/gallery2.png";
// import img3 from "../assets/gallery3.png";
// import img4 from "../assets/gallery4.png";
// import limg from "../assets/lgallery.png"; // Add more images as needed

// const images = [img1, img2, img3, img4, limg];

// const ImageGallery = () => {
//   const imgRefs = useRef([]);
//   const currentIndex = useRef(0);

//   useEffect(() => {
//     const changeImage = () => {
//       gsap.to(imgRefs.current[currentIndex.current], {
//         opacity: 0,
//         duration: 1,
//       });

//       currentIndex.current = (currentIndex.current + 1) % images.length;

//       gsap.to(imgRefs.current[currentIndex.current], {
//         opacity: 1,
//         duration: 1,
//       });
//     };

//     const interval = setInterval(changeImage, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-[#FCF4FE] to-[#e1c9e9]">
//       <div className="w-[100%] flex flex-col syne-font items-center justify-around lg:pt-28 pt-10 lg:pb-14 pb-8 ">
//         <p className="text-center text-black lg:text-6xl md:text-4xl text-2xl resize font-bold max-w-[80%]">
//           Interactive Learning Moments
//         </p>
//         <p id="learning" className="text-center mt-10 lg:text-2xl md:text-xl text-lg lg:w-[60%]">
//           A glimpse into our educational events and software training
//         </p>
//       </div>
//       <div className="w-[98%] mx-auto flex flex-row items-center justify-center gap-4 relative">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             ref={(el) => (imgRefs.current[index] = el)}
//             src={img}
//             alt=""
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === 0 ? "opacity-1" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
