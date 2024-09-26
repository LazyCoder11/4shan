import { cn } from "@/lib/utils";
import Marquee from "./ui/VerticalTestimonials";
import Image from "next/image";

const reviews = [
    {
        name: "Darpan is Live",
        username: "86.4k Subscribers",
        body: "“4Shan Digital has been incredible to work with! They understand our vision perfectly and deliver high-quality content every time. Their professionalism and creativity make them a top choice. Highly recommend!“",
        img: "/images/review1.svg",
    },
    {
        name: "Gaming Guru",
        username: "1.14M Subscribers",
        body: "“Awesome Work By Whole Team ❤️ Very Professional, Always Projects Done On Time.“",
        img: "/images/review2.jpg",
    },
    {
        name: "REBEL PLAYS",
        username: "110k Subscribers",
        body: "“Team 4shan has very talented editors. I've recently started working with them and they haven't disappointed me at all. All of their work shows how much efforts they put in and they deliver the content on time as well.“",
        img: "/images/review3.jpg",
    },
    {
        name: "REBEL PLAYS",
        username: "110k Subscribers",
        body: "“Team 4shan has very talented editors. I've recently started working with them and they haven't disappointed me at all. All of their work shows how much efforts they put in and they deliver the content on time as well.“",
        img: "/images/review3.jpg",
    },
    {
        name: "REBEL PLAYS",
        username: "110k Subscribers",
        body: "“Team 4shan has very talented editors. I've recently started working with them and they haven't disappointed me at all. All of their work shows how much efforts they put in and they deliver the content on time as well.“",
        img: "/images/review3.jpg",
    },
    {
        name: "REBEL PLAYS",
        username: "110k Subscribers",
        body: "“Team 4shan has very talented editors. I've recently started working with them and they haven't disappointed me at all. All of their work shows how much efforts they put in and they deliver the content on time as well.“",
        img: "/images/review3.jpg",
    },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 3));
const secondRow = reviews.slice(Math.floor(reviews.length / 3), Math.floor(2 * reviews.length / 3));
const thirdRow = reviews.slice(Math.floor(2 * reviews.length / 3));

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-fit w-fit cursor-pointer overflow-hidden rounded-xl border p-6",
                // dark styles
                "border-gray-50/[.1] bg-[#FFD989] hover:opacity-90",
            )}
        >
            <div className="flex flex-col gap-2">
                <blockquote className="mt-2 text-xl text-black">{body}</blockquote>
                <div className="flex items-center gap-2">
                    <Image
                        src={img}
                        alt={name}
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <figcaption className="text-xl font-bold text-black">
                            {name}
                        </figcaption>
                        <p className="text-lg font-medium text-black">{username}</p>
                    </div>
                </div>
            </div>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="flex min-h-screen px-20 w-full flex-col gap-20 items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div className='flex justify-center'>
                <h2 className='text-[3vw] text-center'>Here's what some of our clients have to say about <span className="bg-[#FFD989] text-black px-4 rounded-xl">4Shan Digital.</span></h2>
            </div>
            <div className="flex h-[80vh] relative">
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {thirdRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background"></div>
            </div>
        </div>
    );
}
