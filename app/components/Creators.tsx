import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import React from 'react'

const Creators = () => {
    return (
        <div id='creators' className="h-full mt-20 px-20 rounded-md flex flex-col gap-10 bg-black dark:bg-grid-white/[0.05]">
            <div className='flex justify-center'>
                <h2 className='text-[3vw] text-center'>Creators We Worked with</h2>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <div className='flex justify-center'>
                <h2 className='text-[3vw] text-center'>Loved by more than <span className="bg-[#FFD989] text-black px-4 rounded-xl">150+ Creators</span></h2>
            </div>
        </div>
    )
}

export default Creators

const testimonials = [
    {
        href: '/images/creator1.webp',
        title: "A Tale of Two Cities",
        name: "Creators"
    },
    {
        href: '/images/creator2.webp',
        title: "Hamlet",
        name: "Creators"
    },
    {
        href: '/images/creator3.webp',
        title: "A Dream Within a Dream",
        name: "Creators"
    },
    {
        href: '/images/creator4.webp',
        title: "Pride and Prejudice",
        name: "Creators"
    },
    {
        href: '/images/creator5.webp',
        title: "Moby-Dick",
        name: "Creators"
    },
    {
        href: '/images/creator6.webp',
        title: "Moby-Dick",
        name: "Creators"
    },
    {
        href: '/images/creator7.webp',
        title: "Moby-Dick",
        name: "Creators"
    },
];