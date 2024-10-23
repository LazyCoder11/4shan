"use client";

import React, { useRef, useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import Image from "next/image";
import { useAnimation } from "@/context/AnimateContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./ui/Button";
import Link from "next/link";
import MobileNavbar from "./MobileMenu";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null); // Track the active dropdown
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");
  const { isHomePage } = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHomePage) {
      gsap.set(logoRef.current, { opacity: 0 });
    } else {
      gsap.set(logoRef.current, { opacity: 1 });
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: navbarRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const scrollY = self.scroll();
        if (scrollY > 40) {
          setNavbarBg("bg-black");
        } else {
          setNavbarBg("bg-transparent");
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isHomePage]);

  // Handle navigation actions
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    window.location.href = href;
  };

  // Close active dropdown when a new one is opened
  const toggleDropdown = (dropdownName: string) => {
    setActive((prevActive) => (prevActive === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <div className="hidden md:block">
        <div
          ref={navbarRef}
          className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center ${navbarBg} px-20 py-2 transition-all duration-300`}
        >
          <div
            className={`logo ${isHomePage ? "invisible" : "visible"}`}
            ref={logoRef}
          >
            <Link href="/">
              <Image src="/images/Logo.svg" width={200} height={200} alt="Logo" />
            </Link>
          </div>
          <div className="flex gap-10">
            <Menu setActive={setActive}>
              <Link href="/segments" className="hover:text-[#FFD989]">
                Segments
              </Link>
              <MenuItem setActive={setActive} active={active} item="Our Work">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink
                    submenu={
                      <>
                        <HoveredLink
                          submenu={
                            <>
                              <HoveredLink href="/work/gaming/thumbnails/pubg">BGMI</HoveredLink>
                              <HoveredLink href="/work/gaming/thumbnails/valorant">Valorant</HoveredLink>
                              <HoveredLink href="/work/gaming/thumbnails/gta-5">GTA 5</HoveredLink>
                            </>
                          }
                        >
                          Thumbnails
                        </HoveredLink>
                        <HoveredLink
                          submenu={
                            <>
                              <HoveredLink href="/work/gaming/shorts/pubg" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/shorts/pubg")}>BGMI</HoveredLink>
                              <HoveredLink href="/work/gaming/shorts/valorant" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/shorts/valorant")}>Valorant</HoveredLink>
                              <HoveredLink href="/work/gaming/shorts/gta-5" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/shorts/gta-5")}>GTA 5</HoveredLink>
                            </>
                          }
                        >
                          Shorts
                        </HoveredLink>
                        <HoveredLink
                          submenu={
                            <>
                              <HoveredLink href="/work/gaming/videos/pubg" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/videos/pubg")}>BGMI</HoveredLink>
                              <HoveredLink href="/work/gaming/videos/valorant" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/videos/valorant")}>Valorant</HoveredLink>
                              <HoveredLink href="/work/gaming/videos/gta-5" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/gaming/videos/gta-5")}>GTA 5</HoveredLink>
                            </>
                          }
                        >
                          Videos
                        </HoveredLink>
                      </>
                    }
                  >
                    Gaming
                  </HoveredLink>
                  <HoveredLink href="/work/motion-graphics">
                    Motion Graphic
                  </HoveredLink>
                  <HoveredLink href="/work/gfx-animation">GFX Animation</HoveredLink>
                  <HoveredLink href="/work/in-real-life" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/in-real-life")}>IRL</HoveredLink>
                  <HoveredLink href="/work/3d-work" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, "/work/3d-work")}>3D Work</HoveredLink>
                </div>
              </MenuItem>
              <Link href="/hiring" className="hover:text-[#FFD989]">
                Hiring
              </Link>
            </Menu>
          </div>
          <div className="text-xl">
            <Button
              title="Let's Talk"
              href="/contact-us"
              icon="/images/Arrow.svg"
              iconHeight={15}
              iconWidth={15}
              className="px-10 py-2 rounded-full font-medium gap-3"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
