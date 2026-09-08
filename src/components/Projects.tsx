import * as React from "react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  previewType: "weather" | "metrics" | "pipeline";
  stats: { label: string; value: string }[];
  demoUrl: string;
  repoUrl: string;
}

const projectsList: Project[] = [
  {
    id: "weatherly",
    title: "Weatherly Pro",
    tagline: "Precision Meteorological & Microclimate Intelligence",
    description: "A high-performance weather intelligence platform with sub-kilometer radar rendering, real-time storm tracking, and historical climate analytics.",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP Motion", "REST API"],
    previewType: "weather",
    stats: [
      { label: "Latency", value: "<85ms" },
      { label: "Accuracy", value: "99.4%" },
      { label: "Active Users", value: "14K+" },
    ],
    demoUrl: "https://weatherly.demo.app",
    repoUrl: "https://github.com/example/weatherly",
  },
  {
    id: "devpulse",
    title: "DevPulse Observability",
    tagline: "Real-time Microservices & Distributed Tracing Engine",
    description: "An infrastructure monitoring tool built to track latency bottlenecks, API error budgets, and distributed Docker cluster health in high-throughput architectures.",
    tags: ["Go", "Next.js", "Docker", "PostgreSQL", "Tailwind"],
    previewType: "metrics",
    stats: [
      { label: "Throughput", value: "50k req/s" },
      { label: "Cluster Nodes", value: "128" },
      { label: "Alert Latency", value: "0.2s" },
    ],
    demoUrl: "https://devpulse.demo.app",
    repoUrl: "https://github.com/example/devpulse",
  },
  {
    id: "omnix",
    title: "Omnix Workflow Studio",
    tagline: "Visual DAG Pipeline Builder for Engineering Automations",
    description: "Interactive node graph canvas enabling engineers to construct, simulate, and trigger distributed asynchronous worker pipelines without writing boilerplate.",
    tags: ["TypeScript", "React", "Node.js", "Redis", "WebSockets"],
    previewType: "pipeline",
    stats: [
      { label: "Workflows Run", value: "1.2M+" },
      { label: "Execution Time", value: "-45%" },
      { label: "Integrations", value: "30+" },
    ],
    demoUrl: "https://omnix.demo.app",
    repoUrl: "https://github.com/example/omnix-flow",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const activeProject = projectsList[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
  };

  return (
    <div className="lg:col-span-8 p-6 sm:p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-[#292929] bg-[#1F2022] flex flex-col justify-between">
      <div>
        {/* Section Header & Interactive Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-widest block">Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#E8F8F5]">Featured Projects</h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Switch Pills */}
            <div className="hidden sm:flex items-center gap-1 border border-[#292929] p-1 bg-[#292929]">
              {projectsList.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-all ${
                    idx === currentIndex 
                      ? "bg-[#FF4F00] text-white" 
                      : "text-[#E8F8F5]/70 hover:text-white"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Nav Arrow Controls */}
            <div className="flex items-center gap-1.5">
              <button 
                onClick={handlePrev}
                aria-label="Previous project" 
                className="w-9 h-9 bg-[#292929] border border-[#292929] flex items-center justify-center font-mono font-bold text-base text-[#E8F8F5] hover:border-[#00BFFF] hover:text-[#00BFFF] transition-colors"
              >
                &lt;
              </button>
              <button 
                onClick={handleNext}
                aria-label="Next project" 
                className="w-9 h-9 bg-[#FF4F00] border border-[#FF4F00] flex items-center justify-center font-mono font-bold text-base text-white hover:bg-[#FF6F00] transition-colors"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Project Card Main Container */}
        <article className="border border-[#292929] bg-[#292929] shadow-xl overflow-hidden" data-purpose="project-card">
          {/* Dynamic Graphic Showcase Box */}
          <div className="p-6 bg-[#1F2022] border-b border-[#292929]">
            <div className="w-full bg-[#1F2022] border border-[#292929] p-6 relative overflow-hidden h-52 sm:h-60 flex items-center justify-center text-white">
              {/* Background Accent Grid */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundSize: '16px 16px', backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)' }}
              ></div>

              {/* Graphical Preview Content based on project */}
              {activeProject.previewType === "weather" && (
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center mb-4">
                    {/* Retro Sun Graphics */}
                    <div className="w-20 h-20 rounded-full bg-[#FF4F00] border-2 border-[#1F2022] flex items-center justify-center shadow-md animate-spin" style={{ animationDuration: '30s' }}>
                      <div className="w-full h-0.5 bg-[#1F2022] rotate-45"></div>
                      <div className="w-full h-0.5 bg-[#1F2022] -rotate-45"></div>
                    </div>
                    {/* Weather Capsule */}
                    <div className="absolute -bottom-2 -right-4 bg-[#00BFFF] border border-[#1F2022] px-4 py-1.5 shadow text-[#1F2022] font-black text-2xl">
                      24°C
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#E8F8F5]/80 font-bold uppercase tracking-wider">
                    Thunderstorm Warning: Low Risk • Radar Normal
                  </span>
                </div>
              )}

              {activeProject.previewType === "metrics" && (
                <div className="relative z-10 w-full max-w-sm space-y-3 font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs text-[#FFEA00] font-bold uppercase">&gt; Service Mesh</span>
                    <span className="text-[10px] bg-[#FF4F00] text-white px-2 py-0.5 font-bold">HEALTHY 100%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-[#292929] border border-white/10">
                      <span className="text-gray-400 block text-[10px]">P99</span>
                      <span className="text-[#00BFFF] font-bold">14ms</span>
                    </div>
                    <div className="p-2 bg-[#292929] border border-white/10">
                      <span className="text-gray-400 block text-[10px]">CPU</span>
                      <span className="text-[#FFEA00] font-bold">32%</span>
                    </div>
                    <div className="p-2 bg-[#292929] border border-white/10">
                      <span className="text-gray-400 block text-[10px]">Errors</span>
                      <span className="text-[#FF4F00] font-bold">0.00%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeProject.previewType === "pipeline" && (
                <div className="relative z-10 flex items-center gap-2 sm:gap-4 font-mono">
                  <div className="p-3 bg-[#D5006D] border border-white/20 text-white font-bold text-xs shadow-sm">
                    Trigger: Webhook
                  </div>
                  <span className="text-[#FFEA00] font-bold text-lg">➔</span>
                  <div className="p-3 bg-[#5D3FD3] border border-white/20 text-white font-bold text-xs shadow-sm">
                    Build Container
                  </div>
                  <span className="text-[#FFEA00] font-bold text-lg">➔</span>
                  <div className="p-3 bg-[#00BFFF] border border-black text-[#1F2022] font-bold text-xs shadow-sm">
                    Deploy Edge
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Metadata Details */}
          <div className="p-6 sm:p-8 bg-[#292929]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#E8F8F5]">
                {activeProject.title}
              </h3>
              <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#1F2022] border border-[#292929] text-[#00BFFF] uppercase">
                {activeProject.tagline}
              </span>
            </div>

            <p className="font-mono text-[#E8F8F5]/80 text-sm mb-6 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 bg-[#1F2022] border border-[#292929] mb-6">
              {activeProject.stats.map((stat, i) => (
                <div key={i} className="text-center font-mono">
                  <span className="text-[10px] text-[#E8F8F5]/60 block uppercase font-bold">{stat.label}</span>
                  <span className="text-sm sm:text-base font-black text-[#E8F8F5]">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Project Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-[#1F2022] border border-[#292929] font-mono font-bold text-xs uppercase text-[#E8F8F5]/90 hover:border-[#FF4F00] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-[#FF4F00] text-white px-5 py-2.5 font-mono font-bold text-xs tracking-wider uppercase shadow-sm hover:bg-[#FF6F00]" 
                href={activeProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Live Demo</span>
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a 
                className="btn-brutal inline-flex items-center gap-2 bg-[#1F2022] text-[#E8F8F5] border border-[#292929] px-5 py-2.5 font-mono font-bold text-xs tracking-wider uppercase shadow-sm hover:border-[#00BFFF] hover:text-[#00BFFF]" 
                href={activeProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub Repo</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Carousel Indicator Track */}
      <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-8">
        {projectsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full border border-[#292929] transition-all ${
              idx === currentIndex ? "bg-[#FF4F00] scale-125" : "bg-[#292929] hover:bg-[#FF4F00]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
