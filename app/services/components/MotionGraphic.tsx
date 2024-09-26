import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const MotionGraphic = () => {
    return (
        <div className='flex justify-center px-20 gap-20 my-20'>
            <div className="w-1/2 flex flex-col justify-center gap-10">
                <h2 className='text-4xl'>
                Motion graphics: where still images dance and stories come alive.
                </h2>
                <p className='text-xl'>
                We have edited all sorts of content in Motion Graphics, and we specialize in Cashcow editing.
                </p>
                <Button title='Explore' href='/work/motion-graphics' className='px-5 py-2 rounded-xl w-fit' />
            </div>
            <div className="w-fit flex items-center">
                <Image
                    src={"/images/MG.jpg"}
                    width={400}
                    height={400}
                    alt='Gaming'
                    className='rounded-3xl border-[#FFD989] border-2 card-shadow'
                />
            </div>
        </div>
    )
}

export default MotionGraphic