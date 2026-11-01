import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
      <ScrollProgressBar />

      <div 
        ref={scrollContainerRef}
        className="bg-[#0a0d14] text-[#e9edf3] font-sans antialiased max-w-7xl mx-auto min-h-screen selection:bg-[#5a9bfc] selection:text-[#0a0d14] flex flex-col justify-between"
      >
        <div>
          <Navbar />
          <main id="main-content" key={currentPage}>
            {renderCurrentPage()}
          </main>
        </div>

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