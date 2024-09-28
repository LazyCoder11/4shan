"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

const WebDev = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);
  return (
    <div className="mt-24 h-screen flex justify-center items-center text-2xl">
      Coming Soon....
    </div>
  );
};

export default WebDev;
