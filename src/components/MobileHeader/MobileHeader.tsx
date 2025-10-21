"use client";

import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 lg:hidden w-full sticky top-0 z-50 bg-white">
        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-md hover:bg-gray-100 active:bg-gray-200 transition"
        >
          <Menu size={24} className="text-gray-700" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-3">
          <button className="p-3 rounded-md hover:bg-gray-100 transition">
            <Search size={22} className="text-gray-700" />
          </button>
          <button className="p-3 rounded-md hover:bg-gray-100 transition">
            <User size={22} className="text-gray-700" />
          </button>
          <div className="relative p-3 rounded-md hover:bg-gray-100 transition">
            <ShoppingCart size={22} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4.5 h-4.5 bg-brand text-white text-[10px] font-bold rounded-full">
              3
            </span>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-700">منو</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 text-gray-700 text-base">
          <a href="#" className="hover:text-brand transition">
            خانه
          </a>
          <a href="#" className="hover:text-brand transition">
            محصولات
          </a>
          <a href="#" className="hover:text-brand transition">
            دسته‌بندی‌ها
          </a>
          <a href="#" className="hover:text-brand transition">
            درباره ما
          </a>
          <a href="#" className="hover:text-brand transition">
            تماس با ما
          </a>

          <hr className="my-4" />

          <button className="bg-brand hover:bg-secondary text-white text-sm py-2 rounded-xl transition">
            ورود / ثبت‌ نام
          </button>
        </nav>
      </div>
    </>
  );
}
