"use client";

import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";

const IRL = () => {

    return (
        <div> {/* Using key to force re-render */}
            <Hero />
        </div>
    );
};

export default IRL;
