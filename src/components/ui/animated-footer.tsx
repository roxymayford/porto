"use client";

import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * Animated Footer
 *
 * A cinematic, reveal-on-scroll footer: two source images are re-drawn as
 * live ASCII art on <canvas>, light up in little clusters around the cursor,
 * and drift with a soft parallax. When the footer scrolls into view the
 * display headings unmask character-by-character, the links and copy slide
 * up behind masks, and the ASCII "hands" glide in from the edges.
 *
 * Ported from the vanilla "LukeBaffait Animated Footer" (GSAP + canvas) into a
 * single, self-contained, prop-driven React component. No global smooth-scroll
 * or SplitText plugin required — the reveal is driven by an IntersectionObserver
 * and text is split in JSX.
 */

export interface AnimatedFooterLink {
  label: string;
  href: string;
}

export interface AnimatedFooterProps {
  /** The large display words along the bottom edge. Defaults to ["VengeanceUI"]. */
  headingLines?: string[];
  /** Optional individual colors per heading line (e.g. ["#FAF9F5", "#B8FF57"]). */
  headingColors?: string[];
  /** Custom class name for heading lines. Defaults to neo-brutalist font-black uppercase. */
  headingClassName?: string;
  /** Left image URL, sampled into ASCII art. Must be same-origin or CORS-enabled. */
  leftImage?: string;
  /** Right image URL, sampled into ASCII art. Must be same-origin or CORS-enabled. */
  rightImage?: string;

  /** Footer background color. Defaults to "#111111". */
  background?: string;
  /** Text color for links, copy and headings. Defaults to "#FAF9F5". */
  textColor?: string;

  /** Character ramp, ordered dark → light, used to render the ASCII art. */
  asciiChars?: string;
  /** Color of the ASCII glyphs. Defaults to "#7E69F2" (Brand Purple). */
  charColor?: string;
  /** Fill color of a highlighted (hovered) cell. Defaults to "#B8FF57" (Brand Lime). */
  hoverColor?: string;
  /** Glyph color inside a highlighted cell. Defaults to "#111111". */
  hoverCharColor?: string;
  /** Number of columns each image is sampled to. Defaults to 80. */
  columns?: number;
  /** Pixel size of each ASCII cell. Defaults to 20. */
  cellSize?: number;
  /** Font size (px) of the ASCII glyphs. Defaults to 18. */
  fontSize?: number;

  /** Pointer parallax strength in px; set to 0 to disable. Defaults to 20. */
  parallaxStrength?: number;
  /** Cursor influence radius, in cells, for the hover highlight. Defaults to 8. */
  hoverRadius?: number;

  /** Play the reveal when the footer scrolls into view (else it shows immediately). Defaults to true. */
  revealOnScroll?: boolean;
  /**
   * Controlled reveal. When set, the footer ignores its own scroll observer and
   * plays in (`true`) / out (`false`) to match this value — drive it from your
   * own ScrollTrigger, sentinel or state to reveal it from behind other content.
   */
  revealed?: boolean;

  /** Extra class names for the root element. */
  className?: string;
}

const DEFAULT_ASCII_CHARS = "........:::=+xX#0369";

const HIGHLIGHT_LIFETIME = 300; // ms a hovered cell stays lit
const CLUSTER_SIZE = 10; // max cells a hover ripple spreads across
const PARALLAX_EASE = 0.05;

interface Cell {
  col: number;
  row: number;
  char: string;
  highlightEndTime: number;
}

interface Hand {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  cells: Map<string, Cell>;
  cellList: Cell[];
  rows: number;
  columns: number;
  cellSize: number;
  baselineOffset: number;
  direction: 1 | -1; // slide-in direction for the reveal curtain
}

