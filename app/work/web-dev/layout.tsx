import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Motion Graphics - 4Shan Digital",
    description: "Your one stop, for all your digital needs.",
};

export default function WebDevLayout({
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