import * as React from "react";

interface Certificate {
  issuer: string;
  name: string;
  credentialId: string;
  year: string;
  accentColor: string;
  num: string;
}

const certsList: Certificate[] = [
  {
    issuer: "Amazon Web Services",
    name: "Solutions Architect Associate",
    credentialId: "AWS-SAA-849102",
    year: "2024",
    accentColor: "text-[#FF4F00] border-[#FF4F00]",
    num: "01",
  },
  {
    issuer: "Meta Certified",
    name: "Front-End Developer Professional",
    credentialId: "META-FED-921475",
    year: "2023",
    accentColor: "text-[#D5006D] border-[#D5006D]",
    num: "02",
  },
  {
    issuer: "Google Cloud",
    name: "Associate Cloud Engineer",
    credentialId: "GCP-ACE-441098",
    year: "2023",
    accentColor: "text-[#5D3FD3] border-[#5D3FD3]",
    num: "03",
  },
  {
    issuer: "Linux Foundation",
    name: "Certified Kubernetes App Developer",
    credentialId: "CKAD-771234",
    year: "2024",
    accentColor: "text-[#00BFFF] border-[#00BFFF]",
    num: "04",
  },
];

export function Certifications() {
  return (
    <aside className="lg:col-span-4 bg-[#1F2022] p-6 sm:p-10 flex flex-col justify-between border-t-4 lg:border-t-0 border-[#292929]" data-purpose="certifications-sidebar" id="certifications">
      <div>
        <div className="mb-8">
          <span className="font-mono text-xs font-bold text-[#00BFFF] uppercase tracking-widest block">Credentials</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#E8F8F5]">Certifications</h2>
        </div>

        {/* Stack of Certifications Cards */}
        <div className="space-y-4">
          {certsList.map((cert) => (
            <div 
              key={cert.num}
              className="bg-[#292929] border border-[#292929] p-5 shadow-sm hover:border-[#00BFFF]/40 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-[#E8F8F5]/60">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] bg-[#1F2022] text-[#FFEA00] font-mono font-bold px-1.5 py-0.2 border border-[#292929]">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-black text-base text-[#E8F8F5] leading-snug">
                    {cert.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#E8F8F5]/70 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] inline-block"></span>
                    <span>ID: {cert.credentialId}</span>
                  </p>
                </div>

                <div className={`w-8 h-8 bg-[#1F2022] ${cert.accentColor} border flex items-center justify-center font-mono font-black text-xs shrink-0`}>
                  {cert.num}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Verification Link */}
      <div className="mt-8">
        <a 
          className="btn-brutal w-full block text-center py-3.5 bg-[#292929] text-[#E8F8F5] border border-[#292929] font-mono font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#FF4F00] hover:text-white transition-colors" 
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Verify All Credentials →</span>
        </a>
      </div>
    </aside>
  );
}
