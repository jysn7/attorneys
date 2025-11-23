"use client";

import Image from "next/image";

interface SelectedWorkCardProps {
  image: string;
  category: string;
  title: string;
  location: string;
  badge?: string;
}

export const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({ image, category, title, location, badge }) => {
  return (
    <div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
      <div className="h-[500px] overflow-hidden relative mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-6 right-6 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
            {badge}
          </div>
        )}
      </div>
      <div className="text-xs text-amber-200 uppercase tracking-widest mb-2">{category}</div>
      <h3 className="text-2xl font-serif text-white mb-2 group-hover:underline decoration-1 underline-offset-4">{title}</h3>
      <p className="text-neutral-500 text-sm">{location}</p>
    </div>
  );
};
