import * as React from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { ContactCTA } from "@/components/ContactCTA";
import { useNavigation } from "@/context/NavigationContext";

const directory = [
  { label: "All Projects", detail: "ML pipelines, microservices, edge inference, and open-source tools.", route: "projects" as const },
  { label: "Developer Lab", detail: "Interactive CLI, sentiment classifier, and experiments in the browser.", route: "lab" as const },
  { label: "Articles & Notes", detail: "Architectural breakdowns on LLMs, Go services, and data engineering.", route: "blog" as const },
  { label: "About & Setup", detail: "Background, engineering principles, workspace, and development workflow.", route: "about" as const },
  { label: "Certifications", detail: "Credentials from Google Cloud, DeepLearning.AI, AWS, and Dicoding.", route: "certifications" as const },
  { label: "Contact Hub", detail: "Freelance, engineering opportunities, or a conversation about systems.", route: "contact" as const },
];

export function HomePage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#0a0d14]">
      <Hero />
      <Skills />

      {/* Bandung and the person behind the work; imagery is credited in the footer. */}
      <section className="bg-[#0a0d14] px-6 py-12 sm:px-10 lg:px-16 lg:py-20" data-purpose="origin-context">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5">
          <figure className="col-span-2 relative aspect-[2/1] overflow-hidden bg-[#131824] sm:col-span-1 sm:row-span-2 sm:aspect-[4/5]">
            <img src="/profile.jpg" alt="Portrait of Raihan Shandi Adrida Meilano" width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-center grayscale-[.2]" />
            <figcaption className="absolute bottom-3 left-3 bg-[#0a0d14] px-3 py-2 text-sm text-[#e9edf3]">Raihan Shandi · Bandung</figcaption>
          </figure>
          <figure className="relative aspect-[2/1] overflow-hidden bg-[#131824]">
            <img src="/assets/bandung-city-42.jpg" alt="Tiled gateway and public library park in Bandung, Indonesia" width={1920} height={2877} loading="lazy" className="h-full w-full object-cover object-center" />
          </figure>
          <figure className="relative aspect-[2/1] overflow-hidden bg-[#131824]">
            <img src="/assets/stamp-of-indonesia-2020-colnect-985176-gedung.jpg" alt="Indonesian postage stamps commemorating a century of Gedung Sate" width={1024} height={388} loading="lazy" className="h-full w-full object-cover" />
          </figure>
          <figure className="col-span-2 relative aspect-[3/1] overflow-hidden bg-[#131824] sm:col-span-1">
            <img src="/assets/mounttangkubanperahu.jpg" alt="Mount Tangkuban Perahu north of Bandung" width={1064} height={798} loading="lazy" className="h-full w-full object-cover" />
          </figure>
          <div className="col-span-2 flex items-end bg-[#131824] p-5 text-base text-[#e9edf3] sm:col-span-1 sm:p-7">
            Bandung / Jakarta, Indonesia · 6°54′S 107°36′E
          </div>
        </div>
      </section>

      {/* Directory in editorial layout */}
      <section className="bg-[#0a0d14] px-6 py-20 sm:px-10 lg:px-16 lg:py-28" data-purpose="quick-directory">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h2 className="text-5xl font-extrabold leading-[.95] tracking-[-.04em] text-[#e9edf3] sm:text-7xl">
              Directory
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#a4adbc]">
              Explore documentation, project write-ups, interactive lab demos, and background notes.
            </p>
          </div>

          <div className="space-y-2">
            {directory.map((item) => (
              <button
                key={item.route}
                onClick={() => navigateTo(item.route)}
                className="group flex w-full items-baseline justify-between py-5 text-left transition-colors hover:text-[#5a9bfc] sm:py-6"
              >
                <div className="max-w-2xl">
                  <span className="text-2xl font-bold tracking-tight text-[#e9edf3] group-hover:text-[#5a9bfc] sm:text-3xl">
                    {item.label}
                  </span>
                  <p className="mt-2 text-base text-[#a4adbc]">
                    {item.detail}
                  </p>
                </div>
                <span className="text-xl text-[#5a9bfc] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div id="projects"><Projects /></div>
      <div id="certifications"><Certifications /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><ContactCTA /></div>
    </div>
  );
}
