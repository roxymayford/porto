import * as React from "react";

export function ContactCTA() {
  const [copied, setCopied] = React.useState(false);
  const email = "raihan.shandi@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div 
      className="lg:col-span-4 bg-[#292929] border-t-4 lg:border-t-0 border-[#292929] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-[#E8F8F5]" 
      data-purpose="final-call-to-action" 
      id="contact"
    >
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F2022] text-[#FFEA00] font-mono text-[11px] font-bold uppercase tracking-wider mb-6 border border-[#292929]">
          <span className="w-2 h-2 rounded-full bg-[#FFEA00] animate-ping"></span>
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-[1.05] mb-4 text-[#E8F8F5]">
          LET'S BUILD SOMETHING EXTRAORDINARY.
        </h2>

        <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/80 leading-relaxed mb-8 max-w-sm">
          Have an ambitious project, full-time opportunity, or want to talk engineering? My inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <a 
            className="btn-brutal w-full inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white py-3.5 font-mono font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#FF6F00]" 
            href={`mailto:${email}`}
          >
            <span>Send An Email</span>
            <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button 
            onClick={handleCopyEmail}
            className="btn-brutal w-full inline-flex items-center justify-center gap-2 bg-[#1F2022] text-[#E8F8F5] border border-[#292929] py-3 font-mono font-bold text-xs uppercase tracking-wider shadow-sm hover:border-[#00BFFF] hover:text-[#00BFFF]"
          >
            <span>{copied ? "✓ Copied to Clipboard!" : "Copy Email Address"}</span>
          </button>
        </div>
      </div>

      {/* Decorative Starburst */}
      <div aria-hidden="true" className="relative flex justify-between items-end mt-6 z-10">
        <div className="font-mono text-[11px] text-[#E8F8F5]/70">
          <span className="block text-[#FFEA00] font-bold uppercase">Timezone:</span>
          <span>WIB (UTC+7) • Remote OK</span>
        </div>

        <div className="starburst-scroll-wrapper inline-block">
          <svg className="w-16 h-16 text-[#FFEA00] fill-current starburst-badge" viewBox="0 0 100 100">
            <polygon points="50,0 62,28 93,17 78,45 100,66 71,76 68,100 45,84 21,97 26,69 0,55 24,38 15,11 41,24" />
          </svg>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#FF4F00]/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
