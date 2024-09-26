"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Reviews = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    reviewName: string;
    reviewImg: string;
    review: string;
    reviewSubs: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_top,transparent_0%,transparent_100%)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.reviewName}
            className="w-full max-w-full relative flex-shrink-0 md:w-[250px] bg-[#FFD989] p-6 rounded-3xl shadow-lg text-white"
          >
            {/* Testimonial Block */}
            <blockquote className="mb-4">
              <p className="text-[0.875rem] font-light italic">"{item.review}"</p>
            </blockquote>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-auto">
              {/* User Image */}
              <div className="w-[50px] h-[50px]">
                <Image
                  src={item.reviewImg}
                  width={50}
                  height={50}
                  alt={item.reviewName}
                  className="rounded-full border border-[#FFD989]"
                />
              </div>

              {/* User Name and Subscribers */}
              <div className="text-sm">
                <p className="font-semibold">{item.reviewName}</p>
                <p className="text-[0.75rem]">{item.reviewSubs} Subscribers</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
