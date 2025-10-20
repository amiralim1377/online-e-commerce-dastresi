"use client";
import Link from "next/link";
import navigationMenuData from "@/data/navigationMenu";

export default function NavigationMenuComponent() {
  return (
    <nav dir="rtl" className="w-full hidden lg:block">
      <ul className="flex justify-between w-full py-4">
        {navigationMenuData.map((item) => (
          <li key={item.path} className="relative group">
            <Link
              href={item.path}
              className="px-3 text-primary py-2 rounded-md hover:text-hover flex items-center gap-2"
            >
              {item.title}
              {item.children && <span className="text-xs inline-block">▼</span>}
            </Link>

            {item.children && (
              <ul className="absolute border rounded-b-md top-full right-0 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {item.children.map((child) => (
                  <li key={child.path}>
                    <Link
                      href={child.path}
                      className="block px-4 font-semibold text-sm text-primary bg-white hover:bg-gray-100 py-2 hover:text-secondary"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
