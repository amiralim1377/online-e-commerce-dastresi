"use client";
import Link from "next/link";
import navigationMenuData from "@/data/navigationMenu";

export default function NavigationMenuComponent() {
  return (
    <nav dir="rtl" className="w-full  bg-amber-400   hidden lg:block">
      <div className=" bg-red-500  mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 lg:2xl">
        <ul className="flex flex-nowrap    items-center justify-start gap-1 sm:gap-2 md:gap-3 w-full p-2">
          {navigationMenuData.map((item) => (
            <li key={item.path} className="relative group min-w-0">
              <Link
                href={item.path}
                className="inline-flex items-center gap-2 min-w-0 px-1 sm:px-2 md:px-3 py-1 rounded-md text-primary hover:text-hover"
                aria-label={item.title}
                style={{
                  fontSize: "clamp(12px, 0.9vw, 16px)",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="block min-w-0 truncate"
                  style={{ display: "inline-block" }}
                >
                  {item.title}
                </span>

                {item.children && (
                  <span
                    className="inline-flex items-center shrink-0"
                    style={{
                      fontSize: "clamp(11px, 0.7vw, 12px)",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                )}
              </Link>

              {item.children && (
                <ul
                  className="absolute border rounded-b-md top-full right-0 mt-2 lg:mt-4 max-w-[90vw] w-auto min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 bg-white box-border"
                  style={{ transformOrigin: "top right" }}
                >
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        href={child.path}
                        className="block px-3 sm:px-4 md:px-5 font-semibold text-sm sm:text-base text-primary hover:text-secondary py-2 hover:bg-gray-100 whitespace-nowrap"
                        style={{ lineHeight: 1.2 }}
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
      </div>
    </nav>
  );
}
