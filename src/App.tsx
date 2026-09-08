import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingModal } from "@/components/LoadingModal";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AboutPage } from "@/pages/AboutPage";
import { CertificationsPage } from "@/pages/CertificationsPage";
import { BlogPage } from "@/pages/BlogPage";
import { LabPage } from "@/pages/LabPage";
import { ContactPage } from "@/pages/ContactPage";
import { useScrollMotion } from "@/hooks/useScrollMotion";

function MainLayout() {
  const { currentPage } = useNavigation();
  const scrollContainerRef = useScrollMotion();
  const [isLoading, setIsLoading] = React.useState(true);

  // Render current active page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "projects":
        return <ProjectsPage />;
      case "about":
        return <AboutPage />;
      case "certifications":
        return <CertificationsPage />;
      case "blog":
        return <BlogPage />;
      case "lab":
        return <LabPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {/* Neo-Brutalist Boot Loading Screen on Initial Load & Refresh */}
      {isLoading && (
        <LoadingModal onComplete={() => setIsLoading(false)} minDuration={1000} />
      )}

      {/* GSAP Scroll-driven progress indicator bar */}
      <ScrollProgressBar />

      <div 
        ref={scrollContainerRef}
        className="bg-[#1F2022] text-[#E8F8F5] font-sans antialiased border-x-0 md:border-x-4 border-[#292929] max-w-7xl mx-auto min-h-screen selection:bg-[#FF4F00] selection:text-white flex flex-col justify-between"
      >
        <div>
          {/* Top Sticky Navigation */}
          <Navbar />

          {/* Dynamic Active Page Content with Route Transition */}
          <main key={currentPage} className="animate-in fade-in duration-200">
            {renderCurrentPage()}
          </main>
        </div>

        {/* Global Neo-Brutalist Footer */}
        <Footer />
      </div>
    </>
  );
}

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NavigationProvider>
        <MainLayout />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
