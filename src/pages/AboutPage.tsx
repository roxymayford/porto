import * as React from "react";
import { 
  User, 
  Cpu, 
  Laptop, 
  Terminal, 
  Flame, 
  Compass, 
  Award, 
  Music, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles
} from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export function AboutPage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Header Banner */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00BFFF]/10 border border-[#00BFFF]/30 font-mono text-xs font-bold text-[#00BFFF] uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Developer Profile & Biography</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            About <span className="text-[#00BFFF]">Raihan</span> & Engineering Setup
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            Machine Learning Engineer & Full-Stack Developer specializing in high-throughput backend services, distributed data pipelines, and responsive, tactile web interfaces.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 sm:p-10 space-y-12">
        {/* Profile Highlight Card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Avatar & Key Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative bg-[#141517] border-4 border-[#292929] p-6 shadow-[8px_8px_0px_#FF4F00]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#292929] border-2 border-[#FF4F00] flex items-center justify-center p-3 mb-4 mx-auto shadow-sm">
                <img
                  src="/logo.png"
                  alt="Raihan Avatar"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              <div className="text-center space-y-1">
                <h2 className="font-mono font-black text-xl text-white uppercase">
                  Raihan Shandi Adrida M.
                </h2>
                <span className="font-mono text-xs text-[#FF4F00] font-bold block uppercase tracking-wider">
                  Bandung / Jakarta, Indonesia (WIB UTC+7)
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292929] space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[#E8F8F5]/70">
                  <span>Degree</span>
                  <span className="text-white font-bold">B.Comp.Sc (Informatics)</span>
                </div>
                <div className="flex justify-between text-[#E8F8F5]/70">
                  <span>Experience</span>
                  <span className="text-[#FFEA00] font-bold">3+ Years Building</span>
                </div>
                <div className="flex justify-between text-[#E8F8F5]/70">
                  <span>Primary Focus</span>
                  <span className="text-[#00BFFF] font-bold">AI/ML & Go/TypeScript</span>
                </div>
                <div className="flex justify-between text-[#E8F8F5]/70">
                  <span>Availability</span>
                  <span className="text-[#00BFFF] font-bold">Open for Fulltime & Contracts</span>
                </div>
              </div>

              <button
                onClick={() => navigateTo("contact")}
                className="btn-brutal w-full mt-6 py-2.5 bg-[#FF4F00] text-white font-mono text-xs font-bold uppercase flex items-center justify-center gap-2"
              >
                <span>Hire / Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Currently Exploring / Status Pill */}
            <div className="p-4 bg-[#141517] border-2 border-[#292929] space-y-2">
              <div className="flex items-center gap-2 text-[#FFEA00] font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Currently Tinkering With</span>
              </div>
              <p className="font-mono text-xs text-[#E8F8F5]/80 leading-relaxed">
                BitNet b1.58 1-bit LLM quantization architectures, local agentic tool loops, and zero-runtime CSS with modern CSS layout primitives.
              </p>
            </div>
          </div>

          {/* Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-[#00BFFF] pl-4">
              <h2 className="font-mono font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
                The Journey & Vision
              </h2>
              <p className="font-mono text-xs text-[#00BFFF] uppercase tracking-wider font-bold mt-0.5">
                Bridging Deep Learning & High-Throughput Engineering
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm text-[#E8F8F5]/80 leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white">Raihan Shandi Adrida Meilano</strong>, a software developer and machine learning practitioner who thrives at the intersection of mathematical modeling and scalable distributed systems.
              </p>
              <p>
                My engineering journey began with a deep curiosity for how large volumes of sensory and transactional data could be rendered intelligible. That drove me to master modern web frameworks (React, Vite, Next.js), concurrent systems programming (Go, Rust), and deep learning workflows (PyTorch, Hugging Face, ONNX).
              </p>
              <p>
                I believe modern software shouldn't just run efficiently under heavy load—it should feel tactile, responsive, and visually distinct. That's why I embrace <strong className="text-[#FF4F00]">Neo-Brutalism</strong> and deliberate motion physics, combining raw functional honesty with uncompromising performance SLAs.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-[#141517] border-2 border-[#292929] space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#00BFFF]" />
                <h3 className="font-mono font-bold text-xs uppercase text-white">Pragmatic Tech</h3>
                <p className="font-mono text-[11px] text-[#E8F8F5]/60">
                  Selecting stable tools for production resilience over transient hype.
                </p>
              </div>

              <div className="p-4 bg-[#141517] border-2 border-[#292929] space-y-1.5">
                <Zap className="w-5 h-5 text-[#FFEA00]" />
                <h3 className="font-mono font-bold text-xs uppercase text-white">Sub-100ms Latency</h3>
                <p className="font-mono text-[11px] text-[#E8F8F5]/60">
                  Optimized render cycles, caching strategies, and lean network payloads.
                </p>
              </div>

              <div className="p-4 bg-[#141517] border-2 border-[#292929] space-y-1.5">
                <Flame className="w-5 h-5 text-[#FF4F00]" />
                <h3 className="font-mono font-bold text-xs uppercase text-white">Tactile UX</h3>
                <p className="font-mono text-[11px] text-[#E8F8F5]/60">
                  High-contrast borders, bold typography, and intuitive interaction physics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Career & Education Timeline */}
        <section className="space-y-6 pt-6 border-t-4 border-[#292929]">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-wider block">
                Chronology
              </span>
              <h2 className="font-mono font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
                Experience & Education
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-4 border-[#292929] space-y-8">
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 bg-[#FF4F00] border-2 border-[#1F2022]"></span>
              <div className="p-5 bg-[#141517] border-2 border-[#292929] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-mono font-black text-base sm:text-lg text-white uppercase">
                    Machine Learning & Full-Stack Engineer
                  </h3>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#292929] text-[#FFEA00]">
                    2024 — PRESENT
                  </span>
                </div>
                <span className="font-mono text-xs text-[#00BFFF] font-bold block uppercase">
                  Freelance & Independent Contracts • Remote
                </span>
                <p className="font-mono text-xs text-[#E8F8F5]/75 leading-relaxed">
                  Architected custom ML inference pipelines for automated computer vision detection and aspect-based NLP. Built scalable web applications with React, TypeScript, Go microservices, and Docker. Delivered sub-100ms response times for client products.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["PyTorch", "Go", "React 18", "Docker", "Tailwind CSS", "FastAPI"].map(t => (
                    <span key={t} className="px-2 py-0.5 bg-[#1F2022] text-[#E8F8F5]/60 font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 bg-[#00BFFF] border-2 border-[#1F2022]"></span>
              <div className="p-5 bg-[#141517] border-2 border-[#292929] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-mono font-black text-base sm:text-lg text-white uppercase">
                    Data Engineering & Analytics Research Intern
                  </h3>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#292929] text-[#00BFFF]">
                    2023 — 2024
                  </span>
                </div>
                <span className="font-mono text-xs text-[#00BFFF] font-bold block uppercase">
                  Enterprise Data Systems • Bandung, ID
                </span>
                <p className="font-mono text-xs text-[#E8F8F5]/75 leading-relaxed">
                  Collaborated on BigQuery ELT transformations using dbt and SQLX. Designed automated data validation rules and anomaly detection scripts, cutting query computing costs by 45% via partition optimization.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["BigQuery", "SQL", "dbt", "Python", "Cloud Storage", "Tableau"].map(t => (
                    <span key={t} className="px-2 py-0.5 bg-[#1F2022] text-[#E8F8F5]/60 font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 bg-[#FFEA00] border-2 border-[#1F2022]"></span>
              <div className="p-5 bg-[#141517] border-2 border-[#292929] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-mono font-black text-base sm:text-lg text-white uppercase">
                    Bachelor of Computer Science (Informatics)
                  </h3>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#292929] text-[#FFEA00]">
                    2021 — 2025
                  </span>
                </div>
                <span className="font-mono text-xs text-[#FFEA00] font-bold block uppercase">
                  University Faculty of Informatics • Focus: Intelligent Systems
                </span>
                <p className="font-mono text-xs text-[#E8F8F5]/75 leading-relaxed">
                  Intensive curriculum in Data Structures, Algorithms, Distributed Operating Systems, Machine Learning, and Computer Vision. Led software laboratory study groups and completed capstone on deep learning edge optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Uses / Tech Setup Section */}
        <section className="space-y-6 pt-6 border-t-4 border-[#292929]" id="setup">
          <div>
            <span className="font-mono text-xs font-bold text-[#FFEA00] uppercase tracking-wider block">
              Workspace & Gear
            </span>
            <h2 className="font-mono font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
              My Daily Driver Setup ("Uses")
            </h2>
            <p className="font-mono text-xs text-[#E8F8F5]/60 mt-1">
              Hardware, editors, terminal environments, and AI workflows I use every day to build software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hardware Box */}
            <div className="p-5 sm:p-6 bg-[#141517] border-2 border-[#292929] space-y-4">
              <div className="flex items-center gap-3 border-b border-[#292929] pb-3">
                <Laptop className="w-5 h-5 text-[#FF4F00]" />
                <h3 className="font-mono font-bold text-sm uppercase text-white">
                  Hardware & Rig
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#E8F8F5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4F00] font-bold">›</span>
                  <div>
                    <strong className="text-white">Apple MacBook Pro 16" (M2 Max)</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Primary mobile workstation, 32GB Unified Memory</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4F00] font-bold">›</span>
                  <div>
                    <strong className="text-white">Custom Deep Learning Rig</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">AMD Ryzen 9 7900X, 64GB DDR5, NVIDIA RTX 4080 (16GB VRAM) for local CUDA inference</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4F00] font-bold">›</span>
                  <div>
                    <strong className="text-white">Dell UltraSharp 34" Curved USB-C Hub</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">UWQHD 3440x1440 resolution, 100% sRGB color accuracy</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4F00] font-bold">›</span>
                  <div>
                    <strong className="text-white">Keychron Q1 Pro Mechanical Keyboard</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Gateron Oil King linear switches, custom PBT keycaps</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Development Environment */}
            <div className="p-5 sm:p-6 bg-[#141517] border-2 border-[#292929] space-y-4">
              <div className="flex items-center gap-3 border-b border-[#292929] pb-3">
                <Terminal className="w-5 h-5 text-[#00BFFF]" />
                <h3 className="font-mono font-bold text-sm uppercase text-white">
                  Editor & Terminal Workflow
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#E8F8F5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BFFF] font-bold">›</span>
                  <div>
                    <strong className="text-white">Ghostty & Alacritty Terminal</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">GPU-accelerated terminal with custom Starship prompt and Fish shell</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BFFF] font-bold">›</span>
                  <div>
                    <strong className="text-white">Neovim (LazyVim setup) + VS Code</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Fast modal editing with LSP-zero, Treesitter, and GitHub Copilot</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BFFF] font-bold">›</span>
                  <div>
                    <strong className="text-white">tmux + fzf + ripgrep</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Persistent session manager with instantaneous workspace switching</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BFFF] font-bold">›</span>
                  <div>
                    <strong className="text-white">Font: JetBrains Mono Nerd Font</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Crisp ligatures with high visual contrast</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* AI & ML Toolchain */}
            <div className="p-5 sm:p-6 bg-[#141517] border-2 border-[#292929] space-y-4">
              <div className="flex items-center gap-3 border-b border-[#292929] pb-3">
                <Cpu className="w-5 h-5 text-[#FFEA00]" />
                <h3 className="font-mono font-bold text-sm uppercase text-white">
                  AI, ML & Data Engineering
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#E8F8F5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFEA00] font-bold">›</span>
                  <div>
                    <strong className="text-white">PyTorch 2.x & CUDA 12</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Core deep learning engine for vision, NLP, and model training</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFEA00] font-bold">›</span>
                  <div>
                    <strong className="text-white">Ollama + llama.cpp + vLLM</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Local GGUF quantized model serving and high-throughput streaming inference</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFEA00] font-bold">›</span>
                  <div>
                    <strong className="text-white">BigQuery & dbt-core</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Cloud ELT transformations and analytics data warehousing</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Daily Software & Productivity */}
            <div className="p-5 sm:p-6 bg-[#141517] border-2 border-[#292929] space-y-4">
              <div className="flex items-center gap-3 border-b border-[#292929] pb-3">
                <Layers className="w-5 h-5 text-[#D5006D]" />
                <h3 className="font-mono font-bold text-sm uppercase text-white">
                  Productivity & Cloud
                </h3>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#E8F8F5]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#D5006D] font-bold">›</span>
                  <div>
                    <strong className="text-white">Docker Desktop & OrbStack</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Lightweight containerization for reproducible local environments</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D5006D] font-bold">›</span>
                  <div>
                    <strong className="text-white">Raycast & Obsidian</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">Command bar workflow and markdown knowledge base (second brain)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D5006D] font-bold">›</span>
                  <div>
                    <strong className="text-white">Figma & Postman / Bruno</strong>
                    <span className="text-[#E8F8F5]/50 block text-[11px]">UI prototyping and offline API endpoint testing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Portals */}
        <div className="pt-8 border-t-4 border-[#292929] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigateTo("projects")}
            className="btn-brutal px-6 py-3 bg-[#141517] text-white font-mono text-xs font-bold border-2 border-[#292929] hover:border-[#FF4F00] uppercase"
          >
            ← View Projects Archive
          </button>

          <button
            onClick={() => navigateTo("lab")}
            className="btn-brutal px-6 py-3 bg-[#FF4F00] text-white font-mono text-xs font-bold uppercase flex items-center gap-2"
          >
            <span>Launch Developer Lab</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
