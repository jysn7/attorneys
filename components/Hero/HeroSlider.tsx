"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useGsapEntrance } from "@/lib/useGsapEntrance";

export default function HeroSlider() {
  const router = useRouter();
  const ref = useGsapEntrance();

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
      subtitle: "Corporate Litigation",
      title: (
        <>
          Unyielding <br /> <span className="not-italic text-neutral-400">Defense.</span>
        </>
      ),
      desc: "Sterling & Hart delivers strategic mastery in high-stakes disputes, protecting the legacy of the world's most innovative entities.",
    },
    {
      img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2301&auto=format&fit=crop",
      subtitle: "Global Arbitration",
      title: (
        <>
          Strategic <br /> <span className="not-italic text-neutral-400">Resolution.</span>
        </>
      ),
      desc: "Our firm represents clients across continents, securing outcomes in the most challenging international forums.",
    },
    {
      img: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Regulatory Defense",
      title: (
        <>
          Precision <br /> <span className="not-italic text-neutral-400">Advocacy.</span>
        </>
      ),
      desc: "When regulatory pressure mounts, our attorneys provide unmatched clarity and strategic advantage.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[index];

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        key={slide.img}
        className="absolute inset-0 z-0 transition-all duration-1000 transform scale-105"
      >
        <img
          src={slide.img}
          alt={typeof slide.title === "string" ? slide.title : "Hero background"}
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent z-0"></div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 items-end pb-24 h-full">
        {/* Counter */}
        <div className="lg:col-span-1 hidden lg:block absolute top-32 left-16">
          <div className="text-6xl font-thin text-white/20 font-serif">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="text-2xl align-top opacity-50 text-neutral-600">
              /{slides.length.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 flex flex-col justify-end h-full pb-12">
          <div className="slide-visible slide-content">
            <div className="flex items-center gap-3 text-amber-200 font-medium tracking-widest text-xs uppercase mb-6">
              <span className="w-12 h-px bg-amber-200"></span>
              <span>{slide.subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white tracking-tight leading-[1.05] mb-8">
              {slide.title}
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-10 font-light">
              {slide.desc}
            </p>

            <button
              onClick={() => router.push("/consultation")}
              className="group flex items-center gap-4 text-sm text-white tracking-widest uppercase hover:text-amber-200 transition-colors"
            >
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-amber-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-4 flex lg:justify-end gap-4 pb-12">
          <button
            onClick={prev}
            className="w-14 h-14 border border-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 border border-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white rounded-full"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
