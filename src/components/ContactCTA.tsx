import * as React from "react";

export function ContactCTA() {
  return (
    <div className="lg:col-span-4 grid-bg-purple p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white" data-purpose="final-call-to-action" id="contact">
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-8">
          LET'S BUILD SOMETHING AMAZING TOGETHER.
        </h2>
        <a 
          className="btn-brutal inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3.5 font-mono font-bold text-sm tracking-wide uppercase shadow-brutal" 
          href="mailto:joshua@example.com"
        >
          <span>GET IN TOUCH</span>
          <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Retro 12-point Geometric Starburst Badge Accent */}
      <div aria-hidden="true" className="relative flex justify-end mt-12 z-10">
        <div className="starburst-scroll-wrapper inline-block">
          <svg className="w-24 h-24 text-brand-pink fill-current stroke-black stroke-2 starburst-badge" viewBox="0 0 100 100">
            <polygon points="50,0 62,28 93,17 78,45 100,66 71,76 68,100 45,84 21,97 26,69 0,55 24,38 15,11 41,24" />
          </svg>
        </div>
      </div>

      {/* Faux subtle shadow overlay */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full blur-xl pointer-events-none"></div>
    </div>
  );
}
