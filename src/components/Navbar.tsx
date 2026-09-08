import * as React from "react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black" data-purpose="main-navigation">
      <div className="flex flex-wrap items-stretch justify-between">
        {/* Brand Logo Badge */}
        <a 
          className="flex items-center gap-2 px-5 py-4 bg-brand-lime border-r-4 border-black font-mono font-bold tracking-tight text-lg hover:bg-brand-lime/90 transition-colors" 
          href="#"
        >
          <span className="font-black">&lt;/&gt;</span>
          <span>JOSHUA DEV</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-8 px-4 font-mono font-bold text-xs uppercase tracking-wider">
          <a className="py-2 px-3 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all" href="#skills">
            Skills
          </a>
          <a className="py-2 px-3 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all" href="#projects">
            Projects
          </a>
          <a className="py-2 px-3 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all" href="#experience">
            Experience
          </a>
          <a className="py-2 px-3 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all" href="#certifications">
            Certifications
          </a>
          <a className="py-2 px-3 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all" href="#animated-footer">
            Footer Art
          </a>
        </nav>

        {/* CTA Contact Header Button */}
        <a 
          className="flex items-center gap-2 px-6 py-4 bg-brand-purple text-white font-mono font-bold text-sm tracking-wide border-l-4 border-black hover:bg-brand-purple/90 transition-colors uppercase" 
          href="#contact"
        >
          <span>Contact Me</span>
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
