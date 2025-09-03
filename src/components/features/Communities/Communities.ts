export interface Community {
  id: string;
  image: string;
  title: string;
  platform: string;
  description: string;
  joinLink: string;
  learnMoreLink: string;
}

export const communities: Community[] = [
  {
    id: "dsa-club",
    image: "/images/purple1.png",
    title: "DSA Club",
    platform: "WhatsApp Community",
    description:
      "From tech talks to hackathons, campus meetups to code sprints — NACOS events are where ideas spark and connections grow.",
    joinLink: "#",
    learnMoreLink: "#",
  },
  {
    id: "web-dev-guild",
    image: "/images/purple2.png",
    title: "Web Dev Guild",
    platform: "Slack Channel",
    description:
      "Join the Web Dev Guild to connect with fellow aspiring and experienced web developers. Share projects, ask questions, and collaborate on cutting-edge web technologies.",
    joinLink: "#",
    learnMoreLink: "#",
  },
  {
    id: "ai-ml-hub",
    image: "/images/purple3.png",
    title: "AI/ML Hub",
    platform: "Discord Server",
    description:
      "Explore the exciting world of Artificial Intelligence and Machine Learning. Participate in challenges, discuss algorithms, and build intelligent systems with a passionate community.",
    joinLink: "#",
    learnMoreLink: "#",
  },
];
