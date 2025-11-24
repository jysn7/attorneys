"use client";

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

interface MobileHeaderProps {
  onToggleMenu: () => void;
}

export default function MobileHeader({ onToggleMenu }: MobileHeaderProps) {
  const router = useRouter();

  return (
    <header className="md:hidden fixed top-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-white/5 px-6 py-6.5 flex justify-between items-center">
      <div
        onClick={() => router.push("/")}
        className="text-xl font-serif italic text-white cursor-pointer"
      >
        Sterling &amp; Hart
      </div>

      <button onClick={onToggleMenu} className="text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
