"use client";

import { useRouter } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const router = useRouter();

  const go = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-neutral-950 z-40 flex-col pt-24 px-6 gap-8 ${
        open ? "flex" : "hidden"
      }`}
    >
      <button onClick={() => go("/")} className="text-2xl font-serif text-white">
        Home
      </button>

      <button
        onClick={() => go("/attorneys")}
        className="text-2xl font-serif text-white"
      >
        Attorneys
      </button>

      <button
        onClick={() => go("/cases")}
        className="text-2xl font-serif text-white"
      >
        Case Results
      </button>

      <button
        onClick={() => go("/consultation")}
        className="text-2xl font-serif text-white"
      >
        Contact
      </button>
    </div>
  );
}
