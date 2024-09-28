import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

interface VideoThumbnailProps {
  src: string;
  title: string;
  className?: string;
}

const VideoThumbnails: FC<{ className?: string }> = ({ className }) => {
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);
  const [direction, setDirection] = useState<string | null>(null);

  const closeFullscreen = () => {
    setCurrentVideo(null);
  };

  const handleNext = () => {
    if (currentVideo !== null) {
      setDirection("next");
      setCurrentVideo((prev) => (prev! + 1) % VideoData.length);
    }
  };

  const handlePrev = () => {
    if (currentVideo !== null) {
      setDirection("prev");
      setCurrentVideo(
        (prev) => (prev! - 1 + VideoData.length) % VideoData.length
      );
    }
  };

  return (
    <div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 px-10 md:px-20 ${className ?? ""}`}>
        {VideoData.map((video, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setCurrentVideo(index)}
            onMouseLeave={() => setCurrentVideo(null)}
            className="relative"
          >
            {/* Thumbnail image or placeholder */}
            <img
              src={`https://img.youtube.com/vi/${video.src}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full rounded-2xl"
            />

            <AnimatePresence>
              {currentVideo === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 z-50 flex justify-center items-center bg-black/[.5] shadow-box bg-opacity-80"
                >
                  {/* Fullscreen YouTube Video */}
                  <AnimatePresence>
                    <motion.div
                      key={currentVideo}
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
                      className="relative w-full h-full"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${VideoData[currentVideo!].src
                          }?autoplay=1`}
                        title={VideoData[currentVideo!].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                      ></iframe>
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

export default VideoThumbnails;

const VideoData = [
  {
    src: "OtMdUGLDPfM", // YouTube video ID
    title: "Video 1",
  },
  {
    src: "1WAitxoEX0Y",
    title: "Video 2",
  },
  {
    src: "47siaiQtpZ0",
    title: "Video 3",
  },
  {
    src: "MeFn0Ax2Gy8",
    title: "Video 4",
  },
  {
    src: "ixB0C2LIDxA",
    title: "Video 5",
  },
  {
    src: "sDihzy3vEY0",
    title: "Video 6",
  },
  {
    src: "aJ9ducMZei8",
    title: "Video 7",
  },
  {
    src: "86X4Zm2oPDc",
    title: "Video 8",
  },
  {
    src: "HaNxuNkZd90",
    title: "Video 9",
  },
  {
    src: "z-eQOLktrXE",
    title: "Video 10",
  },
  {
    src: "9Nn1F_tfFoU",
    title: "Video 11",
  },
];
