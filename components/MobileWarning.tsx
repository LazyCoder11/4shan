// components/MobileWarning.tsx

import React from 'react';
import Image from 'next/image';

const MobileWarning: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-10">
            <Image
                src={"/images/Logo.svg"}
                width={200}
                height={200}
                alt='Logo'

            />
            <h1 className="text-center text-2xl">
               Sorry for this but Mobile view under development. <br/> We'll release it at <span className="italic text-green-500">29th Sept.</span>
            </h1>
        </div>
    );
};

export default MobileWarning;
