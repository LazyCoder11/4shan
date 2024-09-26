import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Thumbnails - Valorant",
    description: "Your one stop, for all your digital needs.",
};

export default function PubgThumbnailsLayout({
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