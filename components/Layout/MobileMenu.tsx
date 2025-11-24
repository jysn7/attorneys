"use client";

import { useRouter, usePathname } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Attorneys", path: "/attorneys" },
  { label: "Case Results", path: "/cases" },
  { label: "Contact", path: "/consultation" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const go = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-neutral-950/95 z-40 flex flex-col pt-24 px-6 gap-4 transition-all duration-300 ${open ? "flex" : "hidden"}`}
      style={{backdropFilter: 'blur(6px)'}}
    >
      <nav className="flex flex-col gap-2 flex-1">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => go(link.path)}
            className={`text-2xl font-serif px-4 py-3 text-left transition-all duration-150 border-b-2 ${
              pathname === link.path
                ? "border-amber-200 text-amber-200 font-bold"
                : "border-transparent text-white hover:text-amber-200 hover:border-amber-200"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <div className="flex gap-6 mt-8 mb-4 justify-center">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-200 transition-colors">
          <Instagram className="w-7 h-7" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-200 transition-colors">
          <Linkedin className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
