import React from 'react';
import Thumbnails from './ui/Thumbnails';
import Image from 'next/image';

const Desktop = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center relative">
            {/* Desktop frame */}
            <div className="w-[1200px] h-[700px] bg-black relative border-4 border-[#D8D8D8] rounded-xl shadow-xl overflow-hidden">

                {/* Top black bezel with camera */}
                <div className="absolute z-20 top-0 left-0 w-full h-8 bg-[#000] flex justify-center items-center rounded-t-lg">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div> {/* Camera */}
                </div>

                {/* Screen Content */}
                <div className="absolute inset-10 top-12 bottom-28 overflow-auto">
                    <Thumbnails />
                </div>

                {/* Bottom thicker bezel */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-[#D8D8D8] flex justify-center items-center rounded-b-lg">
                    {/* Apple logo or Placeholder */}
                    <div className="text-black text-3xl font-bold">
                        <Image
                            src={"/images/icon.png"}
                            alt='Icon'
                            width={50}
                            height={50}
                            className='bg-black p-3 rounded-full'
                        />
                    </div>
                </div>
            </div>

            {/* Stand Design */}
            <div className="absolute -z-20 bottom-[10px] left-[50%] -translate-x-1/2 w-[250px] h-[200px] bg-[#C0C0C0] rounded-lg flex justify-center items-end shadow-lg">
                {/* <div className="w-[180px] h-[30px] bg-gray-700 mb-2 rounded-b-full"></div> Stand base */}
            </div>
            <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 w-[180px] h-[10px] bg-gray-600 rounded-b-lg shadow-lg"></div> {/* Stand Foot */}
        </div>
    );
};

export default Desktop;
