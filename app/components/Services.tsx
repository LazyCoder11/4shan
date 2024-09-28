import React from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const Services = () => {
    return (
        <div id='services' className='min-h-screen mt-40 my-20 px-10 md:px-20'>
            <div className='flex justify-center'>
                <h2 className='text-[9vw] md:text-[3vw] text-center'>Beat Your Current Views With <br/><span className="bg-[#FFD989] text-black px-4 rounded-xl">Our Services</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-20">
                <ServiceCard
                    href='/images/video-editing.jpg'
                    heading='Video Editing'
                    bullets={[
                        'High-quality video production',
                        'Custom transitions and effects',
                        'Seamless storytelling'
                    ]}
                />
                <ServiceCard
                    href='/images/gfx.jpg'
                    heading='Graphic Design'
                    bullets={[
                        'Brand logo design',
                        'Custom illustrations',
                        'Creative social media posts'
                    ]}
                />
                <ServiceCard
                    href='/images/shortsedits.jpg'
                    heading='Content Creation'
                    bullets={[
                        'Original blog posts',
                        'SEO optimized content',
                        'Engaging social media strategies'
                    ]}
                />
                <ServiceCard
                    href='/images/socialMediaMarketing.jpg'
                    heading='Content Creation'
                    bullets={[
                        'Original blog posts',
                        'SEO optimized content',
                        'Engaging social media strategies'
                    ]}
                />
                <ServiceCard
                    href='/images/research.jpg'
                    heading='Content Creation'
                    bullets={[
                        'Original blog posts',
                        'SEO optimized content',
                        'Engaging social media strategies'
                    ]}
                />
                <ServiceCard
                    href='/images/webDevelopment.webp'
                    heading='Content Creation'
                    bullets={[
                        'Original blog posts',
                        'SEO optimized content',
                        'Engaging social media strategies'
                    ]}
                />
                {/* Add more ServiceCards as needed */}
            </div>
        </div>
    );
}

export default Services;
