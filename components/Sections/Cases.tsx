"use client";

import { CaseItem } from "./CaseItem";

export const CasesSection = () => {
  const cases = [
    {
      year: "2023",
      title: "Global Tech v. State",
      category: "Antitrust Litigation",
      description: "Successfully dismissed all claims in a multi-state class action suit regarding data privacy.",
      status: "Dismissed"
    },
    {
      year: "2023",
      title: "AeroSpace Inc. Merger",
      category: "M&A Regulation",
      description: "Secured regulatory approval for $12B acquisition across three continents.",
      status: "Approved"
    },
    {
      year: "2022",
      title: "Estate of H.R.",
      category: "Private Wealth Dispute",
      description: "Negotiated settlement in high-profile inheritance dispute involving international assets.",
      status: "Settled"
    },
    {
      year: "2021",
      title: "Energy Corp Arbitration",
      category: "International Arbitration",
      description: "Awarded full damages plus interest in breach of contract dispute in Singapore.",
      status: "$450M Award"
    }
  ];

  return (
    <div id="page-cases" className="pt-24 md:pt-0">
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
