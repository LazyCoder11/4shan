import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const IRL = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center px-10 md:px-20 gap-20 my-20'>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/irl.jpg"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                In real life, the best stories are lived, not just told.
                </h2>
                <p className='text-xl'>
                We have crafted stories, brought our client's vision and edited it to them their reality, helping them skyrocket their views.
                </p>
                <Button title='Explore' href='/work/in-real-life' className='px-5 py-2 rounded-xl w-fit' />
            </div>
        </div>
    )
}

export default IRL