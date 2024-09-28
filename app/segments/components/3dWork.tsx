import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const Work3D = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center px-10 md:px-20 gap-20 my-20'>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                    3D work transforms imagination into reality, adding depth and dimension to dreams.
                </h2>
                <p className='text-xl'>
                    Explore our stunning 3D designs that blend creativity and technology, transforming concepts into intricate, lifelike models with depth and detail.
                </p>
                <Button title='Explore' href='/work/3d-work' className='px-5 py-2 rounded-xl w-fit' />
            </div>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/3dworkService.jpg"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
        </div>
    )
}

export default Work3D