import Link from "next/link";
import React from "react";

export default function Home() {
  const links: { href: string; name: string }[] = [
    {
      href: "/events",
      name: "Events",
    },
    {
      href: "/communities",
      name: "Communities",
    },
    {
      href: "/opportunities",
      name: "Opportunities",
    },
    {
      href: "/resources",
      name: "Resources",
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="px-5 sm:px-6 h-10 mt-6">
        <ul className="ml-1 xs:ml-2 lg:ml-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href} className="relative group w-64">
              <Link
                href={link.href}
                className="cursor-pointer px-1 md:px-3 lg:px-6 py-2 text-md sm:text-base border-b border-transparent group-hover:border-b-blue-700 group-hover:text-blue-700 group-hover:font-normal transition-all duration-300 ease-in-out delay-150"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
