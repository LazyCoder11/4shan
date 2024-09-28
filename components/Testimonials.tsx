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
    name: "ASLA SARDAR",
    username: "98.9k Subscribers",
    body: "“It's great to work with 4Shan Digital. It's been more than six months and never faced any issue with content also they also help to improve my content on youtube and give me ideas what new we can try on youtube. Always provide videos, shorts & thumbnail on time.“",
    img: "/images/review4.jpg",
  },
  {
    name: "curlbury",
    username: "94.6k Subscribers",
    body: "“Love the way they put in alot of efforts via editing to show the best of our content on our channel. They don’t only do amazing work but make sure to deliver the work on time, which is the best part.“",
    img: "/images/review5.jpg",
  },
  {
    name: "Gaming with Latifa",
    username: "34.8k Subscribers",
    body: "“~ professional ~ good ~ quality work ~ affordable ~ punctual ~ friendly.“",
    img: "/images/review6.jpg",
  },
  {
    name: "Kiwi Shio",
    username: "28.3k Subscribers",
    body: "“I feel that joining 4shan has made my youtube journey a lot easier as they provide all the convenience for the creator along with amazing coordination ! The editing team is very talented and the management team is polite and helpful , always ready to help with everything i need- The pricing is reasonable and the outputs are commendable !“",
    img: "/images/review7.jpg",
  },
  {
    name: "DemondproX Gaming",
    username: "22k Subscribers",
    body: "“4Shan has been amazing to work with! Their creativity and attention to detail really stand out. They consistently deliver top-tier work that aligns perfectly with my brand. Highly recommend their services!“",
    img: "/images/review8.jpg",
  },
  {
    name: "AshX",
    username: "20.3k Subscribers",
    body: "“Working with 4Shan Digital has been fantastic! Their team is efficient, creative, and delivers outstanding results every time. Highly recommend them for all your digital needs!“",
    img: "/images/review9.jpg",
  },
  {
    name: "Gaming MagZ",
    username: "18.4k Subscribers",
    body: "“Amazing Packages and Top Notch editing at this budget is extremely rare ✔️“",
    img: "/images/review10.jpg",
  },
  {
    name: "Dynamic Jatt",
    username: "10.4k Subscribers",
    body: "“1. On time delivery of videos/thumbnails 2. Best thumbnail editors as far as I have seen till now. 3. Co-operative team to assist me. 4. Management is top-notch as well. 5. Pricing is as good as it can be.“",
    img: "/images/review11.jpg",
  },
  {
    name: "DORE the PRO",
    username: "6.08k Subscribers",
    body: "“Very good edits , on time video thumbnails are available, discipline staf“",
    img: "/images/review12.jpg",
  },
  {
    name: "Reckless",
    username: "5.82k Subscribers",
    body: "“Good professional people focused on getting things done in given timeframe.“",
    img: "/images/review13.jpg",
  },
  {
    name: "Darpan Arora Vlogs",
    username: "5.57k Subscribers",
    body: "“Great work, on Time work , Thumbnail and shorts editors are jod.“",
    img: "/images/review14.jpg",
  },
  {
    name: "RiGiStar",
    username: "2.02k Subscribers",
    body: "“Experience went well. 4Shan doing great in the field of providing editing and YT services. Impressive !!“",
    img: "/images/review15.jpg",
  },
  {
    name: "Damnguy Plays",
    username: "956 Subscribers",
    body: "“Professional and good working ethics“",
    img: "/images/review16.jpg",
  },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 3));
const secondRow = reviews.slice(
  Math.floor(reviews.length / 3),
  Math.floor((2 * reviews.length) / 3)
);
const thirdRow = reviews.slice(Math.floor((2 * reviews.length) / 3));

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
        "border-gray-50/[.1] bg-[#FFD989] hover:opacity-90"
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
    <div className="flex min-h-screen px-5 md:px-20 w-full flex-col gap-20 items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="flex justify-center">
        <h2 className="text-[6vw] md:text-[3vw] text-center">
          Here's what some of our clients have to say about{" "}
          <span className="bg-[#FFD989] text-black px-4 rounded-xl">
            4Shan Digital.
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row h-[80vh] relative">
        {/* For mobile view, show one column containing all testimonials */}
        <Marquee pauseOnHover vertical className="[--duration:50s] md:hidden block ">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* For larger screens, maintain the 3-column layout */}
        <div className="hidden md:flex md:flex-row">
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
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 md:h-1/2 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 md:-1/2 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  );
}
