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
          <motion.div
            className="bg-black backdrop-blur-sm rounded-2xl border border-[#FFD989] shadow-xl"
          >
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
        <Link className="flex justify-between w-full gap-5" href={""} {...rest}>
          {children}
          <Image src="/images/Arrow.svg" width={18} height={18} alt="Arrow" />
        </Link>
      </div>

      {submenu && submenuActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute -top-5 left-[100%] ml-[10%] text-xl w-full bg-black backdrop-blur-sm items-center justify-between rounded-2xl border border-[#FFD989] shadow-xl p-4"
        >
          {submenu}
        </motion.div>
      )}
    </div>
  );
};

