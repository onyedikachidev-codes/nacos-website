// src/components/ExecutiveCard.tsx

import React from "react";
import Image from "next/image";
import { Executive } from "../Executives/Executives";

const ExecutiveCard: React.FC<{ executive: Executive }> = ({ executive }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="relative h-64 w-full">
          <Image
            src={executive.image}
            alt={executive.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">{executive.name}</h3>
          <p className="text-md text-green-600 mt-1">{executive.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCard;
