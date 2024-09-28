"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <div className="flex h-[50vh] md:h-screen justify-center items-center w-full">
        <h1 className='text-[12vw] md:text-[5vw] [text-shadow:0px_0px_100px_#FFD989]'>
          GFX Animation
        </h1>
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none [text-shadow:0px_0px_100px_#FFD989]">
                8bit Head Flicker
              </span>
            </h1>
          </>
        }
      >
        {/* Display different images based on screen size */}
        <Image
          src={`/images/hfchannelMobile.jpg`}  // Mobile image
          alt="hero mobile"
          height={720}
          width={1400}
          className="block md:hidden mx-auto fix rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
        <Image
          src={`/images/hfchannel.png`}  // Desktop image
          alt="hero desktop"
          height={720}
          width={1400}
          className="hidden md:block mx-auto fix rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
      </ContainerScroll>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none [text-shadow:0px_0px_100px_#FFD989]">
                Telugu Buddy Gaming
              </span>
            </h1>
          </>
        }
      >
        {/* Display different images based on screen size */}
        <Image
          src={`/images/telugugamingchannelMobile.jpg`}  // Mobile image
          alt="hero mobile"
          height={720}
          width={1400}
          className="block md:hidden mx-auto fix rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
        <Image
          src={`/images/buddyislive.png`}  // Desktop image
          alt="hero desktop"
          height={720}
          width={1400}
          className="hidden md:block mx-auto fix rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
      </ContainerScroll>
    </div>
  );
}
