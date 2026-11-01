import * as React from "react";

interface TimelineItem { role: string; company: string; period: string; description: string; achievements: string[] }
const experienceList: TimelineItem[] = [
  { role: "Senior Full-Stack Developer", company: "Technova Global", period: "2023 — Present", description: "Lead the frontend architecture and micro-service integrations for an enterprise analytics platform serving over 70,000 daily active users.", achievements: ["Optimized client-side rendering pipeline, cutting bundle size by 35% and LCP to 1.1s", "Mentored a distributed team of 6 engineers on TypeScript strict patterns and clean architecture"] },
  { role: "Full-Stack Web Developer", company: "Hyperion Digital", period: "2021 — 2023", description: "Engineered scalable REST & GraphQL APIs, internal tooling dashboards, and high-conversion client web apps under strict SLAs.", achievements: ["Designed and deployed automated CI/CD pipeline via Docker and GitHub Actions", "Integrated Redis caching layer reducing database latency by over 50%"] },
  { role: "Frontend Developer", company: "Inovasi Studio", period: "2020 — 2021", description: "Developed interactive, pixel-perfect user interfaces and design systems for funded tech startups in fast-paced sprint cycles.", achievements: ["Built an accessible design system of 40+ reusable React UI components"] },
];

export function Experience() {
  return (
    <section className="bg-[#131824] px-6 py-20 text-[#e9edf3] sm:px-10 lg:px-16 lg:py-28" data-purpose="experience">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold leading-[.95] tracking-[-.04em] sm:text-7xl">Experience</h2>
        <div className="mt-14 space-y-12">
          {experienceList.map(item => (
            <article key={item.company} className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#e9edf3] sm:text-3xl">{item.role}</h3>
                <p className="mt-2 text-xl font-medium text-[#5a9bfc]">{item.company}</p>
                <p className="mt-1 text-base text-[#a4adbc]">{item.period}</p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-[#e9edf3]">{item.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-[#a4adbc]">
                  {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <a className="btn-brutal bg-[#5a9bfc] px-6 text-base font-bold text-[#0a0d14]" href="#contact">Request Full Resume</a>
        </div>
      </div>
    </section>
  );
}