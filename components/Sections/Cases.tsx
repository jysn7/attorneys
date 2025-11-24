"use client";

import { CaseItem } from "./CaseItem";
import { useGsapEntrance } from "@/lib/useGsapEntrance";

export const CasesSection = () => {
  const cases = [
    {
      year: "2024",
      title: "City of Tshwane v. National Treasury",
      category: "Constitutional Law",
      description: "Victory in municipal finance dispute, setting precedent for local government powers in Pretoria.",
      status: "Victory"
    },
    {
      year: "2023",
      title: "Mamelodi Community Land Restitution",
      category: "Land Rights",
      description: "Secured restitution for over 500 families in Gauteng Land Claims Court.",
      status: "Restitution Granted"
    },
    {
      year: "2022",
      title: "Pretoria CBD Property Dispute",
      category: "Commercial Litigation",
      description: "Resolved multi-million rand property dispute in Pretoria Magistrate's Court.",
      status: "Settled"
    },
    {
      year: "2021",
      title: "Environmental Impact Challenge: Roodeplaat Dam",
      category: "Environmental Law",
      description: "Successfully challenged unlawful development, protecting Pretoria's water resources.",
      status: "Development Halted"
    }
  ];
  const ref = useGsapEntrance();

  return (
    <div ref={ref} id="page-cases" className="pt-24 md:pt-0">
      <div className="bg-neutral-900 border-b border-white/5 py-24 px-6 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Case Results</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-light">
          A history of setting precedent. We represent clients in the most critical venues in the world.
        </p>
      </div>

      <div className="flex flex-col">
        {cases.map((c, idx) => (
          <CaseItem
            key={idx}
            year={c.year}
            title={c.title}
            category={c.category}
            description={c.description}
            status={c.status}
          />
        ))}
      </div>
    </div>
  );
};
