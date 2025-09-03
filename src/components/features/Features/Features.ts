export interface Feature {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const features: Feature[] = [
  {
    title: "Events",
    description:
      "From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow. Whether you're looking to learn something new, build your network, or just vibe with fellow tech heads, there's always something happening.",
    buttonText: "Explore Events",
    buttonLink: "/events",
  },
  {
    title: "Opportunities",
    description:
      "Discover exclusive internships, scholarships, and job openings from our network of tech partners. We connect you directly with opportunities that can launch your career and provide real-world experience before you even graduate.",
    buttonText: "Find Opportunities",
    buttonLink: "/opportunities",
  },
  {
    title: "Resources",
    description:
      "Access a curated library of learning materials, from coding tutorials and exam past questions to mentorship programs and software discounts. Our goal is to provide you with the tools you need to excel academically and professionally.",
    buttonText: "Browse Resources",
    buttonLink: "/resources",
  },
];
