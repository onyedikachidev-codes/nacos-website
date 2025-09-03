import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import CommunitySection from "@/components/features/Communities/CommunitySection";
import group from "../../../public/images/group-image.jpg";

export default function Communities() {
  return (
    <>
      <PageBanner
        imageUrl={group}
        imageAlt="A crowd of students at a tech conference"
        title="Communities"
        subtitle="Our tech tribes live here. Connect with fellow tech enthusiasts."
        overlayClassName="bg-gradient-to-b from-[#178C055C] to-[#178C05CC]"
      />
      <CommunitySection />
    </>
  );
}
