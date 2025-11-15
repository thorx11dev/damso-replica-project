import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { MediaCarousel } from "@/components/MediaCarousel";
import { IPodWheel } from "@/components/IPodWheel";

const Index = () => {
  const carouselRef = useRef<{ navigate: (direction: "prev" | "next") => void }>(null);

  const handleNavigate = (direction: "prev" | "next") => {
    carouselRef.current?.navigate(direction);
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-32">
        <MediaCarousel ref={carouselRef} />
      </main>

      <IPodWheel onNavigate={handleNavigate} onMenuClick={handleMenuClick} />
    </div>
  );
};

export default Index;
