import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CgClose, CgCloseO, CgCloseR } from "react-icons/cg";

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay the popup appearance for 1 second
        const timer = setTimeout(() => {
            setIsVisible(true);
        });

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <>
            {isVisible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={popupVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed inset-0  flex items-center justify-center bg-black/40 bg-opacity-50 z-[9999999999]"
                >
                    <div className="bg-black max-h-[60vh] mx-10 w-full md:w-[40%] border-2 overflow-auto border-[#FFD989] p-8 rounded-xl relative">
                        <h2 className="text-2xl text-[#FFD989] tracking-wide text-center font-bold">
                            IMPORTANT ANNOUNCEMENT!
                        </h2>
                        <p className="mt-2 text-center text-white">
                            We've noticed some fake accounts pretending to be us across
                            platforms like DISCORD, INSTAGRAM, AND OTHERS.
                        </p>
                        <ul className="mt-4">
                            So Please:
                            <li className="list-disc ml-4">
                                Do Not engage or take any services from these accounts. We only
                                operate through this official account.
                            </li>
                            <li className="list-disc ml-4">
                                We have a single payment portal handled by our financial team.
                            </li>
                            <li className="list-disc ml-4">
                                No Editor from our team will ever ask you for money or payments directly.
                            </li>
                        </ul>
                        <p className="mt-4 text-white text-justify">
                            4Shan Digital does not take responsibility for interactions with these fake accounts. Our team is actively working to counter these issues. Our official links are in the captions - Please Join us there. STAY SAFE, AND ALWAYS DOUBLE-CHECK BEFORE MAKING ANY TRANSACTIONS.
                        </p>

                        <p className="text-[#FFD989] flex items-center text-center mt-4 font-semibold">
                            <hr className="w-full border-[#FFD989]"/>
                            <span className="w-full">THANK YOU<br className="hidden md:block"/> FOR YOUR SUPPORT</span>
                            <hr className="w-full border-[#FFD989]"/>
                        </p>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-white rounded-full hover:bg-[#ffd989] hover:text-black absolute right-2 top-2"
                        >
                            <CgCloseO size={25}/>
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Popup;
