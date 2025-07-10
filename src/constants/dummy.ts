import { RelatedEventCardProps } from "@/components/ui/RelatedEventsCard";

export interface EventDetailData {
  title: string;
  type: string;
  organizer: string;
  date: string;
  imageCaption: string;
  paragraphs: string[];
  subImageCaption: string;
  subHeading: string;
  subParagraphs: string[];
}

export const dummyEventDetail: EventDetailData = {
  title: "Event Title",
  type: "Current Event",
  organizer: "Catherine Uchenna Onyeulo",
  date: "June 3rd, 2025",
  imageCaption: "Image caption or short info about image",
  paragraphs: [
    `From tech talks to hackathons, campus meetups to code sprints — NACOS
     events are where ideas spark and connections grow. Whether you're
     looking to learn something new, build your network, or just vibe with
     fellow tech heads, there's always something happening.`,
    `From tech talks to hackathons, campus meetups to code sprints — NACOS
     events are where ideas spark and connections grow. Whether you're
     looking to learn something new, build your network, or just vibe with
     fellow tech heads, there's always something happening.`,
  ],
  subImageCaption: "Another event moment",
  subHeading: "Sub Heading",
  subParagraphs: [
    `Before embarking on your journey, take the time to research your
     destination. This includes understanding the local culture, customs,
     and laws, as well as identifying top attractions, restaurants, and
     accommodations.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  ],
};

export const eventsData: RelatedEventCardProps[] = [
  {
    date: "September 30, 2025",
    location: "LASU Main Auditorium",
    title: "Catchy Title About Some Event",
    description:
      "From tech talks to hackathons, campus meetups to code sprints — NACOS events are where...",
    link: "/events/catchy-title-1",
    imageUrl: "https://placehold.co/600x400/e2e8f0/666?text=Event+Image",
  },
  {
    date: "October 15, 2025",
    location: "Online via Zoom",
    title: "Introduction to Web3 & Blockchain",
    description:
      "Join us for a beginner-friendly session on the fundamentals of decentralized technology.",
    link: "/events/intro-to-web3",
    imageUrl: "https://placehold.co/600x400/e2e8f0/666?text=Another+Image",
  },
];
