import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Scene } from "three/src/scenes/Scene.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { BufferGeometry } from "three/src/core/BufferGeometry.js";
import { BufferAttribute } from "three/src/core/BufferAttribute.js";
import { PointsMaterial } from "three/src/materials/PointsMaterial.js";
import { Points } from "three/src/objects/Points.js";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = gsap.context(() => {
      if (!media.matches) {
        gsap.from("[data-hero-motion]", {
          y: 22,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });
      }
    }, hero);

    let renderer: WebGLRenderer | undefined;
    let geometry: BufferGeometry | undefined;
    let material: PointsMaterial | undefined;
    let frame = 0;
    let onPointerMove: ((event: PointerEvent) => void) | undefined;
    let onResize: (() => void) | undefined;

    if (!media.matches && window.matchMedia("(pointer: fine)").matches) {
      try {
        const scene = new Scene();
        const camera = new PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.z = 15;
        renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        const coords = new Float32Array(180 * 3);
        for (let i = 0; i < 180; i++) {
          coords[i * 3] = (Math.random() - 0.5) * 19;
          coords[i * 3 + 1] = (Math.random() - 0.5) * 11;
          coords[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
        geometry = new BufferGeometry();
        geometry.setAttribute("position", new BufferAttribute(coords, 3));
        material = new PointsMaterial({ color: 0x0a0d14, size: 0.045, transparent: true, opacity: 0.32 });
        const field = new Points(geometry, material);
        scene.add(field);
        onResize = () => {
          const { width, height } = hero.getBoundingClientRect();
          renderer?.setSize(width, height, false);
          camera.aspect = width / Math.max(height, 1);
          camera.updateProjectionMatrix();
        };
        onResize();
        onPointerMove = (event) => {
          const rect = hero.getBoundingClientRect();
          gsap.to(field.rotation, {
            x: ((event.clientY - rect.top) / rect.height - 0.5) * 0.08,
            y: ((event.clientX - rect.left) / rect.width - 0.5) * 0.12,
            duration: 0.65,
            overwrite: true,
          });
        };
        hero.addEventListener("pointermove", onPointerMove);
        window.addEventListener("resize", onResize);
        const render = () => {
          renderer?.render(scene, camera);
          frame = requestAnimationFrame(render);
        };
        frame = requestAnimationFrame(render);
      } catch {
        canvas.hidden = true;
      }
    }

    return () => {
      ctx.revert();
      if (onPointerMove) hero.removeEventListener("pointermove", onPointerMove);
      if (onResize) window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#5a9bfc] px-6 py-6 text-[#0a0d14] sm:px-10 lg:px-16" data-purpose="hero-banner">
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-128px)] max-w-7xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="flex flex-col justify-center py-4 lg:col-span-8 lg:py-8">
          <div>
            <h1 data-hero-motion className="max-w-5xl text-[18vw] font-black leading-[.79] tracking-[-.065em] sm:text-[13vw] lg:text-[9.5rem]">
              Raihan<br />Shandi
            </h1>
            <p data-hero-motion className="mt-5 max-w-2xl text-lg font-semibold leading-snug sm:mt-6 sm:text-2xl lg:text-3xl">
              Machine learning and full-stack engineering for useful systems that survive production.
            </p>
            <div data-hero-motion className="mt-5 sm:mt-6">
              <a className="btn-brutal bg-[#0a0d14] px-8 text-base font-bold text-[#e9edf3] hover:bg-[#131824]" href="#projects">
                Explore work <span className="ml-3 text-xl" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div data-hero-motion className="mt-7 text-sm font-medium leading-relaxed sm:mt-9 sm:text-base">
            Bandung / Jakarta, Indonesia · Available for full-time roles & select contracts
          </div>
        </div>
        <figure data-hero-motion className="relative h-44 overflow-hidden bg-[#131824] sm:h-56 lg:col-span-4 lg:h-[min(66svh,580px)]" data-purpose="hero-showcase">
          <img src="/profile.jpg" alt="Portrait of Raihan Shandi Adrida Meilano" width={800} height={1000} fetchPriority="high" className="h-full w-full object-cover object-center grayscale-[.15]" />
        </figure>
      </div>
    </section>
  );
}
