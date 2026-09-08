import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { useScrollMotion } from "@/hooks/useScrollMotion";

export function App() {
  const scrollContainerRef = useScrollMotion();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {/* GSAP Scroll-driven progress indicator bar */}
      <ScrollProgressBar />

      <div 
        ref={scrollContainerRef}
        className="bg-[#1F2022] text-[#E8F8F5] font-sans antialiased border-x-0 md:border-x-4 border-[#292929] max-w-7xl mx-auto min-h-screen selection:bg-[#FF4F00] selection:text-white"
      >
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Skills Section */}
          <Skills />

          {/* Featured Projects & Certifications Section */}
          <section className="border-b-4 border-[#292929]" data-purpose="featured-projects-and-certifications" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Projects />
              <Certifications />
            </div>
          </section>

          {/* Experience & CTA Section */}
          <section className="border-b-4 border-[#292929]" data-purpose="experience-and-contact-cta" id="experience">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Experience />
              <ContactCTA />
            </div>
          </section>
        </main>

        {/* Modern Neo-Brutalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
