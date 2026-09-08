import * as React from "react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1F2022] border-b-4 border-[#292929] backdrop-blur-md" data-purpose="main-navigation">
      <div className="flex flex-wrap items-stretch justify-between">
        {/* Brand Logo Badge */}
        <a 
          className="flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FF4F00] text-white border-r-4 border-[#292929] hover:bg-[#FF6F00] transition-colors select-none group" 
          href="#"
          title="Raihan Shandi Adrida Meilano"
        >
          {/* High-Contrast Neo-Brutalist Mascot Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1F2022] border-2 border-[#1F2022] flex items-center justify-center p-1 shadow-[2px_2px_0px_rgba(0,0,0,0.35)] group-hover:rotate-6 group-hover:scale-105 transition-all">
            <img 
              src="/logo.png" 
              alt="Raihan Logo" 
              className="w-full h-full object-contain filter drop-shadow" 
            />
          </div>
          
          <div className="flex flex-col">
            <span className="font-mono font-black tracking-tight text-base sm:text-lg text-white leading-tight">
              RAIHAN<span className="text-[#FFEA00]">.DEV</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#E8F8F5]/85 uppercase tracking-widest leading-none mt-0.5">
              ML & Full-Stack
            </span>
          </div>
        </a>

        {/* Live Status Pill & Navigation Links */}
        <div className="flex items-center gap-3">
          {/* Active Hire Status Pill */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#292929] text-[#E8F8F5] border border-[#292929] shadow-sm font-mono text-[11px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFEA00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFEA00]"></span>
            </span>
            <span className="text-[#FFEA00]">AVAILABLE FOR HIRE</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 px-2 font-mono font-bold text-xs uppercase tracking-wider">
            <a 
              className="py-2 px-3.5 text-[#E8F8F5] hover:text-[#00BFFF] hover:bg-[#292929] border-2 border-transparent hover:border-[#00BFFF]/40 transition-all" 
              href="#skills"
            >
              Skills
            </a>
            <a 
              className="py-2 px-3.5 text-[#E8F8F5] hover:text-[#FF4F00] hover:bg-[#292929] border-2 border-transparent hover:border-[#FF4F00]/40 transition-all" 
              href="#projects"
            >
              Projects
            </a>
            <a 
              className="py-2 px-3.5 text-[#E8F8F5] hover:text-[#00BFFF] hover:bg-[#292929] border-2 border-transparent hover:border-[#00BFFF]/40 transition-all" 
              href="#experience"
            >
              Experience
            </a>
            <a 
              className="py-2 px-3.5 text-[#E8F8F5] hover:text-[#D5006D] hover:bg-[#292929] border-2 border-transparent hover:border-[#D5006D]/40 transition-all" 
              href="#certifications"
            >
              Certifications
            </a>
          </nav>
        </div>

        {/* CTA Contact Header Button */}
        <a 
          className="btn-brutal flex items-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#FF4F00] text-white font-mono font-bold text-xs sm:text-sm tracking-wide border-l-4 border-[#292929] hover:bg-[#FF6F00] transition-all uppercase" 
          href="#contact"
        >
          <span>Let's Talk</span>
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
