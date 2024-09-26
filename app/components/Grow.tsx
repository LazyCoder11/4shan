"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Grow = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const numberContainersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const textElements = textRef.current?.querySelectorAll('.animate-text');

        if (textElements) {
            gsap.fromTo(textElements,
                { y: 100, rotationX: 90, opacity: 0 },
                {
                    y: 0,
                    rotationX: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        // scrub: 1,
                    },
                }
            );
        }

        // Animate numbers
        numberContainersRef.current.forEach((container, index) => {
            if (container) {
                gsap.fromTo(container,
                    { x: '100%', opacity: 0 },
                    {
                        x: '0%',
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 100%',
                            end: 'bottom 90%',
                            toggleActions: 'play none none reverse',
                            scrub: 1, // Smooth scrubbing effect
                        },
                    }
                );
            }
        });

    }, []);

    return (
        <div className='min-h-screen px-5 lg:px-20 my-20 mt-40 relative'>
            <div ref={textRef} className="flex flex-wrap justify-center gap-3 lg:gap-3 overflow-hidden">
                <h2 className='text-[12vw] md:text-[10vw] lg:text-[3vw] leading-tight'>We</h2>
                <h2 className='text-[12vw] md:text-[10vw] lg:text-[3vw] leading-tight'>grow</h2>
                <h2 className='text-[12vw] md:text-[10vw] lg:text-[3vw] leading-tight'>as</h2>
                <h2 className='text-[12vw] md:text-[10vw] lg:text-[3vw] leading-tight'>you</h2>
                <h2 className='text-[12vw] md:text-[10vw] lg:text-[3vw] leading-tight'>grow</h2>
            </div>
            <div className="flex flex-col h-full md:flex-row justify-center rounded-[40px] py-5 items-center mt-20 box-blur">
                {[
                    { number: '10M+', text: 'VIEWS GAINED', top: '0' },
                    { number: '14K+', text: 'PROJECTS COMPLETED', top: '25%' },
                    { number: '13M+', text: 'TOTAL AUDIENCE', top: '50%' },
                    { number: '150+', text: 'CREATORS', top: '75%' }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative border-r border-[#FFD989] flex flex-col justify-center items-center grow-card w-full overflow-hidden h-[45em]"
                    >
                        <div
                            className="absolute pl-2 lg:pl-5 text-center"
                            style={{ top: item.top }}
                            ref={(el) => { numberContainersRef.current[index] = el }}
                        >
                            <p className='text-[10vw] md:text-[15vw] lg:text-[5vw] heading-textshadow'>{item.number}</p>
                            <p className='text-[7vw] md:text-[7vw] lg:text-[1.3vw]'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Grow;
