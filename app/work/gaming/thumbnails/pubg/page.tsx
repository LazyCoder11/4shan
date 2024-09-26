"use client"

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Lenis from "lenis";
import Thumbnails from "./components/Thumbnails";

const PubgThumbnail = () => {
    return (
        <div>
            <Hero />
            <Thumbnails />
        </div>
    )
}

export default PubgThumbnail