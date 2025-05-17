import ScrollCarousel from "scroll-carousel-react";
import KwikFin from "../assets/fin.png";
import Ace from "../assets/Ace.png";
import Aria from "../assets/Aria.png";
import Covac from "../assets/cv.png";
import Dextero from "../assets/dextero.png";
import Edureka from "../assets/edureka.png";
// import MoneyFarmz from "../assets/MoneyFarmz.jpg"
import MoneyFarmz from "../assets/MoneyFarmz2.jpg";

const Carousel = () => {
  // const money = "https://money-farmz.vercel.app/assets/logo-BKtLGiPR.jpg"
  const ImagesArray = [KwikFin, Ace, Aria, Covac, Dextero, Edureka, MoneyFarmz];
  return (
    <div className="w-screen py-20 bg-gradient-to-b from-[#FCF4FE] to-[#FCF4FE] ">
      <span className=" w-[80%] text-center">
        <p className="text-center text-3xl font-bold text-gray-950">
          OUR CLIENTS
        </p>
        <p className="lg:w-[60%] w-[90%] mx-auto my-8 lg:text-2xl text-xl text-gray-700">
          Our clients trust us for our commitment to excellence and our ability
          to provide innovative and effective solutions
        </p>
      </span>
      <div className="w-[80%] m-auto">
        <ScrollCarousel
          autoplay
          autoplaySpeed={4}
          speed={8}
          // margin={100}
          //   onReady={() => console.log("I am ready")}
        >
          {ImagesArray.map((item, index) => (
            <div
              key={index}
              className={` ${
                item == Ace ? "lg:w-44 w-40 " : "lg:w-44 w-40"
              } flex items-center justify-center rounded h-52 object-cover mx-6`}
            >
              <img
                src={item}
                alt={`Carousel image - ${index}`}
                className={`rounded-lg object-contain ${
                  item == Ace
                    ? "bg-black lg:w-44 w-40 p-3 px-6 "
                    : item == MoneyFarmz
                    ? "h-8"
                    : "lg:w-44 w-40 p-2"
                }  `}
              />
            </div>
          ))}

          {/* {ImagesArray.map((item, index) => (
            <div
              key={index}
              className={` ${item == Ace ? 'lg:w-44 w-40 ' : 'lg:w-44 w-40'  } flex items-center justify-center rounded h-52 object-cover mx-6`}
            >
              <img
                src={item}
                alt={`Carousel image - ${index}`}
                className={`rounded-lg object-contain ${item == Ace ? 'bg-black lg:w-44 w-40 p-3 px-6 ' : item == MoneyFarmz ? 'h-8' : 'lg:w-44 w-40 p-2'  }  `}
              />
            </div>
          ))} */}
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default Carousel;
