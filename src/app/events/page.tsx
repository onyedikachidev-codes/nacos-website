"use client";

import React, { useState } from "react";
import group from "../../../public/images/group-image.jpg";
import Image from "next/image";
import TabsMini from "@/components/ui/TabsMini";
import Search from "@/components/ui/Search";
import EventCard from "@/components/features/EventCard";

export const eventsTab = [
  {
    name: "Current Events",
    path: "/events",
    exact: true,
  },
  {
    name: "Past Events",
    path: "/events/past-events",
  },
];

export default function Events() {
  const [value, setValue] = useState("");
  return (
    <main>
     <div className="relative w-full h-32">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={group}
          alt="Group of students"
          layout="fill"
          className="object-cover object-[center_55%]"
        />
      </div>

      <div className="absolute inset-0 bg-yellow-600/80 z-10" />

      <div className="relative z-20 text-center w-full h-full flex flex-col items-center justify-center text-gray-200">
        <h1 className="text-3xl font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">Events</h1>
        <p className="text-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
          -Stay updated with the latest tech gatherings, workshops, and
          national conferences
        </p>
      </div>
    </div>


      <div className="flex justify-between items-center mt-6 mb-4 px-3 sm:px-5 lg:px-7">
        <Search value={value} setValue={setValue} />
        <TabsMini tabs={eventsTab} />
      </div>

      <section className="my-14 space-y-15">
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          slug="tech-conference-2025"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          imgEnd={true}
          slug="tech-conference-2024"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          slug="tech-conference-2023"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          imgEnd={true}
          slug="tech-conference-2022"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
      </section>
    </main>
  );
}
