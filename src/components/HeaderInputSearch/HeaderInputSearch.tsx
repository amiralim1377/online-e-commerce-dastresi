"use client";

import { Search } from "lucide-react";

export default function HeaderInputSearch() {
  return (
    <div className="relative hidden lg:block w-full max-w-lg">
      <input
        type="text"
        placeholder="جست و جوی محصولات"
        className="
          w-full
          h-[42px]
          pr-10
          pl-4
          py-2
          border
          border-gray-300
          rounded-lg
          text-[16px]
          leading-6
          text-gray-600
          font-[shabnam]
       
          bg-transparent
          shadow-none
        "
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
