"use client";
import { useEffect, useRef } from "react";

export function TheProcess() {
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
              }, i * 150);
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-stone-50 py-10 flex flex-col items-center gap-8"
    >
      {/* Eyebrow */}
      <p
        data-reveal
        className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-stone-400 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        Craftsmanship
      </p>

      {/* Title */}
      <h2
        data-reveal
        className="font-anticDidone text-6xl font-light text-stone-900 tracking-wide text-center transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        The Process
      </h2>

      {/* Thin gold rule */}
      <div
        data-reveal
        className="w-10 h-px bg-amber-600/50 transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(12px)" }}
      />

      {/* Image — replace div with <img> when ready */}
      <div
        data-reveal
        className="relative w-[680px] aspect-[3/2] bg-stone-200 overflow-hidden transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(24px)" }}
      >
        <img
          src="/images/AngledBag.png"
          alt="The Process"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <p
        data-reveal
        className="font-interFont text-sm font-light text-stone-400 tracking-[0.15em] text-center max-w-sm leading-relaxed transition-all duration-700 ease-out"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        Take a peek behind the piece — where raw materials
        meet the hands that shape them into something lasting.
      </p>

      {/* CTA */}
      <a
        data-reveal
        href="/craftsmanship"
        className="font-anticDidone text-[11px] tracking-[0.35em] uppercase text-stone-800 border-b border-stone-300 pb-0.5 hover:text-stone-400 hover:border-stone-400 transition-colors duration-300"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        Discover More →
      </a>
    </section>
  );
}