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
import { AnimatedFooter } from "@/components/ui/animated-footer";
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
        className="bg-[#FAF9F5] text-brand-dark font-sans antialiased border-x-0 md:border-x-4 border-black max-w-7xl mx-auto min-h-screen selection:bg-brand-lime selection:text-black"
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
          <section className="border-b-4 border-black" data-purpose="featured-projects-and-certifications" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Projects />
              <Certifications />
            </div>
          </section>

          {/* Experience & CTA Section */}
          <section className="border-b-4 border-black" data-purpose="experience-and-contact-cta" id="experience">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <Experience />
              <ContactCTA />
            </div>
          </section>
        </main>

        {/* Animated Footer Section with ASCII Hand Art & GSAP Reveal */}
        <section id="animated-footer" className="relative h-[80vh] min-h-[520px] w-full border-b-4 border-black overflow-hidden grid-bg-dark">
          <AnimatedFooter 
            headingLines={["Raihan Shandi", "Adrida Meilano"]}
            headingColors={["#FAF9F5", "#B8FF57"]}
            leftImage="/animated-footer/integral.png"
            rightImage="/animated-footer/giratina.png"
            background="transparent"
            textColor="#FAF9F5"
            charColor="#7E69F2"
            hoverColor="#B8FF57"
            hoverCharColor="#111111"
            columns={80}
            cellSize={20}
            fontSize={18}
            parallaxStrength={22}
            hoverRadius={8}
            revealOnScroll={true}
          />
        </section>

        {/* Base Brutalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
