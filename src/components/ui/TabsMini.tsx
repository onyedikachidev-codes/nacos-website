"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  name: string;
  path: string;
  exact?: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

export default function TabsMini({ tabs }: TabsProps) {
  const pathname = usePathname();

  return (
    <nav className="inline-flex items-center">
      {tabs.map((tab) => {
        const isActive = tab.exact
          ? pathname === tab.path
          : pathname.startsWith(tab.path);

        return (
          <Link
            key={tab.name}
            href={tab.path}
            className={`
                whitespace-nowrap border-b-2 py-2 px-5 text-sm font-normal
                transition-colors duration-200 ease-in-out
                ${
                  isActive
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-600"
                }
              `}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
