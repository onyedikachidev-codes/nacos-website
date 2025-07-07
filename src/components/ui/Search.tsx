"use client";

import React, { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "lucide-react";

type SearchBigProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function Search({ value, setValue }: SearchBigProps) {
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setValue(target.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-85">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full pl-10 text-base border relative border-gray-300 rounded-sm placeholder:text-[1.1rem] placeholder:text-gray-500 placeholder:text-xs focus:outline-none focus:border-gray-500 px-3 py-2 transition-transform focus:scale-101 duration-200 ease-in-out "
          onChange={handleSearch}
          value={value}
        />
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700 dark:text-gray-100 hover:text-gray-500 cursor-pointer">
          <SearchIcon className="text-gray-600 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
