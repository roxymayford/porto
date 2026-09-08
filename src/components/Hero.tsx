import * as React from "react";

export function Hero() {
  return (
    <section className="border-b-4 border-black" data-purpose="hero-banner">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Hero Left Column: Intro and Bio */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between grid-bg-subtle border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-purple text-white border-2 border-black shadow-brutal-sm font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-lime inline-block"></span>
              <span>HEY, I'M JOSHUA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-none mb-6">
              SOFTWARE<br />DEVELOPER
            </h1>

            {/* Bio in Typewriter Monospace Style */}
            <p className="font-mono text-gray-800 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              I build scalable web applications and turn ideas into impactful products with clean, efficient code.
            </p>

            {/* Chunky Brutalist Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-brand-lime border-2 border-black px-6 py-3.5 font-mono font-bold text-sm tracking-wide uppercase shadow-brutal text-black" 
                href="#projects"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-white border-2 border-black px-6 py-3.5 font-mono font-bold text-sm tracking-wide uppercase shadow-brutal text-black" 
                href="#resume"
              >
                <span>Download Resume</span>
                <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Icon Connect Section */}
          <div>
            <span className="block font-mono font-bold text-xs uppercase tracking-wider text-black mb-3">Connect With Me</span>
            <div className="flex items-center gap-3">
              {/* GitHub Button */}
              <a 
                aria-label="GitHub Profile" 
                className="btn-brutal w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal text-black hover:bg-brand-lime transition-colors" 
                href="https://github.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn Button */}
              <a 
                aria-label="LinkedIn Profile" 
                className="btn-brutal w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal text-black hover:bg-brand-lime transition-colors" 
                href="https://linkedin.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* Twitter Button */}
              <a 
                aria-label="Twitter Profile" 
                className="btn-brutal w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal text-black hover:bg-brand-lime transition-colors" 
                href="https://twitter.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Email Button */}
              <a 
                aria-label="Send Email" 
                className="btn-brutal w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal text-black hover:bg-brand-lime transition-colors" 
                href="mailto:joshua@example.com"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Pink Framing Card + Workspace Photo + Overlapping Code Terminal */}
        <div className="lg:col-span-5 bg-brand-pink p-6 sm:p-10 flex items-center justify-center relative overflow-hidden" data-purpose="hero-showcase">
          <div className="relative w-full max-w-sm my-6">
            {/* Lime Accent Offset Card Background */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-brand-lime border-2 border-black"></div>
            {/* Photo Frame Card */}
            <div className="relative bg-white border-2 border-black shadow-brutal-lg overflow-hidden aspect-[4/5] z-10">
              <img 
                alt="Joshua - Software Developer portrait" 
                className="w-full h-full object-cover object-center filter contrast-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56IN8Z2DatNEkvnaT1n2nNDfsbFxWVxkZgmhMj9_mxdi-QtXNDa5q8MDLpny0PPQoue07JH1ikWe-Jd5nh_89ISbe1ByebZbXge6seSUNG8uwAtYwiJ2ZmsaYnARKCZY0Aq2xW4orGJy1S_wo3GdekTky5wMFD9GCBO2_zt8V6jk-_ztbYlsyGRy9kWpcr-7iVUjUhLBxiEuRe1jxccyv3kWzw204-HIhvJInJX-i40ZfbNydRUpU" 
              />
            </div>
            {/* Overlapping Retro Code Snippet Terminal */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 w-64 sm:w-72 bg-brand-purple text-white p-4 border-2 border-black shadow-brutal font-mono text-xs leading-relaxed" data-purpose="terminal-card">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-black/30">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-pink border border-black inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime border border-black inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black inline-block"></span>
                <span className="ml-2 text-[10px] text-white/80 font-bold uppercase tracking-widest">dev.json</span>
              </div>
              <p className="text-brand-lime font-bold">&gt; const developer = &#123;</p>
              <p className="pl-3 text-white">code: <span className="text-brand-pink">'TypeScript'</span>,</p>
              <p className="pl-3 text-white">build: <span className="text-brand-lime">'React'</span>,</p>
              <p className="pl-3 text-white">deploy: <span className="text-brand-pink">'Vercel'</span>,</p>
              <p className="pl-3 text-white">passion: <span className="text-brand-lime">'Solving problems'</span></p>
              <p className="text-brand-lime font-bold">&#125;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
