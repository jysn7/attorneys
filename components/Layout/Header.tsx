"use client";
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className="md:hidden fixed top-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <div onClick={() => router.push('/#page-home')} className="text-xl font-serif italic text-white cursor-pointer">
        Sterling & Hart
      </div>
      <button className="text-white" onClick={() => {
        const menu = document.getElementById('mobile-menu');
        menu?.classList.toggle('hidden');
        menu?.classList.toggle('flex');
      }}>
        <i data-lucide="menu" className="w-6 h-6"></i>
      </button>
    </header>
  );
}
