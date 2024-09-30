import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Shorts - GTA 5",
    description: "Your one stop, for all your digital needs.",
};

export default function GTAShortsLayout({
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