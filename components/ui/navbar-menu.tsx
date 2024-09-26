"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
        onClick={() => setActive(isActive ? null : item)} // Toggle on click
      >
        {item}
      </motion.p>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%+1.2rem)] left-[-100%] pt-4"
        >
          <motion.div className="bg-black backdrop-blur-sm rounded-2xl border border-[#FFD989] shadow-xl">
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full text-xl border border-transparent bg-transparent shadow-input flex items-center gap-10 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  submenu,
  ...rest
}: {
  children: React.ReactNode;
  submenu?: React.ReactNode;
  [key: string]: any; // To allow passing other props like href
}) => {
  const [submenuActive, setSubmenuActive] = useState<boolean>(false);

  const handleToggle = () => {
    setSubmenuActive((prev) => !prev); // Toggle the submenu visibility
  };

  return (
    <div className="relative group">
      <div
        onClick={handleToggle} // Toggle the submenu on click
        className="cursor-pointer text-neutral-200 hover:text-black text-xl hover:bg-[#FFD989] p-2 rounded-xl flex items-center justify-between gap-10 transition-all duration-700"
      >
        <Link className="flex justify-between items-center w-full gap-5" href={""} {...rest}>
          {children}
          {submenu && (
            // <Image src="/images/Arrow.svg" width={18} height={18} alt="Arrow" className="text-[#FFD989]"/>
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 21"
              fill="none"
              stroke="#FFD989"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.38379 0C1.38379 1.81265 2.85323 3.28209 4.66587 3.28209H16.1415L0.932451 17.8098C0.242472 18.4688 0.24247 19.5705 0.93245 20.2296C1.57913 20.8473 2.59722 20.8473 3.24389 20.2296L10.326 13.4648L18.5639 5.59596V16.2565C18.5639 18.1542 20.1023 19.6925 21.9999 19.6925V0H1.38379Z"
                fill="currentColor"
              />
            </svg>
          )}
        </Link>
      </div>

      {submenu && submenuActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute -top-5 left-[100%] ml-[10%] text-xl w-[200px] bg-black backdrop-blur-sm items-center justify-between rounded-2xl border border-[#FFD989] shadow-xl p-4"
        >
          {submenu}
        </motion.div>
      )}
    </div>
  );
};
