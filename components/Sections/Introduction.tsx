"use client";

import { StatCard } from "../Layout/StatCard";
import { useGsapEntrance } from "@/lib/useGsapEntrance";

export const Introduction = () => {
  const ref = useGsapEntrance();
  return (
    <section ref={ref} className="py-32 px-6 md:px-16 lg:px-24 border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
            We navigate the complexity of <span className="italic text-neutral-500">modern law</span> so you can focus on growth.
          </h2>
        </div>
        <div className="flex flex-col gap-8 justify-end">
          <p className="text-neutral-400 text-lg leading-relaxed font-light">
            For over three decades, Sterling & Hart has stood at the intersection of commerce and justice. We don&apos;t just litigate; we architect outcomes that secure your company&apos;s future.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <StatCard value="$50B+" label="In Verdicts" />
            <StatCard value="500+" label="Attorneys" />
          </div>
        </div>
      </div>
    </section>
  );
};
