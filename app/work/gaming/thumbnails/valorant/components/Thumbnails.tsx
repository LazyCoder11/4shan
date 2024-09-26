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
            setCurrentImage((prev) => (prev! - 1 + ThumbnailData.length) % ThumbnailData.length);
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
                            className="w-full h-full rounded-2xl "
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
                                            initial={{ x: direction === "next" ? 100 : -100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: direction === "next" ? -100 : 100, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <Image
                                                src={ThumbnailData[currentImage].href}
                                                alt={ThumbnailData[currentImage].alt}
                                                width={1000}
                                                height={1000}
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
            <div className="flex flex-col items-center justify-center gap-10 mt-20">
                <h2 className="text-[3vw]">
                    <span className="bg-[#FFD989] text-black px-4 rounded-xl">
                        That is not at all.
                    </span>{" "}
                    We have much more...
                </h2>
                <a
                    className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer"
                >
                    <h3>Get In Touch</h3>
                    <h4 className="text-2xl">contact@4shan.in</h4>
                </a>
            </div>
        </div>
    );
};

export default Thumbnails;

const ThumbnailData = [
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/glory-10may.jpg",
        alt: "Thumbnail 1",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/EpS7jUeptPA-HD.jpg",
        alt: "Thumbnail 2",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/7Ncr61TKCM-HD.jpg",
        alt: "Thumbnail 3",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/CAszo2J_DvI-HD.jpg",
        alt: "Thumbnail 4",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-18.jpg",
        alt: "Thumbnail 5",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-20.jpg",
        alt: "Thumbnail 6",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-79.jpg",
        alt: "Thumbnail 7",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-23.jpg",
        alt: "Thumbnail 8",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-22.jpg",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-29.jpg",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-44.jpg",
        alt: "Thumbnail 10",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-57.jpg",
        alt: "Thumbnail 11",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-74.jpg",
        alt: "Thumbnail 12",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-69.jpg",
        alt: "Thumbnail 13",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-71.jpg",
        alt: "Thumbnail 14",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-89.jpg",
        alt: "Thumbnail 15",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/klaus-gaming-thumbnail-93.jpg",
        alt: "Thumbnail 16",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/madcap-11july.jpg",
        alt: "Thumbnail 17",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Rigistar-1-Aug.jpg",
        alt: "Thumbnail 18",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/BaL4TBUVDRI-HD-1.jpg",
        alt: "Thumbnail 19",
    },
];