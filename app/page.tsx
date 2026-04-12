import Image from "next/image";
import { ImageCycle } from '../components/ImageCycle';
import { OurMission } from '../components/OurMission';
import { ShoppingBanner } from '../components/ShoppingBanner';


export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col">
        <header className="bg-white w-full">
          {/* Thin gold accent line at top */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

          <div className="flex items-center justify-between px-10 py-5">

            {/* LEFT — Hamburger menu */}
            <div className="flex items-center gap-10">
              <button className="group flex flex-col justify-center w-8 h-8 cursor-pointer">
                <img
                  src="/images/menu.png"
                  alt="Menu"
                  className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </button>

              {/* Optional nav links — hide on smaller screens */}
              <nav className="hidden lg:flex gap-8">
                {["Collections", "Silus Studio", "Craftsmanship"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-anticDidone text-[13px] tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* CENTER — Brand title */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <a href="#" className="group flex flex-col items-center">
                <h1 className="font-anticDidone text-2xl tracking-[0.35em] uppercase text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                  Silus Studio
                </h1>
                <p className="font-anticDidone text-[9px] tracking-[0.45em] uppercase text-stone-400 mt-0.5">
                  Est. 2026
                </p>
              </a>
            </div>

            {/* RIGHT — Search & Bag */}
            <div className="flex items-center gap-5">
              <button className="group flex items-center justify-center w-8 h-8 cursor-pointer">
                <img
                  src="/images/search.png"
                  alt="Search"
                  className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-200 scale-140"
                />
              </button>

              <div className="w-px h-4 bg-stone-200" />

              <button className="group relative flex items-center justify-center w-8 h-8 cursor-pointer">
                <img
                  src="/images/bag.jpg"
                  alt="Shopping Bag"
                  className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                />
                {/* Cart item count dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-700 rounded-full" />
              </button>
            </div>

          </div>

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

        

        <footer className="bg-white border-t border-stone-200 w-full">
          {/* Thin gold accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

          <div className="flex justify-between items-start px-16 py-16 gap-16">

            {/* LEFT — Contact Us */}
            <div className="flex flex-col gap-7 w-96">
              <div>
                <p className="font-interFont text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-2">
                  Get in Touch
                </p>
                <h2 className="font-interFont text-2xl font-light text-stone-800 leading-snug">
                  We'd love to<br />hear from you.
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    font-interFont text-sm text-stone-700 placeholder-stone-300
                    border-b border-stone-300 focus:border-stone-700
                    bg-transparent outline-none py-2
                    transition-colors duration-300
                  "
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="
                    font-interFont text-sm text-stone-700 placeholder-stone-300
                    border-b border-stone-300 focus:border-stone-700
                    bg-transparent outline-none py-2 resize-none
                    transition-colors duration-300
                  "
                />
              </div>

              <button className="
                self-start font-interFont text-[11px] tracking-[0.2em] uppercase
                text-white bg-stone-800 hover:bg-stone-700
                px-8 py-3 transition-colors duration-300
              ">
                Send Message
              </button>

              <p className="font-interFont text-xs text-stone-400 tracking-wide">
                or reach us at{" "}
                <span className="text-stone-600 border-b border-stone-300">
                  hello@example.com
                </span>
              </p>
            </div>

            {/* RIGHT — Categories & Social */}
            <div className="flex gap-20 pt-2">

              {/* Collections */}
              <div className="flex flex-col gap-4">
                <p className="font-interFont text-[10px] tracking-[0.25em] uppercase text-stone-400">
                  Collections
                </p>
                <ul className="flex flex-col gap-3">
                  {["New Arrivals", "Handbags", "Totes & Shoppers", "Clutches", "Leather Goods", "Exclusive Pieces"].map((item) => (
                    <li key={item}>
                      <a href="#" className="font-interFont text-sm font-light text-stone-600 hover:text-stone-900 transition-colors duration-200 tracking-wide">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Maison */}
              <div className="flex flex-col gap-4">
                <p className="font-interFont text-[10px] tracking-[0.25em] uppercase text-stone-400">
                  Silus Studio
                </p>
                <ul className="flex flex-col gap-3">
                  {["Our Story", "Craftsmanship", "Sustainability", "Stockists", "Press"].map((item) => (
                    <li key={item}>
                      <a href="#" className="font-interFont text-sm font-light text-stone-600 hover:text-stone-900 transition-colors duration-200 tracking-wide">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow */}
              <div className="flex flex-col gap-4">
                <p className="font-interFont text-[10px] tracking-[0.25em] uppercase text-stone-400">
                  Follow
                </p>
                <ul className="flex flex-col gap-3">
                  {["Instagram", "Pinterest", "Facebook", "LinkedIn"].map((platform) => (
                    <li key={platform}>
                      <a href="#" className="font-interFont text-sm font-light text-stone-600 hover:text-stone-900 transition-colors duration-200 tracking-wide">
                        {platform}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Subtle decorative monogram */}
                <div className="mt-8 text-5xl font-interFont font-thin text-stone-100 select-none leading-none">
                  M
                </div>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-16 py-5 border-t border-stone-100 flex justify-between items-center">
            <p className="font-interFont text-[10px] tracking-[0.2em] uppercase text-stone-300">
              © 2026 Silus Studio. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Use", "Legal"].map((link) => (
                <a key={link} href="#" className="font-interFont text-[10px] tracking-[0.15em] uppercase text-stone-300 hover:text-stone-600 transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
