import { cn } from '@/lib/utils';
import React, { FC } from 'react'
import Image from 'next/image';

interface ButtonProps {
    title: string;
    href: string;
    className?: string;
    icon?: '/images/Arrow.svg';
    iconWidth?: number;
    iconHeight?: number;
    onClick?: () => {};
}

const Button: FC<ButtonProps> = ({
    title,
    href,
    className,
    icon,
    iconWidth,
    iconHeight,
    onClick
}) => {
    return (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={cn(`bg-[#FFD989] border text-black flex items-center hover:bg-transparent hover:border-[#FFD989] hover:text-[#FFD989] transition-all duration-500`, className)}>
            {title}
            {icon && (
                <span
                    style={{ width: iconWidth, height: iconHeight }}
                    className=""
                >

                    <svg
                        width={iconWidth}
                        height={iconHeight}
                        viewBox="0 0 22 21"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.38379 0C1.38379 1.81265 2.85323 3.28209 4.66587 3.28209H16.1415L0.932451 17.8098C0.242472 18.4688 0.24247 19.5705 0.93245 20.2296C1.57913 20.8473 2.59722 20.8473 3.24389 20.2296L10.326 13.4648L18.5639 5.59596V16.2565C18.5639 18.1542 20.1023 19.6925 21.9999 19.6925V0H1.38379Z"
                            fill="currentColor"
                        />
                    </svg>
                </span>
            )}
        </a>
    )
}

export default Button