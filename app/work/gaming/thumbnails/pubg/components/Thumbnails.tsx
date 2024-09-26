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
            <div className="grid grid-cols-3 gap-20 px-20 relative">
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
                                    className="fixed w-[60vw] h-[70vh] m-auto inset-0 z-50 bg-black/[.5] shadow-box bg-opacity-80 rounded-2xl flex justify-center items-center"
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
            <div className="flex flex-col items-center justify-center gap-10 mt-10">
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
        href: "https://4shan.in/wp-content/uploads/2024/08/capi-gaming-thumbnail-1.jpg",
        alt: "Thumbnail 1",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/capi-gaming-thumbnail-2.jpg",
        alt: "Thumbnail 2",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Janicka-thumbnail-1.jpg",
        alt: "Thumbnail 3",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/AKQV9PUIWtg-HD-1.jpg",
        alt: "Thumbnail 4",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/d10yo0SviPM-HD-1.jpg",
        alt: "Thumbnail 5",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/T87g76-oNQQ-HD-1.jpg",
        alt: "Thumbnail 6",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/snax-5july2-1.jpg",
        alt: "Thumbnail 7",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-With-Latifa-thumbnail-34-2.jpg",
        alt: "Thumbnail 8",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-With-Latifa-thumbnail-35-1.jpg",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Screenshot-2024-08-16-160323.png",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Screenshot-2024-08-16-160221.png",
        alt: "Thumbnail 10",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Screenshot-2024-08-20-212445.png",
        alt: "Thumbnail 11",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/sakshi-thumbnail-4-1.jpg",
        alt: "Thumbnail 12",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Peggy-Playz-thumbnail-18-1.jpg",
        alt: "Thumbnail 13",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Ipreet-7-Aug-Live-1.jpg",
        alt: "Thumbnail 14",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Ipreet-7-Aug-1.jpg",
        alt: "Thumbnail 15",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/ipreet-2aug-1.jpg",
        alt: "Thumbnail 16",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Ipreet-16-june-1.jpg",
        alt: "Thumbnail 17",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Ipreet-Lamborghini-Crate-opening-1.jpg",
        alt: "Thumbnail 18",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/bixi-thumbnail-2-2.jpg",
        alt: "Thumbnail 19",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/bixi-thumbnail-4-2.jpg",
        alt: "Thumbnail 20",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/bixi-thumbnail-1-2.jpg",
        alt: "Thumbnail 21",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/darpan-thumbnail-15-1.jpg",
        alt: "Thumbnail 22",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-20-1.jpg",
        alt: "Thumbnail 23",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/prathamgaming-thumbnail-59-1.jpg",
        alt: "Thumbnail 24",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/akash-22-jukly-2.jpg",
        alt: "Thumbnail 25",
    },
];