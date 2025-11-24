"use client";

import { useRouter } from "next/navigation";
import { SelectedWorkCard } from "./SelectedWorkCard";
import { useGsapEntrance } from "@/lib/useGsapEntrance";

export const SelectedWorks = () => {
  const router = useRouter();
  const ref = useGsapEntrance();

  return (
    <section ref={ref} className="py-24 bg-neutral-900/50 snap-x snap-mandatory 
            no-scrollbar scroll-smooth-x horizontal-scroll border-b border-white/5">
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
            image="https://images.unsplash.com/photo-1640580488727-056835ca6f32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            category="Constitutional Law"
            title="City of Tshwane v. National Treasury"
            location="Pretoria High Court"
            badge="Victory"
          />
          <SelectedWorkCard
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop"
            category="Land Rights"
            title="Mamelodi Community Land Restitution"
            location="Gauteng Land Claims Court"
          />
          <SelectedWorkCard
            image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2574&auto=format&fit=crop"
            category="Commercial Litigation"
            title="Pretoria CBD Property Dispute"
            location="Pretoria Magistrate's Court"
          />
      </div>
    </section>
  );
};
