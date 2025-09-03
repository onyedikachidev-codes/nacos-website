import React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface RelatedEventCardProps {
  imageUrl: string;
  date: string;
  location: string;
  title: string;
  description: string;
  link: string;
}

export default function RelatedEventCard({
  imageUrl,
  date,
  location,
  title,
  description,
  link,
}: RelatedEventCardProps) {
  return (
    <div className="overflow-hidden flex flex-col h-full">
      <div className="bg-gray-500 h-48 w-full flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">Image Placeholder</span>
        )}
      </div>

      <div className="py-4 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-600 mb-3 space-x-10">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </span>
        </div>

        <h3 className="text-xl font-bold text-green-800 mb-2 leading-tight">
          <a href={link} className="hover:underline">
            {title}
          </a>
        </h3>

        <p className="text-gray-700 text-base mb-4 flex-grow">{description}</p>

        <div className="mt-auto">
          <Link
            href={link}
            className="inline-flex items-center bg-green-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800 transition-colors duration-300 mt-2"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
