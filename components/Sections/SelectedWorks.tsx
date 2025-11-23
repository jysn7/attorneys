"use client";

import { useRouter } from "next/navigation";
import { SelectedWorkCard } from "./SelectedWorkCard";

export const SelectedWorks = () => {
  const router = useRouter();

  return (
    <section className="py-24 bg-neutral-900/50 border-b border-white/5">
      <div className="px-6 md:px-16 lg:px-24 mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs font-medium tracking-widest text-amber-500/80 uppercase mb-3 block">
            Selected Matters
          </span>
          <h2 className="text-3xl font-serif text-white">Recent Victories</h2>
        </div>
        <button
          onClick={() => router.push("/cases")}
          className="text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors"
        >
          View All Results
        </button>
      </div>

      <div className="flex overflow-x-auto pb-8 px-6 md:px-16 lg:px-24 gap-8 snap-x snap-mandatory no-scrollbar">
        <SelectedWorkCard
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          category="Antitrust"
          title="TechGiant Merger Defense"
          location="Washington D.C. District Court"
          badge="Victory"
        />
        <SelectedWorkCard
          image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop"
          category="Intellectual Property"
          title="Helix Pharma Patent"
          location="London High Court"
        />
        <SelectedWorkCard
          image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2574&auto=format&fit=crop"
          category="Real Estate"
          title="Manhattan Zoning Appeal"
          location="New York Supreme Court"
        />
      </div>
    </section>
  );
};
