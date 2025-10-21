"use client";
import Link from "next/link";
import navigationMenuData from "@/data/navigationMenu";

export default function HeaderNavigationMenu() {
  return (
    <nav dir="rtl" className="w-full hidden lg:block">
      <div className="mx-auto w-full  px-2 sm:px-4 lg:px-6 xl:px-8">
        <ul className="flex flex-nowrap  items-center justify-center gap-2 w-full py-3">
          {navigationMenuData.map((item) => (
            <li
              key={item.path}
              className="w-full  relative group whitespace-nowrap"
            >
              <Link
                href={item.path}
                className="flex items-center justify-center gap-1 px-2 md:px-3 py-2 rounded-md text-primary hover:text-hover transition-colors duration-150"
                aria-label={item.title}
                style={{
                  fontSize: "clamp(12px, 0.9vw, 15px)",
                  lineHeight: 1.2,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="truncate">{item.title}</span>

                {item.children && (
                  <span
                    className="shrink-0"
                    style={{
                      fontSize: "clamp(11px, 0.8vw, 13px)",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                )}
              </Link>

              {item.children && (
                <ul className="absolute border rounded-md top-full right-0 mt-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        href={child.path}
                        className="block text-center px-3 py-2 text-sm sm:text-base font-medium text-primary hover:text-secondary hover:bg-gray-100 transition-colors duration-150 whitespace-nowrap"
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
