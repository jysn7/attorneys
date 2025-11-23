"use client";

interface CaseItemProps {
  year: string;
  title: string;
  category: string;
  description: string;
  status: string;
}

export const CaseItem: React.FC<CaseItemProps> = ({ year, title, category, description, status }) => {
  return (
    <div className="group border-b border-white/5 hover:bg-white/5 transition-colors duration-300">
      <div className="px-6 md:px-16 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-2 text-neutral-500 text-sm font-mono">{year}</div>
        <div className="md:col-span-4">
          <h3 className="text-2xl font-serif text-white group-hover:text-amber-200 transition-colors">{title}</h3>
          <p className="text-neutral-500 text-sm mt-1">{category}</p>
        </div>
        <div className="md:col-span-4">
          <p className="text-neutral-400">{description}</p>
        </div>
        <div className="md:col-span-2 text-right">
          <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs text-white uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>
  );
};
