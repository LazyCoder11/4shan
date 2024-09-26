import React from 'react'
import Thumbnails from './ui/Thumbnails'

const Desktop = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center relative box-blur">
            <div className="w-[1280px] h-[600px] bg-black relative border-2 border-[#FFD989] rounded-xl shadow-lg overflow-auto">
                {/* Top black frame with camera */}
                <div className="absolute z-20 top-0 left-0 w-full h-6 bg-[#FFD989] flex justify-center items-center rounded-t-lg">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="absolute top-20 pb-10">
                    <Thumbnails />
                </div>
                {/* Bottom Stand */}
            </div>
            <div className="absolute bottom-0 left-1/2 -z-20 transform -translate-x-1/2 w-[120px] h-[120px] bg-[#FFD989] rounded-b-lg flex justify-center">
                <div className="w-[100px] h-[20px] bg-gray-400 mt-4"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 -z-20 transform -translate-x-1/2 w-[150px] h-[10px] bg-[#FFD989] rounded-b-lg flex justify-center shadow-lg">
            </div>
        </div>
    )
}

export default Desktop