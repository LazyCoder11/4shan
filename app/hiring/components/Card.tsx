import React, { FC, forwardRef } from 'react';
import Button from './ui/Button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { motion } from 'framer-motion';

interface CardProps {
    heading: string;
    subHeading: string;
    href: string;
    bullets: string;
    // ref: LegacyRef<HTMLDivElement> | undefined; // Prop to hold bullet points
}

const cardVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
};

// Use forwardRef to pass ref to the component
const Card = forwardRef<HTMLDivElement, CardProps>(({ heading, subHeading, bullets, href }, ref) => {
    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5 }} // Animation duration
        >
            <HoverBorderGradient
                containerClassName="rounded-3xl bg-[#FFD989] p-0"
                as="button"
                className="bg-black flex items-center h-full"
            >
                <div className='h-full flex flex-col rounded-3xl border-[#FFD989] bg-gradient-to-t from-black to-[#ffda8960] card-shadow  transition-all dureation-500'>
                    <div className="p-10 flex flex-col justify-around gap-5">
                        <h2 className='text-[5vw] md:text-[2vw] leading-none'>{heading} - <span className='text-[vw] md:text-[1.5vw] text-white/[.6]'>{subHeading}</span></h2>
                        <p className='text-2vw md:text-[1vw]'>
                            {bullets}
                        </p>
                        <div className="">
                            <Button title='Apply' href={href} icon='/images/Arrow.svg' iconHeight={18} iconWidth={18} className='px-10 py-2 rounded-xl gap-5 justify-center text-xl transition-all duration-700' />
                        </div>
                    </div>
                </div>
            </HoverBorderGradient>
        </motion.div>
    );
});

// Export the forwardRef-wrapped Card component
export default Card;
