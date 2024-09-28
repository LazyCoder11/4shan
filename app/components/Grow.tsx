"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Grow = () => {
  const numberContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    numberContainersRef.current.forEach((container, index) => {
      if (container) {
        gsap.fromTo(
          container,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: isMobile ? 1 : 2, // Faster animation for mobile devices
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 100%",
              end: "bottom 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  const positionStyles = (index: number) => {
    const desktopTop = ["0%", "25%", "50%", "75%"];
    const mobileTop = "0%";

    return { top: isMobile ? mobileTop : desktopTop[index] };
  };

  return (
    <div className="min-h-full px-10 lg:px-20 my-20 md:mt-40 relative">
      <div className="flex flex-wrap justify-center gap-2 lg:gap-3 overflow-hidden">
        <h2 className="text-[9vw] md:text-[10vw] lg:text-[3vw] leading-tight">
          We
        </h2>
        <h2 className="text-[9vw] md:text-[10vw] lg:text-[3vw] leading-tight">
          grow
        </h2>
        <h2 className="text-[9vw] md:text-[10vw] lg:text-[3vw] leading-tight">
          as
        </h2>
        <div className="flex flex-wrap gap-2 lg:gap-3 overflow-hidden bg-[#FFD989] text-black px-3 rounded-xl">
          <h2 className="text-[9vw] md:text-[10vw] lg:text-[3vw] leading-tight">
            you
          </h2>
          <h2 className="text-[9vw] md:text-[10vw] lg:text-[3vw] leading-tight">
            grow
          </h2>
        </div>
      </div>
      <div className="flex flex-col h-full md:flex-row justify-center rounded-[40px] py-5 items-center mt-20 box-blur">
        {[
          { number: "10M+", text: "VIEWS GAINED" },
          { number: "14K+", text: "PROJECTS COMPLETED" },
          { number: "13M+", text: "TOTAL AUDIENCE" },
          { number: "150+", text: "CREATORS" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative border-r border-[#FFD989] flex flex-col justify-center items-center grow-card w-full overflow-hidden min-h-[10em] md:h-[45em]"
          >
            <div
              className="absolute flex items-center justify-center flex-col gap-3 md:text-center"
              style={positionStyles(index)} // Apply different position styles based on screen size
              ref={(el) => {
                numberContainersRef.current[index] = el;
              }}
            >
              <p className="text-[7vw] md:text-[15vw] lg:text-[5vw] w-fit md:w-full text-center rounded-3xl text-black px-4 bg-[#FFD989]">
                {item.number}
              </p>
              <p className="text-[5vw] md:text-[7vw] lg:text-[1.3vw]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grow;
