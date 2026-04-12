import Image from "next/image";
import { ImageCycle } from '../components/ImageCycle';
import { OurMission } from '../components/OurMission';
import { ShoppingBanner } from '../components/ShoppingBanner';
import { TopBanner  } from '../components/TopBanner';
import { BottomBanner } from '../components/BottomBanner';


export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col">
        <header className="bg-white w-full">
          {/* Thin gold accent line at top */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

          <TopBanner />

          {/* Bottom border */}
          <div className="h-px bg-stone-100" />
        </header>

        <section className="relative w-full h-screen">

          {/* Grey placeholder — swap this div for <img> or <video> later */}
          <div className="absolute inset-0 bg-stone-800" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-16 py-20">
            <p className="font-anticDidone text-[11px] tracking-[0.4em] uppercase text-white/60 mb-4">
              New Collection · 2026
            </p>
            <h2 className="font-anticDidone text-7xl text-white font-light leading-[1.05] tracking-wide max-w-3xl">
              Insert<br /> Image or Video here
            </h2>
            <p className="font-interFont text-sm tracking-[0.2em] uppercase text-white/50 mt-8">
              Explore the Collection
              <span className="ml-3 inline-block">↓</span>
            </p>
          </div>

        </section>

        <ImageCycle />
        <OurMission />
        <ShoppingBanner />
        {/* TEMPORARY SPACER */}
        {/*<div className="h-[200vh] bg-stone-100" />*/}

        

        <BottomBanner />
      </main>
    </div>
  );
}
