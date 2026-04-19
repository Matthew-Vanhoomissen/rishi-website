"use client";
import { useEffect, useRef } from "react";
import { TopBanner } from "@/components/TopBanner";
import { BottomBanner } from "@/components/BottomBanner";

function useReveal(threshold = 0.15) {
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
              }, i * 130);
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

const TIMELINE = [
  {
    year: "2009",
    title: "A Workshop in Lyon",
    body: "What began as a single rented workbench in a Lyon atelier became the first chapter. Our founder spent three years learning from a master saddler — not to make saddles, but to understand leather the way a musician understands an instrument.",
  },
  {
    year: "2013",
    title: "The First Piece",
    body: "A structured tote in undyed calf leather, made entirely by hand over six weeks. It was given away, not sold. The woman who received it still carries it today.",
  },
  {
    year: "2016",
    title: "Paris, Quietly",
    body: "We moved to a small studio in the 11th arrondissement with no storefront, no marketing, and a three-month waiting list built entirely by word of mouth. We kept the list short on purpose.",
  },
  {
    year: "2020",
    title: "Slowing Down Further",
    body: "When the world paused, we used the time to strip the collection back to seven pieces. No seasonal pressure. No trend cycle. Just seven bags we believed in completely.",
  },
  {
    year: "2024",
    title: "Here, Now",
    body: "Today we make fewer than two hundred pieces a year. Each one is numbered, named, and sent with the contact details of the person who made it. That has never changed.",
  },
];

const VALUES = [
  { label: "Patience", body: "We do not rush a piece because a season demands it. If it isn't right, it waits." },
  { label: "Provenance", body: "Every hide is traceable to its tannery. Every thread to its mill. We know where everything comes from." },
  { label: "Permanence", body: "We make things designed to be repaired, not replaced. Every bag can be returned for restoration, forever." },
];