/** Build the ASCII cell grid for one image by sampling its brightness and alpha. */
function buildHandCells(
  image: HTMLImageElement,
  columns: number,
  asciiChars: string,
): { rows: number; cells: Map<string, Cell> } {
  const rows = Math.max(
    1,
    Math.round(columns / (image.naturalWidth / image.naturalHeight || 1)),
  );

  const sampler = document.createElement("canvas");
  sampler.width = columns;
  sampler.height = rows;
  const sampleCtx = sampler.getContext("2d");
  const cells = new Map<string, Cell>();
  if (!sampleCtx) return { rows, cells };

  sampleCtx.drawImage(image, 0, 0, columns, rows);
  const pixels = sampleCtx.getImageData(0, 0, columns, rows).data;

  // Check if this image has transparent pixels (like PNG sprites)
  let hasTransparency = false;
  for (let i = 3; i < pixels.length; i += 4) {
    if (pixels[i] < 50) {
      hasTransparency = true;
      break;
    }
  }

  // Visual density ramp for transparent sprites (darker = denser glyph, lighter = finer glyph)
  const spriteRamp = "@#08Xox=+;: ";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const offset = (row * columns + col) * 4;
      const a = pixels[offset + 3];

      // 1. Transparent background pixels are completely skipped
      if (hasTransparency && a < 50) continue;

      const r = pixels[offset];
      const g = pixels[offset + 1];
      const b = pixels[offset + 2];
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

      // 2. White/near-white backgrounds on opaque images are skipped
      if (!hasTransparency && brightness > 0.92) continue;
      if (hasTransparency && brightness > 0.98 && r > 250 && g > 250 && b > 250) continue;

      let char: string;
      if (hasTransparency) {
        // Map brightness to sprite characters
        const idx = Math.min(spriteRamp.length - 2, Math.floor(brightness * (spriteRamp.length - 1)));
        char = spriteRamp[idx];
      } else {
        const backgroundCharIndex = asciiChars.lastIndexOf(".");
        const charIndex = Math.min(
          asciiChars.length - 1,
          Math.floor((1 - brightness) * asciiChars.length),
        );
        if (charIndex <= backgroundCharIndex) continue;
        char = asciiChars[charIndex];
      }

      cells.set(`${col},${row}`, {
        col,
        row,
        char,
        highlightEndTime: 0,
      });
    }
  }

  return { rows, cells };
}

/** Light up a wandering cluster of cells starting from `startCell`. */
function highlightCluster(cells: Map<string, Cell>, startCell: Cell) {
  const now = Date.now();
  startCell.highlightEndTime = now + HIGHLIGHT_LIFETIME;

  const steps = Math.floor(Math.random() * CLUSTER_SIZE) + 1;
  const litCells = [startCell];
  let current = startCell;

  for (let step = 0; step < steps; step++) {
    const neighbours: Cell[] = [];
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const neighbour = cells.get(`${current.col + dx},${current.row + dy}`);
        if (neighbour && !litCells.includes(neighbour)) neighbours.push(neighbour);
      }
    }
    if (neighbours.length === 0) break;

    const next = neighbours[Math.floor(Math.random() * neighbours.length)];
    next.highlightEndTime = now + HIGHLIGHT_LIFETIME + step * 10;
    litCells.push(next);
    current = next;
  }
}

/** Nearest scrollable ancestor — used as the reveal's IntersectionObserver root. */
function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  let el = node?.parentElement ?? null;
  while (el) {
    const overflowY = getComputedStyle(el).overflowY;
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") return el;
    el = el.parentElement;
  }
  return null;
}

