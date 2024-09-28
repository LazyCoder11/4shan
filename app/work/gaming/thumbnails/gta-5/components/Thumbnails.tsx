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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 px-10 md:px-20">
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
                                    initial={{ opacity: 0, scale: 0.4 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="fixed w-[60vw] h-[70vh] m-auto rounded-2xl inset-0 z-50 flex justify-center items-center bg-black/[.5] shadow-box bg-opacity-80"
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
                                                width={800}
                                                height={800}
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
            <div className="flex flex-col items-center justify-center px-10 md:px-0 gap-10 mt-20">
                <h2 className="text-[7vw] md:text-[3vw] text-center">
                    <span className="bg-[#FFD989] text-black px-4 rounded-xl">
                        These are nothing at all.
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
        href: "https://4shan.in/wp-content/uploads/2024/08/ash-3-min.png",
        alt: "Thumbnail 1",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/ash-1-min.png",
        alt: "Thumbnail 2",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/ash-7.png",
        alt: "Thumbnail 3",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/rowdzie-thumbnail-4.jpg",
        alt: "Thumbnail 4",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/rowdzie-thumbnail-6.jpg",
        alt: "Thumbnail 5",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-80.jpg",
        alt: "Thumbnail 6",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-133.jpg",
        alt: "Thumbnail 7",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-15.jpg",
        alt: "Thumbnail 8",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-24.jpg",
        alt: "Thumbnail 9",
    },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-66.jpg",
    //     alt: "Thumbnail 9",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-81.jpg",
    //     alt: "Thumbnail 9",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-83.jpg",
    //     alt: "Thumbnail 9",
    // },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/curlbury-thumbnail-53.jpg",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/rowdzie-thumbnail-8.jpg",
        alt: "Thumbnail 10",
    },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/24july-mafia.jpg",
    //     alt: "Thumbnail 11",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-3.jpg",
    //     alt: "Thumbnail 12",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-5.jpg",
    //     alt: "Thumbnail 13",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-8.jpg",
    //     alt: "Thumbnail 14",
    // },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/Headflicker-thumbnail-9.jpg",
    //     alt: "Thumbnail 15",
    // },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/mafia-8july.jpg",
        alt: "Thumbnail 16",
    },
    // {
    //     href: "https://4shan.in/wp-content/uploads/2024/08/mafia-31july2.jpg",
    //     alt: "Thumbnail 17",
    // },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/rowdzie-thumbnail-9.jpg",
        alt: "Thumbnail 18",
    },
];