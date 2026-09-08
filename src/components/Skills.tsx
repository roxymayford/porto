import * as React from "react";

interface SkillItem {
  name: string;
  category: string;
  level: string;
  pillColor: string;
}

const skillsData: SkillItem[] = [
  { name: "React.js", category: "Frontend", level: "Expert", pillColor: "text-[#00BFFF]" },
  { name: "TypeScript", category: "Language", level: "Senior", pillColor: "text-[#00BFFF]" },
  { name: "Next.js", category: "Full-Stack", level: "Production", pillColor: "text-[#FF4F00]" },
  { name: "Node.js", category: "Backend", level: "Advanced", pillColor: "text-[#5D3FD3]" },
  { name: "Go / Golang", category: "Backend", level: "Advanced", pillColor: "text-[#00BFFF]" },
  { name: "Tailwind CSS", category: "Styling", level: "Expert", pillColor: "text-[#FF4F00]" },
  { name: "Docker", category: "DevOps", level: "Production", pillColor: "text-[#D5006D]" },
  { name: "PostgreSQL", category: "Database", level: "Advanced", pillColor: "text-[#00BFFF]" },
  { name: "Git / CI/CD", category: "Workflow", level: "Expert", pillColor: "text-[#FF6F00]" },
  { name: "Performance", category: "Core", level: "99+ Score", pillColor: "text-[#FFEA00]" },
];

export function Skills() {
  return (
    <section className="border-b-4 border-[#292929] bg-[#1F2022] flex flex-col md:flex-row items-stretch" data-purpose="skills-marquee" id="skills">
      {/* Brand Header */}
      <div className="bg-[#292929] text-[#E8F8F5] px-6 sm:px-8 py-6 flex items-center justify-between md:justify-center gap-4 border-b-4 md:border-b-0 md:border-r-4 border-[#292929] min-w-[220px]">
        <div>
          <span className="font-mono text-xs font-bold text-[#FF4F00] block uppercase tracking-widest">Stack</span>
          <span className="font-black text-2xl uppercase tracking-tight text-white">SKILLS</span>
        </div>
        <div className="w-9 h-9 bg-[#1F2022] text-[#FFEA00] border border-[#292929] flex items-center justify-center font-black">
          ⚡
        </div>
      </div>

      {/* Tech Stack Responsive Grid */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#292929] bg-[#1F2022]">
        {skillsData.map((skill, index) => (
          <div 
            key={index}
            className="p-4 sm:p-5 flex flex-col justify-between hover:bg-[#292929] transition-all cursor-default group border-b sm:border-b-0 border-[#292929]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#E8F8F5]/50">
                {skill.category}
              </span>
              <span className={`font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-[#292929] bg-[#1F2022] ${skill.pillColor}`}>
                {skill.level}
              </span>
            </div>

            <div>
              <h3 className="font-black text-base text-[#E8F8F5] tracking-tight group-hover:text-[#FF4F00] transition-colors">
                {skill.name}
              </h3>
            </div>

            <div className="w-full h-1 bg-[#292929] mt-3 overflow-hidden">
              <div 
                className="h-full bg-[#FF4F00]"
                style={{ width: `${80 + (index % 3) * 7}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
