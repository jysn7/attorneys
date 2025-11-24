"use client";

import { AttorneyCard } from "./AttorneyCard";
import { AssociateCard } from "./AssociateCard";
import { useGsapEntrance } from "@/lib/useGsapEntrance";

export const AttorneysSection = () => {
  const ref = useGsapEntrance();
  return (
    <div ref={ref} id="page-attorneys" className="pt-24 md:pt-0">
      <div className="bg-neutral-900 border-b border-white/5 py-24 px-6 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Team</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-light">
          Legal minds that shape industries. Our partners are recognized globally for their strategic foresight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/5">
        <AttorneyCard
          image="https://images.unsplash.com/photo-1663497823484-a72c173ca04a?q=80&w=715&auto=format&fit=crop"
          role="Managing Partner"
          name="Thabo Mokoena"
          specialty="Constitutional Law"
          description="Lead counsel in landmark Pretoria municipal finance case."
        />
        <AttorneyCard
          image="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          role="Senior Partner"
          name="Naledi Khumalo"
          specialty="Land Rights & Restitution"
          description="Expert in Gauteng land claims and rural development."
        />
        <AttorneyCard
          image="https://images.unsplash.com/photo-1724128195247-ab10e4535b53?q=80&w=624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          role="Partner"
          name="Sipho Dlamini"
          specialty="Commercial Litigation"
          description="Specialist in property and business disputes in Pretoria CBD."
        />
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-24">
        <h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-12">Associate Counsel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
          <AssociateCard name="Lerato Maseko" specialty="Municipal Law" />
          <AssociateCard name="Kgosi Molefe" specialty="Employment Law" />
          <AssociateCard name="Zanele Sithole" specialty="Environmental Law" />
          <AssociateCard name="Jabulani Nkosi" specialty="Property Law" />
        </div>
      </div>
    </div>
  );
};
