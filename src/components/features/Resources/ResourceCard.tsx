// src/components/ResourceCard.tsx

import React from "react";
import Link from "next/link";
import { Heart, Download } from "lucide-react";
import { Resource } from "../Resources/Resources";

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm border border-gray-100 p-6 max-w-md mx-auto flex flex-col justify-between h-full">
      {/* Top Section: Title and Heart Icon */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-800 leading-snug pr-4">
          {resource.title}
        </h3>
        <Heart
          size={20}
          className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200"
        />
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-300 text-gray-900 text-xs font-medium px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {resource.description}
      </p>

      {/* Bottom Section: File Info and Download Button */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        {/* File Info */}
        <div className="flex items-center text-gray-900 text-sm font-medium">
          <span className="mr-2 uppercase">{resource.fileType}</span>
          <span>{resource.fileSize}</span>
        </div>

        {/* Download Button */}
        <Link
          href={resource.downloadLink}
          className="inline-flex items-center bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 text-sm"
          download // Prompts browser to download the file
        >
          Download <Download size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
