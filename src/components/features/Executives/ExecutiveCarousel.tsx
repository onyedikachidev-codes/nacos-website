// src/components/ExecutivesCarousel.tsx
"use client";

import React, { useState } from "react";
import { executives } from "../Executives/Executives"; // Adjust path
import ExecutiveCard from "../Executives/index";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExecutivesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many cards are visible at once on large screens
  const cardsToShow = 3;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const goToNext = () => {
    const lastIndex = executives.length - cardsToShow;
    setCurrentIndex((prevIndex) =>
      prevIndex >= lastIndex ? lastIndex : prevIndex + 1
    );
  };

  // Button disabling logic
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= executives.length - cardsToShow;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
            MEET THE EXECUTIVES
          </h2>
          <div className="my-2 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-800"></div>
            <div className="h-1 w-40 bg-yellow-500 rounded-3xl"></div>
            <div className="h-2 w-2 rounded-full bg-blue-800"></div>
          </div>
          <p className="text-gray-600 mt-2">
            The team working to make NACOS-LASU better for you
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={isPrevDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous executive"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Carousel Viewport */}
          <div className="w-full lg:w-10/12 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {executives.map((executive, index) => (
                <ExecutiveCard key={index} executive={executive} />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={isNextDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next executive"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExecutivesCarousel;
