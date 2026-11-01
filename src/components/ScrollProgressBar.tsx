import * as React from "react";

export function ScrollProgressBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-[#131824] pointer-events-none">
      <div 
        className="scroll-progress-bar h-full w-full origin-left bg-[#5a9bfc]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}