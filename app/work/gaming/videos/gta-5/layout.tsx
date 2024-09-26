import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Videos - GTA 5",
    description: "Your one stop, for all your digital needs.",
};

export default function GTA5VideosLayout({
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