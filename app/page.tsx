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


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const { setIsHomePage } = useAnimation();

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    setIsHomePage(true);

    const heroLogo = heroLogoRef.current;
    const navbarLogo = document.querySelector('.navbar .logo') as HTMLElement;

    if (heroLogo) {
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
        scale: 0.2, // Scale the logo down
        x: 70,       // Adjust these values based on the final position you want
        y: 0,       // Adjust these values based on the final position you want
        // opacity: 0,
        ease: "power4.out",
        // Ensure the logo is fixed during animation
        position: "fixed",
        top: -25,
        left: 0,
        transformOrigin: "0 0", // Anchor the scaling to the top-left
      });

      // Ensure the navbar logo's animation is applied separately
      if (navbarLogo) {
        tl.to(navbarLogo, {
          opacity: 1,
          duration: 0.5,
        }, "-=0.5");
      }

      return () => {
        setIsHomePage(false);
        tl.kill();
      };
    }
  }, [setIsHomePage]);

  return (
    <main className="px-0 relative">
      <div className="hidden md:block">
        <div className="flex justify-end h-screen w-full flex-col relative">
          <div ref={heroLogoRef} className=" absolute top-0 left-20 -z-50">
            <Image
              src="/images/Logo.png"
              width={1100}
              height={1100}
              alt="Hero Logo"
              className="mt-[15em]"
            />
          </div>
          <div className="flex items-end my-10">
            <div className="w-4/5">
              <h1 className="text-[5vw] px-20 leading-tight mt-8">
                Your one stop, for all your <br />
                <span className="font-bold tracking-wide text-[#FFD989] italic">
                  digital needs.
                </span>
              </h1>
            </div>
            <div className="flex items-end justify-end w-2/12">
              <a href="#creators" className="flex items-center gap-5 group">
                {/* Text will be hidden initially and slide in on hover */}
                <p className="text-2xl opacity-0 transform translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Scroll to Explore
                </p>
                {/* The arrow */}
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
        <Grow />
        <Testimonials />
      </div>
      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileWarning />
      </div>

    </main>
  );
}
