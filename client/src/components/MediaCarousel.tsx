import { useState, forwardRef, useImperativeHandle } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Album artwork 1"
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80",
    alt: "Album artwork 2"
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Album artwork 3"
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    alt: "Album artwork 4"
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80",
    alt: "Album artwork 5"
  }
];

export const MediaCarousel = forwardRef<{ navigate: (direction: "prev" | "next") => void }>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useImperativeHandle(ref, () => ({
    navigate
  }));

  const getItemPosition = (index: number) => {
    const diff = index - currentIndex;
    const position = diff * 380; // tighter spacing to match original
    const scale = index === currentIndex ? 1 : 0.6;
    const opacity = Math.abs(diff) <= 2 ? 1 : 0;
    const zIndex = index === currentIndex ? 10 : 5 - Math.abs(diff);
    const blur = index === currentIndex ? 0 : 4;
    const brightness = index === currentIndex ? 1 : 0.6;
    
    return {
      transform: `translateX(${position}px) scale(${scale}) translateZ(0)`,
      opacity,
      zIndex,
      filter: `blur(${blur}px) brightness(${brightness})`
    };
  };

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden perspective-[1200px]">
      <div className="relative w-full h-full flex items-center justify-center">
        {mediaItems.map((item, index) => (
          <div
            key={item.id}
            className="absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer will-change-transform"
            style={getItemPosition(index)}
            onClick={() => {
              if (index !== currentIndex && !isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }}
          >
            <div className="w-[320px] h-[320px] bg-card rounded-lg overflow-hidden shadow-2xl border border-border hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-shadow duration-300 group">
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - hidden but functional through iPod wheel */}
      <button
        onClick={() => navigate("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Previous"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={() => navigate("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Next"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
});

MediaCarousel.displayName = "MediaCarousel";
