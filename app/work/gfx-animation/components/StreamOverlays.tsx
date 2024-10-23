import React, { FC } from "react";
import Image from "next/image";

const StreamOverlays: FC = () => {
    return (
        <div>
            <div className="flex justify-center items-center mb-10 [text-shadow:0px_0px_100px_#FFD989] font-bold">
                <h2 className="text-[4em]">
                    GFX Works
                </h2>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-10 md:px-20">
                {/* First Image */}
                <div className="col-span-1 lg:col-span-3 w-full">
                    <Image
                        src={"/images/eclairsBanner.jpg"}
                        alt="Thumbnail 3"
                        width={1500}
                        height={800}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                <div className="col-span-1 lg:col-span-3 w-full">
                    <Image
                        src={"/images/chikuBanner.jpg"}
                        alt="Thumbnail 3"
                        width={1500}
                        height={800}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                <div className="col-span-1 lg:col-span-2 lg:row-span-2 w-full">
                    <Image
                        src={"/images/dadamnBanner.jpg"}
                        alt="da damn large"
                        width={1000}
                        height={600}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                {/* Second Image */}
                <div className="col-span-1 w-full">
                    <Image
                        src={"/images/starkLogo.jpg"}
                        alt="da damn large"
                        width={1000}
                        height={500}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                {/* Third Image */}
                <div className="col-span-1 lg:col-span-3 w-full">
                    <Image
                        src={"/images/starkBanner.jpg"}
                        alt="Thumbnail 3"
                        width={1500}
                        height={800}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

            </div>


            {/* Footer Section */}
            <div className="flex flex-col items-center justify-center px-10 gap-10 mt-20">
                <h2 className="text-[7vw] md:text-[3vw] text-center">
                    <span className="bg-[#FFD989] text-black px-4 rounded-xl">
                        These are nothing at all.
                    </span>{" "}
                    We have much more...
                </h2>
                <a className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer">
                    <h3>Get In Touch</h3>
                    <h4 className="text-2xl">contact@4shan.in</h4>
                </a>
            </div>
        </div>
    );
};

export default StreamOverlays;
