// src/data/executives.ts

export interface Executive {
  name: string;
  role: string;
  image: string;
}

export const executives: Executive[] = [
  {
    name: "Alex Marvellous (Alexa)",
    role: "President",
    image: "/images/pres.png",
  },
  {
    name: "Alex Onyeka",
    role: "Vice-President",
    image: "/images/vice-p.png",
  },
  {
    name: "Jane Doe",
    role: "General Secretary",
    image: "/images/sec.png",
  },
  {
    name: "John Smith",
    role: "Financial Secretary",
    image: "/images/vice-p.png",
  },
  {
    name: "Emily White",
    role: "PRO",
    image: "/images/sec.png",
  },
];
