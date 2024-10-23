import Image from "next/image";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

interface ThumbnailProps {
    href: string;
    alt: string;
    className?: string;
}

const Thumbnails: FC<{ className?: string }> = ({className}) => {
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
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-20 ${className ?? ""}`}>
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
        </div>
    );
};

export default Thumbnails;

const ThumbnailData = [
    {
        href: "/images/sharksheThumbnail1.jpg",
        alt: "Thumbnail 1",
    },
    {
        href: "/images/sharksheThumbnail2.jpg",
        alt: "Thumbnail 2",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-8.webp",
        alt: "Thumbnail 3",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-10-1.webp",
        alt: "Thumbnail 4",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-17.jpg",
        alt: "Thumbnail 3",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/IMG_1537.jpg",
        alt: "Thumbnail 4",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/3.jpg",
        alt: "Thumbnail 5",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-14.jpg",
        alt: "Thumbnail 6",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-13.jpg",
        alt: "Thumbnail 7",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-11.jpg",
        alt: "Thumbnail 8",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-15.jpg",
        alt: "Thumbnail 9",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-9-1.webp",
        alt: "Thumbnail 10",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-16.jpg",
        alt: "Thumbnail 11",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/09/beaststats-thumbnail-7.jpg",
        alt: "Thumbnail 12",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/husna_thumbnail.webp",
        alt: "Thumbnail 13",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-6.webp",
        alt: "Thumbnail 14",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/9ManrRsjhWk-HD.jpg",
        alt: "Thumbnail 15",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-18.webp",
        alt: "Thumbnail 16",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-17.webp",
        alt: "Thumbnail 17",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-7.webp",
        alt: "Thumbnail 18",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-5.webp",
        alt: "Thumbnail 19",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-4.webp",
        alt: "Thumbnail 20",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-3.webp",
        alt: "Thumbnail 21",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Gaming-Guru-thumbnail-2.webp",
        alt: "Thumbnail 22",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Rigistar-17-june.jpg",
        alt: "Thumbnail 23",
    },
    {
        href: "https://4shan.in/wp-content/uploads/2024/08/Vlog-Adesh.jpg",
        alt: "Thumbnail 24",
    },
];