"use client";

interface AssociateCardProps {
  name: string;
  specialty: string;
}

export const AssociateCard: React.FC<AssociateCardProps> = ({ name, specialty }) => {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-4 group cursor-pointer hover:border-white/40 transition-colors">
      <span className="text-lg text-white font-serif">{name}</span>
      <span className="text-sm text-neutral-500 group-hover:text-amber-200 transition-colors">{specialty}</span>
    </div>
  );
};
