import { useNavigation } from "@/context/NavigationContext";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const { navigateTo } = useNavigation();
  const links = [
    { label: "Home", route: "home" as const },
    { label: "Projects", route: "projects" as const },
    { label: "About", route: "about" as const },
    { label: "Certifications", route: "certifications" as const },
    { label: "Articles", route: "blog" as const },
    { label: "Lab", route: "lab" as const },
    { label: "Contact", route: "contact" as const },
  ];

  return (
    <footer className="bg-[#0a0d14] px-6 py-16 text-[#e9edf3] sm:px-10 lg:px-16" data-purpose="site-footer">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-4xl font-black leading-[.9] tracking-[-.05em] sm:text-7xl lg:text-8xl">RAIHAN SHANDI</p>
            <p className="mt-4 text-xl font-medium text-[#5a9bfc]">Machine Learning & Full-Stack Developer</p>
            <p className="mt-2 max-w-xl text-base text-[#a4adbc]">Building intelligent systems and robust production infrastructure from Bandung, Indonesia.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map(link => <button key={link.route} onClick={() => navigateTo(link.route)} className="text-base text-[#a4adbc] transition-colors hover:text-[#5a9bfc]">{link.label}</button>)}
            </nav>
            <div className="flex items-center gap-4">
              <a aria-label="GitHub" className="flex min-h-11 min-w-11 items-center justify-center text-[#a4adbc] hover:text-[#5a9bfc]" href="https://github.com/roxymayford" rel="noopener noreferrer" target="_blank"><GithubIcon className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" className="flex min-h-11 min-w-11 items-center justify-center text-[#a4adbc] hover:text-[#5a9bfc]" href="https://linkedin.com" rel="noopener noreferrer" target="_blank"><LinkedinIcon className="h-5 w-5" /></a>
              <a aria-label="Email" className="flex min-h-11 min-w-11 items-center justify-center text-[#a4adbc] hover:text-[#5a9bfc]" href="mailto:yuliahari65@gmail.com"><Mail className="h-5 w-5" /></a>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn-brutal bg-[#131824] px-4 text-sm font-semibold text-[#e9edf3] hover:bg-[#1a2232]">Back to top <ArrowUp className="ml-2 h-4 w-4" /></button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 text-sm text-[#a4adbc] sm:flex-row">
            <span>© {new Date().getFullYear()} Raihan Shandi Adrida Meilano.</span>
            <span>Bandung photos: Cep Budhi Darma, CC BY-SA 4.0; Post of Indonesia, public domain; Adri45an, CC BY 4.0 (Wikimedia Commons).</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
