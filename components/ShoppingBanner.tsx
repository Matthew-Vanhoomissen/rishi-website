"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function ShoppingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = bannerRef.current?.querySelectorAll("[data-reveal]");
            targets?.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full bg-stone-800 overflow-hidden py-36 px-16 flex flex-col items-center justify-center text-center"
    >
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Large decorative background text */}
      <span
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-anticDidone text-[20rem] text-white/[0.02] leading-none tracking-tighter"
        aria-hidden
      >
        Shop
      </span>

      {/* Top rule */}
      <div
        data-reveal
        className="w-16 h-px bg-white mb-10 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(12px) scale(1)" }}
      />

      {/* Eyebrow */}
      <p
        data-reveal
        className="font-anticDidone text-[10px] tracking-[0.55em] uppercase text-white/80 mb-6 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(20px) scale(1)" }}
      >
        New Season · Now Available
      </p>

      {/* Main heading */}
      <h2
        data-reveal
        className="font-anticDidone text-7xl font-light text-white leading-[1.05] tracking-wide mb-6 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(24px) scale(1)" }}
      >
        Let's Get Shopping
      </h2>

      {/* Subtext */}
      <p
        data-reveal
        className="font-interFont text-sm font-light text-stone-400 tracking-[0.15em] max-w-md leading-relaxed mb-14 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(20px) scale(1)" }}
      >
        Explore our latest arrivals — rare leathers, timeless silhouettes,
        and pieces made to outlive every trend.
      </p>

      {/* CTA Button */}
      <div
        data-reveal
        className="transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(20px) scale(0.97)" }}
      >
        <Link
          href="/collections"
          className="group relative inline-flex items-center gap-4 border border-white hover:border-white px-12 py-5 transition-colors duration-300"
        >
          {/* Gold fill on hover */}
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          <span className="relative font-anticDidone text-[12px] tracking-[0.35em] uppercase text-white group-hover:text-stone-900 transition-colors duration-300 z-10">
            Shop Now
          </span>
          <span className="relative font-anticDidone text-white group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 z-10 text-lg leading-none">
            →
          </span>
        </Link>
      </div>

      {/* Bottom decorative row */}
      <div
        data-reveal
        className="flex items-center gap-6 mt-20 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(16px) scale(1)" }}
      >
        <div className="w-16 h-px bg-stone-700" />
        <span className="font-anticDidone text-[9px] tracking-[0.5em] uppercase text-stone-600">
          Crafted with intention
        </span>
        <div className="w-16 h-px bg-stone-700" />
      </div>
    </section>
  );
}