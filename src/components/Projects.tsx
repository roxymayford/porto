import * as React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  demoUrl: string;
  repoUrl: string;
}

const projectsList: Project[] = [
  { id: "weatherly", title: "Weatherly Pro", tagline: "Precision Meteorological & Microclimate Intelligence", description: "A high-performance weather intelligence platform with sub-kilometer radar rendering, real-time storm tracking, and historical climate analytics.", tags: ["React", "TypeScript", "Tailwind CSS", "GSAP Motion", "REST API"], stats: [{ label: "Latency", value: "<85ms" }, { label: "Accuracy", value: "99.4%" }, { label: "Active Users", value: "14K+" }], demoUrl: "https://weatherly.demo.app", repoUrl: "https://github.com/example/weatherly" },
  { id: "devpulse", title: "DevPulse Observability", tagline: "Real-time Microservices & Distributed Tracing Engine", description: "An infrastructure monitoring tool built to track latency bottlenecks, API error budgets, and distributed Docker cluster health in high-throughput architectures.", tags: ["Go", "Next.js", "Docker", "PostgreSQL", "Tailwind"], stats: [{ label: "Throughput", value: "50k req/s" }, { label: "Cluster Nodes", value: "128" }, { label: "Alert Latency", value: "0.2s" }], demoUrl: "https://devpulse.demo.app", repoUrl: "https://github.com/example/devpulse" },
  { id: "omnix", title: "Omnix Workflow Studio", tagline: "Visual DAG Pipeline Builder for Engineering Automations", description: "Interactive node graph canvas enabling engineers to construct, simulate, and trigger distributed asynchronous worker pipelines without writing boilerplate.", tags: ["TypeScript", "React", "Node.js", "Redis", "WebSockets"], stats: [{ label: "Workflows Run", value: "1.2M+" }, { label: "Execution Time", value: "-45%" }, { label: "Integrations", value: "30+" }], demoUrl: "https://omnix.demo.app", repoUrl: "https://github.com/example/omnix-flow" },
];

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex min-h-64 flex-col justify-between bg-[#0a0d14] p-7 sm:min-h-80 sm:p-10" aria-label="Weatherly Pro interface concept, data visualization">
        <div className="flex items-center justify-between text-base text-[#a4adbc]"><span>Global weather</span><span>42° · partly cloudy</span></div>
        <div className="flex items-end gap-2" aria-hidden="true">
          {[45, 72, 54, 90, 66, 82, 51, 75, 94, 62, 80, 48, 68, 88, 57, 76].map((height, i) => <span key={i} className="flex-1 bg-[#5a9bfc]" style={{ height: `${height}px`, opacity: .35 + i % 3 * .2 }} />)}
        </div>
        <p className="text-3xl font-bold tracking-tight text-[#e9edf3] sm:text-4xl">Weatherly Pro</p>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex min-h-64 flex-col justify-between bg-[#0a0d14] p-7 sm:min-h-80 sm:p-10" aria-label="DevPulse observability concept, service telemetry">
        <p className="text-base text-[#a4adbc]">Service health</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          {["99.98%", "128", "0.2s"].map(value => <div key={value} className="bg-[#131824] px-2 py-5 text-2xl font-bold text-[#5a9bfc] sm:text-3xl">{value}</div>)}
        </div>
        <p className="text-3xl font-bold tracking-tight text-[#e9edf3] sm:text-4xl">DevPulse</p>
      </div>
    );
  }
  return (
    <div className="flex min-h-64 flex-col justify-between bg-[#0a0d14] p-7 sm:min-h-80 sm:p-10" aria-label="Omnix pipeline concept, workflow graph">
      <p className="text-base text-[#a4adbc]">Workflow graph</p>
      <div className="flex items-center justify-center gap-2 sm:gap-4" aria-hidden="true">
        {["Trigger", "Process", "Queue", "Deliver"].map((node, i) => <React.Fragment key={node}><span className="bg-[#131824] px-3 py-3 text-sm font-medium text-[#e9edf3] sm:px-4 sm:text-base">{node}</span>{i < 3 && <span className="h-0.5 w-3 bg-[#5a9bfc] sm:w-6" />}</React.Fragment>)}
      </div>
      <p className="text-3xl font-bold tracking-tight text-[#e9edf3] sm:text-4xl">Omnix Studio</p>
    </div>
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const project = projectsList[currentIndex];
  const move = (delta: number) => setCurrentIndex(i => (i + delta + projectsList.length) % projectsList.length);

  return (
    <section className="bg-[#0a0d14] px-6 py-20 text-[#e9edf3] sm:px-10 lg:px-16 lg:py-28" data-purpose="featured-projects">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-5xl font-extrabold leading-[.95] tracking-[-.04em] sm:text-7xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-[#a4adbc]">Production systems, ML tooling, and high-performance applications.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => move(-1)} aria-label="Previous project" className="flex min-h-12 min-w-12 items-center justify-center bg-[#131824] text-xl font-bold transition-colors hover:bg-[#1f283b]">‹</button>
            <button onClick={() => move(1)} aria-label="Next project" className="flex min-h-12 min-w-12 items-center justify-center bg-[#5a9bfc] text-xl font-bold text-[#0a0d14] transition-opacity hover:opacity-90">›</button>
          </div>
        </div>

        <article className="grid gap-8 bg-[#131824] p-6 sm:p-10 lg:grid-cols-2 lg:items-center" data-purpose="project-card">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-base font-medium text-[#5a9bfc]">{project.tagline}</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#a4adbc]">{project.description}</p>
              <p className="mt-4 text-base text-[#e9edf3]">{project.tags.join(" · ")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {project.stats.map(stat => <div key={stat.label}><span className="block text-sm text-[#a4adbc]">{stat.label}</span><span className="text-xl font-bold text-[#e9edf3]">{stat.value}</span></div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-brutal bg-[#5a9bfc] px-6 text-base font-bold text-[#0a0d14]" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink className="ml-2 h-4 w-4" /></a>
              <a className="btn-brutal border border-[#465066] px-6 text-base font-bold text-[#e9edf3] hover:bg-[#1a2232]" href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo <ArrowRight className="ml-2 h-4 w-4" /></a>
            </div>
          </div>
          <ProjectVisual index={currentIndex} />
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          {projectsList.map((p, i) => <button key={p.id} onClick={() => setCurrentIndex(i)} className={`min-h-11 px-5 text-base font-medium transition-colors ${i === currentIndex ? "bg-[#5a9bfc] text-[#0a0d14]" : "bg-[#131824] text-[#e9edf3] hover:bg-[#1f283b]"}`}>{p.title}</button>)}
        </div>
      </div>
    </section>
  );
}
