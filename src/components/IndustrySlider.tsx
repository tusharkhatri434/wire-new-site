
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDeviceType } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string;
  image?: string;
}

interface IndustrySliderProps {
  industries: Industry[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const IndustrySlider = ({ 
  industries, 
  autoPlay = true, 
  autoPlayInterval = 4000,
  className 
}: IndustrySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile, isTablet } = useDeviceType();
  
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = Math.max(0, industries.length - slidesToShow);
  const canLoop = industries.length > slidesToShow;

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || !canLoop) return;
    
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, maxIndex, canLoop]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, maxIndex]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    const newIndex = canLoop && currentIndex >= maxIndex ? 0 : Math.min(currentIndex + 1, maxIndex);
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, canLoop, goToSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    const newIndex = canLoop && currentIndex <= 0 ? maxIndex : Math.max(currentIndex - 1, 0);
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, canLoop, goToSlide, isAnimating]);

  // Touch/drag handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    stopAutoPlay();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (dragStart === null) return;
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragStart(null);
    setDragOffset(0);
    startAutoPlay();
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden group", className)}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slider Container */}
      <div className="relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / slidesToShow)}% + ${dragOffset}px))`
          }}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 px-3 select-none",
                isMobile ? "w-full" : isTablet ? "w-1/2" : "w-1/3"
              )}
            >
              <div className="group/card relative bg-white rounded-xl p-6 hover-lift transition-all duration-500 depth-2 hover:depth-3 border-2 border-gray-200 hover:border-brand-blue/30 shadow-lg hover:shadow-xl">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-gold/5 to-transparent rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4 relative z-10 shadow-md transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-lg">
                    <div className="transition-all duration-300 group-hover/card:scale-110 text-white">
                      {React.cloneElement(industry.icon as React.ReactElement, { 
                        className: "h-6 w-6"
                      })}
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-brand-gold/60 rounded-full animate-float shadow-sm" />
                  <div className="absolute bottom-1 left-10 w-1.5 h-1.5 bg-brand-blue/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-brand-blue mb-3 font-poppins group-hover/card:text-blue-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-montserrat text-sm leading-relaxed group-hover/card:text-gray-700 transition-colors">
                    {industry.description}
                  </p>
                  
                  {industry.stats && (
                    <div className="inline-block bg-brand-gold/10 text-brand-blue px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-brand-gold/20">
                      {industry.stats}
                    </div>
                  )}
                </div>

                {/* Enhanced Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 via-transparent to-brand-blue/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                
                {/* Enhanced Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold group-hover/card:w-full transition-all duration-700 rounded-b-xl" />
                
                {/* Side Accent */}
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-brand-blue via-blue-500 to-brand-blue group-hover/card:h-full transition-all duration-700 rounded-r-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation */}
      {canLoop && (
        <>
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-brand-blue rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-brand-blue hover:text-white transition-all duration-300 hover-lift z-10 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-brand-blue/20 hover:border-brand-blue"
            aria-label="Previous industries"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-brand-blue rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-brand-blue hover:text-white transition-all duration-300 hover-lift z-10 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-brand-blue/20 hover:border-brand-blue"
            aria-label="Next industries"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Enhanced Dots */}
      {canLoop && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:cursor-not-allowed",
                index === currentIndex 
                  ? "bg-brand-gold w-6 shadow-md" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndustrySlider;
