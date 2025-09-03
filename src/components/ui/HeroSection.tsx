// src/components/HeroSection.tsx

import React from "react";
import Image from "next/image";

// You can replace these with your actual image paths
const studentImages = [
  "/images/group1.png",
  "/images/group2.png",
  "/images/banner3.png",
  "/images/banner4.png",
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="hidden lg:block">
            {/* Top-left image */}
            <div className="absolute -top-22 left-30 transform -rotate-18 p-2 rounded-xl  ">
              <div
                className={`absolute -inset-0.5 border rounded-2xl border-[#10068C]`}
              ></div>
              <div
                className={`absolute inset-0.5 border rounded-2xl border-[#10068C] `}
              ></div>{" "}
              <Image
                src={studentImages[1]}
                alt="Happy students"
                width={135}
                height={100}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>

            {/* Top-right image */}
            <div className="absolute -top-20 right-30 transform rotate-8 p-2 rounded-xl ">
              <div
                className={`absolute -inset-0.5 border rounded-2xl border-[#178C05]`}
              ></div>
              <div
                className={`absolute inset-0.5 border rounded-2xl border-[#178C05] `}
              ></div>{" "}
              <Image
                src={studentImages[1]}
                alt="Happy students"
                width={135}
                height={100}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>

            {/* Bottom-left image */}
            <div className="absolute -bottom-30 left-40 transform -rotate-6 p-2 rounded-xl  ">
              <div
                className={`absolute -inset-0.5 border rounded-2xl border-[#178C05]`}
              ></div>
              <div
                className={`absolute inset-0.5 border rounded-2xl border-[#178C05] `}
              ></div>{" "}
              <Image
                src={studentImages[1]}
                alt="Happy students"
                width={135}
                height={100}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>

            {/* Bottom-right image */}
            <div className="absolute -bottom-35 right-44 transform rotate-10 p-2  rounded-xl ">
              <div
                className={`absolute -inset-0.5 border rounded-2xl border-[#10068C]`}
              ></div>
              <div
                className={`absolute inset-0.5 border rounded-2xl border-[#10068C] `}
              ></div>{" "}
              <Image
                src={studentImages[1]}
                alt="Happy students"
                width={150}
                height={100}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>
          </div>

          {/* Central Welcome Card */}
          <div className="relative max-w-xl mx-auto text-center bg-white p-10 sm:px-10 sm:py-16 rounded-sm shadow-[0_0_20px_theme(colors.green.200)] z-10">
            <p className="text-xl sm:text-2xl text-gray-600">Welcome to</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-bold text-green-600 tracking-tight">
              NACOS LASU
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
