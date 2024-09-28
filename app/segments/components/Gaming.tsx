import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const Gaming = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center px-10 md:px-20 gap-20'>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/gaming.jpg"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                    PUBG/BGMI, Valorant, GTA. You name it, and we probably edited that Game.
                </h2>
                <p className='text-xl'>
                    We have worked with top gamers like Kapi Gaming, Snax Gaming, Rebel Playz, 8Bit Mafia, Headflicker. This is just a small list of the gaming creators we worked with. The game may vary but our edit quality doesn't - it will always skyrocket your views.
                </p>
                <Button title='Explore' href='/work/gaming/thumbnails/pubg' className='px-5 py-2 rounded-xl w-fit' />
            </div>
        </div>
    )
}

export default Gaming