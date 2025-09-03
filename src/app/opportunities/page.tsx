import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import group from "../../../public/images/group-image.jpg";
import TabsMini from "@/components/ui/TabsMini";

import { Briefcase } from "lucide-react";
import OpportunitesCard, {
  OpportunitesCardProps,
} from "@/components/features/OpportunitiesCard";
import { oppTab } from "../../components/ui/oppTab";

const oppListings: OpportunitesCardProps[] = [
  {
    logo: <Briefcase size={32} />,
    jobTitle: "Frontend Developer",
    companyName: "Tech Solutions Inc.",
    description:
      "From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with...",
    tags: ["Hybrid", "Part-time", "React", "TypeScript"],
    salaryRange: "₦200,000 - ₦250,000/month",
    deadline: "June 6th",
    location: "Ikeja, Lagos",
    slug: "frontend-dev",
    jobType: "Job",
  },
  {
    logo: <Briefcase size={32} />,
    jobTitle: "Product Design Intern",
    companyName: "Innovate Creations",
    description:
      "Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening.",
    tags: ["Remote", "Full-time", "Figma", "UI/UX"],
    salaryRange: "₦100,000 - ₦150,000/month",
    deadline: "July 15th",
    location: "Lekki, Lagos",
    slug: "product-design-intern",
    jobType: "Internship",
  },
  {
    logo: <Briefcase size={32} />,
    jobTitle: "Frontend Developer",
    companyName: "Tech Solutions Inc.",
    description:
      "From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you’re looking to learn something new, build your network, or just vibe with...",
    tags: ["Hybrid", "Part-time", "React", "TypeScript"],
    salaryRange: "₦200,000 - ₦250,000/month",
    deadline: "June 6th",
    location: "Ikeja, Lagos",
    slug: "frontend-dev-two",
    jobType: "Research",
  },
  {
    logo: <Briefcase size={32} />,
    jobTitle: "Product Design Intern",
    companyName: "Innovate Creations",
    description:
      "Whether you’re looking to learn something new, build your network, or just vibe with fellow tech heads, there’s always something happening.",
    tags: ["Remote", "Full-time", "Figma", "UI/UX"],
    salaryRange: "₦100,000 - ₦150,000/month",
    deadline: "July 15th",
    location: "Lekki, Lagos",
    slug: "product-design-intern-two",
    jobType: "Academics",
  },
];

export default function Opportunities() {
  return (
    <main>
      <PageBanner
        imageUrl={group}
        imageAlt="A crowd of students at a tech conference"
        title="Opportunities"
        subtitle="Discover internships, jobs, and research opportunities"
        overlayClassName="bg-lime-600/80"
      />

      <div className="max-w-2xl ml-auto mt-6 mb-4 px-3 sm:px-5 lg:px-7">
        <TabsMini tabs={oppTab} />
      </div>

      <div className="space-y-12 mt-15 mb-25">
        {oppListings.map((opp, index) => (
          <OpportunitesCard key={index} {...opp} />
        ))}
      </div>
    </main>
  );
}
