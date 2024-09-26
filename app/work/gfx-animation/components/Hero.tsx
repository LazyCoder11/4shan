"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-screen justify-center items-center w-full">
        <h1 className='text-[5vw] [text-shadow:0px_0px_100px_#FFD989]'>
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
        <Image
          src={`/images/hfchannel.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto fix rounded-2xl object-cover h-full object-left-top"
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
        <Image
          src={`/images/buddyislive.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto fix rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
      </ContainerScroll>
    </div>
  );
}
