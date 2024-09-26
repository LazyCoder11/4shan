import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Thumbnails - PUBG/BGMI",
    description: "Your one stop, for all your digital needs.",
};

export default function PubgShortsLayout({
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