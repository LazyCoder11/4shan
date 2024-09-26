import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnimationProvider } from "@/context/AnimateContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4Shan Digital -- Home",
  description: "Your one stop, for all your digital needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montreal">
        <AnimationProvider>
          <Navbar />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}