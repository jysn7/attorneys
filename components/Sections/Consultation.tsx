"use client";

import { useState, FormEvent } from "react";

export const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    matter: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Request received. We will contact you shortly.");
    setFormData({ name: "", company: "", email: "", matter: "" });
  };

  return (
    <div id="page-consultation" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Contact Info */}
        <div className="bg-neutral-900 p-6 md:p-24 flex flex-col justify-between border-r border-white/5">
          <div>
            <span className="text-xs font-medium tracking-widest text-amber-500/80 uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">Let's discuss your defense strategy.</h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
              Strict confidentiality is maintained from the first interaction. Our intake team is available 24/7 for urgent matters.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Headquarters</div>
              <div className="text-white text-lg">30 Rockefeller Plaza, Pretoria, PTA</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Direct Line</div>
              <div className="text-white text-lg">(012) 345-6789</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Secure Email</div>
              <div className="text-white text-lg hover:text-amber-200 cursor-pointer transition-colors">
                counsel@sterlinghart.com
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 md:p-24 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto flex flex-col gap-12">
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                className="custom-input w-full bg-transparent border-b border-neutral-700 py-3 text-white outline-none focus:border-amber-200 transition-colors placeholder-transparent peer"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-200"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="company"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
                className="custom-input w-full bg-transparent border-b border-neutral-700 py-3 text-white outline-none focus:border-amber-200 transition-colors placeholder-transparent peer"
              />
              <label
                htmlFor="company"
                className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-200"
              >
                Company / Organization
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="custom-input w-full bg-transparent border-b border-neutral-700 py-3 text-white outline-none focus:border-amber-200 transition-colors placeholder-transparent peer"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-200"
              >
                Work Email
              </label>
            </div>

            <div className="relative">
              <select
                id="matter"
                value={formData.matter}
                onChange={handleChange}
                className="w-full  border-b bg-transparent border-neutral-700 py-3 text-neutral-500 outline-none focus:border-amber-200 transition-colors appearance-none"
              >
                <option value="" disabled>Nature of Inquiry</option>
                <option value="litigation">Commercial Litigation</option>
                <option value="arbitration">Arbitration</option>
                <option value="ip">Intellectual Property</option>
                <option value="advisory">General Advisory</option>
              </select>
              <i data-lucide="chevron-down" className="absolute right-0 top-4 w-4 h-4 text-neutral-500 pointer-events-none"></i>
            </div>

            <button
              type="submit"
              className="mt-8 bg-white text-black py-4 px-8 text-sm uppercase tracking-widest font-medium hover:bg-amber-200 transition-colors w-fit"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
