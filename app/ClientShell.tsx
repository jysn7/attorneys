"use client";

import { Sidebar } from "@/components/Layout/Sidebar";
import MobileHeader from "@/components/Layout/MobileHeader";
import MobileMenu from "@/components/Layout/MobileMenu";
import { useState } from "react";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileHeader onToggleMenu={() => setMenuOpen((p) => !p)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
    </>
  );
}
