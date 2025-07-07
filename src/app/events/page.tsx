"use client";

import React, { useState } from "react";
import group from "../../../public/images/group-image.jpg";
import Image from "next/image";
import TabsMini from "@/components/ui/TabsMini";
import Search from "@/components/ui/Search";

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
        <div className="text-center w-full h-full flex flex-col items-center justify-center bg-yellow-600 text-gray-200">
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-lg mb-6">
            -Stay updated with the latest tech gatherings, workshops, and
            national conferences
          </p>
        </div>

        <div className="absolute inset-0 w-full h-full">
          <Image
            src={group}
            alt="Group of students"
            layout="fill"
            className="object-cover opacity-30 object-[20%]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 mb-4 px-3 sm:px-5 lg:px-7">
        <Search value={value} setValue={setValue} />
        <TabsMini tabs={eventsTab} />
      </div>
    </main>
  );
}
