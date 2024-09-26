"use client"

import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Gaming from './components/Gaming'
import MotionGraphic from './components/MotionGraphic'
import IRL from './components/IRL'
import Work3D from './components/3dWork'
import WebDev from './components/WebDev'
import SocialMedia from './components/SocialMedia'
import Lenis from 'lenis'

const Hiring = () => {
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
      <Gaming />
      <MotionGraphic/>
      <IRL/>
      <Work3D/>
      <WebDev/>
      <SocialMedia/>
    </div>
  )
}

export default Hiring