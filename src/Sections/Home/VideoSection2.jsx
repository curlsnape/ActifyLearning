import React, { useState } from "react";
import ActifyVideo from "/Videos/Learning1.mp4";
import Portal1 from "/Videos/Portal1.mp4";
import Portal2 from "/Videos/Portal2.mp4";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import play from "../../assets/play.png";
import Spinner from "../../components/Spinner";
import CTA from "../../components/CTA";

const VideoSection2 = () => {
  const [PlayingVideo, setPlayingVideo] = useState({
    source: ActifyVideo,
    name: "video1",
  });
  const [isVideoLoading, setIsVideoLoading] = useState(false); // New state for loading

  const handleVideoChange = (alt) => {
    if (PlayingVideo.name === alt) {
      return;
    }

    setIsVideoLoading(true); // Set loading to true when video source changes

    switch (alt) {
      case "video1":
        setPlayingVideo({ source: ActifyVideo, name: "video1" });
        break;
      case "video2":
        setPlayingVideo({ source: Portal1, name: "video2" });
        break;
      case "video3":
        setPlayingVideo({ source: Portal2, name: "video3" });
        break;
      default:
        setPlayingVideo({ source: ActifyVideo, name: "video1" });
        break;
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoading(false); // Set loading to false when the video is ready
  };

  const ThumbNailButton = ({ imgSrc, alt }) => {
    return (
      <div
        onClick={() => handleVideoChange(alt)}
        className="lg:w-[40%] w-[30%] lg:mx-auto relative overflow-hidden"
      >
        {PlayingVideo.name !== alt && (
          <div className="h-full w-full bg-[#0000004d] rounded-2xl max-sm:rounded-lg absolute flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-24 max-sm:size-10 bg-[#ffffff6b] rounded-full cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
        )}
        <img src={imgSrc} alt={alt} className="w-full cursor-pointer" />
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#E7E8FF] to-[#FCF4FE] py-8">
      <p className="lg:text-5xl md:text-4xl text-2xl text-center font-bold"></p>
      <p className="lg:text-2xl md:text-2xl text-lg text-center p-4"></p>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center w-screen">
        <div className="flex lg:flex-col flex-row lg:gap-8 gap-2 items-center justify-center lg:w-[40%] w-full">
          <ThumbNailButton alt={"video1"} imgSrc={thumbnail1} />
          <ThumbNailButton alt={"video2"} imgSrc={thumbnail2} />
          <ThumbNailButton alt={"video3"} imgSrc={thumbnail2} />
        </div>
        <div className="flex lg:items-start lg:justify-start items-center justify-center lg:w-[60%] w-screen p-8 relative">
          {isVideoLoading && (
            <div className="w-[100vw] absolute mx-auto lg:hidden  flex items-center justify-center">
              <Spinner />
            </div>
          )}
          <video
            key={PlayingVideo.name}
            muted={true}
            className="pointer-events-none lg:rounded-e-3xl rounded-2xl lg:w-[90%] sm:min-h-[35rem] min-h-48 "
            autoPlay={true}
            loop={true}
            onLoadedData={handleVideoLoaded} // Handle when video data is loaded
          >
            <source src={PlayingVideo.source} type="video/mp4" />
          </video>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default VideoSection2;
