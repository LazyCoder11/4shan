import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const WebDev = () => {
    return (
        <div className='flex justify-center px-20 gap-20 my-20'>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/Web.png"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                Web Development turns ideas into interactive experiences, bringing visions to life online.
                </h2>
                <p className='text-xl'>
                Explore our cutting-edge web development services that merge innovation and technology, turning ideas into dynamic, responsive websites with seamless functionality and striking design.
                </p>
                <Button title='Explore' href='/work/3d-work' className='px-5 py-2 rounded-xl w-fit' />
            </div>

        </div>
    )
}

export default WebDev