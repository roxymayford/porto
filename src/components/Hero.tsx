import * as React from "react";

export function Hero() {
  return (
    <section className="border-b-4 border-[#292929]" data-purpose="hero-banner">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Hero Left Column: Intro and Bio */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#1F2022] grid-bg-obsidian border-b-4 lg:border-b-0 lg:border-r-4 border-[#292929]">
          <div>
            {/* Status & Name Identification Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#292929] text-[#E8F8F5] border border-[#292929] shadow-sm font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFEA00] inline-block animate-pulse"></span>
              <span>HEY, I'M RAIHAN SHANDI</span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#E8F8F5] leading-[0.95] mb-2">
              MACHINE<br />
              <span className="text-[#00BFFF]">
                LEARNING
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#E8F8F5]/60 mb-6">
              & Full-Stack <span className="text-[#FF4F00]">Developer</span>
            </h2>

            {/* Bio in Typewriter Monospace Style */}
            <p className="font-mono text-[#E8F8F5]/85 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Aspiring ML Engineer & Full-Stack Developer passionate about building intelligent systems — from training deep learning models and deploying inference pipelines, to crafting clean web applications that bring AI to production.
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-md mb-8">
              <div className="p-3.5 bg-[#292929] border border-[#292929] shadow-sm">
                <span className="block font-black text-xl sm:text-2xl text-[#00BFFF]">ML</span>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#E8F8F5]/70 uppercase">Primary Focus</span>
              </div>
              <div className="p-3.5 bg-[#292929] border border-[#292929] shadow-sm">
                <span className="block font-black text-xl sm:text-2xl text-[#FF4F00]">10+</span>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#E8F8F5]/70 uppercase">Projects Built</span>
              </div>
              <div className="p-3.5 bg-[#292929] border border-[#292929] shadow-sm">
                <span className="block font-black text-xl sm:text-2xl text-[#FFEA00]">∞</span>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#E8F8F5]/70 uppercase">Growth Mindset</span>
              </div>
            </div>

            {/* Chunky Brutalist Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-[#FF4F00] hover:bg-[#FF6F00] text-white border-2 border-[#1F2022] px-6 py-3.5 font-mono font-bold text-sm tracking-wide uppercase shadow-brutal" 
                href="#projects"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-white text-[#1F2022] border-2 border-[#1F2022] px-6 py-3.5 font-mono font-bold text-sm tracking-wide uppercase shadow-brutal" 
                href="#contact"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Icon Connect Section */}
          <div>
            <span className="block font-mono font-bold text-xs uppercase tracking-wider text-[#E8F8F5]/80 mb-3">Connect Directly</span>
            <div className="flex items-center gap-3">
              <a 
                aria-label="GitHub Profile" 
                className="w-10 h-10 bg-[#292929] border border-[#292929] flex items-center justify-center text-[#E8F8F5] hover:bg-[#FF4F00] hover:text-white transition-colors" 
                href="https://github.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                </svg>
              </a>
              <a 
                aria-label="LinkedIn Profile" 
                className="w-10 h-10 bg-[#292929] border border-[#292929] flex items-center justify-center text-[#E8F8F5] hover:bg-[#00BFFF] hover:text-[#1F2022] transition-colors" 
                href="https://linkedin.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a 
                aria-label="Kaggle Profile" 
                className="w-10 h-10 bg-[#292929] border border-[#292929] flex items-center justify-center text-[#E8F8F5] hover:bg-[#D5006D] hover:text-white transition-colors" 
                href="https://kaggle.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.233-.036.315L12.54 15.04l6.248 8.489c.071.094.083.19.037.33z" />
                </svg>
              </a>
              <a 
                aria-label="Send Email" 
                className="w-10 h-10 bg-[#292929] border border-[#292929] flex items-center justify-center text-[#E8F8F5] hover:bg-[#5D3FD3] hover:text-white transition-colors" 
                href="mailto:raihan@example.com"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Right Column */}
        <div className="lg:col-span-5 bg-[#1F2022] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden" data-purpose="hero-showcase">
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "radial-gradient(#292929 2px, transparent 2px)", backgroundSize: "20px 20px" }}></div>

          <div className="relative w-full max-w-sm my-6">
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#292929] border-2 border-[#FF4F00]/60"></div>

            {/* Photo Frame Card — Local Profile Photo */}
            <div className="relative bg-[#1F2022] border-2 border-[#292929] shadow-2xl overflow-hidden aspect-[4/5] z-10">
              <img 
                alt="Raihan Shandi Adrida Meilano - ML & Full-Stack Developer" 
                className="w-full h-full object-cover filter contrast-105" 
                style={{ objectPosition: "center 80%" }}
                src="/profile.jpg" 
              />
              
              {/* Floating Status Pill */}
              <div className="absolute top-3 left-3 bg-[#1F2022]/90 backdrop-blur-sm border border-[#00BFFF] px-2.5 py-1 text-[10px] font-mono font-bold text-[#00BFFF] flex items-center gap-1.5 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-ping"></span>
                <span>ML ENGINEER</span>
              </div>
            </div>

            {/* Overlapping Code Terminal */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 w-64 sm:w-76 bg-[#292929] text-[#E8F8F5] p-4 border border-[#292929] shadow-2xl font-mono text-xs leading-relaxed" data-purpose="terminal-card">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4F00] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFEA00] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFFF] inline-block"></span>
                <span className="ml-2 text-[10px] text-[#E8F8F5]/80 font-bold uppercase tracking-widest">model.py</span>
              </div>
              <p className="text-[#FF4F00] font-bold">&gt; engineer = &#123;</p>
              <p className="pl-3 text-[#E8F8F5]">name: <span className="text-[#00BFFF]">'Raihan Shandi'</span>,</p>
              <p className="pl-3 text-[#E8F8F5]">focus: <span className="text-[#FFEA00]">'Machine Learning'</span>,</p>
              <p className="pl-3 text-[#E8F8F5]">also: <span className="text-[#D5006D]">'Full-Stack Dev'</span>,</p>
              <p className="pl-3 text-[#E8F8F5]">stack: <span className="text-[#FFF700]">['PyTorch', 'React']</span></p>
              <p className="text-[#FF4F00] font-bold">&#125;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
