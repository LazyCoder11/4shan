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
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 px-20 ${className ?? ""}`}>
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
    src: "6H8-zLGs3kc", // YouTube video ID
    title: "Video 1",
  },
  {
    src: "2UCiYexgHZo",
    title: "Video 2",
  },
  {
    src: "Yv4WeH1VYuQ",
    title: "Video 3",
  },
  {
    src: "BL8T-wKIX8A",
    title: "Video 4",
  },
  {
    src: "UArprE3hH80",
    title: "Video 5",
  },
  {
    src: "pogBJPbb9gM",
    title: "Video 6",
  },
  {
    src: "zB-uJ0aetGs",
    title: "Video 7",
  },
  {
    src: "FR3MisvmXZY",
    title: "Video 8",
  },
  {
    src: "IHwwXXejNf4",
    title: "Video 9",
  },
  {
    src: "0UocJeROFk8",
    title: "Video 10",
  },
  {
    src: "9kC01P-VtwI",
    title: "Video 11",
  },
  {
    src: "JyLoSjkJU6U",
    title: "Video 12",
  },
  {
    src: "cK9ANQPj-2Q",
    title: "Video 13",
  },
  {
    src: "kNznjLd715o",
    title: "Video 14",
  },
  {
    src: "53xpIlmNhAo",
    title: "Video 15",
  },
  {
    src: "UzMrP2fXXaY",
    title: "Video 16",
  },
  // {
  //   src: "QNp5aStZjqs",
  //   title: "Video 17",
  // },
  {
    src: "TN0RNYmspAc",
    title: "Video 18",
  },
  {
    src: "SqzWkhJRavI",
    title: "Video 19"
  },
  // {
  //   src: "SqzWkhJRavI",
  //   title: "Video 20",
  // }
];
