import * as React from "react";

export function Hero() {
  return (
    <section className="min-h-[calc(100svh-80px)] bg-[#5a9bfc] px-6 py-8 text-[#0a0d14] sm:px-10 lg:px-16" data-purpose="hero-banner">
      <div className="mx-auto grid min-h-[calc(100svh-144px)] max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col justify-between py-6 lg:col-span-8 lg:py-12">
          <div>
            <h1 className="max-w-5xl text-[19vw] font-black leading-[.8] tracking-[-.065em] sm:text-[13vw] lg:text-[9.5rem]">
              Raihan<br />Shandi
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed sm:mt-10 sm:text-2xl lg:text-3xl">
              Machine learning and full-stack engineering for useful systems that survive production.
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                className="btn-brutal bg-[#0a0d14] px-8 text-base font-bold text-[#e9edf3] hover:bg-[#131824]"
                href="#projects"
              >
                Explore work <span className="ml-3 text-xl" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 text-base font-medium leading-relaxed sm:text-lg">
            Bandung / Jakarta, Indonesia · Available for full-time roles & select contracts
          </div>
        </div>

        {/* Right column: Portrait */}
        <figure className="relative hidden h-[min(70svh,620px)] overflow-hidden bg-[#131824] lg:col-span-4 lg:block">
          <img
            src="/profile.jpg"
            alt="Portrait of Raihan Shandi Adrida Meilano"
            width={800}
            height={1000}
            fetchPriority="high"
            className="h-full w-full object-cover object-center grayscale-[.15]"
          />
        </figure>
      </div>
    </section>
  );
}
