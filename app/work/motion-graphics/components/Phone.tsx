"use client"

import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

type PhoneGraphicProps = {
  videoSrc: string;
};

const PhoneGraphic: React.FC<PhoneGraphicProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device by checking screen width
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your requirements
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  const isYouTubeLink = videoSrc.includes("youtube");

  const getYouTubeId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative w-[330px] p-[10px] rounded-[50px] bg-[#FFD989] shadow-[inset_3px_3px_8px_#FFD989,inset_0_0_3px_#FFD989,inset_-3px_-3px_8px_0px_#FFD989,0px_0px_15px_#FFD989]">
        <div className="before:content-[''] before:absolute before:bg-[#FFD989] before:w-[5px] before:h-[30px] before:left-[-5px] before:top-[140px] before:rounded-l-[5px] before:shadow-[inset_4px_0px_2px_#FFFFFF] after:content-[''] after:absolute after:bg-[#FFFFFF] after:w-[5px] after:h-[70px] after:right-[-5px] after:top-[150px] after:rounded-r-[5px]">
          <div className="relative font-helvetica text-[0.8rem] border border-[#FFD989] rounded-[40px] bg-black">
            <div className="relative bg-white m-[13px] rounded-[30px] overflow-hidden before:content-[''] before:absolute before:top-0 before:bg-black before:w-[110px] before:h-[17px] before:left-[calc(50%-55px)] before:rounded-b-[20px] before:z-[2]">
              <div
                className="flex justify-center h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isYouTubeLink ? (
                  <YouTube
                    videoId={getYouTubeId(videoSrc)}
                    opts={{ width: "100%", height: "100%" }}
                    className="z-40 cursor-pointer"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay={isMobile}
                    className="h-full z-40 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneGraphic;
