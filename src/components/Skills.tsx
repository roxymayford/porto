import * as React from "react";

interface SkillItem { name: string; category: string }
const skillsData: SkillItem[] = [
  { name: "PyTorch & Transformers", category: "Machine Learning" },
  { name: "Model Quantization & ONNX", category: "Machine Learning" },
  { name: "TypeScript & Strict Systems", category: "Engineering Core" },
  { name: "Go / Microservices", category: "Engineering Core" },
  { name: "React, Vite & Next.js", category: "Frontend Systems" },
  { name: "Docker & CI/CD Pipelines", category: "Infrastructure" },
  { name: "PostgreSQL & Redis Caching", category: "Data Storage" },
  { name: "Sub-100ms Inference Systems", category: "Performance" },
];

export function Skills() {
  return (
    <section className="bg-[#131824] px-6 py-20 text-[#e9edf3] sm:px-10 lg:px-16 lg:py-28" data-purpose="capabilities-overview" id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <h2 className="text-5xl font-extrabold leading-[.95] tracking-[-.04em] sm:text-7xl">Capabilities</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#a4adbc]">
              Practical domains where I deliver end-to-end reliability, from mathematical model training to scalable production web services.
            </p>
          </div>

          <div className="space-y-6">
                        {skillsData.map((skill) => (
                          <div key={skill.name} className="flex flex-col justify-between pb-6 sm:flex-row sm:items-baseline">
                            <span className="text-2xl font-bold tracking-tight text-[#e9edf3] sm:text-3xl">{skill.name}</span>
                            <span className="mt-2 text-base font-medium text-[#5a9bfc] sm:mt-0">{skill.category}</span>
                          </div>
                        ))}
                      </div>
        </div>
      </div>
    </section>
  );
}
