"use client";

import { AttorneyCard } from "./AttorneyCard";
import { AssociateCard } from "./AssociateCard";

export const AttorneysSection = () => {
  return (
    <div id="page-attorneys" className="pt-24 md:pt-0">
      <div className="bg-neutral-900 border-b border-white/5 py-24 px-6 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Team</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-light">
          Legal minds that shape industries. Our partners are recognized globally for their strategic foresight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/5">
        <AttorneyCard
          image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
          role="Managing Partner"
          name="James Sterling"
          specialty="Corporate Litigation"
          description='Recognized as "Litigator of the Year" for three consecutive years.'
        />
        <AttorneyCard
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
          role="Senior Partner"
          name="Eleanor Hart"
          specialty="Intellectual Property"
          description="Specializes in biotech and pharmaceutical patent defense."
        />
        <AttorneyCard
          image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
          role="Partner"
          name="Marcus Chen"
          specialty="International Arbitration"
          description="Expertise in cross-border disputes across Asia and Europe."
        />
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-24">
        <h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-12">Associate Counsel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
          <AssociateCard name="Sarah Jenkins" specialty="Mergers" />
          <AssociateCard name="Robert Vance" specialty="Labor Law" />
          <AssociateCard name="Diana Prince" specialty="Environmental" />
          <AssociateCard name="Arthur Curry" specialty="Maritime" />
        </div>
      </div>
    </div>
  );
};
