import * as React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F2022] text-[#E8F8F5] border-t-4 border-[#292929]" data-purpose="site-footer">
      {/* Top Banner Row */}
      <div className="p-6 sm:p-10 border-b border-[#292929] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#292929] border-2 border-[#FF4F00] flex items-center justify-center p-1.5 shadow-sm">
              <img 
                src="/logo.png" 
                alt="Raihan Logo" 
                className="w-full h-full object-contain filter drop-shadow" 
              />
            </div>
            <div>
              <span className="font-mono font-black text-lg sm:text-2xl tracking-tight text-white uppercase block">
                RAIHAN SHANDI ADRIDA MEILANO
              </span>
              <span className="font-mono text-xs text-[#00BFFF] font-bold uppercase tracking-wider">
                Machine Learning & Full-Stack Developer
              </span>
            </div>
          </div>
          <p className="font-mono text-xs text-[#E8F8F5]/70 max-w-md">
            Machine Learning Engineer & Full-Stack Developer • Crafting intelligent models and high-throughput web applications.
          </p>
        </div>

        {/* Back to top button */}
        <button 
          onClick={scrollToTop}
          className="btn-brutal inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFEA00] text-[#1F2022] font-mono text-xs font-bold uppercase shadow-sm hover:bg-[#FFF700] self-start md:self-auto"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Navigation & Social Icons Row */}
      <div className="flex flex-col md:flex-row items-stretch justify-between border-b border-[#292929]">
        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-6 font-mono text-xs font-bold uppercase tracking-wider text-[#E8F8F5]/70">
          <a className="hover:text-[#00BFFF] transition-colors" href="#skills">Skills</a>
          <a className="hover:text-[#FF4F00] transition-colors" href="#projects">Projects</a>
          <a className="hover:text-[#00BFFF] transition-colors" href="#experience">Experience</a>
          <a className="hover:text-[#D5006D] transition-colors" href="#certifications">Certifications</a>
          <a className="hover:text-[#FFEA00] transition-colors" href="#contact">Contact</a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center divide-x divide-[#292929] border-t-2 md:border-t-0 md:border-l-2 border-[#292929] bg-[#292929]">
          {/* GitHub */}
          <a 
            aria-label="GitHub" 
            className="p-4 text-white hover:bg-[#FF4F00] hover:text-white transition-colors" 
            href="https://github.com" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            aria-label="LinkedIn" 
            className="p-4 text-white hover:bg-[#00BFFF] hover:text-[#1F2022] transition-colors" 
            href="https://linkedin.com" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a 
            aria-label="Twitter" 
            className="p-4 text-white hover:bg-[#D5006D] hover:text-white transition-colors" 
            href="https://twitter.com" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Email */}
          <a 
            aria-label="Email" 
            className="p-4 text-white hover:bg-[#5D3FD3] hover:text-white transition-colors" 
            href="mailto:raihan.shandi@example.com"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Copyright & Tech Stack Info */}
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#E8F8F5]/60">
        <div>
          © {new Date().getFullYear()} Raihan Shandi Adrida Meilano. Built with clean code.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4F00] inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-[#00BFFF] inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-[#5D3FD3] inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-[#FFEA00] inline-block"></span>
          <span className="text-[11px] text-[#E8F8F5]/50 font-bold">React • Vite • TypeScript • Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
