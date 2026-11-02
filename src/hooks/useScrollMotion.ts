import { useEffect, useRef } from "react";
import { useNavigation } from "@/context/NavigationContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollMotion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentPage } = useNavigation();

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ── 1. Top Scroll Progress Bar (Scrub) ──────────────────────────────
      const progressBar = document.querySelector<HTMLElement>(".scroll-progress-bar");
      if (progressBar) {
        progressBar.style.willChange = "transform";
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }

      // ── 2. Hero Section Entrance & Parallax ─────────────────────────────
      const heroSection = document.querySelector("[data-purpose='hero-banner']");
      const heroShowcase = document.querySelector("[data-purpose='hero-showcase']");
      const heroImageCard = heroShowcase?.querySelector("img") ?? null;
      const heroHeading = heroSection?.querySelector("h1") ?? null;
      const heroBio = heroSection?.querySelector("p") ?? null;
      const heroButton = heroSection?.querySelector("a.btn-brutal") ?? null;
      const heroMeta = heroSection?.querySelector("div.mt-14") ?? null;

      // Clean, silky entrance on load with clearProps on completion
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(
            [heroHeading, heroBio, heroButton, heroMeta, heroImageCard].filter(Boolean),
            { clearProps: "opacity,transform" }
          );
        },
      });

      if (heroHeading) {
        heroTl.from(heroHeading, { y: 24, opacity: 0, duration: 0.75 });
      }
      if (heroBio) {
        heroTl.from(heroBio, { y: 16, opacity: 0, duration: 0.65 }, "-=0.45");
      }
      if (heroButton) {
        heroTl.from(heroButton, { y: 12, opacity: 0, duration: 0.55 }, "-=0.4");
      }
      if (heroMeta) {
        heroTl.from(heroMeta, { y: 12, opacity: 0, duration: 0.55 }, "-=0.35");
      }
      if (heroImageCard) {
        heroTl.from(heroImageCard, { scale: 0.95, opacity: 0, duration: 0.8 }, "-=0.5");
      }

      // Hero scroll parallax: gentle vertical shift on hero image
      if (heroImageCard) {
        gsap.to(heroImageCard, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // ── 3. Skills Section Staggered Entrance ────────────────────────────
      const skillsSection = document.querySelector("#skills");
      const skillsHeader = skillsSection?.querySelector("h2") ?? null;
      const skillItems = skillsSection?.querySelectorAll<HTMLElement>(".space-y-6 > div") ?? [];

      if (skillsHeader) {
        gsap.from(skillsHeader, {
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 85%",
            once: true,
          },
        });
      }

      if (skillItems.length > 0) {
        gsap.from(skillItems, {
          y: 16,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 85%",
            once: true,
          },
        });
      }

      // ── 4. Featured Projects Card Reveal ────────────────────────────────
      const projectsSection = document.querySelector("#projects");
      const projectCard = document.querySelector("[data-purpose='project-card']");
      const projectHeader = projectsSection?.querySelector("h2") ?? null;

      if (projectHeader) {
        gsap.from(projectHeader, {
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 85%",
            once: true,
          },
        });
      }

      if (projectCard) {
        gsap.from(projectCard, {
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: projectCard,
            start: "top 88%",
            once: true,
          },
        });
      }

      // ── 5. Certifications Sidebar Slide-in ──────────────────────────────
      const certSection = document.querySelector("[data-purpose='certifications-sidebar']");
      const certHeading = certSection?.querySelector("h2") ?? null;
      const certCards = certSection?.querySelectorAll<HTMLElement>("article") ?? [];

      if (certHeading) {
        gsap.from(certHeading, {
          y: 20,
          duration: 0.55,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: certSection,
            start: "top 85%",
            once: true,
          },
        });
      }

      if (certCards.length > 0) {
        gsap.from(certCards, {
          y: 20,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: certSection,
            start: "top 82%",
            once: true,
          },
        });
      }

      // ── 6. Experience Timeline & Contact Section ────────────────────────
      const expSection = document.querySelector("#experience");
      const expHeader = expSection?.querySelector("h2") ?? null;
      const timelineItems = expSection?.querySelectorAll<HTMLElement>(".border-l > div") ?? [];
      const contactCard = document.querySelector("[data-purpose='final-call-to-action']");

      if (expHeader) {
        gsap.from(expHeader, {
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 85%",
            once: true,
          },
        });
      }

      if (timelineItems.length > 0) {
        gsap.from(timelineItems, {
          y: 20,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 85%",
            once: true,
          },
        });
      }

      // Contact CTA entrance
      if (contactCard) {
        gsap.from(contactCard, {
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: contactCard,
            start: "top 88%",
            once: true,
          },
        });
      }

      // The outer site footer is shared across routes; reveal it only on home.
      if (currentPage === "home") {
        const siteFooter = document.querySelector("[data-purpose='site-footer']");
        if (siteFooter) {
          gsap.from(siteFooter, {
            y: 20,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: siteFooter,
              start: "top 95%",
              once: true,
            },
          });
        }
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [currentPage]);

  return containerRef;
}
