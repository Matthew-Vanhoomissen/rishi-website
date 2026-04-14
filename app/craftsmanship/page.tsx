import Link from "next/link";

import { TopBanner } from "@/components/TopBanner";
import { BottomBanner } from "@/components/BottomBanner";

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
    
            
    
            {/* TEMPORARY SPACER */}
            {<div className="h-[200vh] bg-stone-100" />}
            
    
            <BottomBanner />
          </main>
        </div>
    );
}