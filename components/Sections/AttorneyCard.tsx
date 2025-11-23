"use client";

import Image from "next/image";

interface AttorneyCardProps {
  image: string;
  role: string;
  name: string;
  specialty: string;
  description?: string;
}

export const AttorneyCard: React.FC<AttorneyCardProps> = ({ image, role, name, specialty, description }) => {
  return (
    <div className="group relative border-b md:border-b-0 md:border-r border-white/5 aspect-[3/4] overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-xs text-amber-200 uppercase tracking-widest mb-2">{role}</div>
        <h3 className="text-3xl font-serif text-white mb-1">{name}</h3>
        <p className="text-neutral-400 text-sm mb-4">{specialty}</p>
        {description && (
          <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
            <p className="text-neutral-500 text-sm pt-4 border-t border-white/10">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
