
import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative mt-10 flex min-h-[480px] w-full items-center justify-center overflow-hidden bg-[#17191d] bg-cover bg-center py-20 sm:min-h-[520px] md:min-h-[580px]"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3h7EqIAMC-3aZKI7Bg8nwaQnKqX3zVXlyCeblPuDrc_rjn_407JwrA8&s=10')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center text-white">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white/90 sm:text-xs">
          <ShieldCheck size={15} className="text-red-400" />
          <span>Your Trusted Steel Partner</span>
        </div>

        {/* Heading with Looping Metallic Shine */}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-6xl md:leading-[1.15]">
          <span className="steel-shine-text block">
            SHREE SAI STEEL
          </span>

          <span className="mt-2 block text-[#e53935]">
            Strength That Builds the Future
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/85 sm:text-base md:text-lg">
          Your trusted destination for quality steel products and reliable
          steel solutions. We are committed to delivering strength, durability,
          and dependable service for construction and infrastructure needs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#services"
            className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-[#c62828] px-7 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a91f1f] focus:outline-none focus:ring-2 focus:ring-white/80 sm:w-auto"
          >
            Explore Our Services
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-md border border-white/60 px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/80 sm:w-auto"
          >
            Contact Us
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-white/80 sm:text-sm">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-red-400" />
            Quality-Focused Products
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-red-400" />
            Reliable Service
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-red-400" />
            Customer Satisfaction
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
