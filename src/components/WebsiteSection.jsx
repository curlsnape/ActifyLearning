import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import serviceweb1 from "../assets/serviceweb1.png";
import Aria2 from "../assets/Aria2.png";
import Aria3 from "../assets/Aria3.png";
import moneyfarmzservices from '../assets/moneyfarmzservices.png'
import moneyfarmz2 from '../assets/moneyfarmz2.png'
import moneyfarmz3 from '../assets/moneyfarmz3.png'
import shop1 from '../assets/shop1.png'
import shop2 from '../assets/shop2.png'
import shop3 from '../assets/shop3.png'

function WebsiteSection() {
  const arr = [
    {
      img: serviceweb1, desc: 'Home page for ARIA',
    },
    {
      img: Aria2,desc: 'Rent or Buy Page for ARIA',
    },
    {
      img: Aria3,desc: 'About page for ARIA',
    },
    {
      img: moneyfarmzservices,desc: 'Home page for Money Farmz',
    },
    {
      img: moneyfarmz2,desc: 'About section for Money Farmz',
    },
    {
      img: moneyfarmz3,desc: 'Services section for Money Farmz',
    },
    {
      img: shop1,desc: 'Products section for Shop',
    },
    {
      img: shop2,desc: 'Shopping cart section for Shop',
    },
    {
      img: shop3,desc: 'All shopping cart section for Shop',
    }
  ];

  return (
    <div id='website' className="max-w-full mx-auto my-20">
        <p className="text-black text-3xl md:text-4xl lg:text-5xl text-center mt-8 mb-8 font-semibold">Our Website Designs</p>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade]}
      spaceBetween={0}
      slidesPerView={2} 
      centeredSlides={true} 
      navigation
    //   pagination={{ clickable: true }}
      effect="coverflow" 
      loop={true}
      autoplay={true}
      coverflowEffect={{
        rotate: 0, 
        stretch: 0, 
        depth: 500, 
        modifier: 1, 
        slideShadows: true, 
      }}
      fadeEffect={{
        crossFade: true, 
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {arr.map((i, index) => (
        <SwiperSlide key={index}>
          {/* <img className="w-[150vw] h-full object-cover" src={i.img} alt="" /> */}
          <div className="hidden lg:block ">
            <img className="w-[150vw] h-full md:h-full lg:h-full object-cover " src={i.img} alt="" />
            <p className="text-white px-2 bg-gray-500 h-12 flex items-center justify-center">{i.desc}</p>
          </div>
        </SwiperSlide>
        
      ))}
      </Swiper>

      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade]}
      spaceBetween={0}
      slidesPerView={1} 
      centeredSlides={true} 
      navigation
    //   pagination={{ clickable: true }}
      effect="coverflow" 
      loop={true}
      autoplay={true}
      coverflowEffect={{
        rotate: 0, 
        stretch: 0, 
        depth: 500, 
        modifier: 1, 
        slideShadows: true, 
      }}
      fadeEffect={{
        crossFade: true, 
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {arr.map((i, index) => (
        <SwiperSlide key={index} >
          {/* <img className="w-[150vw] h-full object-cover" src={i.img} alt="" /> */}
          <div className="block lg:hidden">
          <img className="w-[150vw] h-full md:h-full lg:h-full object-cover " src={i.img} alt="" />
          <p className="text-white px-2 bg-gray-500 h-12 flex items-center justify-center">{i.desc}</p>
          </div>
        </SwiperSlide>
        
      ))}
      </Swiper>
      
    </div>
  );
}

export default WebsiteSection;
