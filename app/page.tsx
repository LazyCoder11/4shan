"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAnimation } from "@/context/AnimateContext";
import Lenis from "lenis";
import Creators from "./components/Creators";
import Services from "./components/Services";
import Grow from "./components/Grow";
import { Testimonials } from "@/components/Testimonials";
import MobileWarning from "@/components/MobileWarning";
import Procedure from "./components/Procedure";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const { setIsHomePage } = useAnimation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setIsHomePage(true);

    const heroLogo = heroLogoRef.current;
    const navbarLogo = document.querySelector(".navbar .logo") as HTMLElement;

    if (heroLogo) {
      // Detect screen size
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroLogo,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            // Dynamically adjust the z-index
            if (progress < 0.1) {
              heroLogo.style.zIndex = "1"; // Keep high z-index during animation
            } else {
              heroLogo.style.zIndex = "50"; // Lower z-index when in the navbar
            }
          },
        },
      });

      // Animation for the hero logo
      tl.to(heroLogo, {
        scale: isMobile ? 0.4 : 0.2, // Adjust scale based on screen size
        x: isMobile ? 30 : 70, // Adjust x for mobile vs desktop
        y: 0,
        ease: "power4.out",
        position: "fixed",
        top: isMobile ? -80 : -30,
        left: isMobile ? 0 : 0, // Adjust left for mobile vs desktop
        transformOrigin: "0 0", // Anchor the scaling to the top-left
      });

      // Ensure the navbar logo's animation is applied separately
      if (navbarLogo) {
        tl.to(
          navbarLogo,
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.5"
        );
      }

      return () => {
        setIsHomePage(false);
        tl.kill();
      };
    }
  }, [setIsHomePage]);

  return (
    <main className="px-0 relative">
      <div className="">
        <div className="flex justify-end md:justify-end h-[90vh] md:h-screen w-full flex-col relative px-10 md:px-20">
          <div ref={heroLogoRef} className="absolute top-0 left-0 md:left-20 px-5">
            <Image
              src="/images/Logo.png"
              width={1000}
              height={1000}
              alt="Hero Logo"
              className="w-[90vw] md:w-[40vw] lg:w-[70vw] mt-[15em]" // Responsive width for different screen sizes
            />
          </div>
          <div className="flex gap-10 flex-col md:flex-row items-start md:items-end md:my-10">
            <div className="w-full md:w-4/5">
              <h1 className="text-[11vw] md:text-[5vw] leading-tight mt-8">
                Your one stop, for all your <br />
                <span className="font-bold tracking-wide text-[#FFD989] italic">
                  digital needs.
                </span>
              </h1>
            </div>
            <div className="flex items-end justify-end w-full md:w-2/12">
              <a href="#services" className="flex items-center gap-5 group">
                <p className="bg-[#FFD989] text-black px-2 py-1 rounded-xl text-2xl md:opacity-0 md:transform md:translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Scroll to Explore
                </p>
                <Image
                  src="/images/yellowArrow.svg"
                  width={40}
                  height={40}
                  alt="Scroll to explore"
                  className="text-[#FFD989]"
                />
              </a>
            </div>
          </div>
        </div>
        <Creators />
        <Services />
        {/* <Procedure/> */}
        <Grow />
        <Testimonials />
      </div>
      {/* Mobile View */}
      <div className="hidden">
        <MobileWarning />
      </div>
    </main>
  );
}
