import React from "react";
import Image, { StaticImageData } from "next/image";

interface PageBannerProps {
  imageUrl: StaticImageData | string;
  imageAlt: string;
  title: string;
  subtitle: string;
  overlayClassName?: string;
}

export default function PageBanner({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  overlayClassName = "bg-black/50",
}: PageBannerProps) {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          className="object-cover object-[center_55%]"
          priority
        />
      </div>

      <div className={`absolute inset-0 ${overlayClassName} z-10`} />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="mt-2 text-md md:text-lg max-w-3xl [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
