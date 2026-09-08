import * as React from "react";

export function Skills() {
  return (
    <section className="border-b-4 border-black bg-white flex flex-col md:flex-row items-stretch" data-purpose="skills-marquee" id="skills">
      {/* Purple Badge Header */}
      <div className="bg-brand-purple text-white px-8 py-5 flex items-center justify-between md:justify-center gap-3 border-b-4 md:border-b-0 md:border-r-4 border-black min-w-[200px]">
        <span className="font-black text-xl uppercase tracking-wider">SKILLS</span>
        <svg className="w-5 h-5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Tech Stack Icons Row */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black overflow-hidden no-scrollbar">
        {/* React */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" fill="#111111" r="2.05" />
            <g fill="none" stroke="#111111" strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">React</span>
        </div>

        {/* TypeScript */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <div className="w-7 h-7 bg-black text-white font-mono font-black text-xs flex items-center justify-center rounded-none border border-black">
            TS
          </div>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">TypeScript</span>
        </div>

        {/* Node.js */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <div className="w-7 h-7 border-2 border-black font-mono font-black text-xs flex items-center justify-center">
            JS
          </div>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">Node.js</span>
        </div>

        {/* Tailwind CSS */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.02,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.982,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.532,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.982,12,6.001,12z" />
          </svg>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">Tailwind CSS</span>
        </div>

        {/* MongoDB */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <svg className="w-7 h-7 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M12 2v20M12 2c2.5 4 6 7.5 6 12 0 4-2.5 6-6 6M12 2C9.5 6 6 9.5 6 14c0 4 2.5 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">MongoDB</span>
        </div>

        {/* Git */}
        <div className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-brand-lime/20 transition-colors">
          <svg className="w-7 h-7 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect fill="none" height="14" rx="2" stroke="currentColor" transform="rotate(45 12 12)" width="14" x="5" y="5" />
            <circle cx="12" cy="8" fill="currentColor" r="1.5" />
            <circle cx="12" cy="16" fill="currentColor" r="1.5" />
            <circle cx="16" cy="12" fill="currentColor" r="1.5" />
            <path d="M12 9.5v5M12 12h2.5" />
          </svg>
          <span className="font-mono font-bold text-xs uppercase tracking-tight">Git</span>
        </div>
      </div>
    </section>
  );
}
