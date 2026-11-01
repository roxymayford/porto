import * as React from "react";
import { useNavigation, PageRoute } from "@/context/NavigationContext";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { currentPage, navigateTo, isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation();
  const navItems: { id: PageRoute; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "certifications", label: "Certifications" },
    { id: "blog", label: "Articles" },
    { id: "lab", label: "Lab" },
    { id: "contact", label: "Contact" },
  ];

  const go = (route: PageRoute) => {
    navigateTo(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0a0d14] text-[#e9edf3]" data-purpose="main-navigation">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <button onClick={() => go("home")} className="text-left text-2xl font-black tracking-tight text-[#e9edf3] hover:text-[#5a9bfc]">
          RAIHAN.DEV
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`min-h-11 px-4 text-base font-medium transition-colors ${
                currentPage === item.id ? "text-[#5a9bfc]" : "text-[#a4adbc] hover:text-[#e9edf3]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="btn-brutal hidden bg-[#5a9bfc] px-6 text-base font-bold text-[#0a0d14] hover:bg-[#82b3ff] sm:inline-flex"
          >
            Get in touch
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex min-h-12 min-w-12 items-center justify-center bg-[#131824] lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-[#131824] px-6 py-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`min-h-12 px-3 text-left text-lg font-medium ${
                  currentPage === item.id ? "text-[#5a9bfc]" : "text-[#e9edf3]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="btn-brutal mt-4 bg-[#5a9bfc] px-6 text-base font-bold text-[#0a0d14]"
            >
              Get in touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
