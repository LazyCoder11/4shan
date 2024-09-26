"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Hero } from "./components/Hero";

const PubgShorts = () => {
    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time: any) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }
    //     requestAnimationFrame(raf)
    // }, []);
    return (
        <div>
            <Hero />
        </div>
    )
}

export default PubgShorts