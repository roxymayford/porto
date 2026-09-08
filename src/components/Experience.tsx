import * as React from "react";

export function Experience() {
  return (
    <>
      {/* Experience Sidebar Pill */}
      <div className="lg:col-span-2 bg-brand-pink p-6 sm:p-8 flex items-center lg:items-start justify-between lg:justify-start border-b-4 lg:border-b-0 lg:border-r-4 border-black">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight">EXPERIENCE</h2>
          <svg className="w-6 h-6 stroke-[3] mt-2 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <svg className="w-6 h-6 stroke-[3] lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Experience Timeline Area */}
      <div className="lg:col-span-6 p-6 sm:p-10 bg-white border-b-4 lg:border-b-0 lg:border-r-4 border-black">
        {/* Vertical Timeline with solid nodes */}
        <div className="relative pl-6 sm:pl-8 space-y-10 border-l-4 border-black ml-2 sm:ml-4">
          {/* Job 1 */}
          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 bg-black border-2 border-black rounded-none"></span>
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs">
                <span className="font-black text-black text-sm uppercase">Senior Frontend Developer</span>
                <span className="text-brand-purple font-bold">•</span>
                <span className="font-bold text-gray-900 uppercase">Technova Inc.</span>
              </div>
              <span className="inline-block font-mono text-xs text-gray-500 font-bold mb-2">2022 — Present</span>
              <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed">
                Lead the frontend development of a high-traffic SaaS platform used by over 50,000 active users.
              </p>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 bg-black border-2 border-black rounded-none"></span>
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs">
                <span className="font-black text-black text-sm uppercase">Web Developer</span>
                <span className="text-brand-purple font-bold">•</span>
                <span className="font-bold text-gray-900 uppercase">Creative Studio</span>
              </div>
              <span className="inline-block font-mono text-xs text-gray-500 font-bold mb-2">2019 — 2022</span>
              <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed">
                Built interactive marketing websites and internal tools for various high-profile clients.
              </p>
            </div>
          </div>

          {/* Job 3 */}
          <div className="relative">
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 bg-black border-2 border-black rounded-none"></span>
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs">
                <span className="font-black text-black text-sm uppercase">Junior Developer</span>
                <span className="text-brand-purple font-bold">•</span>
                <span className="font-bold text-gray-900 uppercase">Startup Hub</span>
              </div>
              <span className="inline-block font-mono text-xs text-gray-500 font-bold mb-2">2018 — 2019</span>
              <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed">
                Assisted in building MVP applications for early-stage startups in rapid-iteration cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Full Resume Link */}
        <div className="mt-10 ml-2 sm:ml-4">
          <a className="btn-brutal inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-mono font-bold text-xs uppercase shadow-brutal text-black" href="#resume">
            <span>View Full Resume</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
