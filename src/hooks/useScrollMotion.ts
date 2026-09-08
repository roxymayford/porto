import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollMotion() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // ── Kill CSS scroll-behavior: smooth — it fights GSAP scrub ──────────
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";

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
      const heroTerminal = document.querySelector("[data-purpose='terminal-card']");

      const heroBadge = heroSection?.querySelector(".inline-flex.items-center.gap-2.px-3") ?? null;
      const heroHeading = heroSection?.querySelector("h1") ?? null;
      const heroBio = heroSection?.querySelector("p.font-mono") ?? null;
      const heroButtonsWrapper = heroSection?.querySelector(".flex.flex-wrap.gap-4") ?? null;

      // Clean, silky entrance on load with clearProps on completion
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(
            [heroBadge, heroHeading, heroBio, heroButtonsWrapper, heroTerminal].filter(Boolean),
            { clearProps: "opacity,transform" }
          );
        },
      });

      if (heroBadge) {
        heroTl.from(heroBadge, { y: -12, opacity: 0, duration: 0.6 });
      }
      if (heroHeading) {
        heroTl.from(heroHeading, { y: 20, opacity: 0, duration: 0.7 }, "-=0.45");
      }
      if (heroBio) {
        heroTl.from(heroBio, { y: 12, opacity: 0, duration: 0.6 }, "-=0.4");
      }
      if (heroButtonsWrapper) {
        heroTl.from(heroButtonsWrapper, { y: 12, opacity: 0, duration: 0.55 }, "-=0.35");
      }
      if (heroImageCard) {
        heroTl.from(heroImageCard, { scale: 0.96, opacity: 0, duration: 0.8 }, "-=0.5");
      }
      if (heroTerminal) {
        heroTl.from(
          heroTerminal,
          { x: 16, y: 16, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Hero scroll parallax: gentle vertical shift without rotation distortion
      if (heroImageCard) {
        gsap.to(heroImageCard, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (heroTerminal) {
        gsap.to(heroTerminal, {
          y: -16,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // ── 3. Skills Section Staggered Entrance ────────────────────────────
      const skillsSection = document.querySelector("#skills");
      const skillsHeader = skillsSection?.querySelector(":scope > div:first-child") ?? null;
      const skillItems = skillsSection?.querySelectorAll<HTMLElement>(".grid > div, .flex-1 > div") ?? [];

      if (skillsHeader) {
        gsap.from(skillsHeader, {
          x: -24,
          opacity: 0,
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
        // Pure translate & opacity — no scale distortion, no overflow, crisp icons
        gsap.from(skillItems, {
          y: 16,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
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
          x: -20,
          opacity: 0,
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
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: projectCard,
            start: "top 88%",
            once: true,
          },
        });

        // Parallax on weather sun graphic
        const sunGraphic = projectCard.querySelector(".rounded-full");
        if (sunGraphic) {
          gsap.to(sunGraphic, {
            y: -10,
            rotate: 45,
            ease: "none",
            scrollTrigger: {
              trigger: projectCard,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        // Parallax on weather cloud graphic
        const cloudCard = projectCard.querySelector(".shadow-brutal");
        if (cloudCard) {
          gsap.to(cloudCard, {
            y: 6,
            ease: "none",
            scrollTrigger: {
              trigger: projectCard,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        }
      }

      // ── 5. Certifications Sidebar Slide-in ──────────────────────────────
      const certSection = document.querySelector("[data-purpose='certifications-sidebar']");
      const certHeading = certSection?.querySelector("h2") ?? null;
      const certCards = certSection?.querySelectorAll<HTMLElement>(".space-y-4 > div") ?? [];

      if (certHeading) {
        gsap.from(certHeading, {
          y: -15,
          opacity: 0,
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
          x: 24,
          opacity: 0,
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
      const expHeader = expSection?.querySelector(".bg-brand-flame") ?? null;
      const timelineItems = expSection?.querySelectorAll<HTMLElement>(".relative.pl-6 > div.relative, .relative.pl-8 > div.relative") ?? [];
      const contactCard = document.querySelector("[data-purpose='final-call-to-action']");
      const starburstWrapper = document.querySelector(".starburst-scroll-wrapper");

      if (expHeader) {
        gsap.from(expHeader, {
          x: -24,
          opacity: 0,
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
        timelineItems.forEach((item) => {
          const marker = item.querySelector("span.absolute");
          const textContent = item.querySelector(".space-y-2, .space-y-1");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });

          if (marker) {
            tl.from(marker, {
              scale: 0,
              duration: 0.4,
              ease: "back.out(1.5)",
              clearProps: "all",
            });
          }

          if (textContent) {
            tl.from(
              textContent,
              {
                x: -12,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                clearProps: "all",
              },
              "-=0.2"
            );
          }
        });
      }

      // Contact CTA entrance
      if (contactCard) {
        gsap.from(contactCard, {
          scale: 0.98,
          y: 20,
          opacity: 0,
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

      // Starburst scrub rotation applied to wrapper (so CSS continuous spin is preserved)
      if (starburstWrapper) {
        gsap.to(starburstWrapper, {
          rotate: 180,
          ease: "none",
          scrollTrigger: {
            trigger: contactCard || "#experience",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // ── 7. Clean Site Footer Entrance Reveal ───────────────────────────
      const siteFooter = document.querySelector("[data-purpose='site-footer']");
      if (siteFooter) {
        gsap.from(siteFooter, {
          y: 20,
          opacity: 0,
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
    }, containerRef);

    return () => {
      ctx.revert();
      htmlEl.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  return containerRef;
}
