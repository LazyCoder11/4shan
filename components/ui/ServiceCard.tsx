import Image from "next/image";
import React, { FC } from "react";
import Button from "./Button";

interface CardProps {
  heading: string;
  href: string;
  bullets: string[]; // New prop to hold the bullet points
  src?: string;
}

const ServiceCard: FC<CardProps> = ({
  heading,
  href,
  bullets,
  src, // Destructure the bullets prop
}) => {
  return (
    <div className="h-fit flex flex-col border-2 rounded-3xl border-[#FFD989] bg-gradient-to-t from-black to-[#ffda8960] card-shadow">
      <div className="p-5 md:p-10 flex flex-col gap-5">
        <Image
          src={href}
          alt={heading}
          width={300}
          height={300}
          className="w-full rounded-2xl"
        />
        <h2 className="text-[8vw] md:text-[2vw]">{heading}</h2>
        <ul className="list-none list-inside text-[4vw] md:text-[1vw]">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <Image
                src="/images/RightTick.svg" // Replace this with your bullet image path
                alt="Bullet"
                width={20} // Adjust width
                height={20} // Adjust height
                className="mt-1" // Aligns the bullet properly with text
              />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="">
          <Button
            title="Read more"
            href={src}
            icon="/images/Arrow.svg"
            iconHeight={18}
            iconWidth={18}
            className="px-10 py-2 rounded-xl gap-5 justify-center text-xl transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