export default function AboutPage() {
  const heroRef = useReveal(0.1);
  const storyRef = useReveal(0.15);
  const timelineRef = useReveal(0.1);
  const valuesRef = useReveal(0.2);
  const closingRef = useReveal(0.2);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <TopBanner />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full h-[70vh] bg-stone-900 overflow-hidden flex items-end px-16 py-20">
        {/* bg placeholder — swap for <img> */}
        <div className="absolute inset-0 bg-stone-800" />
        {/* Noise grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />

        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
          <p
            data-reveal
            className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-white/60 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            Our Story
          </p>
          <h1
            data-reveal
            className="font-anticDidone text-7xl font-light text-white leading-[1.05] tracking-wide transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            Made slowly.<br />
            <em>On purpose.</em>
          </h1>
        </div>

        {/* Decorative year */}
        <span className="absolute bottom-8 right-16 font-anticDidone text-[10rem] text-white/[0.03] leading-none select-none pointer-events-none">
          2026
        </span>
      </section>

      {/* ── OPENING STATEMENT ── */}
      <section ref={storyRef} className="px-16 py-28 flex gap-24 items-start">
        <div
          data-reveal
          className="w-1 self-stretch bg-amber-600/30 flex-shrink-0 transition-all duration-700 ease-out"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        />

        <div className="flex flex-col gap-10 max-w-3xl">
          <p
            data-reveal
            className="font-anticDidone text-3xl font-light text-stone-800 leading-relaxed tracking-wide transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            "We started because we couldn't find what we were looking for —
            something beautiful that wasn't trying to be noticed, and built
            well enough that you'd stop thinking about it entirely."
          </p>
          <p
            data-reveal
            className="font-interFont text-sm font-light text-stone-500 leading-relaxed tracking-wide transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            Silus Studio is an independent leather atelier. We have no parent
            company, no investors, and no plans to scale. We are a small group
            of people who believe that making things carefully is worth more
            than making things quickly — and that the right object, owned for a
            lifetime, is a form of quiet protest against the disposable.
          </p>
          <p
            data-reveal
            className="font-anticDidone text-[10px] tracking-[0.4em] uppercase text-stone-400 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            — Founder, Silus Studio
          </p>
        </div>
      </section>

      {/* ── HOW WE GOT HERE ── */}
      <section ref={timelineRef} className="bg-stone-50 px-16 py-28">
        <div className="flex items-end justify-between mb-20">
          <div className="flex flex-col gap-3">
            <p
              data-reveal
              className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-stone-400 transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(16px)" }}
            >
              History
            </p>
            <h2
              data-reveal
              className="font-anticDidone text-5xl font-light text-stone-900 tracking-wide transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              How We Got Here
            </h2>
          </div>
          <div
            data-reveal
            className="w-24 h-px bg-amber-600/40 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Vertical spine */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-stone-200" />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              data-reveal
              className="relative flex gap-16 pb-16 last:pb-0 transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              {/* Year */}
              <div className="w-24 flex-shrink-0 flex flex-col items-end pt-1 gap-1">
                <span className="font-anticDidone text-sm tracking-[0.2em] text-stone-400">
                  {item.year}
                </span>
              </div>

              {/* Dot on spine */}
              <div className="absolute left-[5.5rem] top-1.5 w-2 h-2 -translate-x-1/2 border border-stone-300 bg-stone-50 rounded-full" />

              {/* Content */}
              <div className="flex flex-col gap-3 max-w-xl pl-10">
                <h3 className="font-anticDidone text-xl text-stone-800 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-interFont text-sm font-light text-stone-500 leading-relaxed tracking-wide">
                  {item.body}
                </p>
                {/* Amber accent on last item */}
                {i === TIMELINE.length - 1 && (
                  <div className="w-6 h-px bg-amber-600/60 mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE BREAK — full width placeholder ── */}
      <div className="relative w-full h-[50vh] bg-stone-300 overflow-hidden">
        {/* swap for <img className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-anticDidone text-stone-400/50 text-sm tracking-[0.4em] uppercase">
            Atelier Image
          </span>
        </div>
        {/* Dark overlay for caption */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent h-32" />
        <p className="absolute bottom-8 left-16 font-anticDidone text-[10px] tracking-[0.35em] uppercase text-white/60">
          Lyon Atelier · Est. 2009
        </p>
      </div>

      {/* ── VALUES ── */}
      <section ref={valuesRef} className="px-16 py-28 flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <p
            data-reveal
            className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-stone-400 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            What We Believe
          </p>
          <h2
            data-reveal
            className="font-anticDidone text-5xl font-light text-stone-900 tracking-wide transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            The things that<br />
            <em>don't change.</em>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {VALUES.map((v, i) => (
            <div
              key={v.label}
              data-reveal
              className="group flex flex-col gap-5 border-t border-stone-200 pt-8 transition-all duration-700 ease-out"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <span className="font-anticDidone text-[10px] tracking-[0.35em] uppercase text-amber-600/70">
                0{i + 1}
              </span>
              <h3 className="font-anticDidone text-2xl text-stone-800 tracking-wide group-hover:text-stone-500 transition-colors duration-300">
                {v.label}
              </h3>
              <p className="font-interFont text-sm font-light text-stone-500 leading-relaxed tracking-wide">
                {v.body}
              </p>
              <div className="w-0 group-hover:w-6 h-px bg-amber-600/50 transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <section
        ref={closingRef}
        className="relative bg-stone-900 px-16 py-28 flex flex-col items-center text-center gap-8 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        <p
          data-reveal
          className="font-anticDidone text-[10px] tracking-[0.5em] uppercase text-white transition-all duration-700 ease-out"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        >
          Join Us
        </p>
        <h2
          data-reveal
          className="font-anticDidone text-5xl font-light text-white tracking-wide leading-snug transition-all duration-700 ease-out"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          Own something<br />
          <em>worth keeping.</em>
        </h2>
        <p
          data-reveal
          className="font-interFont text-sm font-light text-stone-400 tracking-wide max-w-sm leading-relaxed transition-all duration-700 ease-out"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        >
          Browse the current collection — each piece numbered,
          each one made to last longer than any trend.
        </p>
        <a
          data-reveal
          href="/collections"
          className="group relative inline-flex items-center gap-4 border border-white hover:border-white px-10 py-4 transition-colors duration-300 mt-2"
          style={{ opacity: 0, transform: "translateY(16px)" }}
        >
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          <span className="relative font-anticDidone text-[11px] tracking-[0.35em] uppercase text-white group-hover:text-stone-900 transition-colors duration-300 z-10">
            Shop the Collection
          </span>
          <span className="relative text-white group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 z-10">
            →
          </span>
        </a>
      </section>

      <BottomBanner />
    </main>
  );
}