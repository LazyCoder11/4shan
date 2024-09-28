"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import VideoThumbnails from "./Videos";
import Lenis from "lenis";

export const VideoContainerScroll = ({
  titleComponent,
  children,
  id,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  id: string;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State for fixed position
  const lenisRef = useRef<any>(null); // To hold the Lenis instance

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Detect if the container is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsFixed(rect.top <= 0); // Set fixed if the top of the container is at or above the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Smooth scroll function
  const smoothScroll = (target: number) => {
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`h-[60rem] md:h-[75rem] scale-125 md:scale-100 flex items-center justify-center relative p-2 md:px-20 ${isFixed ? "fixed top-0 left-0 w-full z-10" : ""}`}
      ref={containerRef}
      id={id}
    >
      <div
        className="pt-10 md:pt-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} isFixed={isFixed} smoothScroll={smoothScroll}> {/* Pass smoothScroll to Card */}
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-7xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  isFixed, // Add isFixed prop
  children,
  smoothScroll, // Pass smoothScroll to Card
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  isFixed: boolean; // Specify type for isFixed
  smoothScroll: (target: number) => void; // Specify type for smoothScroll
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`max-w-7xl mx-auto h-[40rem] md:h-[45rem] w-full p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-2xl ${isFixed ? "overflow-hidden" : "overflow-visible"}`}
    >
      <div className={`h-full w-full rounded-2xl ${isFixed ? "overflow-y-auto" : "overflow-y-hidden"} bg-[#0F0F0F] md:rounded-2xl`}>
        {children}
        <div className="-mt-[30em] overflow-auto"> {/* Ensure scrolling is possible */}
          <VideoThumbnails className="pb-10" />
        </div>
      </div>
    </motion.div>
  );
};
