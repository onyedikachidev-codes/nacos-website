import React from "react";
import Image from "next/image";

import { Calendar1Icon, MapPin } from "lucide-react";
import Link from "next/link";
import event from "../../../../public/images/event.jpg";

interface EventCardProps {
  Date: string;
  Title: string;
  EventDate: string;
  Location: string;
  Description: string;
  Slug: string;
  imgEnd?: boolean;
}

export default function EventCard({
  Date,
  Title,
  EventDate,
  Location,
  Description,
  Slug,
  imgEnd = false,
}: EventCardProps) {
  return (
    <div
      className={`relative bg-gray-100 flex justify-around py-6 px-4 space-x-2 mx-10 rounded-sm ${
        imgEnd ? "flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-[37.5%]">
        <Image
          src={event}
          alt="Event Image"
          className="object-cover h-65 rounded-sm"
        />
      </div>

      <div className="w-[58%] space-y-4 flex flex-col">
        <p className="text-xs font-semibold text-gray-700">{Date}</p>
        <h2 className="text-2xl font-semibold text-green-600">{Title}</h2>

        <div className="flex items-center gap-9">
          <p className="text-sm flex gap-1.5">
            <span>
              <Calendar1Icon className="h-5 w-5" />{" "}
            </span>
            <span> {EventDate}</span>
          </p>

          <p className="text-sm flex gap-1.5">
            <span>
              <MapPin className="h-5 w-5" />
            </span>
            <span> {Location}</span>
          </p>
        </div>

        <p>{Description}</p>

        <Link className="mt-auto cursor-pointer" href={`/events/${Slug}`}>
          <button className=" translate-y-1 inline-flex w-max bg-green-600 text-white font-medium px-4 py-2 rounded-sm shadow-md hover:bg-green-700 cursor-pointer">
            Read more <span className="text-sm pl-2">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
