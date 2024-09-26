import Image from 'next/image';
import React, { FC } from 'react';
import Button from './ui/Button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

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
        <HoverBorderGradient
            containerClassName="rounded-3xl bg-[#FFD989] p-0"
            as="button"
            className="bg-black flex items-center h-full"
        >
            <div className='h-full flex flex-col rounded-3xl border-[#FFD989] bg-gradient-to-t from-black to-[#ffda8960] card-shadow  transition-all dureation-500'>
                <div className="p-10 flex flex-col justify-around gap-5">
                    <h2 className='text-[2vw] leading-none'>{heading} - <span className='text-[1.5vw] text-white/[.6]'>{subHeading}</span></h2>
                    <p className='text-[1vw]'>
                        {bullets}
                    </p>
                    <div className="">
                        <Button title='Apply' href='https://wkf.ms/3YOQFQK' icon='/images/Arrow.svg' iconHeight={18} iconWidth={18} className='px-10 py-2 rounded-xl gap-5 justify-center text-xl transition-all duration-700' />
                    </div>
                </div>
            </div>
        </HoverBorderGradient>
    );
}

export default Card;
