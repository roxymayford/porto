import { useNavigation } from "@/context/NavigationContext";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const { navigateTo } = useNavigation();

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

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={scrollToTop}
            className="btn-brutal inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFEA00] text-[#1F2022] font-mono text-xs font-bold uppercase shadow-sm hover:bg-[#FFF700]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Navigation & Social Icons Row */}
      <div className="flex flex-col md:flex-row items-stretch justify-between border-b border-[#292929]">
        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 p-4 sm:p-6 font-mono text-xs font-bold uppercase tracking-wider text-[#E8F8F5]/80">
          <button onClick={() => navigateTo("home")} className="hover:text-[#00BFFF] transition-colors">
            Home
          </button>
          <button onClick={() => navigateTo("projects")} className="hover:text-[#FF4F00] transition-colors">
            Projects (8)
          </button>
          <button onClick={() => navigateTo("about")} className="hover:text-[#00BFFF] transition-colors">
            About & Setup
          </button>
          <button onClick={() => navigateTo("certifications")} className="hover:text-[#D5006D] transition-colors">
            Certifications (6)
          </button>
          <button onClick={() => navigateTo("blog")} className="hover:text-[#FFEA00] transition-colors">
            Articles
          </button>
          <button onClick={() => navigateTo("lab")} className="hover:text-[#00BFFF] transition-colors">
            Dev Lab
          </button>
          <button onClick={() => navigateTo("contact")} className="hover:text-[#FF4F00] transition-colors">
            Contact Hub
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center divide-x divide-[#292929] border-t-2 md:border-t-0 md:border-l-2 border-[#292929] bg-[#292929]">
          {/* GitHub */}
          <a 
            aria-label="GitHub" 
            className="p-4 text-white hover:bg-[#FF4F00] hover:text-white transition-colors" 
            href="https://github.com/roxymayford" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a 
            aria-label="LinkedIn" 
            className="p-4 text-white hover:bg-[#00BFFF] hover:text-[#1F2022] transition-colors" 
            href="https://linkedin.com" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* Email */}
          <a 
            aria-label="Email" 
            className="p-4 text-white hover:bg-[#5D3FD3] hover:text-white transition-colors" 
            href="mailto:yuliahari65@gmail.com"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright & Tech Stack Info */}
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#E8F8F5]/60">
        <div>
          © {new Date().getFullYear()} Raihan Shandi Adrida Meilano. High-Throughput & Tactile Neo-Brutalism.
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
