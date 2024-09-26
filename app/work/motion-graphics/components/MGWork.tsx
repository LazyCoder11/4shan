import React, { useEffect, useRef } from "react";
import PhoneGraphic from "./Phone";
import { toast, Toaster } from "react-hot-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MGWork = () => {
  const phoneRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    phoneRefs.current.forEach((phone, index) => {
      let x = 0;
      let originX = "50%";

      if (index % 3 === 0) {
        x = -100;
        originX = "0%";
      } else if (index % 3 === 2) {
        x = 100;
        originX = "100%";
      }

      gsap.fromTo(
        phone,
        {
          x: x,
          opacity: 0,
          transformOrigin: `${originX} center`,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: phone,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !phoneRefs.current.includes(el)) {
      phoneRefs.current.push(el);
    }
  };

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "contact@4shan.in";

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied successfully!", {
        duration: 100,
        position: "bottom-center",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[3vw]">
          Check out our{" "}
          <span className="bg-[#FFD989] text-black px-4 rounded-xl">
            Latest Work
          </span>
        </h2>
        <div className="text-[1.2vw] w-1/2 text-center">
          <p>
            Take a look at our selected works below, where we've helped brands & influencers
            tell their stories through captivating motion graphics.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 my-20 py-10 gap-y-20 justify-center items-center box-blur overflow-hidden">
        {[
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727362625/01_nxxugo.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727364088/08_x96bu0.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727364133/05_gwawgl.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727364136/07_ehfix4.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727364284/03_by1v8o.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727364349/06_ppcusx.mp4",
          "https://res.cloudinary.com/ds85fcfys/video/upload/v1727374394/04_ip4abk.mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
          "/videos/motion-graphics/david_final (1).mp4",
        ].map((src, index) => (
          <div key={index} ref={addToRefs}>
            <PhoneGraphic videoSrc={src} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-[3vw]">
          <span className="bg-[#FFD989] text-black px-4 rounded-xl">
            That is not at all.
          </span>{" "}
          We have much more...
        </h2>
        <a
          onClick={handleEmailClick}
          className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer"
        >
          <h3>Get In Touch</h3>
          <h4 className="text-2xl">contact@4shan.in</h4>
        </a>
      </div>
      <Toaster />
    </div>
  );
};

export default MGWork;
