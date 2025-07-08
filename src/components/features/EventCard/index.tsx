import React from "react";
import Image from "next/image";

import event from "../../../../public/images/event.jpg";
import { Calendar1Icon, MapPin } from "lucide-react";

interface EventCardProps {
  Date: string;
  Title: string;
  EventDate: string;
  Location: string;
  Description: string;
  imgEnd?: boolean;
}

export default function EventCard({
  Date,
  Title,
  EventDate,
  Location,
  Description,
  imgEnd = false,
}: EventCardProps) {
  return (
    <div
      className={`relative bg-gray-100 flex justify-around py-3 mx-10 rounded-sm ${
        imgEnd ? "flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-[35%]">
        <Image
          src={event}
          alt="Group of students"
          className="object-cover h-65 rounded-sm"
        />
      </div>

      <div className="w-[60%] space-y-4">
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
        <button className="bg-green-600 text-white font-medium px-4 py-2 rounded-sm shadow-md hover:bg-green-700">
          Read more <span className="text-sm pl-2">→</span>
        </button>
      </div>
    </div>
  );
}
