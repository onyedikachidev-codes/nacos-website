import Link from "next/link";
import React from "react";

export interface OpportunitesCardProps {
  logo: React.ReactNode;
  jobTitle: string;
  companyName: string;
  description: string;
  tags: string[];
  salaryRange: string;
  deadline: string;
  location: string;
  jobType: string;
  slug: string;
}

export default function OpportunitesCard({
  logo,
  jobTitle,
  companyName,
  description,
  tags,
  salaryRange,
  deadline,
  location,
  jobType,
  slug,
}: OpportunitesCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-sm shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          {logo}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{jobTitle}</h2>
              <p className="text-md text-gray-600">{companyName}</p>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-sm bg-white text-gray-800 shadow-sm`}
            >
              {jobType}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 py-3.5 max-w-[90%]">{description}</p>

      <div className="flex flex-wrap gap-5 mb-8">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap gap-x-10 gap-y-2 text-gray-700">
          <div>
            <span className="text-gray-500 block">Salary Range:</span>
            <span className="font-semibold">{salaryRange}</span>
          </div>
          <div>
            <span className="text-gray-500 block">Application Deadline:</span>
            <span className="font-semibold">{deadline}</span>
          </div>
          <div>
            <span className="text-gray-500 block">Location:</span>
            <span className="font-semibold">{location}</span>
          </div>
        </div>

        <Link
          href={`/opportunities/${slug}`}
          className="bg-green-700 text-white font-semibold py-2 px-5 rounded-full hover:bg-green-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
