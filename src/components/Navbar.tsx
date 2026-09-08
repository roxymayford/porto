import * as React from "react";
import { useNavigation, PageRoute } from "@/context/NavigationContext";
import { 
  Menu, 
  X, 
  Sparkles, 
  FolderGit2, 
  User, 
  Award, 
  BookOpen, 
  Terminal, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export function Navbar() {
  const { currentPage, navigateTo, isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation();

  const navItems: { id: PageRoute; label: string; badge?: string; badgeColor?: string }[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects", badge: "8", badgeColor: "bg-[#FF4F00]" },
    { id: "about", label: "About & Setup" },
    { id: "certifications", label: "Certs", badge: "6", badgeColor: "bg-[#D5006D]" },
    { id: "blog", label: "Articles", badge: "NEW", badgeColor: "bg-[#FFEA00] text-[#1F2022]" },
    { id: "lab", label: "Lab", badge: "LIVE", badgeColor: "bg-[#00BFFF] text-[#1F2022]" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1F2022] border-b-4 border-[#292929] backdrop-blur-md" data-purpose="main-navigation">
      <div className="flex items-stretch justify-between">
        {/* Brand Logo Badge */}
        <button
          onClick={() => navigateTo("home")}
          className="flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FF4F00] text-white border-r-4 border-[#292929] hover:bg-[#FF6F00] transition-colors select-none group text-left"
          title="Raihan Shandi Adrida Meilano"
        >
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
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 px-2">
          <nav className="flex items-center space-x-1 font-mono font-bold text-xs uppercase tracking-wider">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`relative py-2 px-3 transition-all flex items-center gap-1.5 border-2 ${
                    isActive
                      ? "bg-[#292929] text-white border-[#FF4F00] shadow-[2px_2px_0px_#FF4F00]"
                      : "text-[#E8F8F5]/70 hover:text-white border-transparent hover:border-[#292929] hover:bg-[#292929]/50"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-black px-1.5 py-0.2 rounded-none ${
                        item.badgeColor || "bg-[#292929] text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-stretch">
          {/* Status Badge (Desktop) */}
          <div className="hidden 2xl:flex items-center gap-2 px-4 border-l-4 border-[#292929] bg-[#141517] font-mono text-[11px] font-bold text-[#FFEA00]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFEA00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFEA00]"></span>
            </span>
            <span>AVAILABLE FOR HIRE</span>
          </div>

          {/* Let's Talk CTA */}
          <button
            onClick={() => navigateTo("contact")}
            className="btn-brutal hidden sm:flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#FF4F00] text-white font-mono font-bold text-xs sm:text-sm tracking-wide border-l-4 border-[#292929] hover:bg-[#FF6F00] transition-all uppercase"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden px-4 py-3 bg-[#292929] text-white border-l-4 border-[#292929] hover:bg-[#FF4F00] transition-colors flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t-4 border-[#292929] bg-[#141517] p-4 space-y-2 select-none animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`p-3 text-left font-mono text-xs font-bold uppercase flex items-center justify-between border-2 transition-all ${
                    isActive
                      ? "bg-[#FF4F00] text-white border-[#FF4F00] shadow-[3px_3px_0px_#292929]"
                      : "bg-[#1F2022] text-[#E8F8F5]/80 border-[#292929] hover:border-[#FF4F00] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.id === "home" && <Sparkles className="w-3.5 h-3.5 text-[#FFEA00]" />}
                    {item.id === "projects" && <FolderGit2 className="w-3.5 h-3.5 text-[#FF4F00]" />}
                    {item.id === "about" && <User className="w-3.5 h-3.5 text-[#00BFFF]" />}
                    {item.id === "certifications" && <Award className="w-3.5 h-3.5 text-[#D5006D]" />}
                    {item.id === "blog" && <BookOpen className="w-3.5 h-3.5 text-[#FFEA00]" />}
                    {item.id === "lab" && <Terminal className="w-3.5 h-3.5 text-[#00BFFF]" />}
                    {item.id === "contact" && <Mail className="w-3.5 h-3.5 text-[#FF4F00]" />}
                    <span>{item.label}</span>
                  </span>

                  {item.badge && (
                    <span className={`text-[9px] font-black px-1.5 py-0.5 ${item.badgeColor || "bg-[#292929] text-white"}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#292929]">
            <button
              onClick={() => navigateTo("contact")}
              className="w-full py-3 bg-[#FF4F00] text-white font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 shadow-[3px_3px_0px_#292929]"
            >
              <span>Get in Touch / Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
