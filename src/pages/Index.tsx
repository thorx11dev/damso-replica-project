import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { MediaCarousel } from "@/components/MediaCarousel";
import { IPodWheel } from "@/components/IPodWheel";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  const carouselRef = useRef<{ navigate: (direction: "prev" | "next") => void }>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavigate = (direction: "prev" | "next") => {
    carouselRef.current?.navigate(direction);
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Parallax cursor effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: "transform 0.3s ease-out"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/5" />
      </div>

      <Navigation />
      
      <main className="pt-24 pb-32 relative z-10">
        <MediaCarousel ref={carouselRef} />
      </main>

      <IPodWheel onNavigate={handleNavigate} onMenuClick={handleMenuClick} />
    </div>
  );
};

export default Index;
