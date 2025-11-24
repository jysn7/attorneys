"use client";

import { useRouter, usePathname } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Attorneys", path: "/attorneys" },
  { label: "Cases", path: "/cases" },
  { label: "Contact", path: "/consultation" },
];

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-neutral-950 border-r border-white/5 z-50 hidden md:flex flex-col justify-between items-center py-8">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-8">
        <div
          onClick={() => router.push("/")}
          className="text-2xl font-serif italic cursor-pointer hover:text-amber-200 transition-colors"
        >
          S&H
        </div>
      </div>

      {/* Middle Navigation */}
      <div className="flex flex-col items-center gap-20">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => router.push(link.path)}
            className={`
              inline-block -rotate-90 origin-center text-xs tracking-widest uppercase transition-colors cursor-pointer px-2 py-1
              ${pathname === link.path
                ? "text-amber-200 font-bold border-b-2 border-amber-200"
                : "text-neutral-500 hover:text-amber-200 border-b-2 border-transparent hover:border-amber-200"
              }
            `}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 text-neutral-500 mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-200 transition-colors flex items-center justify-center"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-200 transition-colors flex items-center justify-center"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};
