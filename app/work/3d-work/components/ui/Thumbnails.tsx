import Image from "next/image";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

interface ThumbnailProps {
  href: string;
  alt: string;
}

const Thumbnails: FC = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [direction, setDirection] = useState<string | null>(null);

  const closeFullscreen = () => {
    setCurrentImage(null);
  };

  const handleNext = () => {
    if (currentImage !== null) {
      setDirection("next");
      setCurrentImage((prev) => (prev! + 1) % ThumbnailData.length);
    }
  };

  const handlePrev = () => {
    if (currentImage !== null) {
      setDirection("prev");
      setCurrentImage(
        (prev) => (prev! - 1 + ThumbnailData.length) % ThumbnailData.length
      );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-20 px-20">
        {ThumbnailData.map((thumbnail, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setCurrentImage(index)}
            onMouseLeave={() => setCurrentImage(null)}
            className="relative"
          >
            <Image
              src={thumbnail.href}
              alt={thumbnail.alt}
              width={500}
              height={500}
              className="w-full h-full rounded-2xl box-blur"
            />

            <AnimatePresence>
              {currentImage === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 z-50 flex justify-center items-center bg-black/[.5] shadow-box bg-opacity-80"
                >
                  {/* Fullscreen Image with Slide Animation */}
                  <AnimatePresence>
                    <motion.div
                      key={currentImage}
                      initial={{
                        x: direction === "next" ? 100 : -100,
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{
                        x: direction === "next" ? -100 : 100,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Image
                        src={ThumbnailData[currentImage].href}
                        alt={ThumbnailData[currentImage].alt}
                        width={800}
                        height={840}
                        className="rounded-2xl object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Close Button */}
                  <button
                    onClick={closeFullscreen}
                    className="absolute top-5 right-5 text-white text-3xl"
                  >
                    <IoMdClose />
                  </button>

                  {/* Left Arrow for Previous */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-5 text-white text-3xl"
                  >
                    <IoIosArrowBack />
                  </button>

                  {/* Right Arrow for Next */}
                  <button
                    onClick={handleNext}
                    className="absolute right-5 text-white text-3xl"
                  >
                    <IoIosArrowForward />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;

const ThumbnailData = [
  {
    href: "/images/3dwork1.jpeg",
    alt: "Thumbnail 1",
  },
  {
    href: "/images/3dwork2.jpeg",
    alt: "Thumbnail 2",
  },
  {
    href: "/images/3dwork3.jpeg",
    alt: "Thumbnail 3",
  },
  {
    href: "/images/3dwork4.jpeg",
    alt: "Thumbnail 1",
  },
  {
    href: "/images/3dwork5.jpeg",
    alt: "Thumbnail 1",
  },
  {
    href: "/images/3dwork6.jpeg",
    alt: "Thumbnail 1",
  },
  {
    href: "/images/3dwork7.jpeg",
    alt: "Thumbnail 1",
  },
  {
    href: "/images/3dwork8.jpeg",
    alt: "Thumbnail 1",
  },
];
