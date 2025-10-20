import Link from "next/link";

const navHeaderLinks = [
  {
    label: "باشگاه مشتریان",
    href: "/customer-club",
  },
  {
    label: "بلاگ",
    href: "/blog",
  },
  {
    label: "ارتباط با ما",
    href: "/contact-us",
  },
  {
    label: "درباره ما",
    href: "/about-us",
  },
];

export default function NavHeaderTopLinks() {
  return (
    <div className=" hidden lg:flex gap-4 w-md">
      {navHeaderLinks.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className="text-primary hover:text-secondary text-nowrap transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
