import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact us - 4Shan Digital",
    description: "Your one stop, for all your digital needs.",
};

export default function ContactLayout({
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