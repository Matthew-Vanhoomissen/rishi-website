"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function OurMission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = sectionRef.current?.querySelectorAll("[data-reveal]");
            targets?.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      number: "01",
      title: "Enduring Craft",
      body: "Every piece is shaped by hands that have spent decades perfecting a single stitch, a single fold. We do not rush what is meant to last.",
    },
    {
      number: "02",
      title: "Considered Materials",
      body: "We source only what the earth offers generously — full-grain leathers, antique brass, threads spun from natural fibres.",
    },
    {
      number: "03",
      title: "Less, Better",
      body: "We make fewer pieces each season, on purpose. Scarcity is not a strategy — it is a commitment to doing less harm and more good.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-32 px-16"
    >
      {/* Decorative large background letter */}
      <span
        className="pointer-events-none select-none absolute -top-8 right-0 font-anticDidone text-[22rem] text-stone-50 leading-none tracking-tighter"
        aria-hidden
      >
        S
      </span>

      {/* Top rule */}
      <div
        data-reveal
        className="w-full h-px bg-stone-200 mb-20 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      />

      {/* Header row */}
      <div className="flex items-end justify-between mb-24 gap-16">
        <div className="flex flex-col gap-4 max-w-xl">
          <p
            data-reveal
            className="font-anticDidone text-[10px] tracking-[0.45em] uppercase text-stone-400 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            Our Mission
          </p>
          <h2
            data-reveal
            className="font-anticDidone text-6xl font-light text-stone-900 leading-[1.08] tracking-wide transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            Some inspirational<br />
            <em>stuff can go here.</em>
          </h2>
        </div>

        <p
          data-reveal
          className="font-interFont text-sm font-light text-stone-500 leading-relaxed max-w-sm tracking-wide transition-all duration-700 ease-out"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          In a world of disposable fashion, we chose a different path — one
          paved with restraint, intention, and an obsessive respect for the
          materials and makers behind every single object we offer.
        </p>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-3 gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            data-reveal
            className="group flex flex-col gap-6 border-t border-stone-200 pt-8 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(28px)" }}
          >
            <span className="font-anticDidone text-[11px] tracking-[0.35em] text-stone-300">
              {pillar.number}
            </span>
            <h3 className="font-anticDidone text-xl text-stone-800 tracking-wide group-hover:text-stone-500 transition-colors duration-300">
              {pillar.title}
            </h3>
            <p className="font-interFont text-sm font-light text-stone-500 leading-relaxed tracking-wide">
              {pillar.body}
            </p>
            {/* Animated underline on hover */}
            <div className="w-0 group-hover:w-8 h-px bg-amber-700/60 transition-all duration-500 ease-out" />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        data-reveal
        className="mt-20 flex items-center gap-6 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        <Link
          href="/about"
          className="font-anticDidone text-[11px] tracking-[0.3em] uppercase text-stone-800 border-b border-stone-800 pb-0.5 hover:text-stone-400 hover:border-stone-400 transition-colors duration-300"
        >
          Read Our Story
        </Link>
        <div className="flex-1 h-px bg-stone-100 max-w-xs" />
      </div>
    </section>
  );
}