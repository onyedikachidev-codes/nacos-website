import { Calendar, CircleUserRound, Tag } from "lucide-react";
import React from "react";
import Image from "next/image";
import event from "../../../../public/images/event.jpg";
import { dummyEventDetail, eventsData } from "@/constants/dummy";
import EnquiryForm from "@/components/features/EnquiryForm";
import RelatedEventCard from "@/components/ui/RelatedEventsCard";

export default function EventDetailLayout({}) {
  const {
    title,
    type,
    organizer,
    date,
    imageCaption,
    paragraphs,
    subHeading,
    subParagraphs,
    subImageCaption,
  } = dummyEventDetail;
  return (
    <section>
      <h1 className="text-center mt-20 font-semibold text-3xl">{title}</h1>

      <div className="flex flex-wrap gap-6 items-center mt-7 justify-center ">
        <span className="flex items-center gap-2">
          <Tag className="w-6 h-6 text-green-700 " />
          {type}
        </span>
        <span className="flex items-center gap-2">
          <CircleUserRound className="w-6 h-6 text-gray-600" />
          {organizer}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-gray-600" />
          {date}
        </span>
      </div>

      <div>
        <div className="relative w-full md:w-[50%] mt-14 mx-auto">
          <Image
            src={event}
            alt="Event Image"
            className="object-cover h-75 rounded-sm w-full"
          />
        </div>
        <p className="text-sm text-center pt-2 text-gray-700">{imageCaption}</p>

        {paragraphs.map((text, index) => (
          <p
            key={index}
            className={`w-full md:w-[50%] mx-auto text-gray-800 ${
              index === 0 ? "mt-10" : "mt-6"
            }`}
          >
            {text}
          </p>
        ))}
      </div>

      <div>
        <div className="relative w-full md:w-[50%] mt-14 mx-auto">
          <Image
            src={event}
            alt="Event Image"
            className="object-cover h-75 rounded-sm w-full"
          />
        </div>
        <p className="text-sm text-center pt-2 text-gray-700">
          {subImageCaption}
        </p>

        <div className=" w-full md:w-[50%] mt-10 mx-auto mb-20">
          <h3 className="font-semibold text-xl mb-4">{subHeading}</h3>

          {subParagraphs.map((text, index) => (
            <p key={index} className="mt-6 text-gray-800">
              {text}
            </p>
          ))}
        </div>
      </div>

      <EnquiryForm />

      <div className="max-w-4xl mx-auto">
        <h4 className="font-semibold text-xl my-4 ">Related Events</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.map((event, index) => (
            <RelatedEventCard
              key={index}
              date={event.date}
              location={event.location}
              title={event.title}
              description={event.description}
              link={event.link}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
