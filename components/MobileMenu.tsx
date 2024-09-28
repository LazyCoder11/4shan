"use client";
import React, { useState, useRef, useEffect } from "react";
import { HoveredLink } from './ui/navbar-menu';
import Image from "next/image";
import { useAnimation } from "@/context/AnimateContext";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import gsap from "gsap";
import { motion } from "framer-motion";  // Import Framer Motion

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [gamingDropdownOpen, setGamingDropdownOpen] = useState(false);
  const [thumbnailsDropdownOpen, setThumbnailsDropdownOpen] = useState(false);
  const [shortsDropdownOpen, setShortsDropdownOpen] = useState(false);
  const [videosDropdownOpen, setVideosDropdownOpen] = useState(false);

  const { isHomePage } = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);  // Create a ref for the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleWorkDropdown = () => {
    setWorkDropdownOpen(!workDropdownOpen);
  };

  const toggleGamingDropdown = () => {
    setGamingDropdownOpen(!gamingDropdownOpen);
  };

  const toggleThumbnailsDropdown = () => {
    setThumbnailsDropdownOpen(!thumbnailsDropdownOpen);
  };

  const toggleShortsDropdown = () => {
    setShortsDropdownOpen(!shortsDropdownOpen);
  };

  const toggleVideosDropdown = () => {
    setVideosDropdownOpen(!videosDropdownOpen);
  };

  useEffect(() => {
    if (isHomePage) {
      gsap.set(logoRef.current, { opacity: 0 });
    } else {
      gsap.set(logoRef.current, { opacity: 1 });
    }
  }, [isHomePage]);

  // Close menu if click occurs outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && menuOpen) {
        setMenuOpen(false);  // Close the menu
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  // Framer Motion animation variants
  const menuVariants = {
    closed: { x: "100%" },  // Start off-screen to the right
    open: { x: 0 },         // Slide in when menu is opened
  };

  const dropdownVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-black px-5 py-4">
        {/* Logo */}
        <div ref={logoRef}>
          <Link href="/">
            <Image src="/images/Logo.svg" width={120} height={120} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}  // Attach ref to the menu div
        className="fixed top-0 right-0 w-[70%] backdrop-blur-lg h-screen bg-black/[.5] bg-opacity-90 z-40 flex flex-col items-start justify-center gap-6 px-10"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <ul className="space-y-8 text-white text-3xl">
          <li>
            <Link href="/segments" onClick={toggleMenu}>
              Segments
            </Link>
          </li>

          <li className="text-3xl">
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={toggleWorkDropdown}
            >
              <span>Our Work</span>
              {workDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </div>

            {/* Dropdown for 'Our Work' */}
            <motion.div
              initial="closed"
              animate={workDropdownOpen ? "open" : "closed"}
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-4 mt-2 text-left overflow-hidden"
            >
              <div
                className="cursor-pointer flex text-xl justify-between items-center"
                onClick={toggleGamingDropdown}
              >
                <span>Gaming</span>
                {gamingDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
              </div>

              {/* Dropdown for 'Gaming' */}
              <motion.div
                initial="closed"
                animate={gamingDropdownOpen ? "open" : "closed"}
                variants={dropdownVariants}
                transition={{ duration: 0.3 }}
                className="ml-4 flex flex-col space-y-2 text-base overflow-hidden"
              >
                {/* Thumbnails Dropdown */}
                <div className="cursor-pointer flex justify-between items-center text-lg" onClick={toggleThumbnailsDropdown}>
                  <span>Thumbnails</span>
                  {thumbnailsDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {thumbnailsDropdownOpen && (
                  <motion.div
                    initial="closed"
                    animate={thumbnailsDropdownOpen ? "open" : "closed"}
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex flex-col space-y-2 text-base"
                  >
                    <HoveredLink href="/work/gaming/thumbnails/pubg" onClick={toggleMenu}>BGMI</HoveredLink>
                    <HoveredLink href="/work/gaming/thumbnails/valorant" onClick={toggleMenu}>Valorant</HoveredLink>
                    <HoveredLink href="/work/gaming/thumbnails/gta-5" onClick={toggleMenu}>GTA 5</HoveredLink>
                  </motion.div>
                )}

                {/* Shorts Dropdown */}
                <div className="cursor-pointer flex justify-between items-center text-lg" onClick={toggleShortsDropdown}>
                  <span>Shorts</span>
                  {shortsDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {shortsDropdownOpen && (
                  <motion.div
                    initial="closed"
                    animate={shortsDropdownOpen ? "open" : "closed"}
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex flex-col space-y-2 text-base"
                  >
                    <HoveredLink href="/work/gaming/shorts/pubg" onClick={toggleMenu}>BGMI</HoveredLink>
                    <HoveredLink href="/work/gaming/shorts/valorant" onClick={toggleMenu}>Valorant</HoveredLink>
                    <HoveredLink href="/work/gaming/shorts/gta-5" onClick={toggleMenu}>GTA 5</HoveredLink>
                  </motion.div>
                )}

                {/* Videos Dropdown */}
                <div className="cursor-pointer flex justify-between items-center text-lg" onClick={toggleVideosDropdown}>
                  <span>Videos</span>
                  {videosDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {videosDropdownOpen && (
                  <motion.div
                    initial="closed"
                    animate={videosDropdownOpen ? "open" : "closed"}
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex flex-col space-y-2 text-base"
                  >
                    <HoveredLink href="/work/gaming/videos/pubg" onClick={toggleMenu}>BGMI</HoveredLink>
                    <HoveredLink href="/work/gaming/videos/valorant" onClick={toggleMenu}>Valorant</HoveredLink>
                    <HoveredLink href="/work/gaming/videos/gta-5" onClick={toggleMenu}>GTA 5</HoveredLink>
                  </motion.div>
                )}
              </motion.div>

              <HoveredLink href="/work/motion-graphics" onClick={toggleMenu}>Motion Graphics</HoveredLink>
              <HoveredLink href="/work/gfx-animation" onClick={toggleMenu}>GFX Animation</HoveredLink>
              <HoveredLink href="/work/in-real-life" onClick={toggleMenu}>IRL</HoveredLink>
            </motion.div>
          </li>

          <li>
            <Link href="/hiring" onClick={toggleMenu}>
              Hiring
            </Link>
          </li>
        </ul>

        <Link href="/contact-us" onClick={toggleMenu}>
          <motion.button
            className="px-6 py-2 bg-[#FFD989] text-3xl text-black font-semibold rounded-full"
            whileHover={{ scale: 1.1 }} // Add hover effect
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
