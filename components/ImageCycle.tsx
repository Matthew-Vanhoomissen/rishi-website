"use client";
import { useState } from "react";
import Link from "next/link"

// — paste your real src paths here —
const BAG_IMAGES = [
  { src: "/images/WhiteBag.png", label: "Silus White" },
  { src: "/images/BlackBag.png", label: "Silus Black" },
  { src: "/images/RedBag.png", label: "Silus Maroon" },
  { src: "/images/bag.jpg", label: "" },
  { src: "/images/bag.jpg", label: "" },
];

export function ImageCycle() {
  const [startIndex, setStartIndex] = useState(0);
  const total = BAG_IMAGES.length;

  const prev = () => setStartIndex((i) => (i - 1 + total) % total);
  const next = () => setStartIndex((i) => (i + 1) % total);

  const visible = [0, 1, 2].map((offset) => BAG_IMAGES[(startIndex + offset) % total]);

  return (
    <section className="w-full bg-stone-50 py-20 px-6">
      {/* Section heading */}
      <div className="flex flex-col items-center mb-14">
        <p className="font-anticDidone text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-3">
          The Edit
        </p>
        <h2 className="font-anticDidone text-4xl font-light text-stone-800 tracking-wide">
          Featured Pieces
        </h2>
        <div className="mt-5 w-12 h-px bg-amber-700/40" />
      </div>

      {/* Carousel row */}
      <div className="flex items-center justify-center gap-6">

        {/* Left arrow */}
        <button
          onClick={prev}
          className="group flex-shrink-0 w-10 h-10 flex items-center justify-center border border-stone-300 hover:border-stone-700 transition-colors duration-200"
        >
          <span className="font-anticDidone text-stone-400 group-hover:text-stone-800 transition-colors duration-200 text-lg leading-none">
            ←
          </span>
        </button>

        {/* Three visible bags */}
        <div className="flex gap-6 flex-1 max-w-5xl">
          {visible.map((bag, i) => (
            <div key={`${bag.src}-${i}`} className="flex-1 flex flex-col gap-4 group cursor-pointer">
              {/* Image box — replace bg-stone-300 with <img> when ready */}
              <Link 
                href="/collections"
                className="relative w-full aspect-[3/4] bg-stone-300 overflow-hidden">
                  <img
                    src={bag.src}
                    alt={bag.label}
                
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:scale-105 transition-transform duration-500"
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                
              </Link>

              {/* Caption */}
              <div className="flex flex-col gap-1 px-1">
                <p className="font-anticDidone text-stone-800 text-sm tracking-[0.15em] uppercase">
                  {bag.label}
                </p>
                <p className="font-interFont text-xs text-stone-400 tracking-wide">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="group flex-shrink-0 w-10 h-10 flex items-center justify-center border border-stone-300 hover:border-stone-700 transition-colors duration-200"
        >
          <span className="font-anticDidone text-stone-400 group-hover:text-stone-800 transition-colors duration-200 text-lg leading-none">
            →
          </span>
        </button>

      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {BAG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
              i === startIndex ? "bg-stone-700" : "bg-stone-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}