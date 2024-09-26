"use client";

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import MGWork from "./components/MGWork";
import Lenis from "lenis";

const MotionGraphics = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);
  return (
    <div>
      <Hero />
      <MGWork />
    </div>
  );
};

export default MotionGraphics;
