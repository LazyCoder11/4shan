"use client";
import React from "react";
import Image from "next/image";
import { VideoContainerScroll } from "./ui/container-scroll-videos";

export function Hero() {
    return (
        <div className="flex flex-col relative">
            <VideoContainerScroll
                id="video"
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            <span className="text-4xl md:text-[6rem] font-bold leading-none [text-shadow:0px_0px_100px_#FFD989]">
                                PUBG / BGMI Shorts
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
                <h2 className="text-[3vw]">
                    <span className="bg-[#FFD989] text-black px-4 rounded-xl">
                        These are nothing at all.
                    </span>{" "}
                    We have much more...
                </h2>
                <a className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer">
                    <h3>Get In Touch</h3>
                    <h4 className="text-2xl">contact@4shan.in</h4>
                </a>
            </div>
        </div>
    );
}
