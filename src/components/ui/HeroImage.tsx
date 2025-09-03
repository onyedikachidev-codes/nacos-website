// src/components/HeroImage.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroImageProps {
  src: string | StaticImageData;
  alt: string;
  outerBorderColor?: string; // Tailwind color class, e.g., "border-blue-500"
  innerBorderColor?: string; // Tailwind color class, e.g., "border-blue-300"
  width?: number; // Optional: specify width for Image component if src is a string
  height?: number; // Optional: specify height for Image component if src is a string
  className?: string; // For applying additional styles to the wrapper div (e.g., rotation, position)
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  outerBorderColor = "border-blue-600", // Default outer border color
  innerBorderColor = "border-blue-300", // Default inner border color
  width = 200, // Default width if not provided
  height = 150, // Default height if not provided
  className = "",
}) => {
  return (
    // Outer wrapper for position and rotation (handled by parent using className)
    <div className={`relative p-2 bg-white rounded-xl shadow-lg ${className}`}>
      {/* Outer Border Layer */}
      <div
        className={`absolute inset-0 ${outerBorderColor} border-2 rounded-xl`}
      ></div>

      {/* Inner Border Layer (slightly offset with padding and thicker border) */}
      <div
        className={`absolute inset-0 p-1 ${innerBorderColor} border-4 rounded-xl`}
      ></div>

      {/* The Image Itself */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10 rounded-lg object-cover w-full h-full" // w-full h-full to fill its container
      />
    </div>
  );
};

export default HeroImage;
