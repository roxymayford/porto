import * as React from "react";

export function Projects() {
  return (
    <div className="lg:col-span-8 p-6 sm:p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white flex flex-col justify-between">
      <div>
        {/* Section Header & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Featured Projects</h2>
          <div className="flex items-center gap-3">
            <a className="btn-brutal inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold uppercase shadow-brutal-sm" href="#">
              <span>View All Projects</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Nav Arrow Controls */}
            <div className="flex items-center gap-1">
              <button aria-label="Previous project" className="btn-brutal w-8 h-8 bg-brand-pink border-2 border-black flex items-center justify-center font-mono font-bold text-sm shadow-brutal-sm">
                &lt;
              </button>
              <button aria-label="Next project" className="btn-brutal w-8 h-8 bg-brand-pink border-2 border-black flex items-center justify-center font-mono font-bold text-sm shadow-brutal-sm">
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Project Card Main Container */}
        <article className="border-2 border-black shadow-brutal-lg bg-white overflow-hidden" data-purpose="project-card">
          {/* Graphic Showcase Box with Neo-Brutalist Pink & Sun/Cloud Theme */}
          <div className="p-6 bg-brand-pink border-b-2 border-black">
            <div className="w-full bg-[#FAF9F5] border-2 border-black p-6 relative overflow-hidden h-52 sm:h-64 flex items-center justify-center">
              {/* Retro Sun Graphics */}
              <div className="absolute top-4 left-6 w-24 h-24 rounded-full bg-[#FF8400] border-2 border-black z-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-black rotate-45"></div>
                <div className="w-full h-0.5 bg-black -rotate-45"></div>
              </div>
              {/* Geometric Cloud Vector Motif */}
              <div className="relative z-10 flex items-end">
                <div className="bg-[#56A8F5] border-2 border-black px-6 py-4 shadow-brutal">
                  <div className="flex items-center gap-3">
                    <svg className="w-12 h-12 stroke-black stroke-[2.5] fill-white" viewBox="0 0 24 24">
                      <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-black text-4xl sm:text-5xl tracking-tighter text-black">24°C</span>
                  </div>
                </div>
              </div>
              {/* Grid Accent in Card */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundSize: '16px 16px', backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)' }}></div>
            </div>
          </div>

          {/* Project Metadata Details */}
          <div className="p-6">
            <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Weatherly</h3>
            <p className="font-mono text-gray-700 text-sm mb-6 leading-relaxed">
              A weather app with real-time data, beautiful charts and interactive forecasts designed for precision forecasting.
            </p>
            {/* Project Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white border-2 border-black font-mono font-bold text-xs uppercase">React</span>
              <span className="px-3 py-1 bg-white border-2 border-black font-mono font-bold text-xs uppercase">TypeScript</span>
              <span className="px-3 py-1 bg-white border-2 border-black font-mono font-bold text-xs uppercase">API</span>
            </div>
            {/* View Details Button */}
            <a className="btn-brutal inline-flex items-center gap-2 bg-white border-2 border-black px-5 py-2.5 font-mono font-bold text-xs tracking-wider uppercase shadow-brutal" href="#">
              <span>View Details</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      {/* Carousel Dots Indicator */}
      <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-8">
        <span className="w-3 h-3 rounded-full border-2 border-black bg-black"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-white"></span>
      </div>
    </div>
  );
}
