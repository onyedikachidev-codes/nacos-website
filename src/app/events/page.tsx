"use client";

import React, { useState } from "react";
import group from "../../../public/images/group-image.jpg";
import TabsMini from "@/components/ui/TabsMini";
import Search from "@/components/ui/Search";
import EventCard from "@/components/features/EventCard";
import PageBanner from "@/components/ui/PageBanner";
import { eventsTab } from "../../components/ui/eventsTab";

export default function Events() {
  const [value, setValue] = useState("");

  return (
    <main>
      <PageBanner
        imageUrl={group}
        imageAlt="A crowd of students at a tech conference"
        title="Events"
        subtitle="Stay updated with the latest tech gatherings, workshops, and national conferences"
        overlayClassName="bg-yellow-600/80" // Your custom overlay style
      />

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
          Slug="tech-conference-2025"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          imgEnd={true}
          Slug="tech-conference-2024"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          Slug="tech-conference-2023"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
        <EventCard
          Date="16th May, 2025"
          Title="Catchy Title About Some Event"
          EventDate="September 30, 2025"
          Location="S.L. Edu Hall"
          imgEnd={true}
          Slug="tech-conference-2022"
          Description="From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening."
        />
      </section>
    </main>
  );
}
