import ExecutivesCarousel from "@/components/features/Executives/ExecutiveCarousel";
import FeaturesSlider from "@/components/features/Features/FeaturesSlider";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExecutivesCarousel />
      <FeaturesSlider />
    </div>
  );
}
