import React, { useEffect, useRef } from "react";
import Image from "next/image";
import PulsatingButton from "./ui/PulseButton";
import gsap from "gsap";

const Hero = () => {

  useEffect(() => {
    const loadCalendlyScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadCalendlyScript();
  }, []);


  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(
        "https://calendly.com/4shanwebdev/book-an-appointment"
      );
    }
  };

  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll('.animate-text');
    const buttonElement = buttonRef.current?.querySelectorAll('.link-btn');

    if (textElements) {
      gsap.fromTo(
        textElements,
        { y: 100, rotationZ: 10, opacity: 0 },
        {
          y: 0,
          rotationZ: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);


  return (
    <div className="min-h-screen w-full px-10 md:px-20 md:mt-40 lg:mt-24 flex flex-col justify-center items-center">
      <div className="bg-gradient-to-br from-[#FFD989] to-transparent text-black px-10 py-7 flex flex-col gap-5 rounded-3xl mb-20">
        <div className="flex">
          <div className="flex gap-5 flex-col w-4/5">
            <div ref={textRef} className="flex gap-3 flex-wrap overflow-hidden">
              <h2 className="text-7xl shadow-text animate-text">Get</h2>
              <h2 className="text-7xl shadow-text animate-text">in</h2>
              <h2 className="text-7xl shadow-text animate-text">Touch</h2>
            </div>
            <p className="text-4xl tracking-normal">
              At 4Shan, true strength lies in the exceptional talent of our team,
              we’re always looking for new talent to join us, so if you’re
              passionate.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div ref={buttonRef} className="flex flex-wrap justify-end items-center gap-5">
              <a href="https://x.com/4Shan_Digital?t=lqBYBsnwmwgqc87fP36n4A&s=09" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>X</a>
              <a href="https://www.linkedin.com/in/4-shan-management-firm-a9a7192a9/" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>LINKEDIN</a>
              <a href="https://www.facebook.com/share/md5fj8xbXcZXsATh/?mibextid=qi2Omg" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>FACEBOOK</a>
              <a href="https://www.instagram.com/4shan_digital" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>INSTAGRAM</a>
              <a href="https://wa.me/message/IUND7W373JQSH1" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>WHATSAPP</a>
              <a href="https://www.youtube.com/@4ShanOfficial" className='border border-[#FFD989] px-5 py-3 rounded-3xl bg-[#FFD989] hover:bg-transparent hover:text-[#FFD989] transition-all duration-1000 link-btn'>YOUTUBE</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <button
            onClick={openCalendlyPopup}
            className="flex justify-center w-full bg-gradient-to-br from-[#FFD989] to-transparent rounded-2xl"
          >
            <h1 className="text-[4vw] text-black shadow-text">Book an Appointment</h1>
          </button>
          <h2 className="text-[2.3vw] leading-none my-10 tracking-wider">
            We appreciate your interest and look forward to connecting with you.
          </h2>
          <p className="text-2xl">
            We are excited to connect with you. Whether you're looking to
            collaborate or inquire about our services, we're here to help.
          </p>
          <div className="mt-10">
            <div className="flex items-center gap-5 mb-5">
              <Image
                src="/images/svgs/mail.svg"
                width={50}
                height={50}
                alt="Email"
                className="border p-2 rounded-full"
              />
              <a href="mailto:contact@4Shan.in" className="text-lg">
                contact@4Shan.in
              </a>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/svgs/call.svg"
                width={50}
                height={50}
                alt="Phone"
                className="border p-2 rounded-full"
              />
              <div className="flex flex-col">
                <a href="tel:+916260758318" className="text-lg">
                  +91 62607 58318
                </a>
                <a href="tel:+916283995046" className="text-lg">
                  +91 62839 95046
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start md:items-end gap-10">
            <a
              href="https://www.behance.net/4shan_manage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#171717] to-transparent h-full py-10 border-[#FFD989] border rounded-3xl w-full md:w-4/5 hover:bg-[#FFD989] transition-all duration-500"
            >
              <svg
                width={50}
                aria-hidden="true"
                className="e-font-icon-svg e-fab-behance"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFD989"
              >
                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
              </svg>
              <h3 className="text-xl">Behance</h3>
              <h3 className="text-2xl">4Shan Digital</h3>
            </a>
            <a
              href="https://ytjobs.co/talent/profile/183179"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#171717] to-transparent h-full py-10 border-[#FFD989] border rounded-3xl w-full md:w-4/5 hover:bg-[#FFD989] transition-all duration-500"
            >
              <svg
                height="50"
                width="50"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
                fill="#FFD989"
              >
                <g>
                  <path
                    // style="fill:#F61C0D;"
                    d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                  />
                </g>
              </svg>
              <h3 className="text-xl">YT Jobs</h3>
              <h3 className="text-2xl">Profile</h3>
            </a>
            <PulsatingButton
              className="w-full md:w-4/5 py-2 px-4 text-2xl rounded-xl  hover:bg-transparent hover:text-white duration-700 transition-all"
              onClick={openCalendlyPopup}
            >
              Let's Talk
            </PulsatingButton>
          </div>
          {/* Calendly popup button */}

          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
