"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/5 text-neutral-400 py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between gap-12">
      <div className="flex flex-col gap-4">
        <div className="text-white font-serif text-2xl italic">Sterling & Hart</div>
        <p className="text-sm max-w-xs">
          We represent clients globally in high-stakes disputes, arbitration, and intellectual property litigation.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div>
          <h3 className="text-white uppercase tracking-widest text-xs mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
            <li><Link href="/attorneys" className="hover:text-amber-200 transition-colors">Team</Link></li>
            <li><Link href="/cases" className="hover:text-amber-200 transition-colors">Case Results</Link></li>
            <li><Link href="/consultation" className="hover:text-amber-200 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white uppercase tracking-widest text-xs mb-4">Connect</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-amber-200 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-amber-200 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-amber-200 transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
