import Footer from "../components/Footer";
import Gallery from "../components/ImageGallery";
import Blogs from "../Sections/Home/Blogs";
import Hero from "../Sections/Home/Hero";
import Offerings from "../Sections/Home/Offerings";
import OurMission from "../Sections/Home/OurMission";
import Testimonials from "../Sections/Home/Testimonials";
import VideoSection from "../Sections/Home/VideoSection";
import VideoSection2 from "../Sections/Home/VideoSection2";
import WhyChooseUs from "../Sections/Home/WhyChooseUs";
import WorkWithUs from "../Sections/Home/WorkWithUs";
import ScrollCarousel from "../components/ScrollCarousel";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="syne-font bg-[#EDEFFE]">
       
      <Hero />
      <OurMission />
      <WhyChooseUs />
      <Offerings />
      {/* <VideoSection /> */}
      <VideoSection2 />
      <ScrollCarousel />
      {/* <Gallery /> */}
      {/* <Blogs /> */}
      {/* <WorkWithUs/> */}
      <Testimonials />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
