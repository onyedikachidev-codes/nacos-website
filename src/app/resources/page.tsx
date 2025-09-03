import ResourceSection from "@/components/features/Resources/ResourceSection";
import PageBanner from "@/components/ui/PageBanner";
import group from "../../../public/images/group-image.jpg";
import React from "react";

export default function Resources() {
  return (
    <>
      <PageBanner
        imageUrl={group}
        imageAlt="A crowd of students at a tech conference"
        title="Resources"
        subtitle="Browse educational materials, templates, and academic resources."
        overlayClassName="bg-[#178C0566]"
      />
      <ResourceSection />
    </>
  );
}
