import Image from 'next/image';
import React, { FC } from 'react';
import Button from './ui/Button';

interface CardProps {
    heading: string;
    subHeading: string;
    href?: string;
    bullets: string; // New prop to hold the bullet points
}

const Card: FC<CardProps> = ({
    heading,
    subHeading,
    href,
    bullets // Destructure the bullets prop
}) => {
    return (
        <div className='h-full flex flex-col  border-2 rounded-3xl border-[#FFD989] bg-gradient-to-t from-black to-[#ffda8960] card-shadow hover:outline hover:outline-[#FFD989] hover:outline-8 transition-all dureation-500'>
            <div className="p-10 flex flex-col justify-around gap-5">
                {/* <Image
                    src={href}
                    alt={heading}
                    width={300}
                    height={300}
                    className='w-full rounded-2xl'
                /> */}
                <h2 className='text-[2vw] leading-none'>{heading} - <span className='text-[1.5vw] text-white/[.6]'>{subHeading}</span></h2>
                <p className='text-[1vw]'>
                    {bullets}
                </p>
                <div className="">
                    <Button title='Apply' href='https://wkf.ms/3YOQFQK'  icon='/images/Arrow.svg' iconHeight={18} iconWidth={18} className='px-10 py-2 rounded-xl gap-5 justify-center text-xl transition-all duration-700'/>
                </div>
            </div>
        </div>
    );
}

export default Card;
