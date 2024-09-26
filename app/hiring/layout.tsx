import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Hiring - 4Shan Digital",
    description: "Your one stop, for all your digital needs.",
};

export default function HiringLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en">
            {children}
        </div>
    );
}