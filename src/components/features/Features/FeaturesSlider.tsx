"use client";

import React, { useState, useEffect } from "react";
import { features } from "../Features/Features";
import Link from "next/link";

const FeaturesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeFeature = features[activeIndex];

  return (
    <section
      className="bg-white py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
            FEATURES
          </h2>
          <div className="my-2 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-800"></div>
            <div className="h-1 w-24 bg-yellow-500 rounded-3xl"></div>
            <div className="h-2 w-2 rounded-full bg-blue-800"></div>
          </div>
          <p className="text-gray-800 text-xl font-semibold mt-2">
            What You Should Check Out
          </p>
        </div>

        {/* Main Card */}
        <div className="relative max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-[0_0_10px_#178C05] z-10 border-t-4 border-b-4 border-green-50">
          <div key={activeIndex} className="text-center animate-fade-in">
            <h3 className="text-4xl font-bold text-green-600">
              {activeFeature.title}
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              {activeFeature.description}
            </p>
            <div className="mt-8">
              <Link
                href={activeFeature.buttonLink}
                className="inline-block bg-[#178C05] text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                {activeFeature.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-3 h-3 bg-blue-800"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlider;
