"use client";

export default function HamburgerMenu() {
  return (
    <nav className="relative bg-white shadow-md p-4">
      <div className="flex items-center justify-between container mx-auto">
        {/* لینک‌ها (در دسکتاپ نمایش داده میشه) */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">محصولات</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">تماس</a>
          </li>
        </ul>
      </div>

      {/* منوی باز شونده موبایل */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">محصولات</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">تماس</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
