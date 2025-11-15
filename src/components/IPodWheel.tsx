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
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
      <div className="relative w-[220px] h-[220px]">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full bg-primary shadow-2xl" />
        
        {/* Inner circle (center button) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full bg-accent" />
        
        {/* Menu text at top */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={handleMenu}
            className={`text-primary-foreground text-[11px] font-bold tracking-wider transition-all duration-200 ${
              activeButton === "menu" ? "scale-90 opacity-70" : ""
            }`}
          >
            MENU
          </button>
        </div>
        
        {/* Previous button (left) */}
        <button
          onClick={handlePrev}
          className={`absolute left-5 top-1/2 -translate-y-1/2 z-10 text-primary-foreground transition-all duration-200 ${
            activeButton === "prev" ? "scale-90 opacity-70" : ""
          }`}
          aria-label="Previous"
        >
          <div className="flex items-center gap-0.5">
            <ChevronLeft className="w-5 h-5" />
            <ChevronLeft className="w-5 h-5 -ml-2.5" />
          </div>
        </button>
        
        {/* Next button (right) */}
        <button
          onClick={handleNext}
          className={`absolute right-5 top-1/2 -translate-y-1/2 z-10 text-primary-foreground transition-all duration-200 ${
            activeButton === "next" ? "scale-90 opacity-70" : ""
          }`}
          aria-label="Next"
        >
          <div className="flex items-center gap-0.5">
            <ChevronRight className="w-5 h-5" />
            <ChevronRight className="w-5 h-5 -ml-2.5" />
          </div>
        </button>
      </div>
    </div>
  );
};
