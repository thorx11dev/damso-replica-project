import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

interface IPodWheelProps {
  onNavigate?: (direction: "prev" | "next") => void;
  onMenuClick?: () => void;
}

export const IPodWheel = ({ onNavigate, onMenuClick }: IPodWheelProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handlePrev = () => {
    setActiveButton("prev");
    onNavigate?.("prev");
    setTimeout(() => setActiveButton(null), 200);
  };

  const handleNext = () => {
    setActiveButton("next");
    onNavigate?.("next");
    setTimeout(() => setActiveButton(null), 200);
  };

  const handleMenu = () => {
    setActiveButton("menu");
    onMenuClick?.();
    setTimeout(() => setActiveButton(null), 200);
  };

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 animate-float">
      <div className="relative w-[180px] h-[180px] group">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full bg-primary shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(0,0,0,0.5)] group-hover:scale-105" />
        
        {/* Inner circle (center button) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-accent transition-all duration-300 group-hover:bg-primary/90" />
        
        {/* Menu text at top */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={handleMenu}
            className={`text-primary-foreground text-[9px] font-bold tracking-wider transition-all duration-200 ${
              activeButton === "menu" ? "scale-90 opacity-70" : ""
            }`}
          >
            MENU
          </button>
        </div>
        
        {/* Previous button (left) */}
        <button
          onClick={handlePrev}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 text-primary-foreground transition-all duration-300 hover:scale-110 ${
            activeButton === "prev" ? "scale-90 opacity-70" : ""
          }`}
          aria-label="Previous"
        >
          <div className="flex items-center gap-0">
            <ChevronLeft className="w-3.5 h-3.5" />
            <ChevronLeft className="w-3.5 h-3.5 -ml-1.5" />
          </div>
        </button>
        
        {/* Next button (right) */}
        <button
          onClick={handleNext}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 text-primary-foreground transition-all duration-300 hover:scale-110 ${
            activeButton === "next" ? "scale-90 opacity-70" : ""
          }`}
          aria-label="Next"
        >
          <div className="flex items-center gap-0">
            <ChevronRight className="w-3.5 h-3.5" />
            <ChevronRight className="w-3.5 h-3.5 -ml-1.5" />
          </div>
        </button>
      </div>
    </div>
  );
};
