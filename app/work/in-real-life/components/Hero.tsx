"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { VideoContainerScroll } from "./ui/container-scroll-videos";

export function Hero() {
    return (
        <div className="flex flex-col relative overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none [text-shadow:0px_0px_100px_#FFD989]">
                                IRL Thumbnails
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`/images/yt-bg.png`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto fix rounded-2xl object-cover h-full object-left-top"
                    draggable={true}
                />
            </ContainerScroll>
            <div className="absolute right-10 top-[55em] md:flex items-end justify-end w-2/12 hidden">
                <a href="#explore" className="flex items-center gap-5 group">
                    <p className="text-2xl opacity-0 transform translate-x-5 bg-[#FFD989] text-black px-5 rounded-2xl transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                        Scroll to Explore
                    </p>
                    {/* The arrow */}
                    <Image
                        src="/images/yellowArrow.svg"
                        width={40}
                        height={40}
                        alt="Scroll to explore"
                        className="text-[#FFD989] "
                    />
                </a>
            </div>
            <div className="" id="explore">
                <h1 className="text-[5vw] text-center">
                    <span className="bg-[#FFD989] text-black px-5 rounded-3xl">
                        Scroll guys,
                        <br />
                    </span>{" "}
                    these are noting, we have much more...
                </h1>
            </div>
            <VideoContainerScroll
                id="video"
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            <span className="text-4xl md:text-[6rem] font-bold leading-none [text-shadow:0px_0px_100px_#FFD989]">
                                IRL Videos
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`/images/yt-bg.png`}
                    alt="hero"
                    height={720}
                    width={1440}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </VideoContainerScroll>
            <div className="flex flex-col h-full items-center justify-center gap-10 mt-10">
                <a className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer">
                    <h3>Get In Touch</h3>
                    <h4 className="text-2xl">contact@4shan.in</h4>
                </a>
            </div>
        </div>
    );
}