export function AnimatedFooter({
  headingLines = ["VengeanceUI"],
  headingColors,
  headingClassName,
  leftImage = "/animated-footer/integral.png",
  rightImage = "/animated-footer/giratina.png",
  background,
  textColor,
  charColor,
  hoverColor,
  hoverCharColor,
  asciiChars = DEFAULT_ASCII_CHARS,
  columns = 80,
  cellSize = 20,
  fontSize = 18,
  parallaxStrength = 20,
  hoverRadius = 8,
  revealOnScroll = true,
  revealed,
  className,
}: AnimatedFooterProps) {
  const rootRef = useRef<HTMLElement>(null);
  const leftWrapRef = useRef<HTMLDivElement>(null);
  const rightWrapRef = useRef<HTMLDivElement>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement>(null);

  // Reveal animations, published by the main effect so the controlled-`revealed`
  // effect below can play them without rebuilding the ASCII scene.
  const animateInRef = useRef<() => void>(() => {});
  const animateOutRef = useRef<() => void>(() => {});

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Brand-aligned colors: Brand Purple base (#7E69F2) + Brand Lime hover (#B8FF57)
  const cc = charColor ?? (isDark ? "#7E69F2" : "#7E69F2");
  const hc = hoverColor ?? "#B8FF57";
  const hcc = hoverCharColor ?? "#111111";

  // Live-tunable values read inside the animation loop, so tweaking a color or
  // the parallax strength never tears down and rebuilds the ASCII scene.
  const liveRef = useRef({ charColor: cc, hoverColor: hc, hoverCharColor: hcc, parallaxStrength, hoverRadius });
  useEffect(() => {
    liveRef.current = { charColor: cc, hoverColor: hc, hoverCharColor: hcc, parallaxStrength, hoverRadius };
  }, [cc, hc, hcc, parallaxStrength, hoverRadius]);

  // A signature of the structural inputs — the scene rebuilds only when one of
  // these changes (images, grid resolution, content, reveal mode).
  const sig = useMemo(
    () =>
      JSON.stringify({
        leftImage,
        rightImage,
        columns,
        cellSize,
        fontSize,
        asciiChars,
        revealOnScroll,
        headingLines,
      }),
    [leftImage, rightImage, columns, cellSize, fontSize, asciiChars, revealOnScroll, headingLines],
  );

  useEffect(() => {
    const root = rootRef.current;
    const leftWrap = leftWrapRef.current;
    const rightWrap = rightWrapRef.current;
    if (!root || !leftWrap || !rightWrap) return;

    const hands: Hand[] = [];
    const wrappers = [leftWrap, rightWrap];

    // ── ASCII hands ──────────────────────────────────────────────────────
    const setupHand = (
      image: HTMLImageElement,
      canvas: HTMLCanvasElement,
      direction: 1 | -1,
    ) => {
      const { rows, cells } = buildHandCells(image, columns, asciiChars);
      if (cells.size === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = columns * cellSize * dpr;
      canvas.height = rows * cellSize * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";

      const metrics = ctx.measureText("X");
      const glyphHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      const baselineOffset = cellSize / 2 + glyphHeight / 2 - metrics.actualBoundingBoxDescent;

      hands.push({
        canvas,
        ctx,
        cells,
        cellList: [...cells.values()],
        rows,
        columns,
        cellSize,
        baselineOffset,
        direction,
      });
    };

    const loadHand = (src: string, canvas: HTMLCanvasElement, direction: 1 | -1) => {
      if (!src) return;
      const image = new Image();
      image.crossOrigin = "anonymous";
      let initialized = false;
      const init = () => {
        if (initialized) return;
        initialized = true;
        setupHand(image, canvas, direction);
      };
      image.onload = init;
      image.src = src;
      if (image.complete && image.naturalWidth) init();
    };
    loadHand(leftImage, leftCanvasRef.current!, 1);
    loadHand(rightImage, rightCanvasRef.current!, -1);

    const renderHand = (hand: Hand, now: number) => {
      const { ctx, cellList, cellSize: cs, baselineOffset, columns: cols, rows } = hand;
      const { charColor: cc, hoverColor: hc, hoverCharColor: hcc } = liveRef.current;
      ctx.clearRect(0, 0, cols * cs, rows * cs);

      for (const cell of cellList) {
        const x = cell.col * cs;
        const y = cell.row * cs;
        const isHighlighted = cell.highlightEndTime > now;

        if (isHighlighted) {
          ctx.fillStyle = hc;
          ctx.fillRect(x, y, cs, cs);
        }
        ctx.fillStyle = isHighlighted ? hcc : cc;
        ctx.fillText(cell.char, x + cs / 2, y + baselineOffset);
      }
    };

    // ── Pointer: hover highlight + parallax target ───────────────────────
    const pointer = { x: 0, y: 0 };
    const drift = { x: 0, y: 0 };
    // Reveal "curtain": hands start pushed off the edges and slide to 0.
    const curtain = { offset: revealOnScroll ? 125 : 0 };

    const hoverHand = (hand: Hand, clientX: number, clientY: number) => {
      const rect = hand.canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const mouseCol = ((clientX - rect.left) / rect.width) * hand.columns;
      const mouseRow = ((clientY - rect.top) / rect.height) * hand.rows;

      let closest: Cell | null = null;
      let closestDist = Infinity;
      for (const cell of hand.cellList) {
        const dx = mouseCol - cell.col;
        const dy = mouseRow - cell.row;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < closestDist) {
          closestDist = dist;
          closest = cell;
        }
      }
      if (closest && closestDist <= liveRef.current.hoverRadius) {
        highlightCluster(hand.cells, closest);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      const strength = liveRef.current.parallaxStrength;
      const rect = root.getBoundingClientRect();
      const w = rect.width || 1;
      const h = rect.height || 1;
      pointer.x = ((event.clientX - rect.left) / w - 0.5) * strength * 2;
      pointer.y = ((event.clientY - rect.top) / h - 0.5) * strength * 2;
      for (const hand of hands) hoverHand(hand, event.clientX, event.clientY);
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Unified render loop: ASCII + parallax + reveal curtain ───────────
    let rafId = 0;
    const frame = () => {
      const now = Date.now();
      for (const hand of hands) renderHand(hand, now);

      drift.x += (pointer.x - drift.x) * PARALLAX_EASE;
      drift.y += (pointer.y - drift.y) * PARALLAX_EASE;
      const strength = liveRef.current.parallaxStrength;
      const scale = 1 + (strength * 2) / 200;

      wrappers.forEach((wrapper, i) => {
        const dir = i === 0 ? 1 : -1;
        const revealX = i === 0 ? -curtain.offset : curtain.offset;
        const x = drift.x * dir || 0;
        const y = -drift.y || 0;
        // Apply reveal via translateX, then apply parallax via translate, avoiding calc() mixed-unit bugs
        wrapper.style.transform = `translateX(${revealX}%) translate(${x}px, ${y}px) scale(${scale})`;
      });

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    // ── Reveal (chars + curtain) ─────────────────────────
    const chars = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-af-char]"));

    const animateIn = () => {
      gsap.to(curtain, { offset: 0, duration: 1, ease: "power3.out", overwrite: true });
      gsap.to(chars, {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        stagger: { each: 0.04, from: "center" },
        overwrite: true,
      });
    };

    const animateOut = () => {
      gsap.to(curtain, { offset: 125, duration: 0.4, ease: "power2.in", overwrite: true });
      gsap.to(chars, {
        yPercent: 125,
        duration: 0.4,
        ease: "power2.in",
        stagger: { each: 0.01, from: "center" },
        overwrite: true,
      });
    };

    // Publish for the controlled-`revealed` effect.
    animateInRef.current = animateIn;
    animateOutRef.current = animateOut;

    const maskAll = () => {
      gsap.set(chars, { yPercent: 125 });
    };
    const showAll = () => {
      gsap.set(chars, { yPercent: 0 });
    };

    let observer: IntersectionObserver | null = null;

    if (revealed !== undefined) {
      // Controlled: the `revealed` effect below drives the reveal. Set the
      // initial state to match, and never attach the scroll observer.
      curtain.offset = revealed ? 0 : 125;
      if (revealed) showAll();
      else maskAll();
    } else if (revealOnScroll) {
      // Start fully masked — nothing shows until the footer is scrolled into view.
      maskAll();

      // Drive the reveal purely from scroll position, relative to the nearest
      // scrollable ancestor (the page in real use, or the preview's scroll
      // container in the docs). Plays in when the footer crosses into view and
      // reverses when you scroll back up.
      let isRevealed = false;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !isRevealed) {
              isRevealed = true;
              animateIn();
            } else if (!entry.isIntersecting && isRevealed) {
              isRevealed = false;
              animateOut();
            }
          }
        },
        { root: getScrollParent(root), threshold: 0.35 },
      );
      observer.observe(root);
    } else {
      showAll();
    }

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      observer?.disconnect();
      gsap.killTweensOf([curtain, ...chars]);
    };
    // Rebuild only when a structural input changes; live values flow via liveRef.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sig]);

  // Controlled reveal: play in/out to match the `revealed` prop without
  // rebuilding the scene. Ignored entirely when `revealed` is undefined.
  useEffect(() => {
    if (revealed === undefined) return;
    if (revealed) animateInRef.current();
    else animateOutRef.current();
  }, [revealed]);

  // Whether the content starts masked on first paint (avoids a flash before the
  // effect runs): hidden unless it's meant to be shown immediately.
  const startsHidden = revealed !== undefined ? !revealed : revealOnScroll;
  const offEdge = startsHidden ? 125 : 0;

  return (
    <footer
      ref={rootRef}
      className={cn(
        "relative h-full w-full overflow-hidden",
        !background && "bg-white dark:bg-black",
        !textColor && "text-black dark:text-white",
        className
      )}
      style={{ backgroundColor: background, color: textColor, containerType: "inline-size" }}
    >
      {/* ASCII Art Figures (Integral on Left, Giratina on Right) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6 sm:px-12">
        <div
          ref={leftWrapRef}
          className="relative w-1/3 max-w-[340px] min-w-[160px] will-change-transform"
          style={{ transform: `translateX(-${offEdge}%)` }}
        >
          <canvas ref={leftCanvasRef} className="block h-auto w-full" />
        </div>
        <div
          ref={rightWrapRef}
          className="relative w-1/2 max-w-[560px] min-w-[240px] will-change-transform"
          style={{ transform: `translateX(${offEdge}%)` }}
        >
          <canvas ref={rightCanvasRef} className="block h-auto w-full" />
        </div>
      </div>

      {/* Display headings - Balanced at the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 p-6 sm:px-12 sm:pb-8 z-10 pointer-events-none">
        {headingLines.map((word, wi) => {
          const color = headingColors?.[wi] ?? textColor;
          return (
            <h2
              key={`${word}-${wi}`}
              aria-label={word}
              className={cn(
                "overflow-hidden font-black uppercase leading-none tracking-tight whitespace-nowrap pb-[0.15em] -mb-[0.15em]",
                headingClassName
              )}
              style={{
                fontSize: "clamp(1.5rem, 4.2cqw, 3.5rem)",
                color: color,
              }}
            >
              {Array.from(word).map((ch, ci) => (
                <span
                  key={ci}
                  data-af-char
                  aria-hidden="true"
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </span>
              ))}
            </h2>
          );
        })}
      </div>
    </footer>
  );
}

export default AnimatedFooter;
