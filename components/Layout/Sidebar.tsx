"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

export const Sidebar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-neutral-400 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Middle Navigation */}
      <div className="flex flex-col items-center gap-12">
        <button
          onClick={() => router.push("/consultation")}
          className="writing-vertical text-xs tracking-widest uppercase text-neutral-500 hover:text-amber-200 transition-colors cursor-pointer"
        >
          Contact
        </button>
        <button
          onClick={() => router.push("/cases")}
          className="writing-vertical text-xs tracking-widest uppercase text-neutral-500 hover:text-amber-200 transition-colors cursor-pointer"
        >
          Results
        </button>
        <button
          onClick={() => router.push("/attorneys")}
          className="writing-vertical text-xs tracking-widest uppercase text-neutral-500 hover:text-amber-200 transition-colors cursor-pointer"
        >
          Team
        </button>
        <button
          onClick={() => router.push("/")}
          className="writing-vertical text-xs tracking-widest uppercase text-white font-medium cursor-pointer border-l-2 border-white pl-2"
        >
          Home
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 text-neutral-500">
        <a href="#" className="hover:text-white transition-colors">
          <span className="iconify" data-icon="solar:link-circle-bold" data-width="20"></span>
        </a>
      </div>
    </nav>
  );
};
