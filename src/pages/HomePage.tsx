import * as React from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { ContactCTA } from "@/components/ContactCTA";
import { useNavigation } from "@/context/NavigationContext";
import { 
  FolderGit2, 
  Terminal, 
  Award, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  BookOpen, 
  Cpu 
} from "lucide-react";

export function HomePage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Quick Navigation Cards Banner */}
      <section className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-8" data-purpose="quick-directory">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00BFFF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Portfolio Sections</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mt-1">
              Deep-Dive Direct Access
            </h2>
          </div>
          <span className="font-mono text-xs text-[#E8F8F5]/60">
            6 Specialized Workspaces Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Projects Link Card */}
          <button
            onClick={() => navigateTo("projects")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#FF4F00] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#FF4F00]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#FF4F00]/10 border border-[#FF4F00]/40 flex items-center justify-center text-[#FF4F00] group-hover:bg-[#FF4F00] group-hover:text-white transition-colors">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#FF4F00] border border-[#292929]">
                8 Case Studies
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#FF4F00] flex items-center justify-between">
              <span>All Projects</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Explore production ML pipelines, full-stack microservices, edge inference models, and open-source tools.
            </p>
          </button>

          {/* Interactive Lab Link Card */}
          <button
            onClick={() => navigateTo("lab")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#00BFFF] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#00BFFF]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#00BFFF] group-hover:text-[#1F2022] transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#00BFFF] border border-[#292929]">
                Interactive Tools
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#00BFFF] flex items-center justify-between">
              <span>Developer Lab</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Test the live CLI Terminal emulator, real-time AI Sentiment classifier, and tactile Neo-Brutalist CSS tokens.
            </p>
          </button>

          {/* Tech Blog Link Card */}
          <button
            onClick={() => navigateTo("blog")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#FFEA00] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#FFEA00]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#FFEA00]/10 border border-[#FFEA00]/40 flex items-center justify-center text-[#FFEA00] group-hover:bg-[#FFEA00] group-hover:text-[#1F2022] transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#FFEA00] border border-[#292929]">
                4 Deep Dives
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#FFEA00] flex items-center justify-between">
              <span>Articles & Notes</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Read architectural breakdowns on LLM quantization, Go microservices, and high-throughput data engineering.
            </p>
          </button>

          {/* About & Setup Link Card */}
          <button
            onClick={() => navigateTo("about")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#00BFFF] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#00BFFF]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#00BFFF] group-hover:text-[#1F2022] transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#00BFFF] border border-[#292929]">
                Uses & Journey
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#00BFFF] flex items-center justify-between">
              <span>About & Setup</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Explore Raihan's background, engineering principles, workspace gear, and development workflow.
            </p>
          </button>

          {/* Certifications Link Card */}
          <button
            onClick={() => navigateTo("certifications")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#D5006D] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#D5006D]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#D5006D]/10 border border-[#D5006D]/40 flex items-center justify-center text-[#D5006D] group-hover:bg-[#D5006D] group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#D5006D] border border-[#292929]">
                6 Credentials
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#D5006D] flex items-center justify-between">
              <span>Certifications</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Official industry certifications from Google Cloud, DeepLearning.AI, AWS, and Dicoding Indonesia.
            </p>
          </button>

          {/* Contact Link Card */}
          <button
            onClick={() => navigateTo("contact")}
            className="group text-left p-5 bg-[#1F2022] border-2 border-[#292929] hover:border-[#FF4F00] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#292929] hover:shadow-[6px_6px_0px_#FF4F00]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#FF4F00]/10 border border-[#FF4F00]/40 flex items-center justify-center text-[#FF4F00] group-hover:bg-[#FF4F00] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#292929] text-[#FF4F00] border border-[#292929]">
                Ready to Hire
              </span>
            </div>
            <h3 className="font-mono font-black text-lg text-white group-hover:text-[#FF4F00] flex items-center justify-between">
              <span>Contact Hub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="font-mono text-xs text-[#E8F8F5]/65 mt-1.5 leading-relaxed">
              Inquire for freelance projects, AI/ML engineering, high-throughput systems, or book a coffee chat.
            </p>
          </button>
        </div>
      </section>

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
    </div>
  );
}
