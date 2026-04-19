"use client";
import { useState } from "react";
import Link from "next/link";

import { TopBanner } from "@/components/TopBanner";
import { BottomBanner } from "@/components/BottomBanner";

// — swap in your real products —
const PRODUCTS = [
  { id: 1, name: "Structured Tote", category: "Totes & Shoppers", material: "Calf Leather", colour: "Noir", price: "€2,450" },
  { id: 2, name: "Mini Saddle Bag", category: "Handbags", material: "Suede", colour: "Camel", price: "€1,890" },
  { id: 3, name: "Evening Clutch", category: "Clutches", material: "Satin Leather", colour: "Ivory", price: "€1,200" },
  { id: 4, name: "Weekender Tote", category: "Totes & Shoppers", material: "Grain Leather", colour: "Cognac", price: "€3,100" },
  { id: 5, name: "Fold-Over Clutch", category: "Clutches", material: "Calf Leather", colour: "Noir", price: "€980" },
  { id: 6, name: "Crossbody Sling", category: "Handbags", material: "Nappa Leather", colour: "Stone", price: "€1,650" },
  { id: 7, name: "Box Bag", category: "Handbags", material: "Calf Leather", colour: "Ivory", price: "€2,200" },
  { id: 8, name: "Market Shopper", category: "Totes & Shoppers", material: "Woven Leather", colour: "Camel", price: "€1,750" },
  { id: 9, name: "Card Holder Clutch", category: "Clutches", material: "Suede", colour: "Stone", price: "€750" },
];

const FILTERS = [
  {
    label: "Category",
    options: ["All", "Handbags", "Totes & Shoppers", "Clutches", "Leather Goods", "Exclusive Pieces"],
  },
  {
    label: "Material",
    options: ["All", "Calf Leather", "Suede", "Nappa Leather", "Grain Leather", "Satin Leather", "Woven Leather"],
  },
  {
    label: "Colour",
    options: ["All", "Noir", "Camel", "Ivory", "Cognac", "Stone"],
  },
  {
    label: "Price",
    options: ["All", "Under €1,000", "€1,000 – €2,000", "€2,000 – €3,000", "€3,000+"],
  },
];

function FilterGroup({ label, options }: { label: string; options: string[] }) {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("All");

  return (
    <div className="border-b border-stone-100 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between group"
      >
        <span className="font-anticDidone text-[10px] tracking-[0.35em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors duration-200">
          {label}
        </span>
        <span className={`font-anticDidone text-stone-300 text-sm transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>

      {open && (
        <ul className="mt-4 flex flex-col gap-2.5">
          {options.map((opt) => (
            <li key={opt}>
              <button
                onClick={() => setSelected(opt)}
                className="flex items-center gap-3 group w-full text-left"
              >
                {/* Custom checkbox */}
                <span className={`w-3 h-3 border flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                  selected === opt ? "border-amber-600 bg-amber-600" : "border-stone-300 group-hover:border-stone-500"
                }`}>
                  {selected === opt && (
                    <span className="w-1 h-1 bg-white block" />
                  )}
                </span>
                <span className={`font-interFont text-xs tracking-wide transition-colors duration-200 ${
                  selected === opt ? "text-stone-900" : "text-stone-400 group-hover:text-stone-700"
                }`}>
                  {opt}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <TopBanner />

      {/* Page header */}
      <div className="w-full border-b border-stone-100 px-16 py-16">
        <p className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-stone-400 mb-3">
          Silus Studio
        </p>
        <div className="flex items-end justify-between">
          <h1 className="font-anticDidone text-6xl font-light text-stone-900 tracking-wide">
            Collections
          </h1>
          <p className="font-interFont text-xs text-stone-400 tracking-[0.2em] uppercase">
            {PRODUCTS.length} pieces
          </p>
        </div>
        {/* Gold accent */}
        <div className="mt-8 w-full h-px bg-gradient-to-r from-amber-600/30 via-transparent to-transparent" />
      </div>

      {/* Body — sidebar + grid */}
      <div className="flex flex-1 px-16 py-12 gap-14">

        {/* LEFT — Filters */}
        <aside className="w-52 flex-shrink-0">
          <p className="font-anticDidone text-[10px] tracking-[0.4em] uppercase text-stone-300 mb-2">
            Refine
          </p>
          {FILTERS.map((f) => (
            <FilterGroup key={f.label} label={f.label} options={f.options} />
          ))}

          {/* Clear filters */}
          <button className="mt-6 font-interFont text-[10px] tracking-[0.25em] uppercase text-stone-300 hover:text-stone-600 transition-colors duration-200 border-b border-stone-200 pb-0.5">
            Clear all
          </button>
        </aside>

        {/* RIGHT — Product grid */}
        <div className="flex-1">
          {/* Sort row */}
          <div className="flex items-center justify-end mb-10 gap-6">
            <span className="font-interFont text-[10px] tracking-[0.2em] uppercase text-stone-400">
              Sort by
            </span>
            {["Newest", "Price: Low–High", "Price: High–Low"].map((opt, i) => (
              <button
                key={opt}
                className={`font-interFont text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  i === 0 ? "text-stone-800 border-b border-stone-800" : "text-stone-400 hover:text-stone-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-14">
            {PRODUCTS.map((product) => (
              <Link href={`/collections/${product.id}`} key={product.id} className="group flex flex-col gap-4 cursor-pointer">
                {/* Image placeholder */}
                <div className="relative w-full aspect-[3/4] bg-stone-100 overflow-hidden">
                  {/* Swap for <img> when ready */}
                  <div className="absolute inset-0 bg-stone-200 group-hover:bg-stone-100 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-anticDidone text-stone-300 text-xs tracking-widest uppercase">
                      {product.name}
                    </span>
                  </div>

                  {/* Hover scrim with quick-add */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-stone-600 py-4 flex items-center justify-center">
                    <span className="font-anticDidone text-[10px] tracking-[0.35em] uppercase text-white/80">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="flex flex-col gap-1 px-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-anticDidone text-sm text-stone-800 tracking-wide leading-snug group-hover:text-stone-500 transition-colors duration-200">
                      {product.name}
                    </p>
                    <p className="font-anticDidone text-sm text-stone-800 flex-shrink-0">
                      {product.price}
                    </p>
                  </div>
                  <p className="font-interFont text-[11px] text-stone-400 tracking-wide">
                    {product.material} · {product.colour}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <BottomBanner />
    </main>
  );
}