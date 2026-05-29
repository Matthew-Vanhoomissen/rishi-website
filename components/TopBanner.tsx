import Image from "next/image";
import Link from "next/link";

export function TopBanner() {
    return (
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
                {[
                { label: "Collections", href: "/collections" },
                { label: "Silus Studio", href: "/about" },
                { label: "Craftsmanship", href: "/craftsmanship" },
                ].map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="font-anticDidone text-[13px] tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors duration-200"
                >
                    {item.label}
                </Link>
                ))}
              </nav>
            </div>

            {/* CENTER — Brand title */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <Link href="/" className="group flex flex-col items-center">
                <h1 className="font-anticDidone text-3xl tracking-[0.35em] uppercase text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                  Silus
                </h1>
                <p className="font-anticDidone text-[9px] tracking-[0.45em] uppercase text-stone-400 mt-0.5">
                  Est. 2026
                </p>
              </Link>
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
    );
}