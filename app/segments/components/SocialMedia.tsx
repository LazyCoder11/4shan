import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const SocialMedia = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center px-10 md:px-20 gap-20 my-20'>

            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                    Social Media Management turns engagement into growth, bringing brands closer to their audience.
                </h2>
                <p className='text-xl'>
                    Discover our social media management services, blending creativity and strategy to transform content into meaningful engagement and stronger brand connections.
                </p>
                <Button title='Explore' href='/work/in-real-life' className='px-5 py-2 rounded-xl w-fit' />
            </div>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/Social.jpg"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
        </div>
    )
}

export default SocialMedia