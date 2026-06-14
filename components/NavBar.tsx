"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dual-language", label: "Dual Language" },
  { href: "/science-of-reading", label: "Science of Reading" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <Link href="/" className="font-black text-xl text-primary">
        OurTeachingWorld
      </Link>
      <div className="flex items-center gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${
              pathname.startsWith(link.href)
                ? "bg-primary text-white"
                : "text-gray-600 hover:text-primary hover:bg-primary-light"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
