import React, { createContext, useContext, useState, useEffect } from "react";

export type PageRoute = 
  | "home" 
  | "projects" 
  | "about" 
  | "certifications" 
  | "blog" 
  | "lab" 
  | "contact";

interface NavigationContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute, targetId?: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const validRoutes: PageRoute[] = [
  "home",
  "projects",
  "about",
  "certifications",
  "blog",
  "lab",
  "contact",
];

function getRouteFromHash(): PageRoute {
  const hash = window.location.hash.replace("#/", "").replace("#", "").split("?")[0].toLowerCase();
  if (validRoutes.includes(hash as PageRoute)) {
    return hash as PageRoute;
  }
  return "home";
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromHash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getRouteFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute, targetId?: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    setIsMobileMenuOpen(false);

    // If targetId is provided, wait briefly for DOM update then scroll into view
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
