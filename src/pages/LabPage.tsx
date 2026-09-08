import * as React from "react";
import { 
  Terminal, 
  Cpu, 
  Palette, 
  Sparkles, 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Layers, 
  Activity, 
  Zap, 
  CornerDownLeft, 
  Sliders
} from "lucide-react";

export function LabPage() {
  const [activeTab, setActiveTab] = React.useState<"terminal" | "ml" | "css">("terminal");

  // ── 1. Terminal State ──────────────────────────────────────────────────────────
  const [terminalHistory, setTerminalHistory] = React.useState<
    { command?: string; output: string | React.ReactNode }[]
  >([
    {
      output: (
        <div className="space-y-1">
          <div className="text-[#FFEA00] font-black">
            RAIHAN.DEV INTERACTIVE NEO-TERMINAL [v2.6.4-prod]
          </div>
          <div className="text-[#E8F8F5]/60 text-xs">
            Type <span className="text-[#00BFFF] font-bold">help</span> to view available commands, or click quick command pills below.
          </div>
        </div>
      ),
    },
  ]);
  const [terminalInput, setTerminalInput] = React.useState("");
  const terminalEndRef = React.useRef<HTMLDivElement>(null);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-[#00BFFF] font-bold uppercase">Available Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1 text-[#E8F8F5]/80">
              <div><span className="text-[#FFEA00]">whoami</span> - Developer bio</div>
              <div><span className="text-[#FFEA00]">skills</span> - Tech competencies</div>
              <div><span className="text-[#FFEA00]">projects</span> - Projects overview</div>
              <div><span className="text-[#FFEA00]">cat resume</span> - Resume summary</div>
              <div><span className="text-[#FFEA00]">neofetch</span> - System specs</div>
              <div><span className="text-[#FFEA00]">contact</span> - Get in touch</div>
              <div><span className="text-[#FFEA00]">clear</span> - Clean screen</div>
            </div>
          </div>
        );
        break;

      case "whoami":
      case "bio":
        response = (
          <div className="text-xs space-y-1 text-[#E8F8F5]/90">
            <div className="text-[#FF4F00] font-bold uppercase">Raihan Shandi Adrida Meilano</div>
            <div>Role: Machine Learning Engineer & Full-Stack Developer</div>
            <div>Location: Bandung / Jakarta, Indonesia</div>
            <div>Focus: Sub-100ms Inference Pipelines, Go Microservices, Tactile Web</div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs space-y-1 text-[#E8F8F5]/90">
            <div className="text-[#00BFFF] font-bold uppercase">Engineered Capabilities:</div>
            <div>• <strong className="text-white">AI / ML:</strong> PyTorch, ONNX, HuggingFace, YOLO, GGUF, BigQuery ML</div>
            <div>• <strong className="text-white">Backend:</strong> Go (Golang), Python (FastAPI), Node.js, Kafka, Redis</div>
            <div>• <strong className="text-white">Frontend:</strong> React 18, TypeScript, Tailwind CSS, GSAP Motion, Canvas</div>
            <div>• <strong className="text-white">Cloud:</strong> Google Cloud (ACE), AWS, Docker, Kubernetes, Terraform</div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-xs space-y-1 text-[#E8F8F5]/90">
            <div className="text-[#FFEA00] font-bold uppercase">Key Repositories:</div>
            <div>[01] Weatherly Pro - Sub-kilometer radar microclimate telemetry</div>
            <div>[02] DevPulse - 50k req/s distributed microservice observability</div>
            <div>[03] Omnix Studio - Visual DAG async pipeline orchestrator</div>
            <div>[04] NeuroVision Edge - 45 FPS YOLOv8 INT8 edge detection</div>
            <div>[05] SentimentPulse AI - Multi-lingual aspect-based NLP engine</div>
          </div>
        );
        break;

      case "neofetch":
        response = (
          <div className="font-mono text-xs flex flex-col sm:flex-row gap-4 py-2">
            <pre className="text-[#FF4F00] font-black leading-tight select-none">
{`   /\\_/\\  
  ( o.o ) 
   > ^ <  
  RAIHAN`}
            </pre>
            <div className="space-y-0.5 text-xs text-[#E8F8F5]/85">
              <div><strong className="text-[#00BFFF]">OS:</strong> Obsidian Linux x86_64</div>
              <div><strong className="text-[#00BFFF]">Host:</strong> Custom Ryzen 9 7900X / RTX 4080 (16GB)</div>
              <div><strong className="text-[#00BFFF]">Kernel:</strong> 6.11.0-custom-realtime</div>
              <div><strong className="text-[#00BFFF]">Uptime:</strong> 142 days, 8 hours, 32 mins</div>
              <div><strong className="text-[#00BFFF]">Shell:</strong> fish 3.7.0 with starship prompt</div>
              <div><strong className="text-[#00BFFF]">Editor:</strong> Neovim (LazyVim) + VS Code</div>
              <div><strong className="text-[#00BFFF]">Memory:</strong> 18420MiB / 65536MiB (28%)</div>
            </div>
          </div>
        );
        break;

      case "cat resume":
      case "cat resume.txt":
        response = (
          <div className="text-xs space-y-1 text-[#E8F8F5]/85">
            <div className="text-[#FFEA00] font-bold uppercase">=== RAIHAN_RESUME_SUMMARY.TXT ===</div>
            <div>EDUCATION: B.Comp.Sc in Informatics (Intelligent Systems)</div>
            <div>EXPERIENCE: 3+ Years Building Production ML & Fullstack Apps</div>
            <div>CERTIFICATIONS: Google Cloud ACE, DeepLearning.AI MLS, AWS SAA</div>
            <div>KEY METRIC: Shipped pipelines handling 10M+ events/day under 80ms latency.</div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs text-[#E8F8F5]/90 space-y-0.5">
            <div>Email: <span className="text-[#00BFFF]">yuliahari65@gmail.com</span></div>
            <div>GitHub: <span className="text-[#FF4F00]">github.com/roxymayford</span></div>
            <div>Location: Bandung / Jakarta, Indonesia</div>
          </div>
        );
        break;

      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;

      default:
        response = (
          <span className="text-red-400">
            command not found: {trimmed}. Type <span className="underline">help</span> for command list.
          </span>
        );
        break;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { command: cmdText, output: response },
    ]);
    setTerminalInput("");

    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // ── 2. ML Sentiment Simulator State ──────────────────────────────────────────
  const [mlInputText, setMlInputText] = React.useState(
    "The real-time telemetry rendering is absurdly fast and responsive, though the initial API docs could use more Go code examples."
  );
  const [mlResult, setMlResult] = React.useState({
    overallScore: 88,
    sentiment: "POSITIVE",
    latencyMs: 38,
    aspects: [
      { name: "Performance & Speed", score: 96, sentiment: "POSITIVE" },
      { name: "UI & Responsiveness", score: 92, sentiment: "POSITIVE" },
      { name: "Documentation & Examples", score: 48, sentiment: "MIXED" },
    ],
  });
  const [isInferring, setIsInferring] = React.useState(false);

  const runSimulatedInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      const lower = mlInputText.toLowerCase();
      let positiveCount = (lower.match(/fast|great|good|awesome|responsive|love|clean|excellent|impressive/g) || []).length;
      let negativeCount = (lower.match(/slow|bug|bad|terrible|broken|confusing|missing|hate|error/g) || []).length;

      let score = 50 + (positiveCount * 18) - (negativeCount * 22);
      score = Math.max(12, Math.min(98, score));

      const sentiment = score > 65 ? "POSITIVE" : score < 40 ? "NEGATIVE" : "NEUTRAL/MIXED";

      setMlResult({
        overallScore: score,
        sentiment,
        latencyMs: Math.floor(25 + Math.random() * 20),
        aspects: [
          { name: "Performance & Latency", score: Math.min(99, score + 4), sentiment: score > 50 ? "POSITIVE" : "NEGATIVE" },
          { name: "Usability & Architecture", score: Math.max(20, score - 6), sentiment: score > 60 ? "POSITIVE" : "MIXED" },
          { name: "System Reliability", score: Math.min(95, score + 2), sentiment: "POSITIVE" },
        ],
      });
      setIsInferring(false);
    }, 400);
  };

  // ── 3. Neo-Brutalist CSS Token Studio State ──────────────────────────────────
  const [borderWidth, setBorderWidth] = React.useState(4);
  const [shadowOffset, setShadowOffset] = React.useState(6);
  const [accentColor, setAccentColor] = React.useState("#FF4F00");
  const [copiedCss, setCopiedCss] = React.useState(false);

  const sampleCssTokens = `/* Generated Neo-Brutalist CSS Tokens */
:root {
  --brutal-border: ${borderWidth}px solid #292929;
  --brutal-shadow: ${shadowOffset}px ${shadowOffset}px 0px ${accentColor};
  --brutal-accent: ${accentColor};
}

.card-brutal {
  border: var(--brutal-border);
  box-shadow: var(--brutal-shadow);
  transition: all 0.15s ease;
}

.card-brutal:hover {
  transform: translate(-3px, -3px);
  box-shadow: ${shadowOffset + 3}px ${shadowOffset + 3}px 0px ${accentColor};
}`;

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Header Banner */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/30 font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Playground</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Developer <span className="text-[#00BFFF]">Lab</span> & Sandbox
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            Test real-time interactive tools built right into the browser: execute terminal commands, test simulated NLP aspect classification, and customize Neo-Brutalist CSS tokens.
          </p>
        </div>
      </div>

      {/* Lab Navigation Switcher */}
      <div className="sticky top-[69px] z-30 bg-[#1F2022] border-b-4 border-[#292929] px-6 sm:px-10 py-3 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase transition-all border-2 ${
              activeTab === "terminal"
                ? "bg-[#00BFFF] text-[#1F2022] border-[#00BFFF] shadow-[3px_3px_0px_#292929]"
                : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>01. Interactive CLI Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab("ml")}
            className={`flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase transition-all border-2 ${
              activeTab === "ml"
                ? "bg-[#FFEA00] text-[#1F2022] border-[#FFEA00] shadow-[3px_3px_0px_#292929]"
                : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>02. Live AI Sentiment Classifier</span>
          </button>

          <button
            onClick={() => setActiveTab("css")}
            className={`flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase transition-all border-2 ${
              activeTab === "css"
                ? "bg-[#FF4F00] text-white border-[#FF4F00] shadow-[3px_3px_0px_#292929]"
                : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white"
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>03. Neo-Brutalist CSS Studio</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        {/* ── TAB 1: TERMINAL CLI ────────────────────────────────────────────── */}
        {activeTab === "terminal" && (
          <div className="space-y-4">
            <div className="bg-[#141517] border-4 border-[#00BFFF] shadow-[10px_10px_0px_#292929] overflow-hidden">
              {/* Terminal Window Header */}
              <div className="bg-[#00BFFF] text-[#1F2022] px-4 py-2.5 flex items-center justify-between border-b-4 border-[#292929] select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#1F2022] border border-black/40 inline-block"></span>
                  <span className="w-3 h-3 bg-[#FFEA00] border border-black/40 inline-block"></span>
                  <span className="w-3 h-3 bg-[#FF4F00] border border-black/40 inline-block"></span>
                  <span className="font-mono text-xs font-black tracking-wider uppercase ml-2">
                    raihan@workstation:~ (tty1)
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#1F2022] text-[#00BFFF]">
                  FISH SHELL
                </span>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-4 sm:p-6 font-mono text-xs space-y-4 min-h-[380px] max-h-[500px] overflow-y-auto bg-[#0d0e10]">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    {item.command && (
                      <div className="flex items-center gap-2 text-[#00BFFF]">
                        <span className="text-[#FF4F00] font-bold">raihan@porto:~$</span>
                        <span className="text-white font-bold">{item.command}</span>
                      </div>
                    )}
                    <div className="pl-0">{item.output}</div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Prompt Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(terminalInput);
                }}
                className="bg-[#141517] border-t-2 border-[#292929] p-3 flex items-center gap-2"
              >
                <span className="text-[#FF4F00] font-mono font-bold text-xs">raihan@porto:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type a command (help, whoami, skills, neofetch, cat resume, clear)..."
                  className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:outline-none placeholder-[#E8F8F5]/30"
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-1.5 bg-[#00BFFF] text-[#1F2022] hover:bg-white transition-colors"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Quick Command Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-mono text-xs text-[#E8F8F5]/60">Quick Commands:</span>
              {["help", "neofetch", "whoami", "skills", "projects", "cat resume", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 bg-[#141517] border border-[#292929] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#1F2022] font-mono text-xs font-bold transition-colors"
                >
                  ${cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: ML SENTIMENT CLASSIFIER ─────────────────────────────────── */}
        {activeTab === "ml" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-[#141517] border-4 border-[#292929] space-y-4 shadow-[8px_8px_0px_#FFEA00]">
                <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                  <div className="flex items-center gap-2 text-[#FFEA00] font-mono font-bold text-xs uppercase">
                    <Activity className="w-4 h-4" />
                    <span>Neural Sentiment Pipeline Simulator</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00BFFF] bg-[#1F2022] px-2 py-0.5 border border-[#292929]">
                    Transformer Model
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#E8F8F5]/70 block">
                    Enter Text for Aspect-Based Evaluation:
                  </label>
                  <textarea
                    rows={4}
                    value={mlInputText}
                    onChange={(e) => setMlInputText(e.target.value)}
                    className="w-full p-3 bg-[#1F2022] border-2 border-[#292929] font-mono text-xs text-white focus:border-[#FFEA00] focus:outline-none"
                    placeholder="Enter review, product feedback, or statement..."
                  />
                </div>

                {/* Preset Chips */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[11px] text-[#E8F8F5]/50 block">Preset Examples:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setMlInputText("The radar streaming architecture is exceptionally fast and rock solid, flawless work!")}
                      className="px-2 py-1 bg-[#1F2022] border border-[#292929] hover:border-[#FFEA00] font-mono text-[10px] text-[#E8F8F5]/80"
                    >
                      High Praise
                    </button>
                    <button
                      onClick={() => setMlInputText("The memory utilization spikes under heavy concurrency, and error messages are cryptic.")}
                      className="px-2 py-1 bg-[#1F2022] border border-[#292929] hover:border-[#FFEA00] font-mono text-[10px] text-[#E8F8F5]/80"
                    >
                      Critical Feedback
                    </button>
                    <button
                      onClick={() => setMlInputText("Clean modern UI aesthetic, but loading time on 3G mobile devices could be reduced.")}
                      className="px-2 py-1 bg-[#1F2022] border border-[#292929] hover:border-[#FFEA00] font-mono text-[10px] text-[#E8F8F5]/80"
                    >
                      Constructive Review
                    </button>
                  </div>
                </div>

                <button
                  onClick={runSimulatedInference}
                  disabled={isInferring}
                  className="btn-brutal w-full py-3 bg-[#FFEA00] text-[#1F2022] font-mono text-xs font-black uppercase flex items-center justify-center gap-2"
                >
                  <Play className={`w-4 h-4 ${isInferring ? "animate-spin" : ""}`} />
                  <span>{isInferring ? "Computing Attention Matrices..." : "Run Simulated Inference"}</span>
                </button>
              </div>
            </div>

            {/* Inference Telemetry Output */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-[#141517] border-4 border-[#292929] space-y-6 shadow-[8px_8px_0px_#00BFFF]">
                <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                  <span className="font-mono text-xs font-bold uppercase text-[#00BFFF]">
                    Model Inference Telemetry
                  </span>
                  <span className="font-mono text-xs text-[#FFEA00] font-bold">
                    Latency: {mlResult.latencyMs}ms
                  </span>
                </div>

                {/* Overall Score */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#E8F8F5]/70 uppercase font-bold">Overall Confidence</span>
                    <span className={`font-black ${mlResult.sentiment === "POSITIVE" ? "text-[#00BFFF]" : mlResult.sentiment === "NEGATIVE" ? "text-red-400" : "text-[#FFEA00]"}`}>
                      {mlResult.sentiment} ({mlResult.overallScore}%)
                    </span>
                  </div>
                  <div className="w-full h-4 bg-[#1F2022] border border-[#292929] p-0.5">
                    <div
                      className={`h-full transition-all duration-300 ${
                        mlResult.sentiment === "POSITIVE" ? "bg-[#00BFFF]" : mlResult.sentiment === "NEGATIVE" ? "bg-red-400" : "bg-[#FFEA00]"
                      }`}
                      style={{ width: `${mlResult.overallScore}%` }}
                    />
                  </div>
                </div>

                {/* Granular Aspect Breakdown */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold uppercase text-white block">
                    Decomposed Semantic Aspects:
                  </span>
                  {mlResult.aspects.map((aspect, idx) => (
                    <div key={idx} className="p-3 bg-[#1F2022] border border-[#292929] space-y-1.5">
                      <div className="flex justify-between font-mono text-xs">
                        <span className="text-[#E8F8F5]/80">{aspect.name}</span>
                        <span className="font-bold text-[#FFEA00]">{aspect.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#292929] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF4F00] to-[#FFEA00]"
                          style={{ width: `${aspect.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: BRUTALIST CSS STUDIO ───────────────────────────────────── */}
        {activeTab === "css" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sliders & Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[#141517] border-4 border-[#292929] space-y-5 shadow-[8px_8px_0px_#FF4F00]">
                <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                  <span className="font-mono text-xs font-bold uppercase text-[#FF4F00]">
                    Brutalist UI Token Adjuster
                  </span>
                  <Palette className="w-4 h-4 text-[#FF4F00]" />
                </div>

                {/* Border Width Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#E8F8F5]/70">Border Thickness</span>
                    <span className="font-bold text-white">{borderWidth}px</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(Number(e.target.value))}
                    className="w-full accent-[#FF4F00]"
                  />
                </div>

                {/* Shadow Offset Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#E8F8F5]/70">Offset Drop Shadow</span>
                    <span className="font-bold text-white">{shadowOffset}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="14"
                    value={shadowOffset}
                    onChange={(e) => setShadowOffset(Number(e.target.value))}
                    className="w-full accent-[#FF4F00]"
                  />
                </div>

                {/* Accent Color Palette */}
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#E8F8F5]/70 block">Primary Accent Color:</span>
                  <div className="flex items-center gap-2">
                    {[
                      { label: "Flame", hex: "#FF4F00" },
                      { label: "Cyan", hex: "#00BFFF" },
                      { label: "Lemon", hex: "#FFEA00" },
                      { label: "Magenta", hex: "#D5006D" },
                      { label: "Purple", hex: "#5D3FD3" },
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setAccentColor(col.hex)}
                        className={`w-8 h-8 border-2 transition-transform ${
                          accentColor === col.hex ? "scale-110 border-white" : "border-[#292929]"
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.label}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBorderWidth(4);
                    setShadowOffset(6);
                    setAccentColor("#FF4F00");
                  }}
                  className="w-full py-2 bg-[#1F2022] border border-[#292929] text-[#E8F8F5]/60 hover:text-white font-mono text-xs uppercase transition-colors"
                >
                  Reset Defaults
                </button>
              </div>
            </div>

            {/* Live Interactive Preview & CSS Output */}
            <div className="lg:col-span-7 space-y-6">
              {/* Dynamic Preview Card */}
              <div className="p-8 bg-[#141517] border-2 border-[#292929] flex flex-col items-center justify-center min-h-[220px]">
                <div
                  className="p-6 bg-[#1F2022] max-w-sm w-full space-y-3 transition-transform cursor-pointer select-none"
                  style={{
                    border: `${borderWidth}px solid #292929`,
                    boxShadow: `${shadowOffset}px ${shadowOffset}px 0px ${accentColor}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[10px] font-black uppercase px-2 py-0.5 text-black"
                      style={{ backgroundColor: accentColor }}
                    >
                      Active Token
                    </span>
                    <span className="font-mono text-xs text-[#E8F8F5]/50">Hover & Click Me</span>
                  </div>

                  <h3 className="font-mono font-black text-lg text-white uppercase">
                    Tactile Neo-Brutalism
                  </h3>
                  <p className="font-mono text-xs text-[#E8F8F5]/70">
                    High-contrast physical affordances with sharp geometric edges.
                  </p>

                  <button
                    className="w-full py-2 font-mono text-xs font-black uppercase text-white transition-all"
                    style={{ backgroundColor: accentColor }}
                  >
                    Interactive Action
                  </button>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="bg-[#141517] border-2 border-[#292929] overflow-hidden">
                <div className="bg-[#292929] px-4 py-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF4F00] uppercase font-bold">Export CSS Tokens</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(sampleCssTokens);
                      setCopiedCss(true);
                      setTimeout(() => setCopiedCss(false), 2000);
                    }}
                    className="flex items-center gap-1.5 text-white hover:text-[#FF4F00]"
                  >
                    {copiedCss ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00BFFF]" />
                        <span className="text-[11px] text-[#00BFFF]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy CSS</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs text-[#E8F8F5]/90 overflow-x-auto bg-[#0f1012]">
                  <code>{sampleCssTokens}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
