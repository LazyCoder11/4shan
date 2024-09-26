"use client";

import React, { useEffect } from "react";
import { Hero } from "./components/Hero"
import StreamOverlays from "./components/StreamOverlays";
import Lenis from "lenis";

const work3D = () => {
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
      <StreamOverlays />
    </div>
  );
};

export default work3D;
