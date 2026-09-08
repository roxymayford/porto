import * as React from "react";

interface LoadingModalProps {
  onComplete?: () => void;
  minDuration?: number;
}

const BOOT_LOGS = [
  { time: "0.04s", text: "SYS_INIT: Booting Raihan.dev kernel v2.6.4 [Obsidian_x64]...", type: "info" },
  { time: "0.18s", text: "ML_CORE: Mounting PyTorch & NeuroVision edge runtime...", type: "success" },
  { time: "0.36s", text: "DATA_PIPE: Establishing BigLake & Kafka real-time stream links...", type: "info" },
  { time: "0.58s", text: "UI_ENGINE: Applying tactile Neo-Brutalist styling tokens & GSAP scrub...", type: "accent" },
  { time: "0.76s", text: "SECURITY: Validating TLS & cryptographic developer credentials...", type: "success" },
  { time: "0.92s", text: "WORKSPACE_READY: All nodes online. Welcome, engineer!", type: "ready" },
];

export function LoadingModal({ onComplete, minDuration = 1100 }: LoadingModalProps) {
  const [progress, setProgress] = React.useState(0);
  const [currentLogIndex, setCurrentLogIndex] = React.useState(0);
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    // Disable body scrolling while loading
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const intervalTime = 25;

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawPct = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      setProgress(rawPct);

      // Advance logs based on progress thresholds
      const logIdx = Math.min(
        BOOT_LOGS.length - 1,
        Math.floor((rawPct / 100) * BOOT_LOGS.length)
      );
      setCurrentLogIndex(logIdx);

      if (rawPct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          handleDismiss();
        }, 180);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, [minDuration]);

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      document.body.style.overflow = "auto";
      if (onComplete) {
        onComplete();
      }
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="System Initializing Loader"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1F2022]/95 backdrop-blur-xl transition-all duration-500 ${
        isClosing ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 grid-bg-obsidian opacity-80 pointer-events-none" />

      {/* Center Loader Box */}
      <div className="relative w-full max-w-xl bg-[#1F2022] border-4 border-[#FF4F00] shadow-[10px_10px_0px_#292929] overflow-hidden flex flex-col z-10">
        {/* Terminal Header Bar */}
        <div className="bg-[#FF4F00] text-white px-4 py-2.5 flex items-center justify-between border-b-4 border-[#292929] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#1F2022] border border-white/60 inline-block shadow-sm"></span>
            <span className="w-3 h-3 bg-[#FFEA00] border border-black/60 inline-block shadow-sm"></span>
            <span className="w-3 h-3 bg-[#00BFFF] border border-black/60 inline-block shadow-sm"></span>
            <span className="font-mono text-xs font-black tracking-wider uppercase ml-2">
              RAIHAN.DEV // BOOT_LOADER
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] font-bold">
            <span className="px-2 py-0.5 bg-[#1F2022] text-[#FFEA00] border border-[#292929]">
              STAGE: INIT
            </span>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-[#1F2022] hover:bg-white px-1.5 py-0.5 transition-colors uppercase font-mono text-[10px]"
              title="Skip intro"
            >
              [SKIP ESC]
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-[#1F2022]">
          {/* Logo & Headline */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#292929] border-2 border-[#FF4F00] flex items-center justify-center p-2 shadow-[4px_4px_0px_#FF4F00] relative group">
              <img
                src="/logo.png"
                alt="Raihan Logo"
                className="w-full h-full object-contain filter drop-shadow animate-pulse"
              />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#00BFFF] border border-[#1F2022]"></span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                  Raihan Shandi Adrida M.
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#00BFFF] font-bold uppercase tracking-wider">
                  Machine Learning & Full-Stack
                </span>
                <span className="text-[#E8F8F5]/40">•</span>
                <span className="text-[#FFEA00] font-mono">v2.6.4</span>
              </div>
            </div>
          </div>

          {/* Progress Bar with Segmented Brutalist Design */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#E8F8F5]">
              <span className="font-bold flex items-center gap-2 uppercase tracking-wider text-[#00BFFF]">
                <span className="inline-block w-2 h-2 bg-[#00BFFF] animate-ping"></span>
                System Loading
              </span>
              <span className="font-black text-[#FFEA00] text-sm tracking-wider">
                {progress}%
              </span>
            </div>

            <div className="w-full h-5 bg-[#292929] border-2 border-[#292929] p-0.5 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF4F00] via-[#FF6F00] to-[#FFEA00] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Telemetry Log Terminal Output */}
          <div className="bg-[#141517] border-2 border-[#292929] p-3.5 sm:p-4 font-mono text-xs space-y-1.5 h-32 overflow-hidden shadow-inner flex flex-col justify-end">
            <div className="text-[10px] text-[#E8F8F5]/40 border-b border-[#292929] pb-1 mb-1 uppercase tracking-widest flex items-center justify-between">
              <span>Telemetry Output</span>
              <span className="text-[#00BFFF]">TTY_01</span>
            </div>

            {BOOT_LOGS.slice(0, currentLogIndex + 1).map((log, idx) => {
              const isLatest = idx === currentLogIndex;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2 leading-relaxed transition-all ${
                    isLatest ? "text-white font-bold" : "text-[#E8F8F5]/60"
                  }`}
                >
                  <span className="text-[#00BFFF] font-mono select-none">
                    [{log.time}]
                  </span>
                  <span
                    className={
                      log.type === "success"
                        ? "text-[#00BFFF]"
                        : log.type === "ready"
                        ? "text-[#FFEA00]"
                        : log.type === "accent"
                        ? "text-[#FF4F00]"
                        : "text-[#E8F8F5]"
                    }
                  >
                    {log.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Modal Footer Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-[#292929]">
            <div className="font-mono text-[11px] text-[#E8F8F5]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFEA00] inline-block"></span>
              <span>Obsidian Core Engine • Port 5176</span>
            </div>

            <button
              onClick={handleDismiss}
              className="btn-brutal px-4 py-1.5 bg-[#292929] text-[#E8F8F5] font-mono text-xs font-bold border-2 border-[#FF4F00] hover:bg-[#FF4F00] hover:text-white uppercase transition-all"
            >
              Enter Workspace →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
