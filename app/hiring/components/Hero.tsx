"use client"

import React, { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";

const Hero = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        // GSAP Animation for scaling up the cards
        gsap.from(cardsRef.current, {
            scale: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2, // Adds a delay between each card's animation
        });
    }, []);
    return (
        <div className="min-h-screen px-20 mt-24">
            <div className="bg-gradient-to-br from-[#FFD989] to-transparent text-black px-10 py-7 flex flex-col gap-5 rounded-3xl">
                <h2 className="text-7xl">Ready to make a meaningful impact?</h2>
                <p className="text-4xl tracking-normal">
                    At 4Shan, true strength lies in the exceptional talent of our team,
                    we’re always looking for new talent to join us, so if you’re
                    passionate.
                </p>
            </div>
            <div className="py-10">
                <h3 className="text-5xl mb-10">New Openings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <Card
                        // href="/images/video-editing.jpg"

                        heading="Shorts Editor"
                        subHeading="Valorant"
                        bullets="Looking for an experienced Shorts editor specializing in Valorant content. Must be skilled in creating high-energy, engaging edits, with a strong understanding of the game’s dynamics. Proficiency in editing software and a portfolio of gaming edits required."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Overlay Artist"
                        subHeading="Creativity"
                        bullets="We are seeking an Overlay Artist to design and add graphical elements like text, logos, and animations to enhance our video content. Proficiency in design software and a keen eye for detail are essential."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Video Editor"
                        subHeading="Editing"
                        bullets="Seeking an experienced video editor for BGMI content. Must excel in creating exciting, high-impact edits that capture key gameplay moments. Proficiency in editing software and a portfolio showcasing BGMI or similar battle royale game content required."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="GFX Artist"
                        subHeading="Creativity"
                        bullets="Seeking a skilled GFX artist with expertise in creating diverse and visually compelling graphics. Must be creative, detail-oriented, and proficient in industry-standard design software. Strong portfolio and communication skills required."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        subHeading="Research"
                        heading="Content Writer"
                        bullets="Seeking an experienced scriptwriter for creating compelling scripts for videos, ads, and promotional content. Must have a strong storytelling ability, experience with various media formats, and the capability to meet tight deadlines. Submit your resume and portfolio."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Hr"
                        subHeading="Management"
                        bullets="We are seeking an HR professional for a management role to assist with hiring, onboarding, employee support, benefits management, and ensuring compliance with labor laws. The role focuses on daily HR tasks to help maintain a smooth and positive work environment."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Social Media Manager"
                        subHeading="Management"
                        bullets="We are seeking a Social Media Manager to manage client accounts, create and post content, analyze performance, and refine strategies for engagement. The ideal candidate will be trend-savvy, skilled in content creation, and able to provide regular insights."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Team Lead"
                        subHeading="Managment"
                        bullets="We are looking for a Team Lead to oversee and guide a team, ensuring project goals are met on time and within scope. The role involves managing daily tasks, providing mentorship, resolving challenges, and fostering a positive and productive work environment."
                    />
                    <Card
                        // href="/images/video-editing.jpg"
                        heading="Content Manager"
                        subHeading="Managment"
                        bullets="We are seeking a Content Manager to oversee content creation and strategy, ensuring consistent brand messaging across all platforms. The role involves managing writers, editing content, and optimizing it for SEO and engagement."
                    />
                </div>
            </div>
            <div className="flex flex-col h-full items-center justify-center gap-10 mt-10">
                <a className="border border-[#FFD989] px-10 text-center py-5 rounded-2xl cursor-pointer">
                    <h3>Get In Touch</h3>
                    <h4 className="text-2xl">contact@4shan.in</h4>
                </a>
            </div>
        </div>
    );
};

export default Hero;