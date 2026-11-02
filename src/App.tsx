import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import { useScrollMotion } from "@/hooks/useScrollMotion";

// Route components lazily loaded for optimal initial bundle & code-splitting
const HomePage = React.lazy(() => import("@/pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = React.lazy(() => import("@/pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const AboutPage = React.lazy(() => import("@/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const CertificationsPage = React.lazy(() => import("@/pages/CertificationsPage").then(m => ({ default: m.CertificationsPage })));
const BlogPage = React.lazy(() => import("@/pages/BlogPage").then(m => ({ default: m.BlogPage })));
const LabPage = React.lazy(() => import("@/pages/LabPage").then(m => ({ default: m.LabPage })));
const ContactPage = React.lazy(() => import("@/pages/ContactPage").then(m => ({ default: m.ContactPage })));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0a0d14] text-[#a4adbc]">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#5a9bfc] border-t-transparent" />
        <span className="text-sm font-medium tracking-wide">Loading view...</span>
      </div>
    </div>
  );
}

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
        className="bg-[#0a0d14] text-[#e9edf3] font-sans antialiased max-w-7xl mx-auto min-h-[100dvh] selection:bg-[#5a9bfc] selection:text-[#0a0d14] flex flex-col justify-between"
      >
        <div>
          <Navbar />
          <main id="main-content" key={currentPage}>
            <React.Suspense fallback={<RouteFallback />}>
              {renderCurrentPage()}
            </React.Suspense>
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
