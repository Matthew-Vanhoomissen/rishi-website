"use client";
import { useEffect, useRef, useState } from "react";
import { TopBanner } from "@/components/TopBanner";
import { BottomBanner } from "@/components/BottomBanner";
import { getProductBySlug } from "@/public/lib/products";
import Link from "next/link";
import * as React from "react";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = ref.current?.querySelectorAll("[data-reveal]");
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
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = getProductBySlug(slug);
  const detailsRef = useReveal(0.1);
  const [added, setAdded] = useState(false);

  if (!product) return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
      <p className="font-anticDidone text-stone-400 tracking-widest uppercase text-sm">Piece not found</p>
      <Link href="/collections" className="font-interFont text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 hover:text-stone-700 transition-colors duration-200">
        Return to Collections
      </Link>
    </main>
  );

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <TopBanner />

      {/* Breadcrumb */}
      <div className="px-16 pt-8 pb-0 flex items-center gap-3">
        <Link href="/collections" className="font-interFont text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-700 transition-colors duration-200">
          Collections
        </Link>
        <span className="font-interFont text-[10px] text-stone-300">—</span>
        <span className="font-interFont text-[10px] tracking-[0.2em] uppercase text-stone-600">
          {product.name}
        </span>
      </div>

      {/* Main product section */}
      <section className="flex flex-col items-center px-16 pt-16 pb-28 gap-12">

        {/* Eyebrow category */}
        <p className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-stone-400">
          {product.category}
        </p>

        {/* Centred image */}
        <div className="relative w-[480px] aspect-[3/4] bg-stone-100 overflow-hidden group">
          <img
            src={product.src}
            alt={product.name}
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle corner marks — luxury editorial detail */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stone-300/60" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-stone-300/60" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-stone-300/60" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stone-300/60" />
        </div>

        {/* Thin gold rule */}
        <div className="w-10 h-px bg-amber-600/40" />

        {/* Name + Price */}
        <div ref={detailsRef} className="flex flex-col items-center gap-10 w-full max-w-lg">
          <div className="flex flex-col items-center gap-3">
            <h1
              data-reveal
              className="font-anticDidone text-5xl font-light text-stone-900 tracking-wide text-center transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              {product.name}
            </h1>
            <p
              data-reveal
              className="font-anticDidone text-2xl font-light text-stone-500 tracking-widest transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(16px)" }}
            >
              {product.price}
            </p>
          </div>

          {/* Description */}
          <p
            data-reveal
            className="font-interFont text-sm font-light text-stone-500 leading-relaxed tracking-wide text-center transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            {product.description}
          </p>

          {/* Material / Colour chips */}
          <div
            data-reveal
            className="flex items-center gap-8 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="font-interFont text-[9px] tracking-[0.3em] uppercase text-stone-300">Material</span>
              <span className="font-anticDidone text-sm text-stone-600 tracking-wide">{product.material}</span>
            </div>
            <div className="w-px h-8 bg-stone-100" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-interFont text-[9px] tracking-[0.3em] uppercase text-stone-300">Colour</span>
              <span className="font-anticDidone text-sm text-stone-600 tracking-wide">{product.colour}</span>
            </div>
          </div>

          {/* CTA */}
          <div
            data-reveal
            className="w-full flex flex-col gap-3 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            <button
              onClick={handleAdd}
              className="group relative w-full overflow-hidden border border-stone-900 py-5 transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-stone-900 scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-500 ease-out" />
              <span className={`relative z-10 font-anticDidone text-[11px] tracking-[0.35em] uppercase transition-colors duration-300 ${added ? "text-stone-900" : "text-white group-hover:text-stone-900"}`}>
                {added ? "Added to Bag ✓" : "Add to Bag"}
              </span>
            </button>

            <button className="w-full border border-stone-200 py-5 hover:border-stone-400 transition-colors duration-300">
              <span className="font-anticDidone text-[11px] tracking-[0.35em] uppercase text-stone-400 hover:text-stone-700 transition-colors duration-300">
                Save to Wishlist
              </span>
            </button>
          </div>

          {/* Delivery note */}
          <p
            data-reveal
            className="font-interFont text-[10px] tracking-[0.15em] text-stone-300 text-center leading-relaxed transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Complimentary shipping on all orders · Each piece arrives in our signature box
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-lg h-px bg-stone-100 mt-4" />

        {/* Care + authenticity strip */}
        <div className="flex items-start justify-center gap-16 max-w-lg w-full">
          {[
            { label: "Handcrafted", sub: "Made in our Lyon atelier" },
            { label: "Numbered", sub: "Each piece individually marked" },
            { label: "Lifetime Repair", sub: "Return any piece, any time" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-anticDidone text-xs tracking-[0.2em] uppercase text-stone-700">{item.label}</span>
              <span className="font-interFont text-[10px] text-stone-400 tracking-wide">{item.sub}</span>
            </div>
          ))}
        </div>

      </section>

      <BottomBanner />
    </main>
  );
}