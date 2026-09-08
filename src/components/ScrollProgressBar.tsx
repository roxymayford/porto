import * as React from "react";

export function ScrollProgressBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-black/10 pointer-events-none">
      <div 
        className="scroll-progress-bar h-full w-full origin-left bg-gradient-to-r from-brand-lime via-brand-purple to-brand-pink"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
