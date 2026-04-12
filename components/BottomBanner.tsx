import Image from "next/image";

export function BottomBanner() {
    return (
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
    );    
}