import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Community } from "../Communities/Communities";
import { MapPin, ArrowRight } from "lucide-react";

const CommunityCard: React.FC<{ community: Community }> = ({ community }) => {
  return (
    <div className="overflow-hidden flex flex-col md:flex-row mb-8 last:mb-0">
      {/* Image Section */}
      <div className="relative w-full md:w-2/5 lg:w-1/3 h-72 md:h-auto flex-shrink-0">
        <Image
          src={community.image}
          alt={community.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#178C05] mb-3">
          {community.title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-2">
          <MapPin size={16} className="text-gray-500 mr-2" />
          {community.platform}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {community.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={community.joinLink}
            className="inline-flex items-center justify-center bg-green-600 text-white font-medium py-2 px-5 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Join Community <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link
            href={community.learnMoreLink}
            className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-md hover:bg-gray-50 transition-colors duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
