"use client";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div>
      <div className="text-3xl font-serif text-white mb-1">{value}</div>
      <div className="text-xs uppercase tracking-widest text-neutral-500">{label}</div>
    </div>
  );
};
