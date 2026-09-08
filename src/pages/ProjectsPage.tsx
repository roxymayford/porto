import * as React from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  Search, 
  Layers, 
  Activity, 
  Cpu, 
  Database, 
  Terminal, 
  X, 
  CheckCircle2, 
  ArrowRight,
  SlidersHorizontal
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: "Machine Learning & AI" | "Full-Stack Web" | "Cloud & DevOps" | "Developer Tools";
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  challengesSolved: string[];
  techStackDetailed: { category: string; items: string[] }[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
}

const ALL_PROJECTS: ProjectData[] = [
  {
    id: "weatherly-pro",
    title: "Weatherly Pro",
    tagline: "Precision Meteorological & Microclimate Intelligence Platform",
    category: "Full-Stack Web",
    description: "A high-performance weather intelligence platform with sub-kilometer radar rendering, real-time storm tracking, and historical climate analytics.",
    longDescription: "Weatherly Pro aggregates high-frequency telemetry from open atmospheric radar networks and satellite arrays. Built with Vite, TypeScript, and optimized Canvas/WebGL overlays, it provides lightning-fast precipitation tracking and localized 72-hour barometric microclimate forecasts.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "GSAP Motion", "WebGL Canvas", "NOAA API"],
    metrics: [
      { label: "Render Latency", value: "<85ms" },
      { label: "Radar Accuracy", value: "99.4%" },
      { label: "Daily Queries", value: "140K+" },
    ],
    architectureOverview: "Client-side WebGL canvas render pipeline layered over high-resolution tile layers with cached telemetry in IndexedDB and Service Worker background refresh.",
    challengesSolved: [
      "Smooth 60fps Doppler radar playback across complex geographical vector tiles",
      "Dynamic browser memory management during multi-hour radar loop caching",
      "Resilient offline-first fallback utilizing PWA service workers"
    ],
    techStackDetailed: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "GSAP Motion"] },
      { category: "Data Engine", items: ["NOAA Open Data", "GeoJSON", "WebGL 2D Canvas"] },
      { category: "DevOps", items: ["Vercel Edge", "Cloudflare CDN", "GitHub Actions"] },
    ],
    demoUrl: "https://weatherly.demo.app",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: true,
  },
  {
    id: "devpulse-observability",
    title: "DevPulse Observability",
    tagline: "Real-Time Microservices Tracing & Docker Cluster Health Engine",
    category: "Cloud & DevOps",
    description: "An infrastructure monitoring tool built to track latency bottlenecks, API error budgets, and distributed Docker cluster health in high-throughput architectures.",
    longDescription: "DevPulse continuously ingests OpenTelemetry traces and Docker socket health streams across distributed cluster nodes. It computes p95 and p99 latencies in real time and triggers instant pager alerts when error budgets degrade beyond SLA thresholds.",
    tags: ["Go", "Next.js", "Docker", "Prometheus", "OpenTelemetry", "Tailwind"],
    metrics: [
      { label: "Throughput", value: "50k req/s" },
      { label: "Monitored Nodes", value: "128" },
      { label: "Alert Dispatch", value: "<200ms" },
    ],
    architectureOverview: "High-concurrency Go ingestion daemon polling Docker socket events, buffering into memory ring buffers, and streaming to Next.js clients via Server-Sent Events (SSE).",
    challengesSolved: [
      "Zero CPU degradation on monitored worker nodes under 50k traces/sec",
      "Adaptive sampling algorithms preventing telemetry payload exhaustion",
      "Dynamic topology graph rendering of active container meshes"
    ],
    techStackDetailed: [
      { category: "Backend Engine", items: ["Go (Golang)", "Goroutines", "OpenTelemetry", "Prometheus"] },
      { category: "Dashboard", items: ["Next.js", "React", "Tailwind CSS", "Recharts"] },
      { category: "Infra", items: ["Docker Engine API", "Linux cgroups", "Grafana"] },
    ],
    demoUrl: "https://devpulse.demo.app",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: true,
  },
  {
    id: "omnix-workflow-studio",
    title: "Omnix Workflow Studio",
    tagline: "Visual DAG Pipeline Builder for Engineering Automations",
    category: "Developer Tools",
    description: "Interactive node graph canvas enabling engineers to construct, simulate, and trigger distributed asynchronous worker pipelines without writing boilerplate.",
    longDescription: "Omnix Studio provides a fluid, neo-brutalist node graph canvas where engineering teams design complex distributed workflows. Nodes represent microservices, serverless functions, or Kafka topics, evaluated with topological sorting and executed with retry backoff.",
    tags: ["TypeScript", "React", "Node.js", "Redis Streams", "WebSockets", "DAG Engine"],
    metrics: [
      { label: "Workflows Run", value: "1.2M+" },
      { label: "Step Execution", value: "-45% time" },
      { label: "Integration Nodes", value: "34+" },
    ],
    architectureOverview: "React Flow canvas frontend translating visual DAG structures into JSON ASTs, orchestrated by an asynchronous Redis Streams consumer cluster.",
    challengesSolved: [
      "Cycle detection and deadlock prevention algorithms in real-time canvas editing",
      "Sub-millisecond state synchronization across distributed worker nodes",
      "Reversible workflow rollback on partial task failures"
    ],
    techStackDetailed: [
      { category: "Visual Canvas", items: ["React Flow", "TypeScript", "Tailwind CSS", "Zustand"] },
      { category: "Orchestration", items: ["Node.js", "BullMQ", "Redis Streams", "Bull Worker"] },
      { category: "Persistence", items: ["PostgreSQL", "Prisma ORM", "Docker"] },
    ],
    demoUrl: "https://omnix.demo.app",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: true,
  },
  {
    id: "neurovision-edge",
    title: "NeuroVision Edge",
    tagline: "Real-Time Object Detection & Quantized Edge Inference",
    category: "Machine Learning & AI",
    description: "An ultra-low latency computer vision pipeline utilizing YOLOv8 and INT8 quantization deployed on resource-constrained edge devices.",
    longDescription: "NeuroVision Edge compiles PyTorch deep learning models into optimized ONNX and TensorRT runtimes. Designed for IoT surveillance and drone telemetry, it achieves 45 FPS inference on single-board computers with zero cloud roundtrip dependency.",
    tags: ["PyTorch", "YOLOv8", "ONNX Runtime", "TensorRT", "OpenCV", "Python"],
    metrics: [
      { label: "FPS on Jetson", value: "45 FPS" },
      { label: "mAP@50", value: "88.6%" },
      { label: "Model Size", value: "14.2 MB" },
    ],
    architectureOverview: "Quantized neural network architecture with post-training INT8 calibration, multi-threaded video stream acquisition via OpenCV, and asynchronous bounding box rendering.",
    challengesSolved: [
      "Reducing model parameter footprint from 140MB to 14MB without losing detection precision",
      "Overcoming thermal throttling on embedded ARM architectures through CUDA stream pipelining",
      "Zero-latency multi-camera video ingest synchronization"
    ],
    techStackDetailed: [
      { category: "Deep Learning", items: ["PyTorch", "Ultralytics YOLO", "TorchScript", "ONNX"] },
      { category: "Runtime", items: ["NVIDIA TensorRT", "CUDA 12", "OpenCV C++ & Python"] },
      { category: "Hardware", items: ["NVIDIA Jetson Orin", "Raspberry Pi 5", "USB Camera"] },
    ],
    demoUrl: "https://github.com/roxymayford/porto",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: false,
  },
  {
    id: "sentimentpulse-ai",
    title: "SentimentPulse AI",
    tagline: "Aspect-Based Multi-Lingual NLP Classification Engine",
    category: "Machine Learning & AI",
    description: "An enterprise NLP engine capable of decomposing user reviews and support transcripts into granular sentiment vectors across 12 product dimensions.",
    longDescription: "Unlike binary sentiment analyzers, SentimentPulse breaks sentences into semantic dependency trees to tag exact product features (e.g. 'Battery life: negative', 'Screen display: positive'). Built with Hugging Face Transformers and served via asynchronous FastAPI workers.",
    tags: ["HuggingFace", "BERT", "FastAPI", "Python", "Docker", "scikit-learn"],
    metrics: [
      { label: "F1 Score", value: "0.93" },
      { label: "Inference Latency", value: "32ms" },
      { label: "Supported Langs", value: "6" },
    ],
    architectureOverview: "DistilBERT backbone fine-tuned on custom multi-domain customer feedback corpora, served with Triton Inference Server behind FastAPI gateway with Redis prediction cache.",
    challengesSolved: [
      "Accurate sentiment extraction in colloquial Indonesian and English slang code-switching",
      "Batch inference acceleration through dynamic sequence padding and model distillation",
      "Explainability heatmaps showing exact attention weights for auditors"
    ],
    techStackDetailed: [
      { category: "NLP & ML", items: ["Transformers", "PyTorch", "Tokenizers", "Captum Interpretability"] },
      { category: "API Server", items: ["FastAPI", "Uvicorn", "Redis Cache", "Pydantic"] },
      { category: "Evaluation", items: ["MLflow", "Weights & Biases", "pytest"] },
    ],
    demoUrl: "https://github.com/roxymayford/porto",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: false,
  },
  {
    id: "codeforge-cli",
    title: "CodeForge CLI",
    tagline: "High-Velocity Rust Scaffolder & AST Micro-Refactoring Tool",
    category: "Developer Tools",
    description: "A blazing fast CLI utility written in Rust that generates production-grade microservice boilerplates with pre-configured CI/CD, linting, and Docker setups.",
    longDescription: "CodeForge is designed to slash the setup time of new engineering microservices from hours to seconds. It parses AST templates, injects custom security policies, and configures Dockerfiles and GitHub Actions with zero manual configuration.",
    tags: ["Rust", "Tokio", "Clap", "Tree-Sitter", "Cargo", "CLI"],
    metrics: [
      { label: "Execution Speed", value: "<40ms" },
      { label: "Binary Footprint", value: "3.8 MB" },
      { label: "Active Stars", value: "480+" },
    ],
    architectureOverview: "Compiled static Rust binary with multi-threaded file generation, Tree-Sitter AST validation, and interactive terminal prompts via Ratatui.",
    challengesSolved: [
      "Instant scaffolding without requiring Node.js or Python runtime installations",
      "Deterministic template generation preventing syntax errors across language targets",
      "Cross-platform compilation for macOS, Linux (glibc/musl), and Windows x64"
    ],
    techStackDetailed: [
      { category: "Language", items: ["Rust 2021", "Cargo", "Tokio Async Runtime"] },
      { category: "CLI Libraries", items: ["Clap v4", "Inquire", "Tree-sitter", "Serde"] },
      { category: "Distribution", items: ["Homebrew Tap", "Cargo Install", "GitHub Releases"] },
    ],
    demoUrl: "https://github.com/roxymayford/porto",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: false,
  },
  {
    id: "biglake-data-pipeline",
    title: "BigLake Data Pipeline",
    tagline: "Scalable Cloud ETL & Real-Time Analytics with BigQuery and dbt",
    category: "Cloud & DevOps",
    description: "A production data engineering pipeline transforming multi-terabyte unpartitioned logs into optimized Iceberg tables in Google Cloud BigQuery.",
    longDescription: "Automated Lakehouse data pipeline integrating Cloud Storage events, Cloud Functions, and dbt models running on BigQuery. Reduces cloud query cost by 62% through partition pruning, clustering, and incremental materializations.",
    tags: ["Google Cloud", "BigQuery", "dbt-core", "Python", "GCS", "SQL"],
    metrics: [
      { label: "Data Processed", value: "14 TB/mo" },
      { label: "Cost Reduction", value: "-62%" },
      { label: "Pipeline SLA", value: "99.9%" },
    ],
    architectureOverview: "Event-driven architecture: GCS Pub/Sub triggers Cloud Run worker -> BigQuery staging -> dbt transformation models -> PowerBI/Looker semantic layer.",
    challengesSolved: [
      "Eliminated expensive full-table scans with auto-partitioning on UTC timestamp keys",
      "Implemented automated schema drift detection and quarantine tables for corrupt payloads",
      "Configured CI/CD dbt testing with automated freshness alerts in Slack"
    ],
    techStackDetailed: [
      { category: "Data Warehouse", items: ["Google Cloud BigQuery", "BigLake", "Cloud Storage"] },
      { category: "Transformation", items: ["dbt Core", "Jinja2", "Python Pandas", "SQLX"] },
      { category: "Orchestration", items: ["Cloud Composer / Airflow", "Terraform", "GitHub Actions"] },
    ],
    demoUrl: "https://github.com/roxymayford/porto",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: false,
  },
  {
    id: "cybersentinel-siem",
    title: "CyberSentinel SIEM",
    tagline: "Network Anomaly Detection with Unsupervised Isolation Forests",
    category: "Machine Learning & AI",
    description: "A real-time network security analyzer that ingests NetFlow logs to flag zero-day lateral movements and port scanning attacks using unsupervised ML.",
    longDescription: "CyberSentinel runs continuous unsupervised Isolation Forest and Local Outlier Factor (LOF) models over live VPC network flow logs. It generates real-time threat scores and visualizes active attack surfaces on interactive Grafana dashboards.",
    tags: ["Python", "Scikit-learn", "Kafka", "Grafana", "Linux", "NetFlow"],
    metrics: [
      { label: "Anomaly Recall", value: "96.2%" },
      { label: "False Positives", value: "<1.2%" },
      { label: "Packet Stream", value: "25k pkts/s" },
    ],
    architectureOverview: "Kafka topic feeding sliding-window feature extractors, streaming to an unsupervised scikit-learn anomaly scoring engine with alert webhooks to Discord and SIEM systems.",
    challengesSolved: [
      "Extracting 48 statistical flow features on-the-fly without dropping network packets",
      "Filtering out legitimate DevOps spike traffic using baseline historical adaptive thresholds",
      "Automated IP isolation scripts triggered via Cloud Armor and iptables"
    ],
    techStackDetailed: [
      { category: "Machine Learning", items: ["Scikit-Learn", "Isolation Forest", "NumPy", "Pandas"] },
      { category: "Streaming", items: ["Apache Kafka", "Faust Stream Processor", "Redis"] },
      { category: "Monitoring", items: ["Grafana", "Prometheus Exporter", "Docker Compose"] },
    ],
    demoUrl: "https://github.com/roxymayford/porto",
    repoUrl: "https://github.com/roxymayford/porto",
    featured: false,
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeModalProject, setActiveModalProject] = React.useState<ProjectData | null>(null);

  const categories = [
    "All",
    "Machine Learning & AI",
    "Full-Stack Web",
    "Cloud & DevOps",
    "Developer Tools",
  ];

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Page Header */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/30 font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Featured <span className="text-[#FF4F00]">Projects</span> & Systems
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            A curated collection of production systems, machine learning pipelines, distributed microservices, and high-performance developer tooling built by Raihan.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#292929]">
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Total Projects</span>
              <span className="font-mono text-xl font-black text-[#FFEA00]">8 Systems</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Focus Areas</span>
              <span className="font-mono text-xl font-black text-[#00BFFF]">ML & Fullstack</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Core Languages</span>
              <span className="font-mono text-xl font-black text-[#FF4F00]">Python, TS, Go</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">License</span>
              <span className="font-mono text-xl font-black text-[#D5006D]">Open Source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="sticky top-[69px] z-30 bg-[#1F2022] border-b-4 border-[#292929] px-6 sm:px-10 py-4 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat === "All" 
                ? ALL_PROJECTS.length 
                : ALL_PROJECTS.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all whitespace-nowrap border-2 ${
                    selectedCategory === cat
                      ? "bg-[#FF4F00] text-white border-[#FF4F00] shadow-[2px_2px_0px_#292929]"
                      : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white hover:border-[#FF4F00]/50"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[#E8F8F5]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#141517] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/40 focus:border-[#FF4F00] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#E8F8F5]/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="p-6 sm:p-10 max-w-6xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-[#292929] p-8 space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-[#FF4F00] mx-auto opacity-70" />
            <p className="font-mono text-sm text-[#E8F8F5]/80 font-bold">No projects matched your criteria.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="btn-brutal px-4 py-1.5 bg-[#FF4F00] text-white font-mono text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-[#141517] border-4 border-[#292929] hover:border-[#FF4F00] transition-all duration-200 shadow-[6px_6px_0px_#292929] hover:shadow-[8px_8px_0px_#FF4F00]"
              >
                {/* Card Header */}
                <div className="p-5 sm:p-6 space-y-4 border-b-2 border-[#292929] flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-black px-2.5 py-0.5 bg-[#292929] text-[#00BFFF] border border-[#292929] uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#E8F8F5]/40">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-mono font-black text-xl sm:text-2xl text-white group-hover:text-[#FF4F00] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#FFEA00] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-[#E8F8F5]/75 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#1F2022] border border-[#292929] p-2 text-center">
                        <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block truncate">
                          {m.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#00BFFF]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#1F2022] border border-[#292929] text-[#E8F8F5]/70 font-mono text-[10px] uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-[#1F2022] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-brutal flex-1 py-2 px-3 bg-[#292929] text-[#E8F8F5] font-mono text-xs font-bold uppercase border border-[#292929] hover:bg-[#FF4F00] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Inspect System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#292929] text-[#E8F8F5] border border-[#292929] hover:text-white hover:bg-[#00BFFF] hover:border-[#00BFFF] transition-colors"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#292929] text-[#E8F8F5] border border-[#292929] hover:text-black hover:bg-[#FFEA00] hover:border-[#FFEA00] transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Project Architecture Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1F2022] border-4 border-[#FF4F00] shadow-[12px_12px_0px_#292929] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#FF4F00] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#292929] sticky top-0 z-10 select-none">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1F2022] bg-[#FFEA00] px-2 py-0.5 inline-block mb-1">
                  {activeModalProject.category}
                </span>
                <h2 className="font-mono font-black text-xl sm:text-2xl uppercase tracking-tight">
                  {activeModalProject.title}
                </h2>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-8 h-8 bg-[#1F2022] text-white hover:bg-white hover:text-black border-2 border-[#1F2022] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Tagline & Deep Dive */}
              <div>
                <span className="font-mono text-sm font-bold text-[#FFEA00] block mb-2">
                  {activeModalProject.tagline}
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/80 leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
              </div>

              {/* Performance Metrics Breakdown */}
              <div className="bg-[#141517] border-2 border-[#292929] p-4">
                <span className="font-mono text-xs font-bold text-[#00BFFF] uppercase tracking-wider block mb-3">
                  Key Performance Metrics & SLAs
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#1F2022] border border-[#292929]">
                      <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">
                        {m.label}
                      </span>
                      <span className="font-mono text-lg font-black text-[#FF4F00]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Architecture Overview */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#E8F8F5] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF4F00]" />
                  <span>Architecture & Data Flow</span>
                </span>
                <div className="p-4 bg-[#141517] border-2 border-[#292929] font-mono text-xs text-[#E8F8F5]/75 leading-relaxed">
                  {activeModalProject.architectureOverview}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#E8F8F5] uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00BFFF]" />
                  <span>Engineering Challenges Solved</span>
                </span>
                <div className="space-y-2">
                  {activeModalProject.challengesSolved.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#141517] border border-[#292929]">
                      <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span className="font-mono text-xs text-[#E8F8F5]/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Stack Breakdown */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#E8F8F5] uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FFEA00]" />
                  <span>Detailed Stack Matrix</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalProject.techStackDetailed.map((group, idx) => (
                    <div key={idx} className="bg-[#141517] border border-[#292929] p-3 space-y-2">
                      <span className="font-mono text-[11px] font-bold text-[#FFEA00] uppercase block border-b border-[#292929] pb-1">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="px-1.5 py-0.5 bg-[#1F2022] text-[#E8F8F5]/70 font-mono text-[10px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-[#292929] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 bg-[#292929] text-[#E8F8F5] font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Close Inspector
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal inline-flex items-center gap-2 px-4 py-2 bg-[#141517] text-white font-mono text-xs font-bold border-2 border-[#292929] hover:border-[#00BFFF]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal inline-flex items-center gap-2 px-5 py-2 bg-[#FF4F00] text-white font-mono text-xs font-bold border-2 border-[#FF4F00] hover:bg-[#FF6F00]"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
