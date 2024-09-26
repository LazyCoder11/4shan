import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Videos - Valorant",
    description: "Your one stop, for all your digital needs.",
};

export default function ValorantVideosLayout({
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