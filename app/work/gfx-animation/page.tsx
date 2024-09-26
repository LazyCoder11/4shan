"use client";

import React, { useEffect } from "react";
import { Hero } from "./components/Hero"
import StreamOverlays from "./components/StreamOverlays";

const work3D = () => {
  return (
    <div>
      <Hero />
      <StreamOverlays />
    </div>
  );
};

export default work3D;
