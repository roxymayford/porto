import * as React from "react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  dotColor: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

const experienceList: TimelineItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Technova Global",
    period: "2023 — Present",
    dotColor: "bg-[#FF4F00]",
    description: "Lead the frontend architecture and micro-service integrations for an enterprise analytics platform serving over 70,000 daily active users.",
    achievements: [
      "Optimized client-side rendering pipeline, cutting bundle size by 35% and LCP to 1.1s",
      "Mentored a distributed team of 6 engineers on TypeScript strict patterns and clean architecture",
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Go"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Hyperion Digital",
    period: "2021 — 2023",
    dotColor: "bg-[#00BFFF]",
    description: "Engineered scalable REST & GraphQL APIs, internal tooling dashboards, and high-conversion client web apps under strict SLAs.",
    achievements: [
      "Designed and deployed automated CI/CD pipeline via Docker and GitHub Actions",
      "Integrated Redis caching layer reducing database latency by over 50%",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Docker", "Redis"],
  },
  {
    role: "Frontend Developer",
    company: "Inovasi Studio",
    period: "2020 — 2021",
    dotColor: "bg-[#5D3FD3]",
    description: "Developed interactive, pixel-perfect user interfaces and design systems for funded tech startups in fast-paced sprint cycles.",
    achievements: [
      "Built an accessible design system of 40+ reusable React UI components",
    ],
    techStack: ["React", "JavaScript", "CSS Modules", "Figma", "REST"],
  },
];

export function Experience() {
  return (
    <>
      {/* Experience Sidebar Banner */}
      <div className="lg:col-span-2 bg-[#292929] text-[#E8F8F5] p-6 sm:p-8 flex items-center lg:items-start justify-between lg:justify-start border-b-4 lg:border-b-0 lg:border-r-4 border-[#292929]">
        <div>
          <span className="font-mono text-xs font-bold text-[#FF4F00] uppercase tracking-widest block">Career</span>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">EXPERIENCE</h2>
          <svg className="w-6 h-6 stroke-[3] mt-4 hidden lg:block text-[#FF4F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <svg className="w-6 h-6 stroke-[3] lg:hidden text-[#FF4F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Experience Timeline Area */}
      <div className="lg:col-span-6 p-6 sm:p-10 bg-[#1F2022] border-b-4 lg:border-b-0 lg:border-r-4 border-[#292929]">
        {/* Vertical Timeline with solid nodes */}
        <div className="relative pl-6 sm:pl-8 space-y-10 border-l-2 border-[#292929] ml-2 sm:ml-4">
          {experienceList.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot Node */}
              <span className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 ${item.dotColor} rounded-full ring-4 ring-[#1F2022]`}></span>

              <div className="space-y-2">
                {/* Header info */}
                <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs">
                  <span className="font-black text-[#E8F8F5] text-base sm:text-lg uppercase">
                    {item.role}
                  </span>
                  <span className="text-[#FF4F00] font-bold">•</span>
                  <span className="font-bold text-[#E8F8F5]/70 uppercase text-xs sm:text-sm">
                    {item.company}
                  </span>
                </div>

                {/* Period pill */}
                <span className="inline-block font-mono text-xs font-bold text-[#FFEA00] bg-[#292929] border border-[#292929] px-2.5 py-0.5">
                  {item.period}
                </span>

                {/* Description */}
                <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/80 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1 pt-1 font-mono text-xs text-[#E8F8F5]/70">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF4F00] font-bold mt-0.5">▸</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 bg-[#292929] border border-[#292929] font-mono text-[10px] font-bold text-[#E8F8F5]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Resume Action */}
        <div className="mt-12 ml-2 sm:ml-4">
          <a 
            className="btn-brutal inline-flex items-center gap-2 bg-[#FF4F00] text-white border border-[#FF4F00] px-5 py-3 font-mono font-bold text-xs uppercase shadow-sm hover:bg-[#FF6F00]" 
            href="#contact"
          >
            <span>Request Full Resume (PDF)</span>
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
