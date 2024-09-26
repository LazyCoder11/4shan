"use client"

import React, { useEffect } from "react";
import { Hero } from "./components/Hero";
import Lenis from "lenis";

const PubgVideos = () => {
    // useEffect(() => {
    //     const lenis = new Lenis();

    //     function raf(time: any) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);
    // }, []);
    return (
        <div>
            <Hero />
        </div>
    )
}

export default PubgVideos